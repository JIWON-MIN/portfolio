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

  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
  
`;

const sub = styled.div`
  font-size: 18px;
  color: rgba(176, 176, 176, 1);
  font-weight: normal;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
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
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: block;  
  }

`

export const NavBarDropDownWrapper = styled.div`
  left: 0;
  right: 0;
  background-color: rgba(248, 248, 248, 1);
  height: 200px;
  position: fixed;
  overflow: hidden;
  ${(props)=>props.isOpen == 0 ? `transition:.3s; height: 0;`:`transition:.3s; height: 200px;`}
`;

export const NavBarDropDownElement = styled.div`
  margin-top: 15px;
  padding-left: 10vw;
  font-size: 14px;
  cursor: pointer;
  color: rgba(60,60,60,1);
  border-bottom: 1px solid rgba(119, 119, 119, .15);
`;
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

  @media screen and (max-width: 767px) {
    margin: 0;
  }
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
  // margin-left: 120px;
  // margin-right: 120px;
  margin-left: auto;
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

  @media screen and (max-width: 767px) {
    width: 80%;
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

  @media screen and (max-width: 767px) {
    width: 80%;
  }

`;

export const WorksName = styled.div`
  font-size: 2.4vw;
  font-weight: 700;
  padding: 3% 0 0 3%;

  @media screen and (max-width: 767px) {
    padding: 3% 0 1% 3%;
  }
`;

export const WorksDesc = styled.div`
  font-size: 1vw;
  line-height: 2vw;
  padding: 0 3% 0;

  @media screen and (max-width: 767px) {
    line-height: 2.5vw;
  }
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

  @media screen and (max-width: 767px) {
    width: 24px;
    height: 24px;
    margin: 0 .5rem .7rem 0;
  }
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
  @media screen and (max-width: 767px) {
    margin: 30px 5vw 0;
  }
`;

export const FAQQuestion = styled.div`
  padding: .7% 3% .7%;
  color: rgba(119, 119, 119, 1);
  border-bottom: 1px solid rgba(176, 176, 176, 1);

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

export const FAQAnswer = styled.div`
  color: #333333;
  background: #EAEAEA;
  line-height: 30px;
  overflow: hidden;
  @media screen and (max-width: 767px) {
    line-height: 20px;
  }
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
      ${props => props.open === 1 ? `color:rgba(107, 187, 244, 1); font-weight:bold;`:` color:rgba(119, 119, 119, 1); font-weight:normal;`}
    }
    ${FAQAnswer}{
      ${(props)=>props.open === 1 ? `transition:.5s; max-height:200px; padding:2%;`:`transition:.5s; max-height:0;`}
    }
  }
  &:nth-child(2){
    ${FAQQuestion}{
      ${props => props.open === 2 ? `color:rgba(107, 187, 244, 1); font-weight:bold;`:` color:rgba(119, 119, 119, 1); font-weight:normal;`}
    }
    ${FAQAnswer}{
      ${(props)=>props.open === 2 ? `transition:.5s; max-height:200px; padding:2%;`:`transition:.5s; max-height:0;`}
    }
  }
  &:nth-child(3){
    ${FAQQuestion}{
      ${props => props.open === 3 ? `color:rgba(107, 187, 244, 1); font-weight:bold;`:` color:rgba(119, 119, 119, 1); font-weight:normal;`}
    }
    ${FAQAnswer}{
      ${(props)=>props.open === 3 ? `transition:.5s; max-height:200px; padding:2%;`:`transition:.5s; max-height:0;`}
    }
  }
  &:nth-child(4){
    ${FAQQuestion}{
      ${props => props.open === 4 ? `color:rgba(107, 187, 244, 1); font-weight:bold;`:` color:rgba(119, 119, 119, 1); font-weight:normal;`}
    }
    ${FAQAnswer}{
      ${(props)=>props.open === 4 ? `transition:.5s; max-height:300px; padding:2%;`:`transition:.5s; max-height:0;`}
    }
  }
  &:nth-child(5){
    ${FAQQuestion}{
      ${props => props.open === 5 ? `color:rgba(107, 187, 244, 1); font-weight:bold;`:` color:rgba(119, 119, 119, 1); font-weight:normal;`}
    }
    ${FAQAnswer}{
      ${(props)=>props.open === 5 ? `transition:.5s; max-height:300px; padding:2%;`:`transition:.5s; max-height:0;`}
    }
  }

`;

export const FAQButton = styled.img`
  width: 14px;
  float: right;
  padding-top: .7%;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    padding-top: 2%;
  }
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

  @media screen and (max-width: 767px){
    font-size: 14px;
  } 
`;

export const ContactClickInducing = styled.div`
  font-size: 10px;
  color: rgba(119, 119, 119, 1);
  transform: rotate(-15deg) translate(-100px,20px);

  animation: sizeup 1.5s infinite alternate;

  @keyframes sizeup{
    to{
      transform: rotate(-15deg) translate(-100px, 20px) scale(1.5, 1.5);
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

  @media screen and (max-width: 767px){
    font-size: 12px;
  }
`;


