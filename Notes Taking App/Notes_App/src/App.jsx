import { useCallback, useState } from 'react'
import Note from './Note'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [curDateTime, setCurDateTime] = useState(new Date());
  const [Notes, setNotes] = useState(JSON.parse(localStorage.getItem('userNotes')) || {});
  const [enteredNote, setEnteredNote] = useState('Enter Note Title....');
  const [enteredNoteTitle, setEnteredNoteTitle] = useState('Enter Note Content....');


  const handleReadNote = useCallback(() => {
    let data = localStorage.getItem('userNotes');
    if (data) {
      const parsedData = JSON.parse(data);
      setNotes(parsedData);
      console.log(`Notes read from localStorage: ${JSON.stringify(parsedData)}`);

    } else {
      setNotes({});
    }
  }, [Notes]);


  const handleAddNote = useCallback((note) => {
    const data = localStorage.getItem('userNotes');
    let userNotes = data ? JSON.parse(data) : {};
    const date = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Kolkata' });
    const [d, m, y, h, min, s] = date.match(/\d+/g);
    const key = `${d}-${m}-${y}-${h}-${min}-${s}`;
    userNotes[key] = {};
    userNotes[key].title = enteredNoteTitle;
    userNotes[key].content = enteredNote;
    userNotes[key].date = curDateTime.toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata' });

    localStorage.setItem('userNotes', JSON.stringify(userNotes));
    setNotes(userNotes);
    setEnteredNote('');
    setEnteredNoteTitle('');
    console.log(`Note added with key: ${key}`);
    console.log(`Current notes: ${JSON.stringify(userNotes)}`);
    handleReadNote();

  }, [handleReadNote]);

  setInterval(() => {
    setCurDateTime(new Date());
  }, 1000);

  const handleDeleteNote = useCallback((key) => {
    const data = localStorage.getItem('userNotes');
    if (data) {
      let userNotes = JSON.parse(data);
      if (userNotes[key]) {
        delete userNotes[key];
        localStorage.setItem('userNotes', JSON.stringify(userNotes));
        setNotes(userNotes);
        console.log(`Note with key ${key} deleted`);
      } else {
        console.log(`No note found with key ${key}`);
      }
    } else {
      console.log('No notes found in localStorage');
    }
  }, [Notes]);

  return (
    <>
      <div className='w-full h-screen flex items-start justify-start bg-black/80 py-10'>

        {/* Creating Notes */}
        <div className='w-[20%] h-full flex flex-col items-start justify-start border-r-[1px] px-4'>


          <label htmlFor="datetime" className='text-sm text-white mb-2 mt-4 bg-gray-600 w-full p-2 rounded-lg text-left'>
            {curDateTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}
          </label>

          <input
            value={enteredNoteTitle}
            onInput={(e) => {
              setEnteredNoteTitle(e.target.value);
            }}
            type="text"
            placeholder="Note Title"
            className='w-full p-2 rounded-lg mb-4 outline-none text-white bg-gray-600 focus:bg-gray-600/70 transition-all duration-600'
          />
          <textarea name="note" id="note" className='bg-gray-600 focus:bg-gray-600/70 w-full h-[200px] p-2 rounded-lg mb-4 outline-none text-white transition-all duration-600' placeholder='Write your note here...' onInput={(e) => {
            setEnteredNote(e.target.value);
          }}>
            {enteredNote}
          </textarea>
          <button className='text-white bg-gray-600 hover:bg-gray-600/70 px-3 py-2 rounded-lg text-gray-900/80 transition-all duration-600 outline-none' onClick={handleAddNote} >Add Note
          </button>
        </div>



        {/* A Card of Note */}

        <div className='w-[80%] h-full flex flex-row items-start justify-start px-4 flex-wrap gap-1 overflow-auto overflow-x-hidden'>

          <div className="columns-1 sm:columns-2 md:columns-4 gap-4 p-4 w-full">
            {/* {notes.map((note, i) => (
              <div key={i} className="w-full break-inside-avoid">
                <Note note={note} />
              </div>
            ))} */}

            {
              Object.keys(Notes).map((key, i) => (
                <div key={i} className="w-full break-inside-avoid">
                  <Note note={[Notes[key], key]} deleteNote={(key) => {
                    console.log(`Key to delete: ${key}`);
                    handleDeleteNote(key)
                  }} />
                </div>
              ))
            }
          </div>



        </div>

      </div>
    </>
  )
}

export default App
