import React from 'react'
import { Link, Outlet } from 'react-router'

const College = () => {
  return (
    <div  className="text-5xl text-center mt-50 font-large">

       <div className="text-3xl font-medium"><h1>College Page</h1></div> 

        <div className="text-2xl flex gap-4 justify-center mt-5">
        
            <Link to="students">Students</Link>
            <Link to="department">Department</Link>
            <Link to="library">Library</Link>
        </div>
        <Outlet/>

    </div>
  )
}
export default College