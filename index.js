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

document.querySelector('#about-btn').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
})

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
