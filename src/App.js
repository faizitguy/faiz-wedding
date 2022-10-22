import './App.css';
import CountDown from './components/countdown/Countdown';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div>
      <ParticlesBackground />
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <div>
          <CountDown />
        </div>
      </div>
    </div>
  );
}

export default App;
