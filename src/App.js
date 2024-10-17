import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { MainContext } from './Context';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
    </>
  );
}

export default App;
