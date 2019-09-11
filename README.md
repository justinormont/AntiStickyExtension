# Anti-Sticky

Anti-Sticky is a browser extension which hides static (sticky) web elements when you scroll down. This frees up browser space for the primary content.

## Building / Packaging

Install web-ext:
```bash
npm install web-ext
```

Build Firefox add-on:
```js
web-ext build --source-dir src
```

Sign add-on:
```bash
web-ext sign --api-key $API_KEY --api-secret $API_SECRET -s src
```

You can get the values for API_KEY and API_SECRET from [this page](https://addons.mozilla.org/en-US/developers/addon/api/key/).


## Installation

#### Firefox / Firefox for Android

<!--[Firefox Add-ons web site](https://addons.mozilla.org/addon/xyz/).-->

## License

[MIT](https://github.com/justinormont/AntiStickyExtension/blob/master/LICENSE).
