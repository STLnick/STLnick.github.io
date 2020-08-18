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
// Testing scrolling...
document.querySelector('#about-btn').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
})

// Change nav svg color on hover
const navSocialLinks = Array.from(document.querySelectorAll('.nav-social'))

navSocialLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.toggle('filter-white')
    link.classList.toggle('filter-secondary')
  })
})

navSocialLinks.forEach(link => {
  link.addEventListener('mouseleave', () => {
    link.classList.toggle('filter-white')
    link.classList.toggle('filter-secondary')
  })
})

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
