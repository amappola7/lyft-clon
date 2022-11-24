  import React from "react";
  import './styles/Header.scss'

function Header() {
  return (
    <header>
      <nav>
        <img src="src/assets/logo-white.png" alt="icon" />
        <ul>
          <li>Drive</li>
          <li>Explore</li>
          <li>Help</li>
          <li className="last-item">Log in</li>
        </ul>
      </nav>
      <article>
        <h1>TURN MILES <br /> INTO MONEY</h1>
        <h2>SIGN UP TO DRIVE WITH LYFT</h2>
        <form action="">
          <input type="number" />
          <button type="submit">Become a driver</button>
        </form>
        <a href="#">Sign up to ride</a>
        <p>Already applied? Check the status  of your application here.</p>
        <p>Earn money for inviting friends to drive. Learn more.</p>
      </article>
    </header>
  )
}

export { Header };