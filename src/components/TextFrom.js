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
  return (
    <>
      <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleChange} id="mytext" rows="8"></textarea>
        </div>
        <div className="button">
          <button className="btn btn-primary" onClick={handleUpcase}>Change to UpperCase</button>
          <button className="btn btn-primary mx-3" onClick={handleLowercase}>Change to LowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleClear}>Clear text</button>
        </div>
      </div>
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextFrom;