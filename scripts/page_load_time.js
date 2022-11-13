(() => {
    const loadStart = new Date().getTime();

    window.addEventListener('load', () => {
        const timeStamp = document.querySelector('#timestamp');
        timeStamp.innerHTML += `Время загрузки страницы: ${(new Date().getTime() - loadStart) / 1000} секунд`;
    });
})();