import {
  Blog,
  Contact,
  Footer,
  Hero,
  Portfolio,
  Skills,
  TopNav
} from './components'

document.querySelector('#root').innerHTML = `
${TopNav()}
${Hero()}
${Skills()}
${Portfolio()}
${Blog()}
${Contact()}
${Footer()}
`

/* * Scroll to events for buttons * */
const skillsBtns = Array.from(document.querySelectorAll('.skills-btn'))
skillsBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.skills').scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

const blogBtns = document.querySelectorAll('.blog-btn')
blogBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.blog').scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

const contactBtns = document.querySelectorAll('.contact-btn')
contactBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.contact').scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

const portfolioBtns = document.querySelectorAll('.portfolio-btn')
portfolioBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
})

/* * Change nav svg color on hover * */
const navSocialLinks = Array.from(document.querySelectorAll('.nav-social'))
navSocialLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.toggle('filter-white')
    link.classList.toggle('filter-test')
  })
  link.addEventListener('mouseleave', () => {
    link.classList.toggle('filter-white')
    link.classList.toggle('filter-test')
  })
})

/* * Resume, modal and overlay features * */
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const resumeBtn = document.querySelector('.modal-btn')
const span = document.querySelector('.close')

// Show resume on button click
resumeBtn.addEventListener('click', () => {
  modal.style.display = 'block'
  overlay.style.display = 'block'
})

// Hide resume on icon click
span.addEventListener('click', () => {
  modal.style.display = 'none'
  overlay.style.display = 'none'
})

// Hide resume on click outside of modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'
    overlay.style.display = 'none'
  }
})

/* * Show/Hide Mobile Menu on button click * */
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
mobileMenuBtn.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('is-active') // TODO: Create an 'active' class to toggle
})
