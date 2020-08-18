// TODO: Change these to actual image files of each project
import jamcafeImg from '../../img/responsive.svg'
import imdbImg from '../../img/responsive.svg'
import concentrationImg from '../../img/responsive.svg'

import cssIcon from '../../img/logo-css3.svg'
import expressIcon from '../../img/logo-express.svg'
import htmlIcon from '../../img/logo-html5.svg'
import javascriptIcon from '../../img/logo-javascript.svg'
import mongodbIcon from '../../img/logo-mongodb.svg'
import nodeIcon from '../../img/logo-nodejs.svg'
import reactIcon from '../../img/logo-react.svg'

export const Portfolio = () => `<section class="section portfolio">
  <h3 class="heading">Portfolio</h3>
  <div class="projects flex flex--align-center flex--justify-evenly flex--wrap">
    <figure class="project-card flex flex--column flex--align-center">
      <h4 class="project-title">Jam Cafe</h4>
      <img class="project-img" src="${jamcafeImg}" />
      <div class="project-btn-container flex flex--justify-around">
        <a>
          <button class="project-btn">Code</button>
        </a>
        <a>
          <button class="project-btn">Demo</button>
        </a>
      </div>
      <figcaption class="flex flex--align-center flex--justify-center">
        A Social Networking site for Musicians. Allows users to search for others,
        post events, view a post feed, and message users.
      </figcaption>
      <div class="project-tools flex flex--align-center flex--justify-evenly flex--wrap">
        <img class="tool-icon filter-primary" src="${htmlIcon}" />
        <img class="tool-icon filter-primary" src="${cssIcon}" />
        <img class="tool-icon filter-primary" src="${javascriptIcon}" />
        <img class="tool-icon filter-primary" src="${reactIcon}" />
        <img class="tool-icon filter-primary" src="${nodeIcon}" />
        <img class="tool-icon filter-primary" src="${expressIcon}" />
        <img class="tool-icon filter-primary" src="${mongodbIcon}" />
      </div>
    </figure>

    <figure class="project-card flex flex--column flex--align-center">
      <h4 class="project-title">IMDB Movie Search</h4>
      <img class="project-img" src="${imdbImg}" />
      <div class="project-btn-container flex flex--justify-around">
        <a>
          <button class="project-btn">Code</button>
        </a>
        <a>
          <button class="project-btn">Demo</button>
        </a>
      </div>
      <figcaption class="flex flex--align-center flex--justify-center">
        A simple app that interfaces with the IMDB API. Features a search functionality by name, filter by range of years, see recommended movies linked to searched movies and see upcoming movies.
      </figcaption>
      <div class="project-tools flex flex--align-center flex--justify-evenly flex--wrap">
      <img class="tool-icon filter-primary" src="${htmlIcon}" />
      <img class="tool-icon filter-primary" src="${cssIcon}" />
      <img class="tool-icon filter-primary" src="${javascriptIcon}" />
      <img class="tool-icon filter-primary" src="${reactIcon}" />
      <img class="tool-icon filter-primary" src="${nodeIcon}" />
      <img class="tool-icon filter-primary" src="${expressIcon}" />
      <img class="tool-icon filter-primary" src="${mongodbIcon}" />
      </div>
    </figure>

    <figure class="project-card flex flex--column flex--align-center">
      <h4 class="project-title">Concentration Card Game</h4>
      <img class="project-img" src="${concentrationImg}" />
      <div class="project-btn-container flex flex--justify-around">
        <a>
          <button class="project-btn">Code</button>
        </a>
        <a>
          <button class="project-btn">Demo</button>
        </a>
      </div>
      <figcaption class="flex flex--align-center flex--justify-center">
        A card game to match all pairs on the board. Allows user to choose number of pairs to play with, record their score upon completion and displays the top ten scores.
      </figcaption>
      <div class="project-tools flex flex--align-center flex--justify-evenly flex--wrap">
        <img class="tool-icon filter-primary" src="${htmlIcon}" />
        <img class="tool-icon filter-primary" src="${cssIcon}" />
        <img class="tool-icon filter-primary" src="${javascriptIcon}" />
        <img class="tool-icon filter-primary" src="${reactIcon}" />
      </div>
    </figure>
  </div>
  <p class="section-footer-text">Checkout many more of my small projects on <a href="https://github.com/STLnick">GitHub</a> as well as some non-JavaScript focused projects.</p>
</section>`
