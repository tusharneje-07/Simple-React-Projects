import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const morseRef = useRef(null);
  const audioRef = useRef(null);
  const [isAudio, setIsAudio] = useState(true);
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

        <h1 className='font-semibold text-xl mb-2'>Morse Code Generator</h1>
        <audio src="/short.mp3" preload="auto" ref={audioRef}></audio>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center mb-4'>
            <div className='flex items-center justify-between px-2 rounded-t-lg bg-gray-200 w-full py-2 text-xs text-gray-700/80'>
              &nbsp;Enter your text to convert to Morse Code

              <div className='flex items-center gap-1'>
                {
                  isAudio ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='fill-gray-700/80 w-4 h-4'><path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>
                  :
                  
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='fill-gray-700/80 w-4 h-4'><path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z"/></svg>

                }
                    



                <input type='checkbox' checked={isAudio} onClick={()=>{setIsAudio(!isAudio)}} className='bg-gray-600 hover:bg-gray-600/70 text-white px-3 py-1 rounded-[6px] text-xs transition-all duration-300 ease-in-out'/>
              </div>
            </div>
            <textarea name="nor_text" id="nor_text"
              className='w-[400px] h-full p-4 text-black rounded-b-lg outline-none text-sm'
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
              className='w-full h-full p-4 text-black rounded-b-lg outline-none text-sm'
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
