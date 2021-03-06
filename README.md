# Anti-Sticky

Anti-Sticky is a browser extension which hides static (sticky) web elements when you scroll down. This frees up browser space for the primary content.

<!-- gif created using: ffmpeg -i input.mov -vf "fps=10,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif and optimizing at https://ezgif.com/optimize at lossy-quality=100 -->
![Towards Data Science with Anti-Sticky Enabled](/images/TowardsDataScienceMediumBlog.gif "Banner and overlay removed")
Banner and overlay are removed when you scroll down. They are redisplay as you scroll up.

## Installation

#### Firefox / Firefox for Android

[Firefox Add-ons web site](https://addons.mozilla.org/en-US/firefox/addon/anti-sticky/).

## Building / Packaging

Install web-ext: _(as needed)_
```bash
npm install web-ext
```

Build & sign Firefox add-on:
```bash
web-ext sign --channel=listed --api-key $API_KEY --api-secret $API_SECRET -s src
```

You can get the values for API_KEY and API_SECRET from [this page](https://addons.mozilla.org/en-US/developers/addon/api/key/).

## License

[MIT](https://github.com/justinormont/AntiStickyExtension/blob/master/LICENSE).
