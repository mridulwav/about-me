import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import PixelSnow from '../components/PixelSnow.jsx';

function Intro() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const hasStarted = useRef(false);
  const musicTimer = useRef(null);
  const navigationTimer = useRef(null);

  function handleClick() {
    if (hasStarted.current) return;

    hasStarted.current = true;
    setClicked(true);

    const spinAudio = new Audio(`${import.meta.env.BASE_URL}sounds/cd-spin.mp3`);
    void spinAudio.play().catch((error) => {
      console.error('Unable to play CD spin audio:', error);
    });

    musicTimer.current = window.setTimeout(() => {
      const backgroundAudio = new Audio(`${import.meta.env.BASE_URL}sounds/bg-music.mp3`);
      void backgroundAudio.play().catch((error) => {
        console.error('Unable to play background music:', error);
      });
    }, 7000);

    navigationTimer.current = window.setTimeout(() => {
      navigate('/home', { replace: true });
    }, 15000);
  }

  useEffect(() => {
    if (clicked) return undefined;

    const hintTimer = window.setTimeout(() => {
      setShowHint(true);
    }, 9000);

    return () => window.clearTimeout(hintTimer);
  }, [clicked]);

  useEffect(
    () => () => {
      window.clearTimeout(musicTimer.current);
      window.clearTimeout(navigationTimer.current);
    },
    [],
  );

  return (
    <>
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
      <div className="intro">
        <div className="introtext">
          <h1>
            {!clicked && showHint
              ? "c'mon Dude click the cd to spin!"
              : 'Your ears know the way,'}
          </h1>
        </div>
        <div className="introtext">
          <button
            type="button"
            className={`cd-button introimg${clicked ? ' spin' : ''}`}
            onClick={handleClick}
            aria-label="Spin the CD"
          >
            <img src={`${import.meta.env.BASE_URL}cd.png`} alt="CD" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Intro;
