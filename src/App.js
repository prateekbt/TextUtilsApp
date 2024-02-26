  import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#5C5470';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="ENTER THE TEXT TO ANALYZE"/>
    </div>
    <div className='conatiner my-3'>
      {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
