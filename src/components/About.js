import {
  AboutWrapper,
  AboutTitle,
  AboutContentWrapper,
  AboutContent,
  AboutPhoto,
  AboutName,
  AboutSub,
  AboutText,
} from './StyledComponent';
import profile from './img/profile.jpg'
import React, {forwardRef} from 'react';

const About = forwardRef((props, ref) => {

  const content = "전공을 통해 데이터 베이스, 소프트웨어 공학, 운영체제, 알고리즘, 인공지능 등을 배웠습니다." + 
                  " 그러던 중 주변 분들을 통해 웹 개발에 관심이 생겨 프론트엔드 개발자로 팀 프로젝트를 진행하게 되었고, 제 자신에게 가능성을 보았습니다.\n\n" +
                  "HTML, CSS, JavaScript로 시작해 ReactJS와 git을 스스로 학습하여 개발에 참여하였고, 최근에는 TypeScript 학습 및 응용에 관심을 두고 있습니다." +
                  " 이후 가능하다면, 순서대로 Redux, VueJS, AngularJS에 숙련하고, 나아가 학사 과정에서 학습한 데이터 베이스와 데이터 베이스 응용 과목을 기반으로 백엔드까지 개발 능력을 확장하여 풀스택 개발자가 되는 것이 저의 목표입니다.\n\n" +
                  "개발자와 사용자 모두가 행복한 웹을 만드는 개발자가 되기 위해 노력 중인 민지원입니다:)";

  const AboutTextMaker = ({content}) => {
    return <AboutText>
      {content.split("\n").map((temp) =>
      <>
        {temp}
        <br />
      </>)}
    </AboutText>
  }

  return (
   <>
    <AboutWrapper>
      <AboutTitle ref={ref}>About me</AboutTitle>
      <AboutContentWrapper>
        <AboutPhoto src={profile}/>
        <AboutContent>
          <AboutName>민지원</AboutName>
          <AboutSub>"숭실대학교 소프트웨어학부에서 졸업을 앞두고 있는 프론트엔드 개발자 민지원입니다."</AboutSub>
          <AboutTextMaker content={content}/>
        </AboutContent>
      </AboutContentWrapper>
    </AboutWrapper>
   </>
 );
});

export default About;