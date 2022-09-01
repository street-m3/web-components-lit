const browserSyncOptions = {
    "ui": false, //ui config disabled
    "files": [
        "./assets/dist/css/*.css",
        "./assets/dist/js/*.js",
        "./assets/dist/index.html",
    ],
    "watchEvents": [
        "change"
    ],
    "server": {
        baseDir: "./assets/dist/",
        index: "index.html",
    },
    "port": 3000,
    "open": false,
    "browser": "default", //default browser
    "notify": false, //default is true message disabled
    "injectChanges": true, //css file change observe
};

module.exports = browserSyncOptions;