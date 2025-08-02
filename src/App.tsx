import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Main from './componentes/Main';

function App() {
  return (

    <> 
    <Header/> 
    <div className='ColoredBackground'>
    <Main/>
    </div>
    </>


  );
}

export default App;
