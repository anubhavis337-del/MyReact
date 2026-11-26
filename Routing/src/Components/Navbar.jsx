import React from "react"
import {Link} from "react-router";
const Navbar= ()=>{
    return (
        <div className="bg-zinc-700 text-white flex justify-between p-5 text-3xl ">
            <h1>Navbar</h1>
            {/* ----------Link----------- */}
            <div className="text-2xl flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/college">College</Link>
            </div>

        </div>
    )
}
export default Navbar