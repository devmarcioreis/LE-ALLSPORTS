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


const contactForm = document.querySelector('#contact-form')
const contactMessege = document.querySelector('#contact-messege')
const contactUser = document.querySelector('#contact-user')

const sendEmail = e => {
    e.preventDefault();

    if(contactUser.value === '') {
        contactMessege.textContent = 'Você deve digitar seu e-mail'

        setTimeout( () => {
            contactMessege.textContent = ''
        }, 3000)
    } else {
        emailjs.sendForm('', '', '', '')
    }
}
contactForm.addEventListener('submit', sendEmail)