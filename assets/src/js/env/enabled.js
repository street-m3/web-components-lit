import { presets } from './env';

const EnabledScripts = () => {
    let Html = document.documentElement;

    if (Html.nodeType === 1) {
        Html.setAttribute('data-js-enabled', 'true');
        if (Html.classList.contains('no-js')) {
            Html.classList.remove('no-js');
        }

        const styles = {
            wrapper: {
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            },
            main: {
                flex: 1,
                overflowX: 'hidden',
            }
        }
        
        Object.assign(presets.renderRoot.style, styles.wrapper);
        Object.assign(presets.renderRoot.querySelector('main').style, styles.main);
    }

    return Html = null;
}

document.addEventListener('DOMContentLoaded', () => {
    EnabledScripts();
});