import bookIcon from '../../img/book2.svg'
import bulbIcon from '../../img/bulb.svg'
import responsiveIcon from '../../img/responsive.svg'

import cssIcon from '../../img/logo-css3.svg'
import expressIcon from '../../img/logo-express.svg'
import htmlIcon from '../../img/logo-html5.svg'
import javascriptIcon from '../../img/logo-javascript.svg'
import mongodbIconWhite from '../../img/logo-mongodb-white.svg'
import nodeIcon from '../../img/logo-nodejs.svg'
import reactIcon from '../../img/logo-react.svg'

export const Skills = () => `<section class="section skills">
  <h3 class="heading">Skills</h3>
  <div class="skill-icons flex flex--align-center flex--justify-evenly flex--wrap">
    <div class="hex flex flex--column flex--align-center flex--justify-end">
      <img class="filter-white" src="${cssIcon}" />
      <h4 class="skill-title">CSS</h4>
    </div>

    <div class="hex dark-hex flex flex--column flex--align-center flex--justify-end">
      <img class="filter-white" src="${htmlIcon}" />
      <h4 class="skill-title">HTML</h4>
    </div>

    <div class="hex flex flex--column flex--align-center flex--justify-end">
      <img class="filter-white" src="${javascriptIcon}" />
      <h4 class="skill-title">JavaScript</h4>
    </div>

    <div class="hex dark-hex flex flex--column flex--align-center flex--justify-end">
      <img class="filter-white" src="${reactIcon}" />
      <h4 class="skill-title">React</h4>
    </div>

    <div class="hex flex flex--column flex--align-center flex--justify-end">
      <img class="filter-white" src="${nodeIcon}" />
      <h4 class="skill-title">NodeJS</h4>
    </div>

    <div class="hex dark-hex flex flex--column flex--align-center flex--justify-end">
      <img class="filter-white" src="${expressIcon}" />
      <h4 class="skill-title">ExpressJS</h4>
    </div>

    <div class="hex flex flex--column flex--align-center flex--justify-end">
      <img src="${mongodbIconWhite}" />
      <h4 class="skill-title">MongoDB</h4>
    </div>
  </div>

  <div class="concepts flex flex--align-center flex--justify-evenly flex--wrap">
    <div class="concept flex flex--column flex--align-center flex--justify-end">
      <img class="concept-icon filter-test" src="${responsiveIcon}" />
      <div class="concept-text flex flex--align-center flex--justify-center">
        <p>
          Half of web traffic is mobile so it is imperative websites are
          mobile-friendly. All sites I make respect
          that fact and look great for both desktop and mobile users.
        </p>
      </div>
    </div>

    <div class="concept flex flex--column flex--align-center flex--justify-end">
      <img class="concept-icon-big filter-test" src="${bulbIcon}" />
      <div class="concept-text flex flex--align-center flex--justify-center">
        <p>
          I maintain a focus on an intuitive UI/UX. A good user experience is
          just as important as the site itself looking good.
        </p>
      </div>
    </div>

    <div class="concept flex flex--column flex--align-center flex--justify-end">
      <img class="concept-icon filter-test" src="${bookIcon}" />
      <div class="concept-text flex flex--align-center flex--justify-center">
        <p>
          Technology moves fast. As a developer it's important to continue to
          learn and embrace it. Learning new tech is exciting and learning quickly
          is one of my biggest strengths.
        </p>
      </div>
    </div>
  </div>
</section>`

// Nick

// Skills? JS, React, NodeJS
// I love seeing ideas come to life in design and user experience.
// I also love Hockey, Biking
