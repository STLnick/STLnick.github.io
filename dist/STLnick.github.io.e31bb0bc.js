// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"img/useEffect-async.png":[function(require,module,exports) {
module.exports = "/useEffect-async.a3d3c5b2.png";
},{}],"img/react-hooks.jpg":[function(require,module,exports) {
module.exports = "/react-hooks.3dc209fc.jpg";
},{}],"img/mern-deploy.jpeg":[function(require,module,exports) {
module.exports = "/mern-deploy.9350d588.jpeg";
},{}],"components/Blog/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blog = void 0;

var _useEffectAsync = _interopRequireDefault(require("../../img/useEffect-async.png"));

var _reactHooks = _interopRequireDefault(require("../../img/react-hooks.jpg"));

var _mernDeploy = _interopRequireDefault(require("../../img/mern-deploy.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Blog = () => "<section class=\"section blog\">\n  <h3 class=\"heading\">Blog</h3>\n  <div class=\"posts flex flex--align-center flex--justify-evenly flex--wrap\">\n    <div class=\"post flex flex--column flex--align-center\">\n      <h4 class=\"post-title\">\n        <a class=\"post-link\" href=\"https://dev.to/stlnick/useeffect-and-async-4da8\">\n          useEffect() and async\n        </a>\n      </h4>\n      <img class=\"post-img\" src=\"".concat(_useEffectAsync.default, "\" />\n      <div class=\"post-content flex flex--column flex--align-center flex--justify-between\">\n        <blockquote class=\"post-text\">\n          If you've learned the traditional class-based React Components and you're now trying to move into Hooks there's a few things along the way that'll throw you for a loop.\n        </blockquote>\n        <div class=\"post-footer flex flex--align-center flex--justify-around\">\n          <p class=\"post-date\">10 August 2020</p>\n          <a class=\"post-footer-link\" href=\"https://dev.to/stlnick/useeffect-and-async-4da8\">\n            Full Article\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"post flex flex--column flex--align-center\">\n      <h4 class=\"post-title\">\n        <a class=\"post-link\" href=\"https://dev.to/stlnick/starting-with-react-hooks-2l0b\">\n          Starting With React Hooks\n        </a>\n      </h4>\n      <img class=\"post-img\" src=\"").concat(_reactHooks.default, "\" />\n      <div class=\"post-content flex flex--column flex--align-center flex--justify-between\">\n        <blockquote class=\"post-text\">\n          For just over a year now we've had access to this shiny new feature React Hooks. I'm sure most of us have at least heard of it.\n        </blockquote>\n        <div class=\"post-footer flex flex--align-center flex--justify-around\">\n          <p class=\"post-date\">3 August 2020</p>\n          <a class=\"post-footer-link\" href=\"https://dev.to/stlnick/starting-with-react-hooks-2l0b\">\n            Full Article\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"post flex flex--column flex--align-center\">\n      <div class=\"post-top\">\n        <h4 class=\"post-title\">\n          <a class=\"post-link\" href=\"https://dev.to/stlnick/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncb\">\n            How To Deploy A MERN App\n          </a>\n        </h4>\n        <img class=\"post-img\" src=\"").concat(_mernDeploy.default, "\" />\n      </div>\n      <div class=\"post-content flex flex--column flex--align-center flex--justify-between\">\n        <blockquote class=\"post-text\">\n        So you've got a cool project you'd like to show off to the world, how do we deploy a full-stack MERN app?\n        </blockquote>\n        <div class=\"post-footer flex flex--align-center flex--justify-around\">\n          <p class=\"post-date\">29 August 2020</p>\n          <a class=\"post-footer-link\" href=\"https://dev.to/stlnick/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncb\">\n            Full Article\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <p class=\"section-footer-text\">\n    All posts are made on <a href=\"https://dev.to/stlnick\">Dev.to</a>, click the link\n    to check out my profile.\n  </p>\n</section>");

exports.Blog = Blog;
},{"../../img/useEffect-async.png":"img/useEffect-async.png","../../img/react-hooks.jpg":"img/react-hooks.jpg","../../img/mern-deploy.jpeg":"img/mern-deploy.jpeg"}],"img/close.svg":[function(require,module,exports) {
module.exports = "/close.24fb46be.svg";
},{}],"img/easel.svg":[function(require,module,exports) {
module.exports = "/easel.1da20c44.svg";
},{}],"img/mail.svg":[function(require,module,exports) {
module.exports = "/mail.fa8d79ad.svg";
},{}],"img/call.svg":[function(require,module,exports) {
module.exports = "/call.f3071174.svg";
},{}],"img/logo-dev.svg":[function(require,module,exports) {
module.exports = "/logo-dev.483d7e8d.svg";
},{}],"img/logo-github.svg":[function(require,module,exports) {
module.exports = "/logo-github.a0198ade.svg";
},{}],"img/logo-linkedin.svg":[function(require,module,exports) {
module.exports = "/logo-linkedin.1b1e3012.svg";
},{}],"img/logo-twitter.svg":[function(require,module,exports) {
module.exports = "/logo-twitter.ae344e0d.svg";
},{}],"components/Contact/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contact = void 0;

