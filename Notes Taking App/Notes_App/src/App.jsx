import { useCallback, useState, useEffect } from 'react'
import Note from './Note'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [curDateTime, setCurDateTime] = useState(new Date());
  const [Notes, setNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('userNotes')) || {};
    } catch {
      return {};
    }
  });

  const [enteredNote, setEnteredNote] = useState('');
  const [enteredNoteTitle, setEnteredNoteTitle] = useState('');
  const [isNoteAvailable, setIsNoteAvailable] = useState(false);


  const handleReadNote = useCallback(() => {
    let data = localStorage.getItem('userNotes');
    if (data) {
      setIsNoteAvailable(true);
      const parsedData = JSON.parse(data);
      setNotes(parsedData);
    } else {
      setIsNoteAvailable(false);
      setNotes({});
    }
  }, []); // No need to depend on Notes or isNoteAvailable

  useEffect(() => {
    handleReadNote();
  }, [handleReadNote]);


  const handleAddNote = useCallback(() => {
    const data = localStorage.getItem('userNotes');
    let userNotes = data ? JSON.parse(data) : {};

    const date = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' });
    const [d, m, y, h, min, s] = date.match(/\d+/g);
    const key = `${d}-${m}-${y}-${h}-${min}-${s}`;

    userNotes[key] = {
      title: enteredNoteTitle,
      content: enteredNote,
      date: new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' }),
    };

    localStorage.setItem('userNotes', JSON.stringify(userNotes));
    setNotes(userNotes);
    setEnteredNote('');
    setEnteredNoteTitle('');
    setIsNoteAvailable(true);
    handleReadNote();
  }, [handleReadNote, enteredNoteTitle, enteredNote]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);


  const handleDeleteNote = useCallback((key) => {
    const data = localStorage.getItem('userNotes');
    if (data) {
      let userNotes = JSON.parse(data);
      if (userNotes[key]) {
        delete userNotes[key];
        localStorage.setItem('userNotes', JSON.stringify(userNotes));
        setNotes(userNotes);
      } else {
      }

    } else {
      setIsNoteAvailable(false);
    }
  }, [Notes, isNoteAvailable]);

  return (
    <>
      <div className='w-full h-screen flex md:flex-row flex-col items-start justify-start bg-black/80 py-5'>

        {/* Creating Notes */}
        <div className='md:w-[20%] w-full h-full flex flex-col items-start justify-start border-r-[1px] border-white/30 px-4'>


          <label htmlFor="datetime" className='text-sm text-white mb-2 mt-4 bg-gray-600 w-full p-2 rounded-lg text-left'>
            {curDateTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
          </label>
          <label htmlFor="input" className='text-sm pb-1 text-gray-200'>Enter Note Title</label>
          <input
            value={enteredNoteTitle}
            onChange={(e) => {
              setEnteredNoteTitle(e.target.value);
            }}
            type="text"
            placeholder="Note Title"
            className='w-full p-2 rounded-lg mb-2 outline-none text-white bg-gray-600 focus:bg-gray-600/70 transition-all duration-600'
          />
          <label htmlFor="txtarea" className='text-sm pb-1 text-gray-200'>Enter Note</label>

          <textarea
            name="note"
            id="note"
            className='bg-gray-600 focus:bg-gray-600/70 w-full h-[200px] p-2 rounded-lg mb-4 outline-none text-white transition-all duration-600'
            placeholder="Write your note here..."
            value={enteredNote}
            onChange={(e) => {
              setEnteredNote(e.target.value);
            }}
          />

          <button className='text-white bg-gray-600 hover:bg-gray-600/70 px-3 py-2 rounded-lg text-gray-900/80 transition-all duration-600 outline-none' onClick={handleAddNote} >Add Note
          </button>
        </div>



        {/* A Card of Note */}

        <div className='md:w-[80%] w-full h-full flex flex-row items-start justify-start px-4 flex-wrap gap-1 overflow-auto overflow-x-hidden'>

          <div className="columns-1 sm:columns-2 md:columns-4 gap-4 md:p-4 mt-2 md:mt-0 w-full">
            {
              
              Object.keys(Notes).length > 0 ?

                (
                  Object.keys(Notes).map((key, i) => (
                    <div key={i} className="w-full break-inside-avoid">
                      <Note
                        note={[Notes[key], key]}
                        deleteNote={(key) => {
                          console.log(`Key to delete: ${key}`);
                          handleDeleteNote(key);
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <div className="w-full text-center text-gray-400">
                    <p>No notes available. Please add a note.</p>
                  </div>
                )
            }

          </div>



        </div>

      </div>
    </>
  )
}

export default App
