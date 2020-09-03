(() => {
  'use strict'
  document.addEventListener('DOMContentLoaded', () => {
    const textSplit = (target) => {
      const textGroup = target.textContent.split('');
      target.innerHTML = '';
      textGroup.forEach((text, index) => {
        target.innerHTML +=
          `<span style="`+
            `-webkit-animation-delay: ${(0.1 * index).toFixed(1)}s; `+
            `animation-delay: ${(0.1 * index).toFixed(1)}s;`+
          `">`+
            `${text}`+
          `</span>`;
      });
    }
    const $loaderTexts = document.querySelectorAll('.js-loader-text-target');
    [...$loaderTexts].forEach($loaderText => {
      textSplit($loaderText);
    });
  });
})();
