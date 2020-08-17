import { About, Blog, Contact, Hero, Portfolio, TopNav } from './components'

document.querySelector('#root').innerHTML = `
${TopNav()}
${Hero()}
${Portfolio()}
${About()}
${Blog()}
${Contact()}
`

document.querySelector('#about-btn').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
})
