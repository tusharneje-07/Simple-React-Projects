import { useState, useCallback, useRef } from 'react';
import React from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

function App() {
  const [userSelection, setUserSelection] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  const [result, setResult] = useState('Select an option to play');
  const compRef = useRef(null);
  const confettiRef = useRef(null);
  const { width, height } = useWindowSize();

  const evaluateResult = useCallback((user, computer) => {
    let outcome = '';
    if (user === computer) {
      outcome = "It's a tie!";
    } else if (
      (user === 0 && computer === 2) || // Rock beats Scissors
      (user === 1 && computer === 0) || // Paper beats Rock
      (user === 2 && computer === 1)    // Scissors beats Paper
    ) {
      outcome = 'You Win!';
    } else {
      outcome = 'You Lose!';
    }

    setResult(outcome);

    // Confetti trigger
    if (outcome === 'You Win!' && confettiRef.current) {
      confettiRef.current.classList.remove('opacity-0');
      confettiRef.current.classList.add('opacity-100');
      setTimeout(() => {
        confettiRef.current.classList.add('opacity-0');
        confettiRef.current.classList.remove('opacity-100');
      }, 3000);
    }
  }, []);

  const computerPlay = useCallback((userChoice) => {
    if (compRef.current) {
      compRef.current.classList.add('animate-ping');
    }

    setUserSelection(userChoice);

    setTimeout(() => {
      const randomChoice = Math.floor(Math.random() * 3);
      setComputerSelection(randomChoice);

      if (compRef.current) {
        compRef.current.classList.remove('animate-ping');
      }

      evaluateResult(userChoice, randomChoice);
    }, 1000);
  }, [evaluateResult]);

  return (
    <>
      <div
        ref={confettiRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-0 transition-opacity duration-500 ease-in-out"
      >
        <Confetti width={width} height={height} />
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-center bg-black/80">
        <h1 className="text-white text-3xl font-bold mb-10">
          Rock - Paper - Scissors Game
        </h1>

        <div className="flex items-center justify-center gap-4 bg-gray-500 p-4 rounded-lg">
          {[0, 1, 2].map((choice) => (
            <div
              key={choice}
              onClick={() => computerPlay(choice)}
              className="flex flex-col items-center w-24 h-24 bg-gray-100 rounded-lg p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <img src={`/${choice}.png`} alt={`choice-${choice}`} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 bg-gray-500 p-4 rounded-lg mt-5">
          <div
            ref={compRef}
            className="flex flex-col items-center w-24 h-24 bg-gray-100 rounded-lg p-3 transition-all duration-300 ease-in-out"
          >
            {computerSelection !== null && (
              <img
                src={`/${computerSelection}.png`}
                alt={`computer-${computerSelection}`}
              />
            )}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 bg-gray-500 p-4 rounded-lg mt-4 text-white text-2xl font-bold">
          {result}
        </div>
      </div>
    </>
  );
}

export default App;
