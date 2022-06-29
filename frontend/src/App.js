import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './pages/login';
import Register from './pages/register';
import Dash from './pages/dash';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
        <Header />
          <Routes>
            <Route path='/' element={<Dash/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
