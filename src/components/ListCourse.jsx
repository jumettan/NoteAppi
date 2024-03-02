import SaveCourse from "./SaveCourse";


const ListCourse = ({ courses, addNewCourse}) => {
  
  return (
    <div>
      <SaveCourse courses = {courses} addNewCourse={addNewCourse} />
    </div>
  );
};

export default ListCourse;