import React from "react";
import "./styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <ul className="footer__list">
        <p className="footer__title">LOGIN</p>
          <li>Help</li>
          <li>Cities</li>
          <li>Airports</li>
          <li>Fare Estimate</li>
        </ul>
        <ul className="footer__list">
        <p className="footer__title">PARTNER</p>
          <li>Partnerships</li>
          <li>Enterprise</li>
          <li>Ambassadors</li>
          <li>Developers</li>
        </ul>
        <ul className="footer__list">
        <p className="footer__title">LEARN</p>
          <li>Safety</li>
          <li>Blog</li>
          <li>Press</li>
          <li>Careers</li>
        </ul>
      
        <div className="footer__icons-store">
          <img src="src/assets/apple-store.svg" alt="apple-store-play" />
          <img src="src/assets/google-play.png" alt="icon-google-play" />
          <img src="src/assets/microsoft.png" alt="icon-microsoft" />
        </div>
      
      </div>


      <figure className="footer__icons-social-media">
        <img src="src/assets/icons/facebook.svg" alt="icon-facebook" />
        <img src="src/assets/icons/instagram.svg" alt="icon-instagram" />
        <img src="src/assets/icons/twitter.svg" alt="icon-twitter" />
      </figure>
      <hr />
      <p className="footer__register-text">2017 Lyft, Inc. TermsPrivacy</p>
    </footer>
  );
}

export { Footer };
