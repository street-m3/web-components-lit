import { LitElement, html, css } from 'lit';

const tagName = 'gl-footer'

export class Footer extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
        <footer role="contentinfo">
            &:copy;${new Date().getFullYear()}
        </footer>
        `
    }
}

customElements.get(tagName) || customElements.define(tagName, Footer);