import React, { useState } from 'react';
import SelectNoteCourse from '../components/SelectNoteCourse';

const AddNewNotesForCourse = ({ courses, addNewNotes, notes}) => {
  const [newNotes, setNewNotes] = useState([])
  const [noteText, setNoteText] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('')
  const [isDisabled, setIsDisabled] = useState(false);
  console.log(selectedCourse.id, selectedCourse.name)
  
  const handleAddNote = () => {
    console.log(selectedCourse.name)
    if (noteText.length < 1 || (selectedCourse.name === undefined || selectedCourse.name === "-//-"))
     {setNoteText('');
      return (
        <div>Please enter a note with at least 1 character and select a proper course.</div>
        
    );
  }
    setNoteText('');
  
    console.log(selectedCourse)
  
    const newNote = {
      id: notes.length,
      text: noteText,
      course: selectedCourse ? {
        id: selectedCourse.id,
        name: selectedCourse.name
      } : null,
      timestamp: new Date().toISOString()
      
    };
    
    addNewNotes(newNote);
    addNewNotesNew(newNote)
    console.log(notes)
    setIsDisabled(true);
    console.log(newNotes)
    setNoteText('');
  };
  const addNewNotesNew = (note) => {
    setNewNotes(newNotes => [...newNotes, note]);};
  

  return (
    <div className='add-note-container'>
      
      <div className="add-note-select" >
      Course:
      <SelectNoteCourse courses={courses} onFilterChange={setSelectedCourse} disabled={isDisabled}/>
      </div>
      
      <textarea className='add-note-input'
        id="note-text"
        type="text"
        value={noteText}
        onChange={(event) => setNoteText(event.target.value)}
      />
      
      <button className='add-note-button' onClick={handleAddNote}>Add Note</button>
      <div className='newNotesDisplay'>
        {newNotes.map(note => (
          <div className="ListNotesCont" key={note.id}>
          <div className="noteCont">
            <div className="noteInfo">
              
            </div>
            <div className="noteText">{note.text}
          </div>
          </div>
          
      </div>
      ))}
    </div>
  </div>
);
};

export default AddNewNotesForCourse;