const  hamburgerBtn = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
})