var _close = _interopRequireDefault(require("../../img/close.svg"));

var _easel = _interopRequireDefault(require("../../img/easel.svg"));

var _mail = _interopRequireDefault(require("../../img/mail.svg"));

var _call = _interopRequireDefault(require("../../img/call.svg"));

var _logoDev = _interopRequireDefault(require("../../img/logo-dev.svg"));

var _logoGithub = _interopRequireDefault(require("../../img/logo-github.svg"));

var _logoLinkedin = _interopRequireDefault(require("../../img/logo-linkedin.svg"));

var _logoTwitter = _interopRequireDefault(require("../../img/logo-twitter.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Contact = () => "<section class=\"section contact\">\n  <h3 class=\"heading\">Contact</h3>\n  <div class=\"contact-container flex flex--column flex--align-center flex--justify-center\">\n    <h4 class=\"contact-text\">I can help.</h4>\n    <h4 class=\"contact-text\">\n      I'm looking for a full-time position either remote or in the\n      St. Louis, Missouri area.\n    </h4>\n    <h4 class=\"contact-text\">Let's talk and see if we're a fit.</h4>\n    <a class=\"message-btn flex flex--align-center\" href=\"mailto:nickrray@gmail.com\">\n      <img class=\"filter-white\" src=\"".concat(_mail.default, "\" />Message Me\n    </a>\n    <button class=\"modal-btn\">View Resume</button>\n    <div class=\"overlay\"></div>\n\n    <!-- RESUME -->\n    <div class=\"modal\">\n      <div class=\"modal-top\">\n        <img class=\"close filter-white\" src=\"").concat(_close.default, "\" />\n      </div>\n      <div class=\"canvas-container flex flex--column\">\n        <header class=\"flex flex-column flex--align-center flex--justify-around\">\n          <div class=\"header-left\">\n            <h1 class=\"title\">Nick Ray</h1>\n            <p class=\"title-subtext\">Full Stack JavaScript Web Developer</p>\n          </div>\n          <div class=\"header-right flex\">\n          <ul class=\"contact-list flex flex--column flex--justify-center\">\n            <li class=\"flex flex--align-center\">\n              <img class=\"contact-icon filter-resume-secondary\" src=\"").concat(_call.default, "\" alt=\"Phone icon\">\n              636-751-4849\n            </li>\n\n            <li class=\"flex flex--align-center\">\n              <img class=\"contact-icon filter-resume-secondary\" src=\"").concat(_mail.default, "\" alt=\"Mail icon\">\n              <a class=\"contact-link\" href=\"mailto:nickrray@gmail.com\">\n                nickrray@gmail.com\n              </a>\n            </li>\n\n            <li class=\"flex flex--align-center\">\n              <img class=\"contact-icon filter-resume-secondary\" src=\"").concat(_logoLinkedin.default, "\" alt=\"LinkedIn logo\">\n              <a class=\"contact-link\" href=\"https://www.linkedin.com/in/nickrray/\">LinkedIn</a>\n            </li>\n          </ul>\n          <ul class=\"contact-list\">\n            <li class=\"flex flex--align-center\">\n              <img class=\"contact-icon filter-resume-secondary\" src=\"").concat(_logoGithub.default, "\" alt=\"GitHub logo\">\n              <a class=\"contact-link\" href=\"https://github.com/STLnick\">GitHub</a>\n            </li>\n\n            <li class=\"flex flex--align-center\">\n              <img class=\"contact-icon filter-resume-secondary\" src=\"").concat(_logoDev.default, "\" alt=\"Dev logo\">\n              <a class=\"contact-link\" href=\"https://dev.to/stlnick\">Dev.to</a>\n            </li>\n\n            <li class=\"flex flex--align-center\">\n              <img class=\"contact-icon filter-resume-secondary\" src=\"").concat(_easel.default, "\" alt=\"Easel icon\">\n              <a class=\"contact-link\" href=\"https://stlnick.github.io/\">Portfolio Site</a>\n            </li>\n          </ul>\n          </div>\n        </header>\n        <div class=\"resume-body flex\">\n          <div class=\"sidebar flex flex--column\">\n            <section class=\"skills\">\n              <h2 class=\"resume-heading\">Skills</h2>\n              <h4 class=\"subheading\">Languages</h4>\n              <p class=\"section-content\">JavaScript - HTML - CSS - SQL - PHP</p>\n              <h4 class=\"subheading\">Frameworks / Libraries</h4>\n              <p class=\"section-content\">ReactJS - NodeJS - Bootstrap - Bulma</p>\n              <h4 class=\"subheading\">Tools</h4>\n              <p class=\"section-content\">Git - Developer Tools - MySQL</p>\n            </section>\n            <section class=\"education\">\n              <h2 class=\"resume-heading\">Education</h2>\n              <h4 class=\"subheading\">Full Stack JavaScript Developer</h4>\n              <p class=\"section-content italic\">Claim Academy</p>\n              <p class=\"section-content small-text\">Enrolled</p>\n              <h4 class=\"subheading\">Bachelor of Computer Science</h4>\n              <p class=\"section-content italic\">University of Missouri - St. Louis</p>\n              <p class=\"section-content small-text\">Enrolled</p>\n            </section>\n            <section class=\"experience\">\n              <h2 class=\"resume-heading\">Experience</h2>\n              <!-- Expand more here than original resume -->\n              <h4 class=\"subheading\">General Manager - Sugarfire Smokehouse</h4>\n              <p class=\"section-content small-text\">5/2014 - 4/2020</p>\n              <ul class=\"experience-list\">\n                <li class=\"experience-list-item\">\n                  Manage a team of 50 individuals that provide excellent customer service,\n                  reaching 90% customer satisfaction and repeat customers.\n                </li>\n                <li class=\"experience-list-item\">\n                  Help grow annual sales from 4.5 Million in 2018 to over 5 Million in 2019\n                  in the business's fourth year of operation.\n                </li>\n                <li class=\"experience-list-item\">\n                  Improve review\n                  rankings from 4.0 to at least 4.5 on Google, Yelp, and Facebook at time\n                  of departure.\n                </li>\n                <li class=\"experience-list-item\">\n                  Create a display of all reviews for team to see that provides\n                  opportunities to praise and coach on certain reviews.\n                </li>\n              </ul>\n            </section>\n          </div>\n          <div class=\"main-content flex flex--column\">\n            <section class=\"about\">\n              <h2 class=\"resume-heading\">About Me</h2>\n              <p class=\"about-main\">\n                A dedicated JavaScript Web Developer with a passion for learning\n                and technology. Learning new tech comes easily and honing current\n                skills is rewarding.\n              </p>\n              <div class=\"flex flex--justify-between\">\n                <p class=\"about-left\">\n                  Experienced in Full-Stack Web Development using NodeJS for back-end\n                  and React for front-end as well as vanilla HTML, CSS, and JavaScript.\n                </p>\n                <p class=\"about-right\">\n                  Possess skills to create or improve responsive websites that make anyone\n                  proud it represents their business while also making users feel happy\n                  with their experience.\n                </p>\n              </div>\n            </section>\n            <section class=\"projects--resume\">\n              <h2 class=\"resume-heading\">Technical Projects</h2>\n              <div class=\"project med-text\">\n                <div class=\"project-head italic flex flex--align-center\">\n                  <h4 class=\"project-title--resume\">Omnifood</h4>\n                  <p class=\"skills-used med-text\">Skills Used: HTML - CSS - JavaScript - PHP</p>\n                </div>\n                <p class=\"project-links\">\n                  <a href=\"https://github.com/STLnick/omnifood\">Code</a>\n                  |\n                  <a href=\"https://stlnick.github.io/omnifood/\">Demo</a>\n                </p>\n                <p class=\"project-description\">\n                  A single-page responsive web app focused on UI for a fictional business. Highlights the\n                  features of the business in a streamlined format such as ordering plans,\n                  testimonials and a contact form.\n                </p>\n                <ul class=\"project-list\">\n                  <li class=\"project-list-item\">\n                    Utilized CSS media queries for proper display on all common screen sizes\n                  </li>\n                  <li class=\"project-list-item\">\n                    Built reusable CSS components to structure the page\n                  </li>\n                  <li class=\"project-list-item\">\n                    Integrated PHP for a mailer function attached to contact form\n                  </li>\n                  <li class=\"project-list-item\">\n                    Included JavaScript functions to scroll to sections with navigation buttons\n                  </li>\n                </ul>\n              </div>\n              <div class=\"project med-text\">\n                <div class=\"project-head italic flex flex--align-center\">\n                  <h4 class=\"project-title--resume\">Budgety</h4>\n                  <p class=\"skills-used med-text\">Skills Used: HTML - CSS - JavaScript</p>\n                </div>\n                <p class=\"project-links\">\n                  <a href=\"https://github.com/STLnick/omnifood\">Code</a>\n                  |\n                  <a href=\"https://stlnick.github.io/omnifood/\">Demo</a>\n                </p>\n                <p class=\"project-description\">\n                  A budget tool to track income and expenses.\n                  Built to highlight use of JavaScript and well-structured code.\n                </p>\n                <ul class=\"project-list\">\n                  <li class=\"project-list-item\">\n                    Separated UI and Budget functionalities using different controllers\n                  </li>\n                  <li class=\"project-list-item\">\n                    Implemented DRY concept for UI Controller\n                  </li>\n                  <li class=\"project-list-item\">\n                    Created \u2018private\u2019 JS variables and returned \u2018public\u2019 functions to use\n                  </li>\n                  <li class=\"project-list-item\">\n                    Used intuitive color highlighting for better UX\n                  </li>\n                </ul>\n              </div>\n              <div class=\"project med-text\">\n                <div class=\"project-head italic flex flex--align-center\">\n                  <h4 class=\"project-title--resume\">Bowling Database</h4>\n                  <p class=\"skills-used med-text\">Skills Used: HTML - CSS - JavaScript - PHP - SQL</p>\n                </div>\n                <p class=\"project-links\">\n                  <a href=\"https://github.com/STLnick/bowlingdb\">Code</a>\n                </p>\n                <p class=\"project-description\">\n                  A web app that dynamically fetches data from a database for information on\n                  Bowlers, Teams, Competitions and what a Bowler has Competed In. Designed to fill\n                  a need of a colleague who bowls to have an easier way to view, add, edit, and delete data.\n                </p>\n                <ul class=\"project-list\">\n                  <li class=\"project-list-item\">\n                    Designed the database used in this application\n                  </li>\n                  <li class=\"project-list-item\">\n                    Employed PHP for interaction with database and dynamic display of data\n                  </li>\n                  <li class=\"project-list-item\">\n                    Crafted SQL statements for all functionalities\n                  </li>\n                  <li class=\"project-list-item\">\n                    Utilized Bootstrap CSS library for a comfortable and responsive UI\n                  </li>\n                </ul>\n              </div>\n            </section>\n          </div>\n        </div>\n        <div class=\"bottom-block\">\n          <p>Preferred Contact Methods - Phone: (636)751-4849 &mdash; Email: nickrray@gmail.com</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>");

exports.Contact = Contact;
},{"../../img/close.svg":"img/close.svg","../../img/easel.svg":"img/easel.svg","../../img/mail.svg":"img/mail.svg","../../img/call.svg":"img/call.svg","../../img/logo-dev.svg":"img/logo-dev.svg","../../img/logo-github.svg":"img/logo-github.svg","../../img/logo-linkedin.svg":"img/logo-linkedin.svg","../../img/logo-twitter.svg":"img/logo-twitter.svg"}],"components/Footer/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _logoGithub = _interopRequireDefault(require("../../img/logo-github.svg"));

