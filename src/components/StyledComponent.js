import styled, { keyframes } from 'styled-components';
import { HiOutlineViewList } from 'react-icons/hi';
import { GrMail } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { IoLogoRss } from 'react-icons/io';

// 모바일 ~ 768 타블렛 ~1024 데스크탑

//////////////////// REUSEABLE ////////////////////

const wrapper = styled.div`
  margin-top: 120px;
  text-align: center;
`;

const title = styled.div`
  font-weight: 700;
  font-size: 36px;
`;

const sub = styled.div`
  font-size: 18px;
  color: rgba(176, 176, 176, 1);
  font-weight: normal;
`;

//////////////////// NavBar ////////////////////

export const NavBarWrapper = styled.div`
  background-color: rgba(248, 248, 248, 1);
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  color: rgba(119, 119, 119, 1);
  z-index: 99999;
`;

export const NavBarLogo = styled.span`
  margin-top: 15px;
  margin-left: 4vw;
  font-size: 18px;
  cursor: pointer;
`;

export const NavBarMenuWrapper = styled.div`
  margin-top: 15px;
  margin-right: 4vw;
  font-size: 12px;
  padding-top: 5px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavBarMenuElement = styled.span`
  margin-left: 20px;
  cursor: pointer;
`;

export const NavBarButton = styled(HiOutlineViewList)`
  margin-top: 10px;
  margin-right: 15px;
  display: none;
  height: 36px;
  width: 36px;

  @media screen and (max-width: 767px) {
    display: block;  
  }

`

//////////////////// Intro ////////////////////

export const IntroWrapper = styled(wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 0;
  height: 400px;
  background: linear-gradient(135deg, #4568dc,#DCB8FF);

  @media screen and (max-width: 767px) {
    height: 100vh;
    flex-direction: column-reverse;
  }
`;

export const IntroContent = styled.div`
  text-align: left;
  color: white; 
  line-height: 6rem;
  font-size: 3rem;
  font-weight: 700;
  padding-left: 10%;
  width: 50%;
  height: 70%;

  @media screen and (max-width: 1023px) {
    font-size: 2rem;
    line-height: 5rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
    line-height: 4rem;
    width: 90%;
    margin-top: 2rem;
    padding-left: 2rem;
  }

`;

export const IntroImage = styled.img`
  width: 25rem;
  height: 25rem;

  @media screen and (max-width: 1023px) {
    margin-left: 2rem;
    width: 20rem;
    height: 20rem;
  }
  @media screen and (max-width: 767px) {
    margin: 5rem auto 0;
  }
`;

export const IntroDownButton = styled.img`
  width: 100px;
  height: 100px;
  // margin: 0 auto;
`;

//////////////////// About ////////////////////

export const AboutWrapper = styled(wrapper)`
  margin: 120px 360px 0;

  @media screen and (max-width: 1360px) {
    margin: 80px 240px 0; 
  }
  @media screen and (max-width: 1000px) {
    margin: 60px 60px 0;
  }
`;

export const AboutTitle = styled(title)`
`;

export const AboutContentWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  @media screen and (max-width: 1180px) {
    display: block;  
  }
`;

export const AboutPhoto = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  filter: brightness(110%);
  margin-top: 36px;
`;

export const AboutContent = styled.div`
  text-align: left;
  margin-left: 60px;
`;

export const AboutName = styled.div`
  margin-top: 30px;
  font-size: 24px;
  font-weight: 700;
  color: black;
`;

export const AboutSub = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: rgba(119, 119, 119, 1);
`;

export const AboutText = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 28px;
  color: black;
`;

//////////////////// Skills ////////////////////

export const SkillsWrapper = styled(wrapper)`
  margin-left: 120px;
  margin-right: 120px;
`;

export const SkillsTitle = styled(title)`
`;

export const SkillsContent = styled.div`
  line-height: 120px;
  margin-top: 48px;
`;

export const SkillsIcon = styled.img`
  width: 120px;
  height: 120px;
  padding-left: 4rem;
  padding-right: 4rem;
  @media screen and (max-width: 1023px) {
    width: 80px;
    height: 80px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media screen and (max-width: 767px) {
    width: 80px;
    height: 80px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

//////////////////// Works ////////////////////

export const WorksWrapper = styled(wrapper)`
`;

export const WorksTitle = styled(title)`
`;

export const WorksSub = styled(sub)`
`;

export const WorksContent = styled.div`
`;

export const WorksElement = styled.div`
  position: relative;
  margin-top: 48px;
`;

export const WorksImg = styled.img`
  width: 60%;
  cursor: pointer;

  ${WorksElement}:hover &{
    transition: 1s;
    filter: brightness(20%);
  }
`;

export const WorksDetail = styled.div`
  z-index: 1;
  color: white;
  display: inline;
  visibility: hidden;
  position: absolute;
  width: 60%;
  height: 100%;
  cursor: pointer;
  text-align: left;

  ${WorksElement}:hover &{
    transition: 1s;
    visibility: visible;
  }

`;

export const WorksName = styled.div`
  font-size: 2.4vw;
  font-weight: 700;
  padding: 3% 0 0 3%;
