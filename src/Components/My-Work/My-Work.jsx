import React from 'react';
import styles from './My-Work.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MyWork() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
  };

  return (
    <>
      <div className={styles.myWork_container}>
        <div className={styles.workCarouselContainer}>
          <h1 style={{ color: '#FFF' }}>My Work</h1>
          <Carousel responsive={responsive}>
            <div className={styles.carousel_item}>
              <div className={styles.image_container}>
                <a href='https://glittery-faloodeh-4c633b.netlify.app/'>
                    <img src="Inuyasha's Maze.png" alt="Image 1" />
                </a>
              </div>
              <div className={styles.text_container}>
                <h1>Maze</h1>
                <p>Explore a captivating maze built with React JS and CSS. Navigate through intricate paths and overcome 
                    challenging obstacles to find your way to the ultimate goal. Interested? Click the image!</p>
              </div>
            </div>
            <div className={styles.carousel_item}>
              <div className={styles.image_container}>
                <a href='https://web-hw-calculator.netlify.app/'>
                    <img src="Calculator.png" alt="Image 2" />
                </a>
              </div>
              <div className={styles.text_container}>
                <h1>Calculator</h1>
                <p>Calculator developed with CSS, React, and JavaScript. This interactive calculator
                    allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division, aswell as
                    some more complex operations like module. </p>
              </div>
            </div>
            <div className={styles.carousel_item}>
              <div className={styles.image_container}>
                <a href='https://keen-mochi-6437ce.netlify.app/'>
                    <img  src="SparkNotes.png" alt="Image 3" />
                </a>
              </div>
              <div className={styles.text_container}>
                <h1>Webpage</h1>
                <p>I created a replica of the SparkNotes webpage using primarily CSS. The replica closely resembles the layout 
                    and design of the original SparkNotes website, capturing its distinctive style and elements.</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default MyWork;
