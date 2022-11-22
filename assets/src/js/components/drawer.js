import { LitElement, html, css } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { presets } from '../env/env';
import { Drawer } from '../lib/drawer';
import reset from '../styles/reset';
import utility from '../styles/utility';

const tagName = 'gl-drawer';


export class DrawerDOM extends LitElement {
    constructor() {
        super();
        this.props = {
            ariaControls: 'site-Drawer-nav',
            "routes": [
                {
                    id: `${presets.defaultId}01`,
                    url: '',
                    title: {
                        en: "top",
                        ja: "トップページ"
                    }
                },
                {
                    id: `${presets.defaultId}02`,
                    url: '',
                    title: {
                        en: "about",
                        ja: "私について"
                    }
                },
                {
                    id: `${presets.defaultId}03`,
                    url: '',
                    title: {
                        en: "works",
                        ja: "作品紹介"
                    }
                },
                {
                    id: `${presets.defaultId}04`,
                    url: '',
                    title: {
                        en: "news",
                        ja: "ニュース"
                    }
                },
                {
                    id: `${presets.defaultId}05`,
                    url: '',
                    title: {
                        en: "contact",
                        ja: "お問い合わせ"
                    }
                }
            ],
        };
    }

    navRoot = createRef();

    static properties = {
        isOpen: {
            type: Boolean,
            reflect: true,
        },
    };

    static get styles() {
        return [
            reset,
            utility,
            css`
            .s-Drawer_Button {
                cursor: pointer;
                display: inline-block;
                height: 40px;
                position: relative;
                right: 0;
                top: 0;
                width: 40px;
                z-index: var(--zindex-drawer-btn);
            }

            .Button-Line {
                background-color: var(--color-text-primary);
                display: inline-block;
                height: 2px;
                left: 50%;
                margin: 0 auto;
                position: absolute;
                transform: translateX(-50%);
                transition: all .3s ease 0s;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                width: 100%;
            }

            .Button-Line.Button-Line--1 {
                top: 16px
            }

            .Button-Line.Button-Line--2 {
                top: 24px
            }

            [aria-expanded=true] .Button-Line {
                background-color: var(--color-text-primary);
            }

            [aria-expanded=true] .Button-Line--1 {
                top: 10px;
                transform: translateY(10px) translateX(-50%) rotate(-45deg)
            }

            [aria-expanded=true] .Button-Line--2 {
                top: 30px;
                transform: translateY(-10px) translateX(-50%) rotate(45deg)
            }

            .s-Drawer_Overlay {
                background-color: rgba(0, 0, 0, .1);
                cursor: pointer;
                height: 100vh;
                left: 0;
                opacity: 0;
                position: fixed;
                top: 0;
                transition: opacity .4s ease 0s;
                visibility: hidden;
                width: 100%;
                z-index: 140;
                z-index: var(--zIndex-drawer-overlay)
            }

            .s-Drawer_Overlay[data-focus-visible=true] {
                opacity: 1;
                visibility: visible
            }

            .s-Drawer_nav {
                background-color: #fff;
                background-color: var(--color-white);
                font-family: Cormorant Garamond, serif;
                font-family: var(--font-serif-en);
                height: 100vh;
                opacity: .9;
                overflow-y: auto;
                position: fixed;
                right: 0;
                top: 0;
                transition: transform var(--private-drawer-duration) var(--transition-in-out-quart);
                width: 100%;
                z-index: var(--zindex-drawer-nav);
                will-change: transform;
            }

            .s-Drawer_nav[aria-hidden=true] {
                transform: translateY(100%)
            }

            .s-Drawer_nav[aria-hidden=false] {
                transform: translateY(0);
            }

            .s-Drawer_navInner {
                display: grid;
                grid-template-columns: 61px minmax(0, auto) 61px;
            }

            .s-Drawer_navInner:after,
            .s-Drawer_navInner:before,
            .s-Drawer_navInner>* {
                grid-column: 2;
            }

            .s-Drawer_navList {
                padding-top: 145px;
            }

            .s-Drawer_navList-Item {
                font-size: 0;
            }

            .s-Drawer_navList-Item:not(:first-child) {
                margin-top: 42px;
            }

            .s-Drawer_navList-Item>a {
                display: block;
                overflow: hidden;
                width: 100%;
            }

            .s-Drawer_navList-Item>a [lang=en] {
                --clamp-size: 5.7971vw;
                display: block;
                font-size: clamp(1.5rem, var(--clamp-size), 3rem);
                font-family: var(--font-serif-en);
                font-weight: 500;
                line-height: 1em;
                line-height: var(--leading-none);
                margin-right: .5em;
                min-height: 0;
                text-transform: uppercase;
                color: var(--color-text-primary);
            }

            .s-Drawer_navList-Item>a [lang=ja] {
                display: block;
                font-family: var(--font-serif-ja);
                font-size: .75rem;
                font-size: var(--font-size-lower-limit);
                font-weight: 400;
                line-height: 1em;
                margin-top: 4px;
                color: var(--color-text-primary);
            }

            .s-Drawer_navLink-Group {
                transform: translateY(100%);
                transition: all var(--private-drawer-duration) ease 0s;
            }

            .s-Drawer_navLink-Group.is-show {
                transform: translateY(0);
            }

            @media screen and (min-width:576px) {
                .s-Drawer_nav {
                    width: 100%;
                }

                .s-Drawer_navLink-Group {
                    align-items: center;
                    display: flex;
                    justify-content: flex-start;
                }
            }
            @media screen and (min-width:768px) {
                .s-Drawer_Button {
                    width: 65px;
                }

                .s-Drawer_navInner {
                    grid-template-columns: minmax(23px, 1fr) minmax(auto, 768px) minmax(23px, 1fr);
                    grid-template-columns: minmax(23px, 1fr) minmax(auto, var(--layout-inner-sm)) minmax(23px, 1fr);
                }

                .s-Drawer_navList {
                    padding-top: 17.7%;
                    padding-bottom: 8%;
                }
            }`
        ]
    }

