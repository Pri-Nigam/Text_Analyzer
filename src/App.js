import Navbar from './components/Navbar';
import TextForm from './components/TextFrom'
import './App.css';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="Text App"/>
      {/* <Navbar/> */}
      <div className='container my-3'>
        <TextForm heading='Enter text to analyze'/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
