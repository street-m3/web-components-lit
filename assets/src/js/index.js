import { presets } from './env/env';
import './components/header';
import './components/footer';
import './env/enabled';

presets.renderRoot.insertAdjacentHTML('afterbegin', `
    <gl-header></gl-header>
    <main role="main"></main>
    <gl-footer></gl-footer>
`)