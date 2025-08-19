import React from 'react';
import './App.css';
import Header from './componentes/Header';
import Main from './componentes/Main';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './componentes/Formulario/Formulario';

function App() {
  return (

    <>
      <BrowserRouter>
        <RecoilRoot>
          <Header />
          <div className='ColoredBackground'>
            <Main>
              <Routes>
                <Route path='/' element={<Formulario/>} />

              </Routes>
            </Main>
          </div>

        </RecoilRoot>
      </BrowserRouter>
    </>


  );
}

export default App;
