# Anti-Sticky

Anti-Sticky is a browser extension which hides static (sticky) web elements when you scroll down. This frees up browser space for the primary content.

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

## Installation

#### Firefox / Firefox for Android

[Firefox Add-ons web site](https://addons.mozilla.org/en-US/firefox/addon/anti-sticky/).

## License

[MIT](https://github.com/justinormont/AntiStickyExtension/blob/master/LICENSE).
