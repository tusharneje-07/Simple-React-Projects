import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [minutes, setMinutes] = useState(0);
  const [secs, setSecs] = useState(0);
  const [offset, setOffset] = useState(502);
  const [seconds, setSeconds] = useState(0);
  const [text, setText] = useState('00:00s');
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isRunning || isPaused) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
      if (seconds <= -1) {
        clearInterval(interval);
        setSeconds(0);
        setIsRunning(false);
        setOffset(502);
        setText(`${minutes}:${secs}s`);
        setIsPaused(false);
        return;
      }
      const newOffset = (502 * seconds - 1) / (minutes * 60 + secs);
      setOffset(newOffset);
      const rem_minutes = Math.floor(seconds / 60);
      const rem_secs = seconds % 60;
      setText(`${rem_minutes}:${rem_secs < 10 ? '0' : ''}${rem_secs}s`)
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, isRunning, isPaused, minutes, secs]);

  return (
    <>
      <div className='bg-black/85 h-screen w-screen flex flex-col items-center justify-center'>

        <div>
          <div class="flex flex-col items-center justify-center h-screen gap-8">
            <svg height="180" width="180">
              <circle
                cx="90"
                cy="90"
                r="80"
                stroke="#4B5563"
                stroke-width="10"
                fill="transparent"
              />
              <circle
                cx="90"
                cy="90"
                r="80"
                stroke="#22D3EE"
                stroke-width="10"
                fill="transparent"
                stroke-dasharray="502"
                stroke-dashoffset={offset}
                stroke-linecap="round"
                class="transition-all duration-100 ease-linear"
              />
              {
                isPaused ?
                  <text x="90" y="90" textAnchor="middle" fill="white" fontSize="22">
                    {text}
                  </text>
                  :
                  <text x="90" y="100" textAnchor="middle" fill="white" fontSize="24">
                    {text}
                  </text>
              }
              {
                isPaused ?
                  <text x="90" y="110" textAnchor="middle" fill="#ccc" fontSize="12">
                    Paused
                  </text>
                  :
                  <></>
              }
            </svg>

            <div className='flex gap-2 mt-4 justify-center items-center'>
              <input value={minutes} onInput={(e) => {
                setMinutes(parseInt(e.target.value));
                setSeconds(parseInt(e.target.value * 60) + parseInt(secs));
                setText(`${e.target.value}:${secs}s`);
              }} type="text" className='w-14 h-14 outline-none text-center rounded-lg p-2 bg-gray-100/40 font-semibold text-white' />
              <label htmlFor="none" className='text-xl text-white'>:</label>
              <input value={secs} onInput={(e) => {
                setSecs(parseInt(e.target.value));
                setSeconds((parseInt(minutes) * 60) + parseInt(e.target.value));
                setText(`${minutes}:${e.target.value}s`);
              }} type="text" className='w-14 h-14 outline-none text-center rounded-lg p-2 bg-gray-100/40 font-semibold text-white' />
            </div>


            <div className='flex gap-2 mt-4 justify-center items-center'>
              <button className='h-12 w-12 bg-gray-100/40 text-black flex flex-col justify-center items-center p-1 rounded-lg mt-4 transition-colors duration-300'
                onClick={(e) => {
                  if (!isRunning) {
                    setIsRunning(true);
                    setSeconds(minutes * 60 + secs);
                    setOffset(502);
                    setText(`${minutes}:${secs}s`);
                  } else {
                    setIsRunning(false);
                    setSeconds(minutes * 60 + secs);
                    setOffset(502);
                    setText(`${minutes}:${secs}s`);
                    setIsPaused(false);
                  }
                }}>
                {isRunning ?
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 fill-white' viewBox="0 -960 960 960" ><path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 fill-white' viewBox="0 -960 960 960" ><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" /></svg>
                }

              </button>


              {
                isRunning ?
                  <button className='h-12 w-12 bg-gray-100/40 text-black flex flex-col justify-center items-center p-1 rounded-lg mt-4 transition-colors duration-300'
                    onClick={(e) => {
                      setIsPaused(!isPaused);
                      console.log('Paused', isPaused);
                    }}>
                    {isPaused ?
                      <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 fill-white' viewBox="0 -960 960 960" ><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" /></svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 fill-white' viewBox="0 -960 960 960" ><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" /></svg>
                    }

                  </button> :
                  <></>
              }


            </div>





          </div>

        </div>
      </div>
    </>
  )
}

export default App
