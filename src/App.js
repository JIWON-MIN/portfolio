import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
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


function App() {

  const aboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const WorksRef = useRef(null);
  // const FAQRef = userRef(null);
  // const ContactRef = userRef(null);

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
        <NavBarLogo>JIWON MIN</NavBarLogo>
        <NavBarMenuWrapper>
          <NavBarMenuElement onClick={(e) => menuClick(e, aboutRef.current.offsetTop)}>About</NavBarMenuElement>
          <NavBarMenuElement onClick={(e) => menuClick(e, SkillsRef.current.offsetTop)}>Skills</NavBarMenuElement>
          <NavBarMenuElement onClick={(e) => menuClick(e, WorksRef.current.offsetTop)}>Works</NavBarMenuElement>
          <NavBarMenuElement onClick={(e) => menuClick(e, 4)}>FAQ</NavBarMenuElement>
          <NavBarMenuElement onClick={(e) => menuClick(e, 5)}>Contact</NavBarMenuElement>
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
    <Contact />
    <Footer />
   </>
  );
}

export default App;
