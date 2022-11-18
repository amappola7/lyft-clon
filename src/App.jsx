import { useState } from 'react'
import './App.css'
import { Header } from './components/Header.jsx';
import { Info } from './components/Info.jsx';
import { Videos } from './components/Videos.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Videos styleVideo='videosSection' video="https://www.youtube.com/embed/fLSmUWOYpKw" title='AMPLIFY YOUR RIDE' message={`Lift's new emblem, Amp, is the secret to smooth pickups. Lighting up dashboards nationwide, the device makes it easy for passengers and drivers to find each other. `} />

      <Videos styleVideo='videosSectionReverse' video="https://www.youtube.com/embed/V7j8Aqxmbs8" title='JUNE' message={`In an animated short film by Academy Award-winner John Kahrs, a lonely widow in historic South Chicago is empowered to start sharing the ride - and sharing her life, too.`} />

      <Videos styleVideo='videosSection' video="https://www.youtube.com/embed/Z77bvaf7mCQ" title='A GOOD THING GOING' message={`Launching on TV and online, "Ride on the Bright Side" shows how Lyft continues to prioritize happy drivers, short ETAs, and safety.`} />

    
      <Footer />
    </div>
  )
}

export default App
