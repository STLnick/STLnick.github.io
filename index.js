import { Blog, Contact, Hero, Portfolio, Skills, TopNav } from './components'

document.querySelector('#root').innerHTML = `
${TopNav()}
${Hero()}
${Skills()}
${Portfolio()}
${Blog()}
${Contact()}
`

document.querySelector('#about-btn').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
})
