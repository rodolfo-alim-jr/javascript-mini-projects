const menuBtn = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.links-container');

menuBtn.addEventListener('click', () => {
    console.log(menuLinks.classList)
    menuLinks.classList.toggle('show');
    
})