var _logoLinkedin = _interopRequireDefault(require("../../img/logo-linkedin.svg"));

var _logoTwitter = _interopRequireDefault(require("../../img/logo-twitter.svg"));

var _mail = _interopRequireDefault(require("../../img/mail.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Footer = () => "<footer class=\"flex flex--align-center flex--justify-center\">\n  <ul class=\"footer-list flex flex--align-center flex--justify-between\">\n    <li class=\"footer-list-item\">\n      <a href=\"https://github.com/STLnick\">\n        <img class=\"nav-social filter-white\" src=\"".concat(_logoGithub.default, "\" />\n      </a>\n    </li>\n    <li class=\"footer-list-item\">\n      <a href=\"https://github.com/STLnick\">\n        <img class=\"nav-social filter-white\" src=\"").concat(_logoLinkedin.default, "\" />\n      </a>\n    </li>\n    <li class=\"footer-list-item\">\n      <a href=\"https://twitter.com/STLnickray\">\n        <img class=\"nav-social filter-white\" src=\"").concat(_logoTwitter.default, "\" />\n      </a>\n    </li>\n    <li class=\"footer-list-item\">\n      <a href=\"mailto:nickrray@gmail.com\">\n        <img class=\"nav-social filter-white\" src=\"").concat(_mail.default, "\" />\n      </a>\n    </li>\n  </ul>\n</footer>\n");

exports.Footer = Footer;
},{"../../img/logo-github.svg":"img/logo-github.svg","../../img/logo-linkedin.svg":"img/logo-linkedin.svg","../../img/logo-twitter.svg":"img/logo-twitter.svg","../../img/mail.svg":"img/mail.svg"}],"img/gateway-arch.jpg":[function(require,module,exports) {
module.exports = "/gateway-arch.981803ed.jpg";
},{}],"components/Hero/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hero = void 0;

