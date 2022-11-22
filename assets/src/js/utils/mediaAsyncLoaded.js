export class MediaAsyncLoaded {
    constructor(root) {
        this.root = root;
        this.images = this.root.querySelectorAll('img');
        this.sources = this.root.querySelectorAll('source');
        this.init();
    }

    init() {
        this._setAttributes(this.images);
        this._setAttributes(this.sources);
    }

    _promiseLoader(src) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.src = src;
            image.onload = () => resolve(image);
            image.onerror = () => reject(image);
        });
    }

    _setAttributes(mediaSelector) {
        mediaSelector.forEach((element) => {
            if (element.hasAttribute('src')) {
                this._measureMediaSize(element, element.getAttribute('src'));

                !element.hasAttribute('alt')
                    ? element.setAttribute('alt', '')
                    : false;
                
                !element.hasAttribute('decoding') || !element.hasAttribute('loading')
                    ? element.setAttribute('loading', 'lazy')
                    : false;
            }

            if (element.hasAttribute('srcset')) {
                this._measureMediaSize(element, element.getAttribute('srcset'));
            }

            return;
        });
    }
    
    _measureMediaSize(targetSelector, url) {
        this._promiseLoader(url).then((response) => {
            targetSelector.setAttribute('width', response.width);
            targetSelector.setAttribute('height', response.height);
        });
    }
}