import { useState, useCallback, useRef } from 'react'

function App() {
  const [userSelection, setUserSelection] = useState(0);
  const [computerSelection, setComputerSelection] = useState(100);
  const [result, setResult] = useState('Select an option to play');
  const compRef = useRef(null);

  const computerPlay = useCallback(() => {
    if (compRef.current) {
      compRef.current.classList.add('animate-pulse');
    }
    setTimeout(() => {
      const randomChoice = Math.floor(Math.random() * 3);
      setComputerSelection(randomChoice)
      compRef.current.classList.remove('animate-pulse');
      evaluateResult(userSelection, randomChoice);
    }, 2000);

  }, [computerSelection]);

  const evaluateResult = useCallback((user, computer) => {
    if (user === computer) {
      setResult('It\'s a tie!')
    } else if (
      (user === 0 && computer === 2) || // Rock beats Scissors
      (user === 1 && computer === 0) || // Paper beats Rock
      (user === 2 && computer === 1)    // Scissors beats Paper
    ) {
      setResult('You Win!')
    } else {
      setResult('You Lose!')
    }
  }
    , [result]);
  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center bg-black/80'>
        <p className='px-4 py-2 bg-gray-500 rounded-t-lg text-white font-bold'>Your Turn</p>
        <div className='flex items-center justify-center gap-4 bg-gray-500 p-4 rounded-lg cursor-pointer'>
          <div
            onClick={() => {
              setUserSelection(1);
              computerPlay();
            }}
            className='flex flex-col items-center w-24 h-24 bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out'>
            <img src="/0.png" alt="" />
          </div>

          <div
            onClick={() => {
              setUserSelection(1);
              computerPlay();
            }}
            className='flex flex-col items-center w-24 h-24 bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out'>
            <img src="/1.png" alt="" />
          </div>

          <div
            onClick={() => {
              setUserSelection(1);
              computerPlay();
            }}
            className='flex flex-col items-center w-24 h-24 bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out'>
            <img src="/2.png" alt="" />
          </div>
        </div>

        <p className='px-4 py-2 bg-gray-500 rounded-t-lg text-white font-bold mt-4 w-24 flex justify-center text-center'>Computer Turn</p>
        <div className='flex items-center justify-center gap-4 bg-gray-500 p-4 rounded-lg'>
          <div
            ref={compRef}
            className='flex flex-col items-center w-24 h-24 bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out'>
            <img src={`/${computerSelection}.png`} alt="" />
          </div>
        </div>

        <div className='flex items-center justify-center gap-4 bg-gray-500 p-4 rounded-lg mt-4 text-white text-2xl font-bold'>
          {result}
        </div>

      </div>
    </>
  )
}

export default App
