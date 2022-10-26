import React, { useEffect } from 'react';
import './App.css';
import CountDown from './components/countdown/Countdown';
import ParticlesBackground from './components/ParticlesBackground';
import Timeline from './components/timeline';
import Invitation from './components/invitation/Invitation';
import ReactGA from 'react-ga';


function App() {
  useEffect(() => {
    ReactGA.initialize('UA-247025347-1');
    // To Report page view
    ReactGA.pageview('/');
  }, []);
  return (
    <div>
      <ParticlesBackground />
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <div>
          <Invitation />
          <CountDown />
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default App;
