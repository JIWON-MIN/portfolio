import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React, {useRef} from 'react';

import {
  NavBarWrapper,
  NavBarLogo,
  NavBarMenuWrapper,
  NavBarMenuElement,
  NavBarButton,
} from './components/StyledComponent';

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();


function App() {

  const aboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const WorksRef = useRef(null);
  const FAQRef = useRef(null);
  const ContactRef = useRef(null);

  const NavBar = () => {

    const menuClick = (e, loc) => {
      window.scrollTo({
        top: loc-70,
        behavior: 'smooth',
      }
      )
    }
  
    return(
      <>
      <NavBarWrapper>
        <NavBarLogo onClick={(e) => menuClick(e, 0)}>JIWON MIN</NavBarLogo>
        <NavBarMenuWrapper>
          <NavBarMenuElement onClick={(e) => menuClick(e, aboutRef.current.offsetTop)}>About</NavBarMenuElement>
          <NavBarMenuElement onClick={(e) => menuClick(e, SkillsRef.current.offsetTop)}>Skills</NavBarMenuElement>
          <NavBarMenuElement onClick={(e) => menuClick(e, WorksRef.current.offsetTop)}>Works</NavBarMenuElement>
          <NavBarMenuElement onClick={(e) => menuClick(e, FAQRef.current.offsetTop)}>FAQ</NavBarMenuElement>
          <NavBarMenuElement onClick={(e) => menuClick(e, ContactRef.current.offsetTop)}>Contact</NavBarMenuElement>
        </NavBarMenuWrapper>
        <NavBarButton />
      </NavBarWrapper>
  
      </>
    );
  }

  return (
   <>
    <NavBar />
    <Intro />
    <About ref={aboutRef}/>
    <Skills ref={SkillsRef}/>
    <Works ref={WorksRef}/>
    <FAQ ref={FAQRef}/>
    <Contact ref={ContactRef}/>
    <Footer />
   </>
  );
}

export default App;
