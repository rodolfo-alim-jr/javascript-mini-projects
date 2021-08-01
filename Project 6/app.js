const appearIntro = () => {
    let introMessage = document.querySelector('.intro-message');
    let introPosition = introMessage.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2
    console.log(introPosition);
    console.log(screenPosition);

    if(introPosition < screenPosition){
        console.log('scrolled')
        introMessage.classList.add('appear-message');
    }
}

window.addEventListener('scroll', appearIntro);
// appearIntro();