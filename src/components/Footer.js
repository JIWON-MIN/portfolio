import {
  FooterWrapper,
  FooterPageUpButton,
  FooterCopyright
} from './StyledComponent';
import UpButton from './img/DownButton.png';

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const Footer = () => {
  
  const pageUp = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    })
  }
  
  return (
    <>
      <FooterWrapper>
        <FooterPageUpButton src={UpButton} onClick={pageUp}/>
        <FooterCopyright>Copyright &copy; Jiwon Min 2022</FooterCopyright>
      </FooterWrapper>
    </>
  )
};

export default Footer;