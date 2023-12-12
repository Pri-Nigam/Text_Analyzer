import Navbar from './components/Navbar';
import TextForm from './components/TextFrom'
import './App.css';
import About from './components/About';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
      <div className='container my-3'>
        <Router>
          <Routes>
            <Route path='/' element={<TextForm heading='Enter text to analyze'mode={mode}/>}></Route>
            <Route path='/About' element={<About/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
