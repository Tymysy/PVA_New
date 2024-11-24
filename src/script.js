const btnDown = document.getElementById('btnDown');

btnDown.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
    });
});

function openM4() {
    window.location.href = "./carsHtml/M4.html"
}

function openX3() {
    window.location.href = "./carsHtml/X3.html"
}

function openX5() {
    window.location.href = "./carsHtml/X5.html"
}

function open7S() {
    window.location.href = "./carsHtml/7S.html"
}