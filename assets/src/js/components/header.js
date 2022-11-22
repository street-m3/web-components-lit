import { LitElement, html, css } from 'lit';
import './drawer';

const tagName = 'gl-header'

export class Header extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
        <header role="banner">
            <div class="ly-Inner_Grid -lg">
                <div class="s-Header_Brand">
                    <h1 class="s-Header_Brand-Title">Hello World</h1>
                    <gl-drawer></gl-drawer>
                </div>
            </div>
        </header>
        `
    }
}

customElements.get(tagName) || customElements.define(tagName, Header);