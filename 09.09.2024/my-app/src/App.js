import './App.css';
import Name from './components/Name';
import React from 'react';
import Counter from './components/Counter';
import PropDrilling from './components/PropDrilling';

// <React.Fragment></React.Fragment>

function App() {
  return ( 
    <>
      <PropDrilling />
      <Name title="Henri"/>
      <Name />
      <Counter />
    </>
  )
}

export default App;
