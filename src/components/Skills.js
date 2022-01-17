import{
  SkillsWrapper,
  SkillsTitle,
  SkillsContent,
  SkillsIcon,
} from './StyledComponent';
import CIcon from './img/CIcon.png';
import CppIcon from './img/CppIcon.png';
import PythonIcon from './img/PythonIcon.png';
import JSIcon from './img/JSIcon.png';
import HtmlIcon from './img/HTMLIcon.png';
import CSSIcon from './img/CSSIcon.png';
import TSIcon from './img/TSIcon.png';
import ReactIcon from './img/ReactIcon.png';
import GitIcon from './img/GitIcon.png';
import VueIcon from './img/VueIcon.png';
import AngularIcon from './img/AngularIcon.png';
import Tobecontinue from './img/Tobecontinue.png';


const Skills = () => {
  return (
    <>
      <SkillsWrapper>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsContent>
          <SkillsIcon src={CIcon} />
          <SkillsIcon src={CppIcon} />
          <SkillsIcon src={PythonIcon} />
          <br/>
          <SkillsIcon src={JSIcon} />
          <SkillsIcon src={HtmlIcon} />
          <SkillsIcon src={CSSIcon} />
          <br/>
          <SkillsIcon src={TSIcon} />
          <SkillsIcon src={ReactIcon} />
          <SkillsIcon src={GitIcon} />
          <br/>
          <SkillsIcon src={VueIcon} />
          <SkillsIcon src={AngularIcon} />
          <SkillsIcon src={Tobecontinue} />
        </SkillsContent>
      </SkillsWrapper>
    </>
  )
};

export default Skills;