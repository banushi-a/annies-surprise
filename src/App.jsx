import './App.css'
import React, { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
import music from './assets/music.mp3';

function App() {

  const audio = new Audio(music);

  const { width, height } = useWindowSize()
  const [displayStyle, setDisplayStyle] = useState("hidden");
  const [buttonDisplay, setButtonDisplay] = useState(true);

  const handleClick = () => {
    audio.loop = true;
    audio.play();
    setDisplayStyle("block");
    setButtonDisplay(false);
  }

  return (
    <div className="App h-screen flex justify-center items-center overflow-hidden">
      {buttonDisplay &&
        <button
          className={"font-mono border-4 border-green-500 rounded-xl p-3 hover:bg-green-100 active:bg-green-200"}
          type="button"
          onClick={handleClick}
        >
          <p>Click For A Surprise</p>
        </button>
      }
      {displayStyle !== "hidden" &&
      <>
        <Confetti
          width={width}
          height={height}
        />
        <h1 className="text-green-700 text-xl text-start font-mono">
          A- Amazing skills on the court <br />
          N- Never giving up, always pushing forward <br />
          N- Not afraid to take risks and make bold moves <br />
          I- Incredible determination and focus <br />
          E- Exemplary teamwork and leadership <br />
          <br />  <br />
          Annie, you're a champion in every way <br />
          Winning March Madness was just a display <br />
          Of your hard work, dedication, and heart<br />
          You've proven that you're a star from the start<br />
          Congratulations on your well-deserved victory<br />
          May your future be filled with even more glory!<br />
        </h1>
      </>
      }
    </div>
  )
}

export default App
