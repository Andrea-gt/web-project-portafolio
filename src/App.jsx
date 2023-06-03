import { useState } from 'react';
import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Components/Welcome/Welcome';
import About from './Components/About Me/About';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
    </>
  );
}

export default App;
