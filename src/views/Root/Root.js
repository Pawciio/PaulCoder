import React, { useEffect } from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mineTheme';
import { ThemeProvider } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from 'components/organisms/header/header';
import AboutUs from 'components/organisms/aboutUs/aboutUs';
import ServiceIcon from 'components/organisms/serviceIcon/serviceIcon';
import Contact from 'components/organisms/contact/contact';
import Advantages from 'components/organisms/advantages/advantages';

gsap.registerPlugin(ScrollTrigger);

const Root = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      gsap.fromTo(
        section.children,
        { y: '+=100', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
          },
        },
      );
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <AboutUs />
          <Advantages />
          <ServiceIcon />
          <Contact />
        </>
      </ThemeProvider>
    </>
  );
};

export default Root;
