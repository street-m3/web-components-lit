const EnabledScripts = () => {
    let Html = document.documentElement;

    if (Html.nodeType) {
        Html.setAttribute('data-js-enabled', 'true');
        console.info('JavaScript is loading properly!');
    }

    return Html = null;
}

EnabledScripts();