var _gatewayArch = _interopRequireDefault(require("../../img/gateway-arch.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_gatewayArch.default);

const Hero = () => "<div class=\"hero flex flex--align-center flex--justify-center\" style=\"background-image: url(".concat(_gatewayArch.default, ")\">\n  <div class=\"hero-text-container flex flex--column flex--align-center flex--justify-center\">\n    <h2 class=\"hero-text\">I'm Nick Ray,</h2>\n    <h2 class=\"hero-text\">a JavaScript Web Developer.</h2>\n    <h2 class=\"hero-text\">I \u2764\uFE0F STL and making sites.</h2>\n  </div>\n</div >");

exports.Hero = Hero;
},{"../../img/gateway-arch.jpg":"img/gateway-arch.jpg"}],"img/JamCafe.png":[function(require,module,exports) {
module.exports = "/JamCafe.c2b8e20d.png";
},{}],"img/ReactIMDB.png":[function(require,module,exports) {
module.exports = "/ReactIMDB.2a923c5f.png";
},{}],"img/ConcentrationGame.png":[function(require,module,exports) {
module.exports = "/ConcentrationGame.37c7ea10.png";
},{}],"img/logo-css3.svg":[function(require,module,exports) {
module.exports = "/logo-css3.edcb205c.svg";
},{}],"img/logo-express.svg":[function(require,module,exports) {
module.exports = "/logo-express.d57acebb.svg";
},{}],"img/logo-html5.svg":[function(require,module,exports) {
module.exports = "/logo-html5.8d22b75b.svg";
},{}],"img/logo-javascript.svg":[function(require,module,exports) {
module.exports = "/logo-javascript.55841838.svg";
},{}],"img/logo-mongodb.svg":[function(require,module,exports) {
module.exports = "/logo-mongodb.186f9949.svg";
},{}],"img/logo-nodejs.svg":[function(require,module,exports) {
module.exports = "/logo-nodejs.13523e9b.svg";
},{}],"img/logo-react.svg":[function(require,module,exports) {
module.exports = "/logo-react.23f0758f.svg";
},{}],"components/Portfolio/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portfolio = void 0;