    firstUpdated() {
        new Drawer(this.navRoot.value, true);
    }

    _button() {
        return html`
        <button type="button" class="s-Drawer_Button js-Drawer-Button" aria-controls="${this.props.ariaControls}"
            aria-label="モバイルメニュー" aria-expanded="false" @click="${() => {
                (this.isOpen = !this.isOpen);
                this.isOpen ? document.documentElement.setAttribute('data-observe-pressed', 'true') : document.documentElement.setAttribute('data-observe-pressed', 'false');
            }}">
            <span class="Button-Line Button-Line--1"></span>
            <span class="Button-Line Button-Line--2"></span>
        </button>`;
    }

    _overlay() {
        return html`<div class="s-Drawer_Overlay js-Drawer-Overlay" data-focus-visible="false"></div>`;
    }

    _navRoutes() {
        return html`
        <nav id="${this.props.ariaControls}" class="s-Drawer_nav" aria-hidden="true">
            <div class="s-Drawer_navInner">
                <ul class="s-Drawer_navList">
                    ${this.props.routes.map(({ id, title, url }) => html`
                        <li class="s-Drawer_navList-Item">
                            <a href="${url + id}" class="s-Drawer_navLink">
                                <div class="s-Drawer_navLink-Group">
                                    <span lang="en">${title.en}</span>
                                    <span lang="ja">${title.ja}</span>
                                </div>
                            </a>
                        </li>
                    `)}
                </ul>
            </div>
        </nav>
        `
    }

    render() {
        return html`
        <div class="s-Drawer" ${ref(this.navRoot)}>
            ${this._button()}
            ${this._overlay()}
            ${this._navRoutes()}
        </div>
        `
    }
}

customElements.get(tagName) || customElements.define(tagName, DrawerDOM);