/**
 * 
 * @param {Object} position ターゲットとなるDOMを設定する
 */

 function scrollingEffect(position) {
    let targetPosition = position;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};

/**
 * Adjust position calculation
 * @param {String} e (e).currentTarget イベントが現在登録されているターゲットへの参照
 * @param {Object} clientX 高さを差し引くためのDOMを設定 (document.querySelectorなどの呼び出しから設定してください。)
 * @returns 
 */
const AdjustPositionScroll = () => {
    const currentLinkEvent = e.currentTarget.getAttribute('href') == "#" ? "header" : e.currentTarget.getAttribute("href");
    const id = currentLinkEvent.substr(currentLinkEvent.indexOf('#'));
    const section = document.querySelector(id);
    if (!section) return console.warn('[AdjustPositionScroll] ターゲットのリンクが正しく設定されていないか存在しません。');

    return scrollingEffect(section.offsetTop);
}

export { scrollingEffect, AdjustPositionScroll };