import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Box } from '@material-ui/core';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px" sx={{width:{x1:'1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>

  );
}

export default App;
