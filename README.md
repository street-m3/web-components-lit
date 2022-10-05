# 【PostCSS and Lit】 Development Init Template!😎


## Node Version

Node.js v14.15.4<br />
※バージョンが古いため、postcss-preset-envのバージョンを固定にしています。最新のNodeバージョンによる動作は未確認。


## 🗂Create Directory

````shell
mkdir assets & mkdir assets/src & mkdir assets/src/images & mkdir assets/src/css & mkdir assets/src/css/Base & mkdir assets/src/css/Components & mkdir assets/src/css/Layouts & mkdir assets/src/css/Generic & mkdir assets/src/css/Object & mkdir assets/src/css/Settings & mkdir assets/src/css/Tools & mkdir assets/src/css/Trumps & mkdir assets/src/fonts & mkdir assets/src/js/ & mkdir assets/src/js/components/ & mkdir assets/src/js/env/ & mkdir assets/src/js/lib/ &  mkdir assets/src/js/pages/ & mkdir assets/src/js/styles/ & touch assets/src/index.html & touch assets/src/js/index.js & touch postcss.config.js & touch webpack.config.js & touch .browserslistrc & mkdir doc & gibo dump Node VisualStudioCode >> .gitignore
````


## 📦Install

````shell
npm init -y & npm i @babel/cli @babel/core @babel/preset-env browser-sync cpx cssnano mkdirp npm-run-all onchange postcss postcss-calc postcss-cli postcss-extend-rule postcss-import postcss-import-ext-glob postcss-mixins postcss-nested postcss-preset-env@6.7.0 postcss-pxtorem postcss-reporter postcss-simple-vars postcss-sort-media-queries postcss-sorting rimraf sharp-cli watch webpack webpack-cli --save-dev 

// dependencies
npm i lit
````


## 🖥browser-sync init

`npx browser-sync init `


## 📃Create Files

````shell
touch assets/src/css/Base/_base.pcss & touch assets/src/css/Components/_base.pcss & touch assets/src/css/Generic/_author.pcss & touch assets/src/css/Generic/_font.pcss & touch assets/src/css/Generic/_reset.pcss & touch assets/src/css/Layouts/_container.pcss & touch assets/src/css/Object/_animate.pcss & touch assets/src/css/Settings/_viewport.pcss & touch assets/src/css/Base/_mixin.pcss & touch assets/src/css/Trumps/_utility.pcss & touch assets/src/css/Trumps/_test.pcss & touch assets/src/css/style.pcss
````

### ⚙package.json

````json
"scripts": {
    "clean:fonts": "rimraf './assets/dist/fonts' && mkdirp './assets/dist/fonts/'",
    "clean:js": "rimraf './assets/dist/js/' && mkdirp './assets/dist/js/'",
    "clean:images": "rimraf './assets/dist/images/' && mkdirp './assets/dist/images/'",
    "dev:html:cpx": "cpx './assets/src/*.html' './assets/dist/'",
    "build:html": "npm-run-all dev:html:*",
    "dev:css:postcss": "postcss -c ./postcss.config.js ./assets/src/css/style.pcss -o ./assets/dist/css/style.css",
    "dev:fonts": "cpx './assets/src/fonts/*' './assets/dist/fonts/'",
    "build:css": "npm-run-all -s dev:css:*",
    "build:js": "npm run clean:js && webpack",
    "dev:images:cpx": "cpx './assets/src/images/*.{gif,svg,webp,mp4,ico}' './assets/dist/images/'",
    "sharp-webp": "sharp -i './assets/src/images/*.jpg' './assets/src/images/**/*.png' -f webp -o './assets/dist/images/'",
    "sharp-jpg": "sharp -i './assets/src/images/*.jpg' -o './assets/dist/images/'",
    "sharp-png": "sharp -i './assets/src/images/*.png' -o './assets/dist/images/'",
    "dev:images:sharp": "npm run sharp-webp & npm run sharp-png & npm run sharp-jpg",
    "build:images": "npm run clean:images && npm-run-all -s dev:images:*",
    "build:fonts": "npm run clean:fonts && npm run dev:fonts",
    "watch:server": "browser-sync start --config \"./bs-config.js\"",
    "watch:html": "watch 'npm run build:html' ./assets/src/",
    "watch:css": "watch 'npm run build:css' './assets/src/css/'",
    "watch:scripts": "watch 'npm run build:js' './assets/src/js/'",
    "watch:images": "onchange './assets/src/images/' -e '**/*.DS_Store' -- npm run build:images",
    "watch:fonts": "onchange './assets/src/fonts/' -- npm run build:fonts",
    "watch": "npm-run-all -p watch:*"
  }
