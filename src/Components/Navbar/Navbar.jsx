import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    const handleSetActiveSection = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSetActiveSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSetActiveSection);
    };
  }, []);

  return (
    <div className={`${styles.header_container} ${scrolled ? styles.scrolled : ''}`}>
      <nav>
        <ul className={styles.navbar_ul}>
          <li className={activeSection === 'welcome' ? styles.active : ''}>
            <a href="#welcome">Home</a>
          </li>
          <li className={activeSection === 'about' ? styles.active : ''}>
            <a href="#about">About Me</a>
          </li>
          <li className={activeSection === 'work' ? styles.active : ''}>
            <a href="#work">My Work</a>
          </li>
          <li className={activeSection === 'contact' ? styles.active : ''}>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
