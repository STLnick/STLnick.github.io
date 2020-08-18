import postImg1 from '../../img/useEffect-async.png'
import postImg2 from '../../img/react-hooks.jpg'
import postImg3 from '../../img/lifecycle.png'

export const Blog = () => `<section class="section blog">
  <h3 class="heading">Blog</h3>
  <div class="posts flex flex--align-center flex--justify-evenly flex--wrap">
    <div class="post flex flex--column flex--align-center">
      <h4 class="post-title">
        <a class="post-link" href="https://dev.to/stlnick/useeffect-and-async-4da8">
          useEffect() and async
        </a>
      </h4>
      <img class="post-img" src="${postImg1}" />
      <div class="post-content flex flex--column flex--align-center flex--justify-between">
        <blockquote class="post-text">
          If you've learned the traditional class-based React Components and you're now trying to move into Hooks there's a few things along the way that'll throw you for a loop.
        </blockquote>
        <div class="post-footer flex flex--align-center flex--justify-around">
          <p class="post-date">10 August 2020</p>
          <a class="post-footer-link" href="https://dev.to/stlnick/useeffect-and-async-4da8">
            Full Article
          </a>
        </div>
      </div>
    </div>

    <div class="post flex flex--column flex--align-center">
      <h4 class="post-title">
        <a class="post-link" href="https://dev.to/stlnick/starting-with-react-hooks-2l0b">
          Starting With React Hooks
        </a>
      </h4>
      <img class="post-img" src="${postImg2}" />
      <div class="post-content flex flex--column flex--align-center flex--justify-between">
        <blockquote class="post-text">
          If you've learned the traditional class-based React Components and you're now trying to move into Hooks there's a few things along the way that'll throw you for a loop.
        </blockquote>
        <div class="post-footer flex flex--align-center flex--justify-around">
          <p class="post-date">10 August 2020</p>
          <a class="post-footer-link" href="https://dev.to/stlnick/starting-with-react-hooks-2l0b">
            Full Article
          </a>
        </div>
      </div>
    </div>

    <div class="post flex flex--column flex--align-center">
      <div class="post-top">
        <h4 class="post-title">
          <a class="post-link" href="https://dev.to/stlnick/react-lifecycle-methods-4lh4">
            Lifecycle Methods-The Basics
          </a>
        </h4>
        <img class="post-img" src="${postImg3}" />
      </div>
      <div class="post-content flex flex--column flex--align-center flex--justify-between">
        <blockquote class="post-text">
          If you've learned the traditional class-based React Components and you're now trying to move into Hooks there's a few things along the way that'll throw you for a loop.
        </blockquote>
        <div class="post-footer flex flex--align-center flex--justify-around">
          <p class="post-date">10 August 2020</p>
          <a class="post-footer-link" href="https://dev.to/stlnick/react-lifecycle-methods-4lh4">
            Full Article
          </a>
        </div>
      </div>
    </div>
  </div>
  <p class="section-footer-text">
    All posts are made on <a href="https://dev.to/stlnick">Dev.to</a>, click the link
    to check out my profile.
  </p>
</section>`
