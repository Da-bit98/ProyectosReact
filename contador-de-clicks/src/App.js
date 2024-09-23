
import './App.css';
import Logo from './images/Logo.png'
import Button from './components/Button'
import Contador from './components/Contador'
import { useState } from 'react';

function App() {

  const[numClicks, setNumClicks] = useState(0);
  
  const _handleClick = () =>{
    console.log('Click');
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () =>{
    console.log('Reset');
    setNumClicks(0);
  };
  
  return (
    <div className="App">
      <div className='logo-container'>
        <img className='logo' src={Logo} alt='Logo'></img>
      </div>

      <div className='main-container'>
        <Contador
        numClicks={numClicks}
        />
      
        <Button 
        text='Click'
        isClickButton={true}
        handleClick={_handleClick}
        />

        <Button 
        text='Reset'
        isClickButton={false}
        handleClick={resetCounter}
        />

      </div>      
    </div>
  );
}

export default App;
