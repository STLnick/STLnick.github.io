import { About, Blog, Contact, Home, Portfolio, TopNav } from './components'

document.querySelector('#root').innerHTML = `
${TopNav()}
${Home()}
${About()}
${Portfolio()}
${Blog()}
${Contact()}
`
