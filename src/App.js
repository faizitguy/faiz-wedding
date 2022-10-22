import './App.css';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div>
      <ParticlesBackground />
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <div style={{ color: 'white' }}>
          Hello world
        </div>
      </div>
    </div>
  );
}

export default App;
