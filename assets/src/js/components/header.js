import { LitElement, html, css } from 'lit';

const tagName = 'global-header'

export class Header extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
        <header role="banner">
            <div class="ly-Inner_Grid -lg">
                Hello World
            </div>
        </header>
        `
    }
}

customElements.get(tagName) || customElements.define(tagName, Header);