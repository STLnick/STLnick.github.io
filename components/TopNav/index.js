import githubIcon from '../../img/logo-github.svg'
import hamburgerMenuIcon from '../../img/menu.svg'
import linkedInIcon from '../../img/logo-linkedin.svg'
import mailIcon from '../../img/mail.svg'
import stlIconSrc from '../../img/stl.svg'
import twitterIcon from '../../img/logo-twitter.svg'

// TODO: Need to figure out scroll-to for different sections the a tags aren't working

export const TopNav = () => `
<div class="top-nav flex flex--align-center flex--justify-between">
  <div class="nav-left flex flex--align-center">
    <img class="nav-logo filter-white" src="${stlIconSrc}" alt="" width="50px" height="50px" />
    <h4 class="name"><span class="name-first-letter">N</span>ick <span class="name-first-letter">R</span>ay</h4>
  </div>
  <div class="nav-center">
    <ul class="scroll-list flex">
      <li class="scroll-list-item">
        <button class="home-btn">Home</button>
      </li>
      <li class="scroll-list-item">
        <button class="skills-btn">Skills</button>
      </li>
      <li class="scroll-list-item">
        <button class="portfolio-btn">Portfolio</button>
      </li>
      <li class="scroll-list-item">
        <button class="blog-btn">Blog</button>
      </li>
      <li class="scroll-list-item">
        <button class="contact-btn">Contact</button>
      </li>
    </ul>
  </div>
  <div class="nav-right">
    <ul class="social-list flex">
      <li class="social-list-item">
        <a href="https://github.com/STLnick">
          <img class="nav-social filter-white" src="${githubIcon}" />
        </a>
      </li>
      <li class="social-list-item">
        <a href="https://github.com/STLnick">
          <img class="nav-social filter-white" src="${linkedInIcon}" />
        </a>
      </li>
      <li class="social-list-item">
        <a href="https://twitter.com/STLnickray">
          <img class="nav-social filter-white" src="${twitterIcon}" />
        </a>
      </li>
      <li class="social-list-item">
        <a href="mailto:nickrray@gmail.com">
          <img class="nav-social filter-white" src="${mailIcon}" />
        </a>
      </li>
    </ul>
  </div>
  <button class="mobile-menu-btn">
    <img class="hamburger-icon filter-white" src="${hamburgerMenuIcon}" />
  </button>
</div>
<div class="mobile-menu">
  <ul class="scroll-list">
    <li class="scroll-list-item">
      <button class="home-btn">Home</button>
    </li>
    <li class="scroll-list-item">
      <button class="skills-btn">Skills</button>
    </li>
    <li class="scroll-list-item">
      <button class="portfolio-btn">Portfolio</button>
    </li>
    <li class="scroll-list-item">
      <button class="blog-btn">Blog</button>
    </li>
    <li class="scroll-list-item">
      <button class="contact-btn">Contact</button>
    </li>
  </ul>
</div>
`
