// import { useEffect } from 'react';
import {
  NavBarWrapper,
  NavBarLogo,
  NavBarMenuWrapper,
  NavBarMenuElement,
  NavBarButton,
} from './StyledComponent';

const NavBar = () => {

  // Menu 클릭 시 해당 파트로 이동, 현재 위치 파악해 밑줄 표시
  // const [now, setNow] = useEffect();

  return(
    <>
    <NavBarWrapper>
      <NavBarLogo>JIWON MIN</NavBarLogo>
      <NavBarMenuWrapper>
        <NavBarMenuElement>About</NavBarMenuElement>
        <NavBarMenuElement>Skills</NavBarMenuElement>
        <NavBarMenuElement>Works</NavBarMenuElement>
        <NavBarMenuElement>FAQ</NavBarMenuElement>
        <NavBarMenuElement>Contact</NavBarMenuElement>
      </NavBarMenuWrapper>
      <NavBarButton />
    </NavBarWrapper>

    </>
  );
};

export default NavBar;