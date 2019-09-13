'use strict';

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

    const styleNode = document.createElement('style');
    styleNode.innerHTML = '.hiddenSticky { display: none; }\n';
    document.head.appendChild(styleNode);

    const getStickyDOM = (previous) => {
        const allDOM = document.body.getElementsByTagName('*');
        const bodyHeight = document.body.clientHeight;
        const newStickyDOM = [...allDOM].filter(a => {
            const pos = window.getComputedStyle(a, null).getPropertyValue('position');
            return ((pos === 'fixed' || pos === 'sticky') && a.getBoundingClientRect().height * 2 <= bodyHeight);
        });
        return [...new Set(newStickyDOM.concat(previous||[]))];
    }

    let stickyDOM;
    let last = 1;
    let prevScrollPos = window.pageYOffset;
    const onScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (Math.abs(prevScrollPos - currentScrollPos) > 20) {
            if (prevScrollPos > currentScrollPos) {
                if (last === 0) {
                    stickyDOM.forEach(a => a.classList.remove('hiddenSticky'));
                    last = 1;
                    console.log('scroll up; display');
                }
            }
            else {
                if (last === 1) {
                    stickyDOM = getStickyDOM(stickyDOM);
                    stickyDOM.forEach(a => a.classList.add('hiddenSticky'));
                    last = 0;
                    console.log('scroll down; hide');
                }
            }

            setTimeout(() => { prevScrollPos = window.pageYOffset; }, 0); // Re-layout before saving the scroll position
        }
    }

    window.addEventListener('scroll', onScroll);
})();
