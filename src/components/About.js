import React,{useState} from 'react'

export default function About() {
    const[myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    const [text,setText]=useState('Dark Mode')
    const toggleMode=()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setText('Light Mode')
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setText('Dark Mode')
        }
        
    }
  return (
    <>
        <div className="container" style={myStyle}>
            <div className="jumbotron jumbotron-fluid">
                <div className="container mt-3">
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            <button className="btn btn-primary" onClick={toggleMode}>{text}</button>
        </div>
    </>
  )
}
