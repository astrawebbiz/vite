import './assets/styles/main.scss'
import './assets/js/main'
import javascriptLogo from './assets/images/svg/javascript.svg'
import viteLogo from './assets/images/svg/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <ol>
      <li>
        <a href="/pages/about/">О нас</a>
      </li>
      <li>
        <a href="/pages/contacts/">Контакты</a>
      </li>
    </ol>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more than my husband
    </p>
  </div>
`
console.log(import.meta.env.VITE_API_URL)
