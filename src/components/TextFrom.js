import React, { useState } from 'react'

function TextFrom(props) {
  const [text, setText] = useState('Write your text here');
  const handleUpcase = () => {
    console.log('first');
    let char = text.toUpperCase();
    setText(char);
  }

  const  handleLowercase= () => {
    console.log('second');
    let char = text.toLowerCase();
    setText(char);
  }

  const handleClear = () => {
    setText('');
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSpace = () => {
    let newtext = text.split(/[  ]+/);
    setText(newtext.join(" "));
  }
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="mytext" rows="8"></textarea>
        </div>
        <div className="button">
          <button className="btn btn-primary" onClick={handleUpcase}>Change to UpperCase</button>
          <button className="btn btn-primary mx-3" onClick={handleLowercase}>Change to LowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleClear}>Clear text</button>
          <button className="btn btn-primary mx-3" onClick={handleSpace}>Remove Space</button>
        </div>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextFrom;