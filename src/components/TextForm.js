import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState('enter default text')
  const convertUpper=()=>{
    console.log("button is clicked")
    const t=text.toUpperCase()
    setText(t)
  }
  const handlechange=(event)=>{
    console.log("handlechange")
    setText(event.target.value)
  }

  const convertLower=()=>{
    const l=text.toLowerCase();
    setText(l);
  }

  const clearText=()=>{
    setText('');
  }

  const copyText=()=>{
    var t=document.getElementById("myBox");
    t.select();
    navigator.clipboard.writeText(t.value);
  }
  
  return (
    <>
    <div className={`container mb-3 `}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows={8}
          value={text}
          onChange={handlechange}
          defaultValue={""}
        />
      </div>
      <button className="btn btn-primary mx-1"   onClick={convertUpper}>Convert text to upper case</button>
      <button className="btn btn-primary mx-1"   onClick={convertLower}>Convert text to lower case</button>
      <button className="btn btn-primary mx-1"   onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-1"   onClick={copyText}>Copy Text</button>
    </div>
    <div className="container">
      <h2>Your text summary</h2>
      <p>word count is {text.split(" ").length} and character count is {text.length}</p>
    </div>
  </>

  )
}
