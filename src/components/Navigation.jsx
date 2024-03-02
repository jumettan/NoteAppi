import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {

    return (
    <ul className='divContainer'>
    <li className = 'HomeUL'> <Link className='backBtn' to={"/"}>Home</Link></li>
    <li className='divCreate'>  <Link className = 'linkColor' to="/AddNotes">Create notes for class</Link></li>
    <li className='divList'><Link className = 'linkColor' to="/ListNotes">List Notes</Link></li>
    <li className='divAdd' > <Link className = 'linkColor' to="/AddCourse">Add Course</Link></li>
    </ul>
    )
}

export default Nav