var _JamCafe = _interopRequireDefault(require("../../img/JamCafe.png"));

var _ReactIMDB = _interopRequireDefault(require("../../img/ReactIMDB.png"));

var _ConcentrationGame = _interopRequireDefault(require("../../img/ConcentrationGame.png"));

var _logoCss = _interopRequireDefault(require("../../img/logo-css3.svg"));

var _logoExpress = _interopRequireDefault(require("../../img/logo-express.svg"));

var _logoHtml = _interopRequireDefault(require("../../img/logo-html5.svg"));

var _logoJavascript = _interopRequireDefault(require("../../img/logo-javascript.svg"));

var _logoMongodb = _interopRequireDefault(require("../../img/logo-mongodb.svg"));

var _logoNodejs = _interopRequireDefault(require("../../img/logo-nodejs.svg"));

var _logoReact = _interopRequireDefault(require("../../img/logo-react.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Change these to actual image files of each project
const Portfolio = () => "<section class=\"section portfolio\">\n  <h3 class=\"heading light-heading\">Portfolio</h3>\n  <div class=\"projects flex flex--align-center flex--justify-evenly flex--wrap\">\n    <figure class=\"project-card flex flex--column flex--align-center flex--justify-between\">\n      <h4 class=\"project-title\">Jam Cafe</h4>\n      <img class=\"project-img\" src=\"".concat(_JamCafe.default, "\" />\n      <div class=\"project-btn-container flex flex--justify-around\">\n        <a href=\"https://github.com/STLnick/capstone-react-trial\">\n          <button class=\"project-btn\">Code</button>\n        </a>\n        <a>\n          <button disabled class=\"project-btn\">Demo</button>\n        </a>\n      </div>\n      <figcaption class=\"flex flex--align-center flex--justify-center\">\n        A Social Networking site for Musicians. Allows users to search for others,\n        post events, view a post feed, and message users.\n      </figcaption>\n      <div class=\"project-tools flex flex--align-center flex--justify-evenly flex--wrap\">\n        <img class=\"tool-icon filter-primary\" src=\"").concat(_logoHtml.default, "\" />\n        <img class=\"tool-icon filter-primary\" src=\"").concat(_logoCss.default, "\" />\n        <img class=\"tool-icon filter-primary\" src=\"").concat(_logoJavascript.default, "\" />\n        <img class=\"tool-icon filter-primary\" src=\"").concat(_logoReact.default, "\" />\n        <img class=\"tool-icon filter-primary\" src=\"").concat(_logoNodejs.default, "\" />\n        <img class=\"tool-icon filter-primary\" src=\"").concat(_logoExpress.default, "\" />\n        <img class=\"tool-icon filter-primary\" src=\"").concat(_logoMongodb.default, "\" />\n      </div>\n    </figure>\n\n    <figure class=\"project-card flex flex--column flex--align-center flex--justify-between\">\n      <h4 class=\"project-title\">IMDB Movie Search</h4>\n      <img class=\"project-img\" src=\"").concat(_ReactIMDB.default, "\" />\n      <div class=\"project-btn-container flex flex--justify-around\">\n        <a href=\"https://github.com/STLnick/concentration-game\">\n          <button class=\"project-btn\">Code</button>\n        </a>\n        <a href=\"https://imdbmoviesearch.netlify.app/\">\n          <button class=\"project-btn\">Demo</button>\n        </a>\n      </div>\n      <figcaption class=\"flex flex--align-center flex--justify-center\">\n        A simple app that interfaces with the IMDB API. Features a search functionality by name, filter by range of years, see recommended movies linked to searched movies and see upcoming movies.\n      </figcaption>\n      <div class=\"project-tools flex flex--align-center flex--justify-evenly flex--wrap\">\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoHtml.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoCss.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoJavascript.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoReact.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoNodejs.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoExpress.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoMongodb.default, "\" />\n      </div>\n    </figure>\n\n    <figure class=\"project-card flex flex--column flex--align-center flex--justify-between\">\n      <h4 class=\"project-title\">Concentration Card Game</h4>\n      <img class=\"project-img\" src=\"").concat(_ConcentrationGame.default, "\" />\n      <div class=\"project-btn-container flex flex--justify-around\">\n        <a href=\"https://github.com/STLnick/concentration-game\">\n          <button class=\"project-btn\">Code</button>\n        </a>\n        <a href=\"https://game-concentration.netlify.app/\">\n          <button class=\"project-btn\">Demo</button>\n        </a>\n      </div>\n      <figcaption class=\"flex flex--align-center flex--justify-center\">\n        A card game to match all pairs on the board. Allows user to choose number of pairs to play with, record their score upon completion and displays the top ten scores.\n      </figcaption>\n      <div class=\"project-tools flex flex--align-center flex--justify-evenly flex--wrap\">\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoHtml.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoCss.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoJavascript.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoReact.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoNodejs.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoExpress.default, "\" />\n      <img class=\"tool-icon filter-primary\" src=\"").concat(_logoMongodb.default, "\" />\n      </div>\n    </figure>\n  </div>\n  <p class=\"section-footer-text section-footer-text-light\">Checkout many more of my small projects on <a href=\"https://github.com/STLnick\">GitHub</a> as well as some non-JavaScript focused projects.</p>\n</section>");

exports.Portfolio = Portfolio;
},{"../../img/JamCafe.png":"img/JamCafe.png","../../img/ReactIMDB.png":"img/ReactIMDB.png","../../img/ConcentrationGame.png":"img/ConcentrationGame.png","../../img/logo-css3.svg":"img/logo-css3.svg","../../img/logo-express.svg":"img/logo-express.svg","../../img/logo-html5.svg":"img/logo-html5.svg","../../img/logo-javascript.svg":"img/logo-javascript.svg","../../img/logo-mongodb.svg":"img/logo-mongodb.svg","../../img/logo-nodejs.svg":"img/logo-nodejs.svg","../../img/logo-react.svg":"img/logo-react.svg"}],"img/book2.svg":[function(require,module,exports) {
module.exports = "/book2.4ddd3096.svg";
},{}],"img/bulb.svg":[function(require,module,exports) {
module.exports = "/bulb.52e00857.svg";
},{}],"img/responsive.svg":[function(require,module,exports) {
module.exports = "/responsive.ce27dcfd.svg";
},{}],"img/logo-mongodb-white.svg":[function(require,module,exports) {
module.exports = "/logo-mongodb-white.36a41b12.svg";
},{}],"components/Skills/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skills = void 0;

