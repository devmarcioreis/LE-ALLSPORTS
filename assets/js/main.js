const navMenu = document.querySelector('#nav-menu')
const navToggle = document.querySelector('#nav-toggle')
const navClose = document.querySelector('#nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const scrollHeader = () => {
    const header = document.querySelector('#header')

    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


const scrollPage = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

scrollPage.reveal(`.home__data`)
scrollPage.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
scrollPage.reveal(`.program__card`, {interval: 100, origin: 'bottom'})
scrollPage.reveal(`.colections`, {delay: 900, origin: 'top'})
scrollPage.reveal(`.about__description`, {delay: 100, origin: 'top'})
scrollPage.reveal(`.about__group`, {interval: 100, origin: 'bottom'})
scrollPage.reveal(`.about__img`, {delay: 100, origin: 'left'})
scrollPage.reveal(`.footer__container`, {delay: 100, origin: 'bottom'})