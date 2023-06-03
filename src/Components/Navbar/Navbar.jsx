import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.header_container} ${scrolled ? styles.scrolled : ''}`}>
      <nav>
        <ul className={styles.navbar_ul}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">My Work</a></li>
          <li><a href="#">Contact Me</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
