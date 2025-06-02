import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const codingQuotes = [
    "Talk is cheap. Show me the code. – Linus Torvalds",
    "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
    "Truth can only be found in one place: the code. – Robert C. Martin",
    "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
    "In order to be irreplaceable, one must always be different. – Coco Chanel",
    "Java is to JavaScript what car is to Carpet. – Chris Heilmann",
    "Code never lies, comments sometimes do. – Ron Jeffries",
    "Deleted code is debugged code. – Jeff Sickel",
    "Before software can be reusable it first has to be usable. – Ralph Johnson",
    "Make it work, make it right, make it fast. – Kent Beck",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "Programs are meant to be read by humans and only incidentally for computers to execute. – Donald Knuth",
    "The most disastrous thing that you can ever learn is your first programming language. – Alan Kay",
    "Walking on water and developing software from a specification are easy if both are frozen. – Edward V. Berard",
    "Good code is its own best documentation. – Steve McConnell",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Fix the cause, not the symptom. – Steve Maguire",
    "Optimization hinders evolution. – Alan Perlis",
    "Programming isn't about what you know; it's about what you can figure out. – Chris Pine",
    "Testing leads to failure, and failure leads to understanding. – Burt Rutan",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in. – Edsger Dijkstra",
    "Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases. – Norman Augustine",
    "Simplicity is prerequisite for reliability. – Edsger Dijkstra",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit. – Anonymous",
    "Weeks of programming can save you hours of planning. – Anonymous",
    "The best code is no code at all. – Jeff Atwood",
    "Programming is the art of algorithm design and the craft of debugging errant code. – Ellen Ullman",
    "It’s not a bug – it’s an undocumented feature. – Anonymous",
    "A good programmer is someone who always looks both ways before crossing a one-way street. – Doug Linder",
    "Real programmers count from 0. – Anonymous",
    "When in doubt, use brute force. – Ken Thompson",
    "Programming is thinking, not typing. – Casey Patton",
    "Don't comment bad code – rewrite it. – Brian Kernighan",
    "Software undergoes beta testing shortly before it’s released. Beta is Latin for 'still doesn’t work'. – Anonymous",
    "To iterate is human, to recurse divine. – L. Peter Deutsch",
    "You can’t have great software without a great team. – Joel Spolsky",
    "Without requirements or design, programming is the art of adding bugs to an empty text file. – Louis Srygley",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. – Dan Salomon",
    "The function of good software is to make the complex appear to be simple. – Grady Booch",
    "Software is a gas; it expands to fill its container. – Nathan Myhrvold",
    "The best error message is the one that never shows up. – Thomas Fuchs",
    "Don't worry if it doesn't work right. If everything did, you'd be out of a job. – Mosher's Law of Software Engineering",
    "Learning to program is like learning a new language. – Anonymous",
    "A language that doesn't affect the way you think about programming is not worth knowing. – Alan Perlis",
    "Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else. – Eagleson's Law",
    "Programming can be fun, so can cryptography; however, they should not be combined. – Kreitzberg and Shneiderman",
    "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning. – Rick Cook",
    "In theory, theory and practice are the same. In practice, they’re not. – Yogi Berra",
    "Software developers like to solve problems. If there are no problems handily available, they will create their own problems. – Anonymous",
    "Version control: because 'I don’t know what happened' isn’t a valid excuse. – Anonymous",
    "Why do Java developers wear glasses? Because they don’t C#. – Anonymous",
    "Programming: where you spend 30% of your time writing code and 70% fixing it. – Anonymous",
    "One man’s crappy software is another man’s full-time job. – Jessica Gaston",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. – John Woods",
    "A user interface is like a joke. If you have to explain it, it’s not that good. – Martin LeBlanc",
    "Don’t repeat yourself. – DRY Principle",
    "Good software, like wine, takes time. – Joel Spolsky",
    "There's no place like 127.0.0.1 – Anonymous",
    "I don’t care if it works on your machine! We are not shipping your machine! – Vidiu Platon",
    "The computer was born to solve problems that did not exist before. – Bill Gates",
    "Computers are fast; programmers keep it slow. – Anonymous",
    "Software testing is a sport like hunting, it’s bughunting. – Anonymous",
    "Any sufficiently advanced bug is indistinguishable from a feature. – Rich Kulawiec",
    "Fail early, fail often. – Anonymous",
    "Programming is breaking things on purpose to understand them better. – Anonymous",
    "Coding is today's language of creativity. – Maria Klawe",
    "Software is a great combination between artistry and engineering. – Bill Gates",
    "One of my most productive days was throwing away 1000 lines of code. – Ken Thompson",
    "The best performance improvement is the transition from the nonworking state to the working state. – John Ousterhout",
    "Sometimes the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function. – John Carmack",
    "The most important property of a program is whether it accomplishes the intention of its user. – C.A.R. Hoare",
    "Programming allows you to think about thinking, and while debugging, you learn learning. – Anonymous",
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. – Patrick McKenzie",
    "A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want. – Niklaus Wirth",
    "A good programmer is someone who does not just write code, but also thinks about architecture and design. – Anonymous",
    "You can’t write perfect software. – Anonymous",
    "There are two ways to write error-free programs; only the third one works. – Alan J. Perlis",
    "Software isn’t released, it escapes. – Anonymous",
    "The best way to predict the future is to invent it. – Alan Kay",
    "Programming is not about typing, it’s about thinking. – Rich Hickey",
    "You should name a variable using the same care with which you name a first-born child. – Robert C. Martin",
    "All code is guilty until proven innocent. – Anonymous",
    "To understand recursion, one must first understand recursion. – Anonymous",
    "The cleaner the code, the fewer the bugs. – Anonymous",
    "The fewer the lines, the easier the maintenance. – Anonymous",
    "Never stop learning; the tech world never stands still. – Anonymous",
    "Computers do what you tell them to do, not what you want them to do. – Anonymous",
    "Always write code as if the person who ends up maintaining it is a serial killer who knows where you live. – Anonymous",
    "You miss 100% of the bugs you don’t test for. – Anonymous",
    "Software should be designed to last, not just to run. – Anonymous",
    "Hackers are just programmers with good marketing. – Anonymous",
    "Frameworks come and go, but good code lasts forever. – Anonymous",
    "Programming is like writing a book… except when you miss a single comma on page 126, the entire book self-destructs. – Anonymous",
    "Every time you write a comment, God kills a kitten. – Anonymous",
    "If at first you don’t succeed, call it version 1.0. – Anonymous",
    "Computers are good at following instructions, but not at reading your mind. – Donald Knuth"
  ];
  const [quote, setQuote] = useState(codingQuotes[0]);

  const generateRandomQuote = useCallback(() => {
    let num = Math.floor(Math.random() * codingQuotes.length);
    setQuote(codingQuotes[num]);
  }, [codingQuotes, quote]);

  // generateRandomQuote();
  return (
    <>
      <div className="bg-black/80 w-full h-screen flex flex-col items-center justify-center text-white">
        <div className='relative bg-white/10 py-5 px-4 rounded-lg shadow-lg flex flex-col items-center mx-2'>
          <p className='text-2xl pb-8'>
            "{quote || "Click the button to get a random quote!"}"
          </p>
          <button className='absolute bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition-all bottom-2 right-2'
            onClick={(e) => {
              navigator.clipboard.writeText(quote);
              e.target.innerText = "Copied!";
              e.target.disabled = true;
              setInterval(() => {
                e.target.innerText = "Copy";
                e.target.disabled = false;
              }, 1500);
            }
            }
          >
            Copy
          </button>
        </div>
        <div className='mt-6'>
          <button
            className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors'
            onClick={generateRandomQuote}
          >
            Get New Quote
          </button>
        </div>
      </div>
    </>
  )
}

export default App
