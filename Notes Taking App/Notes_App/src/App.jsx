import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen flex items-start justify-start bg-black/70'>

        {/* Creating Notes */}
        <div className='w-[20%] h-full flex flex-col items-start justify-start border-r-[1px] p-2'>
            <label htmlFor="datetime" className='text-sm text-white mt-5'>12/12/12</label>
            <input
              type="text"
              placeholder="Note Title"
              className='w-full p-2 border border-gray-300 rounded mb-4 outline-none text-black'
            />
            <textarea name="note" id="note" className='w-full h-[200px] p-2 border border-gray-300 rounded mb-4 outline-none text-black' placeholder='Write your note here...'>

            </textarea>
            <button className='bg-blue-500 text-white bg-gray-300 hover:bg-gray-300/70 p-2 rounded text-gray-900/70 transition-all duration-600'>Add Note
            </button>
        </div>

      </div>
    </>
  )
}

export default App
