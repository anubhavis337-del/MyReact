import { Route, Routes } from "react-router";
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Products from './Components/Products'  
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import './App.css'


function App() {

  return (
   <div>
    <Navbar/>
    
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/products" element={<Products/>}/>
    </Routes>
    <Footer/>
   </div>
  )
}

export default App
