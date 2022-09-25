const Ellipsis = (element, options) => {
    const target = element;

    if (!target) return;

    const config = {
        resize: true,
        count: '',
        suffix: '...',
        row: 2, //全て英数字の場合は、+1の値にする(日本語より文字数が多いため)
    };

    const defaultOptions = Object.assign(config, options);

    const styleAttributes = window.getComputedStyle(target);
    const size = parseInt(styleAttributes.fontSize);
    const width = parseInt(styleAttributes.width);
    const strLength = Math.floor(width / size) * defaultOptions.row;
    const lineHeight = styleAttributes.lineHeight;

    const styles = {
        height: `${lineHeight * defaultOptions.row}`,
        overflow: 'hidden',
        maxWidth: '100%',
    };

    Object.assign(target.style, styles);

    const textOverflowEllipsis = () => {
        if (target.innerText.length > strLength) {
            let str = target.innerText;
            str = str.substring(0, (strLength - 1));

            target.innerText = str + defaultOptions.suffix;
        }
    };

    textOverflowEllipsis();
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.js-trim').forEach((element) => {
        Ellipsis(element);
    });
});