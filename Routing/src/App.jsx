// import './App.css'

import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import College from "./Components/College";
import Students from "./Components/Students";
import Library from "./Components/Library";
import Department from "./Components/Department";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/college" element={<College />}>
          <Route path="students" element={<Students />} />
          <Route path="library" elements={<Library />} />
          <Route path="department" element={<Department />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
