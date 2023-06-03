import { useState } from 'react';
import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Welcome from './Components/Welcome/Welcome';
import About from './Components/About Me/About';
import MyWork from './Components/My-Work/My-Work';

function App() {
  return (
    <>
      <Navbar />
      <section id='welcome'>
        <Welcome />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='work'>
        <MyWork />
      </section>

      <section id='contact'>
        <div className={styles.contact_container}>
          <h1>Contact Me</h1>
          <p>Feel free to contact me through my social media if you are interested!</p>
          <div className={styles.social_media}>
            <img src='https://img.icons8.com/?size=512&id=32323&format=png'/>
            <img src='https://img.icons8.com/?size=512&id=63777&format=png'/>
            <img src='https://img.icons8.com/?size=512&id=13963&format=png'/>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
