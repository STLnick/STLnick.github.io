import githubIcon from '../../img/logo-github.svg'
import linkedInIcon from '../../img/logo-linkedin.svg'
import twitterIcon from '../../img/logo-twitter.svg'
import mailIcon from '../../img/mail.svg'

export const Footer = () => `<footer class="flex flex--align-center flex--justify-center">
  <ul class="footer-list flex flex--align-center flex--justify-between">
    <li class="footer-list-item">
      <a href="https://github.com/STLnick">
        <img class="nav-social filter-white" src="${githubIcon}" />
      </a>
    </li>
    <li class="footer-list-item">
      <a href="https://github.com/STLnick">
        <img class="nav-social filter-white" src="${linkedInIcon}" />
      </a>
    </li>
    <li class="footer-list-item">
      <a href="https://twitter.com/STLnickray">
        <img class="nav-social filter-white" src="${twitterIcon}" />
      </a>
    </li>
    <li class="footer-list-item">
      <a href="mailto:nickrray@gmail.com">
        <img class="nav-social filter-white" src="${mailIcon}" />
      </a>
    </li>
  </ul>
</footer>
`