````

### postcss.config.js

````js
module.exports = {
    plugins: [
        require('postcss-import-ext-glob'),
        require('postcss-import'),
        require('postcss-mixins'),
        require('postcss-nested'),
        require('postcss-preset-env')({
            stage: 1,
            autoprefixer: {
                grid: true
            },
        }),
        require('postcss-simple-vars')({
            silent: true,
        }),
        require('postcss-extend-rule'),
        require('postcss-calc'),
        require('postcss-pxtorem')({
            rootValue: 16,
            replace: true,
            exclude: /node_modules/i,
        }),
        require('postcss-sorting')({
            'order': [
                'custom-properties',
                'dollar-variables',
                'declarations',
                'at-rules',
                'rules'
            ],
            'properties-order': 'alphabetical',
            'unspecified-properties-position': 'bottom'
        }),
        require('postcss-sort-media-queries'),
        require('cssnano')({
            "autoprefixer": false,
            preset: [
                'default', {
                    discardComments: {
                        removeAll: false,
                    },
                }
            ],
        }),
    ]
}
````


### browser-sync config

````js 
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
````


## ✅Check List

### 🔤Font

- [ ] Font Self Hosting?
- [ ] Create .woff files


### 🖼Images

- [ ] Sample Images
- [ ] Logo
- [ ] favicon
- [ ] OGP
- [ ] Icon (SVG, JPG, PNG)
- [ ] Movie (mp4, gif)


### 🎨CSS

#### ☕️Base

- [ ] 【CSS Variables】 Font Family
- [ ] 【CSS Variables】 Dark Mode?
- [ ] 【CSS Variables】 Private example: Header Height etc...
- [ ] 【CSS Variables】 Width of Design Comps


#### 🧩Components

- [ ] 【Pattern】 Accordion
- [ ] 【Pattern】 Alerts
- [ ] 【Pattern】 Breadcrumbs
- [ ] 【Pattern】 Button
- [ ] 【Pattern】 Card
- [ ] 【Pattern】 Headline
- [ ] 【Pattern】 Label 
- [ ] 【Pattern】 Pagination 
- [ ] 【Pattern】 SNS 
- [ ] 【Pattern】 Pointer 


#### 💼Generic

- [ ] Author
- [ ] Theme
- [ ] License
- [ ] font-face
- [ ] Reset


#### 📰Layouts

- [ ] 【Grid】size `var(--layout-inner-size)`


#### 🔦Object

- [ ] 【Animation Type】Image Slide Loop
- [ ] 【Animation Type】Modal[zoom, fadeIn, slideIn...]
- [ ] 【Animation Type】Sentence 
- [ ] 【Animation Type】Scrolling Animation Effect


#### 🔨Tools

- [ ] 【Viewport】custom media


#### ♧Trumps

- [ ] Test Shame.css
- [ ] Utility 【WARNING】Be careful not to contaminate class names.


## JS

🛒Incorporate what you need!

- [ ] Accordion (lib)
- [ ] Anchor (lib/utils)
- [ ] BackFaceFixed (lib/utils)
- [ ] Breadcrumbs (lib)
- [ ] DecodingSizer (lib/utils)
- [ ] Drawer (lib)
- [ ] Ellipsis (lib/utils)
- [ ] FooterFixed (lib)
- [ ] Form Validation (lib)
- [ ] Getting API (lib/utils)
- [ ] Hover (lib/utils)
- [ ] Instant Search (lib)
- [ ] Intersection Observer (lib/utils)
- [ ] Modal (lib)
- [ ] Responsive Movies (lib)
- [ ] Slider (lib)
- [ ] Smooth Scroll (lib/utils)
- [ ] SNS (lib)


## webpackへの移行

今後は、webpackへの移行も検討。理由としては、npm-scriptsではビルドに時間がかかるため。