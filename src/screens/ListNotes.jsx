import React, { useState } from 'react';
import ListCoursesLi from '../components/ListCoursesLi';
import { FaTrash } from "react-icons/fa"

const ListNotes = ({ notes, courses, setNotes }) => {
  const [filteredNotes, setFilteredNotes] = useState(notes);

 
  const handleFilterChange = (selectedCourse) => {
    let filteredNotes;
    console.log(selectedCourse)
    if (selectedCourse.id === 'all') {
      filteredNotes = notes;
      console.log(filteredNotes)
    } else {
      
      console.log(notes)
      filteredNotes = notes.filter(note => note.course.id === selectedCourse.id || note.course.name === selectedCourse.name);
      setFilteredNotes(filteredNotes);
      console.log(filteredNotes)
    }
    setFilteredNotes(filteredNotes);
    console.log(filteredNotes)
    if (filteredNotes.length === 0) {
      // There are no notes for the selected course
      console.log("this course does not have any notes yet");
    }
  };
  const handleDelete = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  }
  

  return (
    <div>
      <div>ListNotes</div>
      Course:
      <ListCoursesLi courses={courses} onFilterChange={handleFilterChange} />
      {filteredNotes.length === 0 ? (
        <div className='noNotes'>Ei muistiinpanoja!</div>
      ) : (
      <div className='ListedNotesCont'>
        
        {filteredNotes.map(note => (
        
          <div className="ListNotesCont" key={note.id}>
            <div className="noteCont">
              <div className="noteInfo">
                {note.timestamp} {note.course.name} (id {note.course.id})
                <button className='deleteBtn' onClick={() => handleDelete(note.id)}><FaTrash/></button>
              </div>
              <div className="noteText">{note.text}
            </div>
            </div>
            
        </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default ListNotes;