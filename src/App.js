import Navbar from './components/Navbar';
import TextForm from './components/TextFrom'
import './App.css';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');

  const handleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  } 
  return (
    <>
      <Navbar title="Text App" mode={mode} handleMode={handleMode}/>
      {/* <Navbar/> */}
      <div className='container my-3'>
        <TextForm heading='Enter text to analyze'mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
