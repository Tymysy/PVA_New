const btnDown = document.getElementById('btnDown');

btnDown.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
    });
});