import React from 'react';
import styles from './Welcome.module.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Welcome() {
  const [mainText] = useTypewriter({
    words: ['Andrea', 'A Developer'],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 150
  });

  return (
    <>
      <div className={styles.welcome_container}>
        <div className={styles.welcome_information_block}>
          <div className={styles.welcome_information}>
            <p style={{ color: '#FFF', fontSize: '1.5rem' }}>Welcome to my space</p>
            <h1 style={{ color: '#cad2c5', fontSize: '2.5rem' }}>
              Hey there! I'm {mainText} <Cursor />
            </h1>
            <p style={{ color: '#FFF', fontSize: '1.1rem' }}>
              Glad to have you around here! Feel free to look around and get to know me a little bit better.
              I'm a passionate web developer with experience in React, JavaScript, and CSS. I love creating websites.
              Don't hesitate to reach out if you have any questions or if you'd like to collaborate on a project.
              Hope you enjoy your stay!
            </p>
          </div>
          <div className={styles.welcome_image_wrapper}>
            <div className={styles.welcome_image}>
              <img src="Main-icon.jpg" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
