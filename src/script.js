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

function openfacebook() {
    window.location.href = "https://www.facebook.com/"
}

function openinstagram() {
    window.location.href = "https://www.instagram.com/"
}

function opentwitter() {
    window.location.href = "https://x.com/"
}

function opentelegram() {
    window.location.href = "https://web.telegram.org/"
}

function toggleMenu(event) {
    event.stopPropagation();
  
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
  }
  
  document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('nav-links');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
  
    if (!hamburgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
      navLinks.classList.remove('active');
    }
  });