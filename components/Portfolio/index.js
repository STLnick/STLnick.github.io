// TODO: Change these to actual image files of each project
import jamcafeImg from '../../img/JamCafe.png'
import imdbImg from '../../img/ReactIMDB.png'
import concentrationImg from '../../img/ConcentrationGame.png'

import cssIcon from '../../img/logo-css3.svg'
import expressIcon from '../../img/logo-express.svg'
import htmlIcon from '../../img/logo-html5.svg'
import javascriptIcon from '../../img/logo-javascript.svg'
import mongodbIcon from '../../img/logo-mongodb.svg'
import nodeIcon from '../../img/logo-nodejs.svg'
import reactIcon from '../../img/logo-react.svg'

export const Portfolio = () => `<section class="section portfolio">
  <h3 class="heading light-heading">Portfolio</h3>
  <div class="projects flex flex--align-center flex--justify-evenly flex--wrap">
    <figure class="project-card flex flex--column flex--align-center flex--justify-between">
      <h4 class="project-title">Jam Cafe</h4>
      <img class="project-img" src="${jamcafeImg}" />
      <div class="project-btn-container flex flex--justify-around">
        <a href="https://github.com/STLnick/capstone-react-trial" target="_blank">
          <button class="project-btn">Code</button>
        </a>
        <a>
          <button disabled class="project-btn">Demo</button>
        </a>
      </div>
      <figcaption class="flex flex--align-center flex--justify-center">
        A Social Networking site for Musicians. Allows users to search for others,
        post events, view a post feed, and message users.
      </figcaption>
      <div class="project-tools flex flex--align-center flex--justify-evenly flex--wrap">
        <img class="tool-icon filter-grey" src="${htmlIcon}" />
        <img class="tool-icon filter-grey" src="${cssIcon}" />
        <img class="tool-icon filter-grey" src="${javascriptIcon}" />
        <img class="tool-icon filter-grey" src="${reactIcon}" />
        <img class="tool-icon filter-grey" src="${nodeIcon}" />
        <img class="tool-icon filter-grey" src="${expressIcon}" />
        <img class="tool-icon filter-grey" src="${mongodbIcon}" />
      </div>
    </figure>

    <figure class="project-card flex flex--column flex--align-center flex--justify-between">
      <h4 class="project-title">IMDB Movie Search</h4>
      <img class="project-img" src="${imdbImg}" />
      <div class="project-btn-container flex flex--justify-around">
        <a href="https://github.com/STLnick/react-imdb" target="_blank">
          <button class="project-btn">Code</button>
        </a>
        <a href="https://react-imdb-search.netlify.app/" target="_blank">
          <button class="project-btn">Demo</button>
        </a>
      </div>
      <figcaption class="flex flex--align-center flex--justify-center">
        A simple app that interfaces with the IMDB API. Features a search functionality by name, filter by range of years, see recommended movies linked to searched movies and see upcoming movies.
      </figcaption>
      <div class="project-tools flex flex--align-center flex--justify-evenly flex--wrap">
      <img class="tool-icon filter-grey" src="${htmlIcon}" />
      <img class="tool-icon filter-grey" src="${cssIcon}" />
      <img class="tool-icon filter-grey" src="${javascriptIcon}" />
      <img class="tool-icon filter-grey" src="${reactIcon}" />
      <img class="tool-icon filter-grey" src="${nodeIcon}" />
      <img class="tool-icon filter-grey" src="${expressIcon}" />
      <img class="tool-icon filter-grey" src="${mongodbIcon}" />
      </div>
    </figure>

    <figure class="project-card flex flex--column flex--align-center flex--justify-between">
      <h4 class="project-title">Concentration Card Game</h4>
      <img class="project-img" src="${concentrationImg}" />
      <div class="project-btn-container flex flex--justify-around">
        <a href="https://github.com/STLnick/concentration-game" target="_blank">
          <button class="project-btn">Code</button>
        </a>
        <a href="https://game-concentration.netlify.app/" target="_blank">
          <button class="project-btn">Demo</button>
        </a>
      </div>
      <figcaption class="flex flex--align-center flex--justify-center">
        A card game to match all pairs on the board. Allows user to choose number of pairs to play with, record their score upon completion and displays the top ten scores.
      </figcaption>
      <div class="project-tools flex flex--align-center flex--justify-evenly flex--wrap">
      <img class="tool-icon filter-grey" src="${htmlIcon}" />
      <img class="tool-icon filter-grey" src="${cssIcon}" />
      <img class="tool-icon filter-grey" src="${javascriptIcon}" />
      <img class="tool-icon filter-grey" src="${reactIcon}" />
      <img class="tool-icon filter-grey" src="${nodeIcon}" />
      <img class="tool-icon filter-grey" src="${expressIcon}" />
      <img class="tool-icon filter-grey" src="${mongodbIcon}" />
      </div>
    </figure>
  </div>
  <p class="section-footer-text section-footer-text-light">Checkout many more of my small projects on <a href="https://github.com/STLnick">GitHub</a> as well as some non-JavaScript focused projects.</p>
</section>`