`;

export const WorksDesc = styled.div`
  font-size: 1vw;
  line-height: 2vw;
  padding: 0 3% 0;
`;

export const WorksMyRole = styled.ul`
  font-size: 1.5vw;
  font-weight: 600;
  line-height: 3vw;
  padding: 3% 3% 0 6%;
  margin: 0;
`;

export const WorksGithubIcon = styled(AiFillGithub)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 1rem 1.5rem 0;
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const WorksRoleElement = styled.li`
`

//////////////////// FAQ ////////////////////

export const FAQWrapper = styled(wrapper)`
`;

export const FAQTitle = styled((title))`
`;

export const FAQSub = styled(sub)`
`;

export const FAQContent = styled.div`
  margin: 40px 15vw 0;
`;

export const FAQQuestion = styled.div`
  padding: .7% 3% .7%;
  color: rgba(119, 119, 119, 1);
  border-bottom: 1px solid rgba(176, 176, 176, 1);
`;

export const FAQAnswer = styled.div`
  color: #333333;
  background: #EAEAEA;
  padding: 3%;
  line-height: 30px;
`;

export const FAQElement = styled.div`
  text-align: left;
  &:first-child{
    border-top: 5px solid rgba(107, 187, 244, 1);
  }
  font-size: 14px;
  @media screen and (max-width: 1023px){
    font-size: 12px;
  } 
  @media screen and (max-width: 767px){
    font-size: 8px;
  } 

  &:first-child{
    ${FAQQuestion}{
      color: ${props => props.open===1 ? "rgba(107, 187, 244, 1)":"rgba(119, 119, 119, 1)"};
      font-weight: ${props => props.open===1 ? "bold":"normal"};
    }
    ${FAQAnswer}{
      display: ${props => props.open===1 ? "block":"none"};
    }
  }
  &:nth-child(2){
    ${FAQQuestion}{
      color: ${props => props.open===2 ? "rgba(107, 187, 244, 1)":"rgba(119, 119, 119, 1)"};
      font-weight: ${props => props.open===2 ? "bold":"normal"};
    }
    ${FAQAnswer}{
      display: ${props => props.open===2 ? "block":"none"};
    }
  }
  &:nth-child(3){
    ${FAQQuestion}{
      color: ${props => props.open===3 ? "rgba(107, 187, 244, 1)":"rgba(119, 119, 119, 1)"};
      font-weight: ${props => props.open===3 ? "bold":"normal"};
    }
    ${FAQAnswer}{
      display: ${props => props.open===3 ? "block":"none"};
    }
  }
  &:nth-child(4){
    ${FAQQuestion}{
      color: ${props => props.open===4 ? "rgba(107, 187, 244, 1)":"rgba(119, 119, 119, 1)"};
      font-weight: ${props => props.open===4 ? "bold":"normal"};
    }
    ${FAQAnswer}{
      display: ${props => props.open===4 ? "block":"none"};
    }
  }
  &:nth-child(5){
    ${FAQQuestion}{
      color: ${props => props.open===5 ? "rgba(107, 187, 244, 1)":"rgba(119, 119, 119, 1)"};
      font-weight: ${props => props.open===5 ? "bold":"normal"};
    }
    ${FAQAnswer}{
      display: ${props => props.open===5 ? "block":"none"};
    }
  }

`;

export const FAQButton = styled.img`
  width: 14px;
  float: right;
  padding-top: .7%;
  cursor: pointer;
`;

//////////////////// Contact ////////////////////

export const ContactWrapper = styled((wrapper))`
`;

export const ContactTitle = styled((title))`
`;

export const ContactSub = styled(sub)`
`;

export const ContactContent = styled.div`
  margin-top: 40px;
  background: rgba(107, 187, 244, 0.2);
  overflow: hidden;
`;

export const ContactClickInducing = styled.div`
  font-size: 10px;
  color: rgba(119, 119, 119, 1);
  transform: rotate(-15deg) translate(-170px,20px);

  animation: sizeup 1.5s infinite alternate;

  @keyframes sizeup{
    to{
      transform: rotate(-15deg) translate(-170px, 20px) scale(1.5, 1.5);
    }
  }
`;

export const ContactElement = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 60px 0;

  &:nth-child(2){
    padding-top: 60px;
  }
  &:last-child{
    padding-bottom: 80px;
  }
`;

export const ContactIcon = styled.div`
`;

export const ContactMailIcon = styled(GrMail)`
  width: 18px;
  height: 18px;
  padding-top: .2rem;
  cursor: pointer;
`;

export const ContactGithubIcon = styled(AiFillGithub)`
  width: 18px;
  height: 18px;
  padding-top: .2rem;
  cursor: pointer;
`;

export const ContactBlogIcon = styled(IoLogoRss)`
  width: 18px;
  height: 18px;
  padding-top: .2rem;
  cursor: pointer;
`;

export const ContactAddress = styled.div`
  padding-left: .5rem;
`;

//////////////////// Footer ////////////////////

export const FooterWrapper = styled(wrapper)`
`;

export const FooterPageUpButton = styled.img`
  width: 24px;
  cursor: pointer;
  transform: rotate(180deg);
`;

export const FooterCopyright = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
  font-size: 18px;
`;


