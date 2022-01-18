import styled from 'styled-components';
import { HiOutlineViewList } from 'react-icons/hi';

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
`;

export const NavBarMenuWrapper = styled.div`
  margin-top: 15px;
  margin-right: 48px;
  font-size: 12px;
  padding-top: 5px;

  @media screen and (max-width: 650px) {
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

  @media screen and (max-width: 650px) {
    display: block;  
  }

`

//////////////////// Intro ////////////////////

export const IntroWrapper = styled.div`
  left: 0;
  right: 0;
  margin-top: 60px;
  height: 200px;
  background: rgba(107, 187, 244, 1);
  text-align: center;
`;

export const IntroContent = styled.div`
  &:first-child{
    padding-top: 45px;
  }
  color: white; 
  line-height: 4rem;
  font-size: 36px;
  font-weight: 700;
  @media screen and (max-width: 750px) {
    font-size: 24px;
  }
`;

//////////////////// About ////////////////////

export const AboutWrapper = styled.div`
  margin-top: 120px;
  margin-left: 360px;
  margin-right: 360px; 
  @media screen and (max-width: 1360px) {
    margin-left: 240px;
    margin-right: 240px; 
  }
  @media screen and (max-width: 1000px) {
    margin-left: 60px;
    margin-right: 60px; 
  }
  text-align: center;
`;

export const AboutTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
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

export const SkillsWrapper = styled.div`
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 120px;
  text-align: center;
`;

export const SkillsTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
`;

export const SkillsContent = styled.div`
  line-height: 160px;
  margin-top: 48px;
`;

export const SkillsIcon = styled.img`
  width: 180px;
  height: 180px;
  padding-left: 4rem;
  padding-right: 4rem;
  @media screen and (max-width: 1220px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

//////////////////// Works ////////////////////

export const WorksWrapper = styled.div`
  text-align: center;
  margin-top: 120px;
`;

export const WorksTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
`;

export const WorksSub = styled.div`
  font-size: 18px;
  color: rgba(176, 176, 176, 1);
  font-weight: normal;
`;

export const WorksContent = styled.div`
  // margin-top: 20px;
`;

export const WorksElement = styled.div`
  position: relative;
  margin-top: 60px;
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
  margin: 0 auto;
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
  padding: 1% 3% 0 6%;
`;

export const WorksRoleElement = styled.li`
`