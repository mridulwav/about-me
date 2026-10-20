import './App.css';
import PixelSnow from './components/PixelSnow';

function Introimg() {
  return (
    <div className="introimg">
      <img src="/cd.png" alt="CD" />
    </div>
  );
}

function App() {
  return (
    <>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <PixelSnow
          color="#ffffff"
          variant="snowflake"
          density={0.5}
          speed={1}
          wind={0.25}
          flakeSize={1}
          pixelSize={3}
          glow={0.8}
          mouseInteraction
          sway={0.5}
          twinkle={0.35}
          accumulate={false}
          depth={0.6}
          brightness={1}
          fade={0}
          opacity={1}
          intro
          lightMode={false}
        />
      </div>
      <div className="intro">
        <div className="introtext">
          <h1></h1>
          <h1>Your ears know the way</h1>
        </div>
        <Introimg />
      </div>
    </>
  );
}

export default App;
