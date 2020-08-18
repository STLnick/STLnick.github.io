import mailIcon from '../../img/mail.svg'

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
  </div>
</section>`
