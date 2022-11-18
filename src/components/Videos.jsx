import React from "react";
import './styles/Videos.scss'

function Videos(props) {
  return (
    <section className={props.styleVideo}>

      <div className="text-box">
        <p className="firstTitle">WATCH</p>
        <h1 className="secondTitle">{props.title}</h1>
        <p className="message">{props.message}</p>
      </div>

      <div className="videos-box">
        <iframe
          width="560"
          height="315"
          src={props.video}
          title="Youtube Player"
          frameborder="0"
          allowFullScreen
        />
      </div>

    </section>
  )
}

export { Videos };