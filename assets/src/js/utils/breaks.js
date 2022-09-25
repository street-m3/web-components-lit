/**
 * brを取得 aria-hiddenの追加
 */
 const BreaksHidden = () => {
    const br = document.querySelectorAll('br');
    br.forEach((element) => {
        if (element.getAttribute('aria-hidden') == 'false') return;
        element.setAttribute('aria-hidden', 'true');
    });
}

BreaksHidden();