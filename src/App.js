import React, { useEffect } from 'react';
import './App.css';
import CountDown from './components/countdown/Countdown';
import ParticlesBackground from './components/ParticlesBackground';
import Timeline from './components/timeline';
import Invitation from './components/invitation/Invitation';
import ReactGa from 'react-ga';

function App() {
  useEffect(() => {
    ReactGa.initialize('G-HPGQ206E6C');
    // To Report page view
    ReactGa.pageview('/');
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
