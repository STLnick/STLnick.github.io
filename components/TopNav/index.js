const stlIconSrc = require('../../img/stl.svg')
const githubIcon = require('../../img/logo-github.svg')
const linkedInIcon = require('../../img/logo-linkedin.svg')
const twitterIcon = require('../../img/logo-twitter.svg')
const mailIcon = require('../../img/mail.svg')

export const TopNav = () => `
  <div class="top-nav flex flex--align-center flex--justify-between">
    <div class="nav-left flex flex--align-center">
      <img class="nav-logo filter-white" src="${stlIconSrc}" alt="" width="50px" height="50px" />
      <h4 class="name"><span class="name-first-letter">N</span>ick <span class="name-first-letter">R</span>ay</h4>
    </div>
    <div class="nav-center">
      <ul class="scroll-list flex">
        <li class="scroll-list-item">
          <a href="home">Home</a>
        </li>
        <li class="scroll-list-item">
          <a href="about">About</a>
        </li>
        <li class="scroll-list-item">
          <a href="portfolio">Portfolio</a>
        </li>
        <li class="scroll-list-item">
          <a href="blog">Blog</a>
        </li>
        <li class="scroll-list-item">
          <a href="contact">Contact</a>
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
  </div>
  <div class="test-spacer"></div>
`
