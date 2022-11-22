import { backfaceFixed } from '../utils/backfaceFixed';
import { scrollingEffect, AdjustPositionScroll } from '../utils/scrollingEffect';

export class Drawer {
    constructor(root, closed, options) {
        this.root = root;
        if (!this.root) return;

        const defaultOptions = {
            focusAttribute: 'data-focus-visible',
            button: 'js-Drawer-Button',
            backface: 'js-Drawer-Overlay',
            nav: 's-Drawer_nav',
            locations: 'a[href*="#"]',
            group: 's-Drawer_navLink-Group',
            debug: true,
            subtract: true,
            scroll: true
        };

        this.options = Object.assign(defaultOptions, options);

        this.focusAttribute = this.root.querySelectorAll(`[${this.options.focusAttribute}]`);
        this.button = this.root.querySelector(`.${this.options.button}`);
        this.backface = this.root.querySelector(`.${this.options.backface}`);
        this.nav = this.root.querySelector(`.${this.options.nav}`);
        this.locations = this.root.querySelectorAll(`${this.options.locations}`);
        this.closed = closed;
        this.debug = this.options.debug;
        this.header = this.options.subtract ? document.querySelector('header[role="banner"]') : false;
        this.scroll = this.options.scroll;
        this.touchEventListener = this._touchEventListener();

        this.init();
    }

    init() {
        this._events(this.button);
        this._events(this.backface);
        this._autoCloseContainer();
    }

    _events(target) {
        target.addEventListener(this.touchEventListener, (e) => {
            e.preventDefault();
            this._open();
            this._focusState();
        }, false);
    }

    _open() {
        const isOpen = 'true';
        const isExpanded = this.button.getAttribute('aria-expanded') === isOpen;
        this.button.setAttribute('aria-expanded', !isExpanded);
        this.nav.setAttribute('aria-hidden', isExpanded);
        this._activeAnimation(!isExpanded);
    }

    _focusState() {
        this.focusAttribute.forEach((element) => {
            if (element.getAttribute('data-focus-visible') === 'true') {
                element.dataset.focusVisible = 'false';
                document.body.dataset.focusVisible = 'false';
                backfaceFixed(false);
            } else {
                element.dataset.focusVisible = 'true';
                document.body.dataset.focusVisible = 'true';
                backfaceFixed(true);
            }
        });
    }

    _autoCloseContainer() {
        if (!this.locations) {
            if (this.debug) {
                console.warn('[Drawer] ターゲットのリンクが正しく設定されていないか存在しません。');
            }

            return;
        }

        if (this.closed) {
            this.locations.forEach((element) => {
                element.addEventListener(this.touchEventListener, (e) => {

                    if (this.scroll) {
                        this._clickEventScroll(e);
                    }

                    this.button.click();
                }, { passive: true });
            });
        }
    }

    _clickEventScroll(event) {
        const currentLinkBehavior = event.currentTarget.getAttribute('href') == '#' ? 'header' : event.currentTarget.getAttribute('href');
        const id = currentLinkBehavior.substr(currentLinkBehavior.indexOf('#'));
        const targetSelector = document.querySelector(id);
        if (!targetSelector) {
            return this.debug ? console.warn('[this._clickEventScroll] ターゲットのリンクが正しく設定されていないか存在しません。') : false;
        }

        return scrollingEffect(targetSelector.offsetTop);
    }

    _activeAnimation(isExpanded) {
        this.group = this.root.querySelectorAll(`.${this.options.group}`);
        this.group.forEach((element) => {
            isExpanded
                ? setTimeout(() => {
                    element.classList.add('is-show');
                }, 500)
                : element.classList.remove('is-show');

            return;
        });
    }

    _touchEventListener() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }
}