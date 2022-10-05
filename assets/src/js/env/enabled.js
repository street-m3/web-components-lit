const EnabledScripts = () => {
    let Html = document.documentElement;

    if (Html.nodeType) {
        Html.setAttribute('data-js-enabled', 'true');
        if (Html.classList.contains('no-js')) {
            Html.classList.remove('no-js');
        }
    }

    return Html = null;
}

document.addEventListener('DOMContentLoaded', () => {
    EnabledScripts();
});