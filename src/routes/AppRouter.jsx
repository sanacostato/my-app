import React from 'react'
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import { CrudPage } from '../pages/CrudPage';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/crud' element={<CrudPage/>}/>
        </Routes>
    </BrowserRouter>
    </>
    )
}

export default AppRouter