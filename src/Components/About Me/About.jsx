import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './About.module.css';

const About = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.opacity = '0';
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.${styles.skill_container}`);
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.about_content}>
          <div className={styles.image_container}>
            <img src='About-icon.jpg' alt="About" />
          </div>
          <div className={styles.about_information_container}>
            <h1 style={{ color: '#354f52' }}>About Me</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7rem' }}>
              Hello! I'm Andrea, a 20-year-old computer science student at Universidad del Valle de Guatemala.
              Aside from coding, I find great joy in the world of art. Drawing and painting have been long-standing hobbies of mine.
              As a perfectionist, I strive for excellence in everything I do, especially when it comes to my work.
              While technology and art play significant roles in my life, my family is my utmost priority.
              In my free time, you can often find me buried in a good book.
              I am excited about the opportunities that lie ahead in my journey as a computer science student and as an aspiring professional in the tech industry. Feel free to join me on this exciting adventure!
            </p>
          </div>
        </div>
        <div className={styles.skills_content}>
          <h1>My Skills</h1>
          <div className={styles.skills_container}>
            <div className={styles.skill_container}>
            </div>
            <div className={styles.skill_container}>
            </div>
            <div className={styles.skill_container}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
