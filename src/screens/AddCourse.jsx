import React from 'react'
import ListCourse from '../components/ListCourse'








const AddCourse = ({courses,addNewCourse}) => {
    
  return (
    <div>
        <ListCourse courses = {courses} addNewCourse={addNewCourse}/>
    </div>
  )
}

export default AddCourse