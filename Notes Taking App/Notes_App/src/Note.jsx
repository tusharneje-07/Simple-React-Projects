import React, { useRef, useEffect } from 'react';

export default function NoteCard({ note,deleteNote }) {
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, []);

    const handleInput = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <div className="break-inside-avoid mb-4 w-full bg-gray-600 hover:bg-gray-600/70 p-4 rounded-lg flex flex-col transition-colors duration-300 relative">
            <div className='flex items-center justify-between mb-2'>
                <h2 className='text-white text-lg font-semibold'>{note[0].title}</h2>
                <span className='text-gray-400 text-sm'>{note[0].date}</span>
            </div>

            <textarea
                ref={textareaRef}
                onInput={handleInput}
                defaultValue={note[0].content}
                className="text-gray-300 text-sm w-full bg-transparent border-none resize-none outline-none overflow-hidden text-left leading-relaxed mb-5"
                rows={1}
            />

            <button className="rounded-tl-lg rounded-br-lg bg-red-100 hover:bg-red-200 w-min p-2 absolute bottom-0 right-0">
                <svg 
                onClick={(e) => {
                    deleteNote(note[1]);

                }}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='fill-black/80 w-5 h-5 hover:w-6 hover:h-6 hover:fill-black/90 transition-all duration-300'>
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                </svg>
            </button>


        </div>
    );
}
