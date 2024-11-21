const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
} );

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
} );

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
} );

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
} );

function openPage() {
    window.location.href = "login.html";
}