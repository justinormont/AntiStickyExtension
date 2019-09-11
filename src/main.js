(()=>{
    const unlockScroll = (dom) => {
        var style = window.getComputedStyle(dom ,null);
        if (style.getPropertyValue('overflow') === 'hidden') {
            document.documentElement.style.overflow = 'visible !important';
        }
        if (style.getPropertyValue('overflow-y') === 'hidden') {
            document.documentElement.style.overflowY = 'visible !important';
        }
    }

    const unlockDocumentScroll= () => {
        unlockScroll(document.documentElement);
        unlockScroll(document.body);
    }

    setInterval(unlockDocumentScroll, 1000);
    unlockDocumentScroll();
    
    const getStickyDOM = (previous) => {
        const allDOM = document.body.getElementsByTagName("*");
        const newStickyDOM = [...allDOM].filter(a => { 
            const pos = window.getComputedStyle(a, null).getPropertyValue('position'); 
            return (pos === 'fixed' || pos === 'sticky');
        });
        return [...new Set(newStickyDOM.concat(previous||[]))];
    }
    
    let stickyDOM;
    let last = 1;
    let prevScrollpos = window.pageYOffset;
    const onScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (Math.abs(prevScrollpos - currentScrollPos) > 20) {
            if (prevScrollpos > currentScrollPos) {
                if (last === 0) {
                    stickyDOM.forEach(a => { if (a.style.display === 'none') { a.style.display = a.style.displayBack; } });
                    last = 1;
                    console.log('scroll up; display');
                }
            }
            else {
                if (last === 1) {
                    stickyDOM = getStickyDOM(stickyDOM);
                    stickyDOM.forEach(a => { if (a.style.display !== 'none') { a.style.displayBack = a.style.display; a.style.display = 'none'; } });
                    last = 0;
                    console.log('scroll down; hide');
                }
                
            }
            prevScrollpos = currentScrollPos;
        }
    }
    window.addEventListener("scroll", onScroll);
})();