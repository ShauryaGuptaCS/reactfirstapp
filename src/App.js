
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
// import About from './components/About'
import TextForm from './components/TextForm'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

  
// } from "react-router-dom";
function App() {
  const [modes,setMode]=useState("light")

  const toggleMode=()=>{
    if(modes === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="grey";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
    {/* <Router>    */}
    <Navbar title="Shaurya" mode={modes} toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <div className="container">
    {/* <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={
          <TextForm heading="Enter your text below" mode={modes}/>
          }/>
    </Routes> */}
      <TextForm heading="Enter your text below" mode={modes}/>
    </div>
    {/* <About/> */}
    {/* </Router> */}
    </>
  );
}

export default App;