var _book = _interopRequireDefault(require("../../img/book2.svg"));

var _bulb = _interopRequireDefault(require("../../img/bulb.svg"));

var _responsive = _interopRequireDefault(require("../../img/responsive.svg"));

var _logoCss = _interopRequireDefault(require("../../img/logo-css3.svg"));

var _logoExpress = _interopRequireDefault(require("../../img/logo-express.svg"));

var _logoHtml = _interopRequireDefault(require("../../img/logo-html5.svg"));

var _logoJavascript = _interopRequireDefault(require("../../img/logo-javascript.svg"));

var _logoMongodbWhite = _interopRequireDefault(require("../../img/logo-mongodb-white.svg"));

var _logoNodejs = _interopRequireDefault(require("../../img/logo-nodejs.svg"));

var _logoReact = _interopRequireDefault(require("../../img/logo-react.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Skills = () => "<section class=\"section skills\">\n  <h3 class=\"heading\">Skills</h3>\n  <div class=\"skill-icons flex flex--align-center flex--justify-evenly flex--wrap\">\n    <div class=\"hex flex flex--column flex--align-center flex--justify-end\">\n      <img class=\"filter-white\" src=\"".concat(_logoCss.default, "\" />\n      <h4 class=\"skill-title\">CSS</h4>\n    </div>\n\n    <div class=\"hex dark-hex flex flex--column flex--align-center flex--justify-end\">\n      <img class=\"filter-white\" src=\"").concat(_logoHtml.default, "\" />\n      <h4 class=\"skill-title\">HTML</h4>\n    </div>\n\n    <div class=\"hex flex flex--column flex--align-center flex--justify-end\">\n      <img class=\"filter-white\" src=\"").concat(_logoJavascript.default, "\" />\n      <h4 class=\"skill-title\">JavaScript</h4>\n    </div>\n\n    <div class=\"hex dark-hex flex flex--column flex--align-center flex--justify-end\">\n      <img class=\"filter-white\" src=\"").concat(_logoReact.default, "\" />\n      <h4 class=\"skill-title\">React</h4>\n    </div>\n\n    <div class=\"hex flex flex--column flex--align-center flex--justify-end\">\n      <img class=\"filter-white\" src=\"").concat(_logoNodejs.default, "\" />\n      <h4 class=\"skill-title\">NodeJS</h4>\n    </div>\n\n    <div class=\"hex dark-hex flex flex--column flex--align-center flex--justify-end\">\n      <img class=\"filter-white\" src=\"").concat(_logoExpress.default, "\" />\n      <h4 class=\"skill-title\">ExpressJS</h4>\n    </div>\n\n    <div class=\"hex flex flex--column flex--align-center flex--justify-end\">\n      <img src=\"").concat(_logoMongodbWhite.default, "\" />\n      <h4 class=\"skill-title\">MongoDB</h4>\n    </div>\n  </div>\n\n  <div class=\"concepts flex flex--align-center flex--justify-evenly flex--wrap\">\n    <div class=\"concept flex flex--column flex--align-center flex--justify-end\">\n      <img class=\"concept-icon filter-white\" src=\"").concat(_responsive.default, "\" />\n      <div class=\"concept-text flex flex--align-center flex--justify-center\">\n        <p>\n          Half of web traffic is mobile so it is imperative websites are\n          mobile-friendly. All sites I make respect\n          that fact and look great for both desktop and mobile users.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"concept flex flex--column flex--align-center flex--justify-end\">\n      <img class=\"concept-icon-big filter-white\" src=\"").concat(_bulb.default, "\" />\n      <div class=\"concept-text flex flex--align-center flex--justify-center\">\n        <p>\n          I maintain a focus on an intuitive UI/UX. A good user experience is\n          just as important as the site itself looking good.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"concept concept-accent flex flex--column flex--align-center flex--justify-end\">\n      <img class=\"concept-icon filter-white\" src=\"").concat(_book.default, "\" />\n      <div class=\"concept-text concept-text-accent flex flex--align-center flex--justify-center\">\n        <p>\n          Technology moves fast. As a developer it's important to continue to\n          learn and embrace it. Learning new tech is exciting and learning quickly\n          is one of my biggest strengths.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>"); // Nick
// Skills? JS, React, NodeJS
// I love seeing ideas come to life in design and user experience.
// I also love Hockey, Biking


exports.Skills = Skills;
},{"../../img/book2.svg":"img/book2.svg","../../img/bulb.svg":"img/bulb.svg","../../img/responsive.svg":"img/responsive.svg","../../img/logo-css3.svg":"img/logo-css3.svg","../../img/logo-express.svg":"img/logo-express.svg","../../img/logo-html5.svg":"img/logo-html5.svg","../../img/logo-javascript.svg":"img/logo-javascript.svg","../../img/logo-mongodb-white.svg":"img/logo-mongodb-white.svg","../../img/logo-nodejs.svg":"img/logo-nodejs.svg","../../img/logo-react.svg":"img/logo-react.svg"}],"img/menu.svg":[function(require,module,exports) {
module.exports = "/menu.aea80781.svg";
},{}],"img/stl.svg":[function(require,module,exports) {
module.exports = "/stl.b41d4800.svg";
},{}],"components/TopNav/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopNav = void 0;

