export const viewport = () => {
    const attrViewport = document.querySelector('meta[name="viewport"]');
    function switchViewport() {
        const value = window.outerWidth > 360
            ? 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
            : 'width=360';
        if (attrViewport.getAttribute('content') !== value) {
            attrViewport.setAttribute('content', value);
        }
    }
    window.addEventListener('resize', switchViewport, false);
    switchViewport();
}