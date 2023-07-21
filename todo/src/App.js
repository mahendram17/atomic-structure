import logo from './logo.svg';
import './App.css';
import 'primeicons/primeicons.css';
import * as React from 'react';
import Home from './pages/Home/Home'
function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="App">
     <Home/>
        </div>
  );
}

export default App;