var _logoGithub = _interopRequireDefault(require("../../img/logo-github.svg"));

var _menu = _interopRequireDefault(require("../../img/menu.svg"));

var _logoLinkedin = _interopRequireDefault(require("../../img/logo-linkedin.svg"));

var _mail = _interopRequireDefault(require("../../img/mail.svg"));

var _stl = _interopRequireDefault(require("../../img/stl.svg"));

var _logoTwitter = _interopRequireDefault(require("../../img/logo-twitter.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TopNav = () => "\n<div class=\"top-nav\">\n  <div class=\"flex flex--align-center flex--justify-between\">\n    <div class=\"nav-left flex flex--align-center\">\n      <img class=\"nav-logo filter-white\" src=\"".concat(_stl.default, "\" alt=\"\" width=\"50px\" height=\"50px\" />\n      <h4 class=\"name\"><span class=\"name-first-letter\">N</span>ick <span class=\"name-first-letter\">R</span>ay</h4>\n    </div>\n    <div class=\"nav-center\">\n      <ul class=\"scroll-list flex\">\n        <li class=\"scroll-list-item\">\n          <button class=\"skills-btn\">Skills</button>\n        </li>\n        <li class=\"scroll-list-item\">\n          <button class=\"portfolio-btn\">Portfolio</button>\n        </li>\n        <li class=\"scroll-list-item\">\n          <button class=\"blog-btn\">Blog</button>\n        </li>\n        <li class=\"scroll-list-item\">\n          <button class=\"contact-btn\">Contact</button>\n        </li>\n      </ul>\n    </div>\n    <div class=\"nav-right\">\n      <ul class=\"social-list flex\">\n        <li class=\"social-list-item\">\n          <a href=\"https://github.com/STLnick\">\n            <img class=\"nav-social filter-white\" src=\"").concat(_logoGithub.default, "\" />\n          </a>\n        </li>\n        <li class=\"social-list-item\">\n          <a href=\"https://github.com/STLnick\">\n            <img class=\"nav-social filter-white\" src=\"").concat(_logoLinkedin.default, "\" />\n          </a>\n        </li>\n        <li class=\"social-list-item\">\n          <a href=\"https://twitter.com/STLnickray\">\n            <img class=\"nav-social filter-white\" src=\"").concat(_logoTwitter.default, "\" />\n          </a>\n        </li>\n        <li class=\"social-list-item\">\n          <a href=\"mailto:nickrray@gmail.com\">\n            <img class=\"nav-social filter-white\" src=\"").concat(_mail.default, "\" />\n          </a>\n        </li>\n      </ul>\n    </div>\n    <button class=\"mobile-menu-btn\">\n      <img class=\"hamburger-icon filter-white\" src=\"").concat(_menu.default, "\" />\n    </button>\n  </div>\n  <div class=\"mobile-menu\">\n    <ul class=\"scroll-list\">\n      <li class=\"scroll-list-item\">\n        <button class=\"skills-btn mobile-btn\">Skills</button>\n      </li>\n      <li class=\"scroll-list-item\">\n        <button class=\"portfolio-btn mobile-btn\">Portfolio</button>\n      </li>\n      <li class=\"scroll-list-item\">\n        <button class=\"blog-btn mobile-btn\">Blog</button>\n      </li>\n      <li class=\"scroll-list-item\">\n        <button class=\"contact-btn mobile-btn\">Contact</button>\n      </li>\n    </ul>\n  </div>\n</div>\n");

exports.TopNav = TopNav;
},{"../../img/logo-github.svg":"img/logo-github.svg","../../img/menu.svg":"img/menu.svg","../../img/logo-linkedin.svg":"img/logo-linkedin.svg","../../img/mail.svg":"img/mail.svg","../../img/stl.svg":"img/stl.svg","../../img/logo-twitter.svg":"img/logo-twitter.svg"}],"components/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Blog", {
  enumerable: true,
  get: function () {
    return _Blog.Blog;
  }
});
Object.defineProperty(exports, "Contact", {
  enumerable: true,
  get: function () {
    return _Contact.Contact;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function () {
    return _Footer.Footer;
  }
});
Object.defineProperty(exports, "Hero", {
  enumerable: true,
  get: function () {
    return _Hero.Hero;
  }
});
Object.defineProperty(exports, "Portfolio", {
  enumerable: true,
  get: function () {
    return _Portfolio.Portfolio;
  }
});
Object.defineProperty(exports, "Skills", {
  enumerable: true,
  get: function () {
    return _Skills.Skills;
  }
});
Object.defineProperty(exports, "TopNav", {
  enumerable: true,
  get: function () {
    return _TopNav.TopNav;
  }
});

var _Blog = require("./Blog");

var _Contact = require("./Contact");

var _Footer = require("./Footer");

var _Hero = require("./Hero");

var _Portfolio = require("./Portfolio");

var _Skills = require("./Skills");

var _TopNav = require("./TopNav");
},{"./Blog":"components/Blog/index.js","./Contact":"components/Contact/index.js","./Footer":"components/Footer/index.js","./Hero":"components/Hero/index.js","./Portfolio":"components/Portfolio/index.js","./Skills":"components/Skills/index.js","./TopNav":"components/TopNav/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _components = require("./components");

document.querySelector('#root').innerHTML = "\n".concat((0, _components.TopNav)(), "\n").concat((0, _components.Hero)(), "\n").concat((0, _components.Skills)(), "\n").concat((0, _components.Portfolio)(), "\n").concat((0, _components.Blog)(), "\n").concat((0, _components.Contact)(), "\n").concat((0, _components.Footer)(), "\n");
/* * Scroll to events for buttons * */

const skillsBtns = Array.from(document.querySelectorAll('.skills-btn'));
skillsBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.skills').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
const blogBtns = document.querySelectorAll('.blog-btn');
blogBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.blog').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
const contactBtns = document.querySelectorAll('.contact-btn');
contactBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.contact').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
const portfolioBtns = document.querySelectorAll('.portfolio-btn');
portfolioBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.portfolio').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
/* * Change nav svg color on hover * */

const navSocialLinks = Array.from(document.querySelectorAll('.nav-social'));
navSocialLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.toggle('filter-white');
    link.classList.toggle('filter-dark-shade');
  });
  link.addEventListener('mouseleave', () => {
    link.classList.toggle('filter-white');
    link.classList.toggle('filter-dark-shade');
  });
});
/* * Resume, modal and overlay features * */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const resumeBtn = document.querySelector('.modal-btn');
const span = document.querySelector('.close'); // Show resume on button click

resumeBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  overlay.style.display = 'block';
}); // Hide resume on icon click

span.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
}); // Hide resume on click outside of modal

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }
});
/* * Show/Hide Mobile Menu on button click * */

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
mobileMenuBtn.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.toggle('is-active'); // TODO: Create an 'active' class to toggle
});
},{"./components":"components/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61819" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/STLnick.github.io.e31bb0bc.js.map