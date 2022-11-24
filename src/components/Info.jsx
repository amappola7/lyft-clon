import React from "react";
import './styles/Info.scss'

function Info() {
  return (
    <section className="info">
      <div className='info__content'>
        <div className="info__text-content">
          <h1>A RIDE IN MINUTES</h1>
          <p>Request a ride and you'll be on your way in minutes.<br />Request. Ride. Repeat.</p>
        </div>
        <div className="info__text-content">
          <h1>SERIOUS ABOUT SAFETY</h1>
          <p>From knowing the color of your driver's car to our 24/7<br />Trust & Safety Team, we got you.</p>
        </div>
        <div className="info__text-content">
          <h1>HAPPY DRIVERS.<br />HAPPY RIDERS.</h1>
          <p>Ride with us and you'll see why 9 out of 10 rides end with five<br />stars.</p>
        </div>
      </div>
      <img src="src/assets/phone.png" alt="Cellphone" />
    </section>
  )
}

export { Info };