import heroImage from '../../img/archascii.png'

console.log(heroImage)

export const Hero = () => `<div class="hero flex flex--align-center flex--justify-center" style="background-image: url(${heroImage})">
  <div class="hero-text-container flex flex--column flex--align-center flex--justify-center">
    <h2 class="hero-text">My name is Nick Ray.</h2>
    <h2 class="hero-text">I'm a JavaScript Web Developer.</h2>
    <h2 class="hero-text">I 💙 STL.</h2>
  </div>
</div > `
