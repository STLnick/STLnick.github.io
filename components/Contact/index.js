import closeIcon from '../../img/close.svg'
import easelIcon from '../../img/easel.svg'
import mailIcon from '../../img/mail.svg'
import phoneIcon from '../../img/call.svg'

import devIcon from '../../img/logo-dev.svg'
import githubIcon from '../../img/logo-github.svg'
import linkedInIcon from '../../img/logo-linkedin.svg'
import twitterIcon from '../../img/logo-twitter.svg'

export const Contact = () => `<section class="section contact">
  <h3 class="heading">Contact</h3>
  <div class="contact-container flex flex--column flex--align-center flex--justify-center">
    <h4 class="contact-text">I can help.</h4>
    <h4 class="contact-text">
      I'm looking for a full-time position either remote or in the
      St. Louis, Missouri area.
    </h4>
    <h4 class="contact-text">Let's talk and see if we're a fit.</h4>
    <a class="message-btn flex flex--align-center" href="mailto:nickrray@gmail.com">
      <img class="filter-white" src="${mailIcon}" />Message Me
    </a>
    <button class="modal-btn">View Resume</button>
    <div class="overlay"></div>

    <!-- RESUME -->
    <div class="modal">
      <div class="modal-top">
        <img class="close filter-white" src="${closeIcon}" />
      </div>
      <div class="canvas-container flex flex--column">
        <header class="flex flex-column flex--align-center flex--justify-around">
          <div class="header-left">
            <h1 class="title">Nick Ray</h1>
            <p class="title-subtext">Full Stack JavaScript Web Developer</p>
          </div>
          <div class="header-right flex">
          <ul class="contact-list flex flex--column flex--justify-center">
            <li class="flex flex--align-center">
              <img class="contact-icon filter-resume-secondary" src="${phoneIcon}" alt="Phone icon">
              636-751-4849
            </li>

            <li class="flex flex--align-center">
              <img class="contact-icon filter-resume-secondary" src="${mailIcon}" alt="Mail icon">
              <a class="contact-link" href="mailto:nickrray@gmail.com">
                nickrray@gmail.com
              </a>
            </li>

            <li class="flex flex--align-center">
              <img class="contact-icon filter-resume-secondary" src="${linkedInIcon}" alt="LinkedIn logo">
              <a class="contact-link" href="https://www.linkedin.com/in/nickrray/">LinkedIn</a>
            </li>
          </ul>
          <ul class="contact-list">
            <li class="flex flex--align-center">
              <img class="contact-icon filter-resume-secondary" src="${githubIcon}" alt="GitHub logo">
              <a class="contact-link" href="https://github.com/STLnick">GitHub</a>
            </li>

            <li class="flex flex--align-center">
              <img class="contact-icon filter-resume-secondary" src="${devIcon}" alt="Dev logo">
              <a class="contact-link" href="https://dev.to/stlnick">Dev.to</a>
            </li>

            <li class="flex flex--align-center">
              <img class="contact-icon filter-resume-secondary" src="${easelIcon}" alt="Easel icon">
              <a class="contact-link" href="https://stlnick.github.io/">Portfolio Site</a>
            </li>
          </ul>
          </div>
        </header>
        <div class="resume-body flex">
          <div class="sidebar flex flex--column">
            <section class="skills">
              <h2 class="resume-heading">Skills</h2>
              <h4 class="subheading">Languages</h4>
              <p class="section-content">JavaScript - HTML - CSS - SQL - PHP</p>
              <h4 class="subheading">Frameworks / Libraries</h4>
              <p class="section-content">ReactJS - NodeJS - Bootstrap - Bulma</p>
              <h4 class="subheading">Tools</h4>
              <p class="section-content">Git - Developer Tools - MySQL</p>
            </section>
            <section class="education">
              <h2 class="resume-heading">Education</h2>
              <h4 class="subheading">Full Stack JavaScript Developer</h4>
              <p class="section-content italic">Claim Academy</p>
              <p class="section-content small-text">Enrolled</p>
              <h4 class="subheading">Bachelor of Computer Science</h4>
              <p class="section-content italic">University of Missouri - St. Louis</p>
              <p class="section-content small-text">Enrolled</p>
            </section>
            <section class="experience">
              <h2 class="resume-heading">Experience</h2>
              <!-- Expand more here than original resume -->
              <h4 class="subheading">General Manager - Sugarfire Smokehouse</h4>
              <p class="section-content small-text">5/2014 - 4/2020</p>
              <ul class="experience-list">
                <li class="experience-list-item">
                  Manage a team of 50 individuals that provide excellent customer service,
                  reaching 90% customer satisfaction and repeat customers.
                </li>
                <li class="experience-list-item">
                  Help grow annual sales from 4.5 Million in 2018 to over 5 Million in 2019
                  in the business's fourth year of operation.
                </li>
                <li class="experience-list-item">
                  Improve review
                  rankings from 4.0 to at least 4.5 on Google, Yelp, and Facebook at time
                  of departure.
                </li>
                <li class="experience-list-item">
                  Create a display of all reviews for team to see that provides
                  opportunities to praise and coach on certain reviews.
                </li>
              </ul>
            </section>
          </div>
          <div class="main-content flex flex--column">
            <section class="about">
              <h2 class="resume-heading">About Me</h2>
              <p class="about-main">
                A dedicated JavaScript Web Developer with a passion for learning
                and technology. Learning new tech comes easily and honing current
                skills is rewarding.
              </p>
              <div class="flex flex--justify-between">
                <p class="about-left">
                  Experienced in Full-Stack Web Development using NodeJS for back-end
                  and React for front-end as well as vanilla HTML, CSS, and JavaScript.
                </p>
                <p class="about-right">
                  Possess skills to create or improve responsive websites that make anyone
                  proud it represents their business while also making users feel happy
                  with their experience.
                </p>
              </div>
            </section>
            <section class="projects--resume">
              <h2 class="resume-heading">Technical Projects</h2>
              <div class="project med-text">
                <div class="project-head italic flex flex--align-center">
                  <h4 class="project-title--resume">Omnifood</h4>
                  <p class="skills-used med-text">Skills Used: HTML - CSS - JavaScript - PHP</p>
                </div>
                <p class="project-links">
                  <a href="https://github.com/STLnick/omnifood">Code</a>
                  |
                  <a href="https://stlnick.github.io/omnifood/">Demo</a>
                </p>
                <p class="project-description">
                  A single-page responsive web app focused on UI for a fictional business. Highlights the
                  features of the business in a streamlined format such as ordering plans,
                  testimonials and a contact form.
                </p>
                <ul class="project-list">
                  <li class="project-list-item">
                    Utilized CSS media queries for proper display on all common screen sizes
                  </li>
                  <li class="project-list-item">
                    Built reusable CSS components to structure the page
                  </li>
                  <li class="project-list-item">
                    Integrated PHP for a mailer function attached to contact form
                  </li>
                  <li class="project-list-item">
                    Included JavaScript functions to scroll to sections with navigation buttons
                  </li>
                </ul>
              </div>
              <div class="project med-text">
                <div class="project-head italic flex flex--align-center">
                  <h4 class="project-title--resume">Budgety</h4>
                  <p class="skills-used med-text">Skills Used: HTML - CSS - JavaScript</p>
                </div>
                <p class="project-links">
                  <a href="https://github.com/STLnick/omnifood">Code</a>
                  |
                  <a href="https://stlnick.github.io/omnifood/">Demo</a>
                </p>
                <p class="project-description">
                  A budget tool to track income and expenses.
                  Built to highlight use of JavaScript and well-structured code.
                </p>
                <ul class="project-list">
                  <li class="project-list-item">
                    Separated UI and Budget functionalities using different controllers
                  </li>
                  <li class="project-list-item">
                    Implemented DRY concept for UI Controller
                  </li>
                  <li class="project-list-item">
                    Created ‘private’ JS variables and returned ‘public’ functions to use
                  </li>
                  <li class="project-list-item">
                    Used intuitive color highlighting for better UX
                  </li>
                </ul>
              </div>
              <div class="project med-text">
                <div class="project-head italic flex flex--align-center">
                  <h4 class="project-title--resume">Bowling Database</h4>
                  <p class="skills-used med-text">Skills Used: HTML - CSS - JavaScript - PHP - SQL</p>
                </div>
                <p class="project-links">
                  <a href="https://github.com/STLnick/bowlingdb">Code</a>
                </p>
                <p class="project-description">
                  A web app that dynamically fetches data from a database for information on
                  Bowlers, Teams, Competitions and what a Bowler has Competed In. Designed to fill
                  a need of a colleague who bowls to have an easier way to view, add, edit, and delete data.
                </p>
                <ul class="project-list">
                  <li class="project-list-item">
                    Designed the database used in this application
                  </li>
                  <li class="project-list-item">
                    Employed PHP for interaction with database and dynamic display of data
                  </li>
                  <li class="project-list-item">
                    Crafted SQL statements for all functionalities
                  </li>
                  <li class="project-list-item">
                    Utilized Bootstrap CSS library for a comfortable and responsive UI
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div class="bottom-block">
          <p>Preferred Contact Methods - Phone: (636)751-4849 &mdash; Email: nickrray@gmail.com</p>
        </div>
      </div>

    </div>
  </div>
</section>`
