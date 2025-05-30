import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const morseRef = useRef(null);
  const audioRef = useRef(null);
  const [isAudio, setIsAudio] = useState(false);
  const [morseCode, setMorseCode] = useState('');
  const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', ' ': '/'
  };
  const convertToMorse = (text) => {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
  }

  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center bg-black/80 gap-4 text-white font-console'>

        <h1 className='font-semibold text-xl mb-2'>Simple Morse Code Generator</h1>
        <audio src="/short.mp3" preload="auto" ref={audioRef}></audio>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center mb-4'>
            <div className='flex items-center justify-between px-2 rounded-t-lg bg-gray-200 w-full py-2 text-xs text-gray-700/80'>
              &nbsp;Enter your text to convert to Morse Code

              <div className='flex items-center gap-1'>
                <span className='text-xs text-gray-500'>audio</span>
                <input type='checkbox' checked={isAudio} onClick={()=>{setIsAudio(!isAudio)}} className='bg-gray-600 hover:bg-gray-600/70 text-white px-3 py-1 rounded-[6px] text-xs transition-all duration-300 ease-in-out'/>
              </div>
            </div>
            <textarea name="nor_text" id="nor_text"
              className='w-[400px] h-full p-4 text-black text-lg rounded-b-lg outline-none text-sm'
              placeholder='Enter text to convert to Morse Code'
              onChange={(e) => {
                const text = e.target.value;
                if (audioRef.current && isAudio) {
                  audioRef.current.play();
                }
                setMorseCode(convertToMorse(text));

              }
              }
            >
            </textarea>
          </div>

          <div className='w-[400px] h-full text-white text-lg rounded-lg bg-gray-800 relative'>
            <div className='flex items-center justify-between px-2 rounded-t-lg bg-gray-200 w-full py-2 text-xs text-gray-700/80'>

              <span>
                &nbsp; Morse Code Output
              </span>

              <button className='bg-gray-600 hover:bg-gray-600/70 text-white px-3 py-1 rounded-[6px] text-xs transition-all duration-300 ease-in-out'
                onClick={(e) => {
                  if (morseRef.current) {
                    morseRef.current.select();
                    window.navigator.clipboard.writeText(morseCode);
                    morseRef.current.blur();
                    e.target.innerHTML = 'Copied!';
                    e.target.disabled = true;
                    setTimeout(() => {
                      e.target.innerHTML = 'Copy';
                      e.target.disabled = false;
                    }, 1000);

                  }
                }}
              >
                Copy
              </button>

            </div>

            <textarea name="nor_text" id="nor_text"
              className='w-full h-full p-4 text-black text-lg rounded-b-lg outline-none text-sm'
              placeholder='Output will be displayed here'
              value={morseCode}
              ref={morseRef}
              readOnly
              onChange={(e) => {
                const text = e.target.value;
                console.log(text);
              }
              }
            >
            </textarea>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
