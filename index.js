import { About, Blog, Contact, Home, Portfolio, TopNav } from './components'

document.querySelector('#root').innerHTML = `
${TopNav()}
${Home()}
${About()}
${Portfolio()}
${Blog()}
${Contact()}
`

document.querySelector('#about-btn').addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
})
