import React, {useState, useEffect} from 'react';
import {
  IntroWrapper,
  IntroContent,
  IntroImage,
  IntroDownButton,
} from './StyledComponent';
import mimoticon from './img/mimoticon.png';
import DownButtonWhite from './img/DownButtonWhite.png';

const Intro = () => {

  // https://wazacs.tistory.com/35

  const txt = "방문해주셔서 영광입니다!";
  const txt2 = "프론트엔드 개발자";
  const txt3 = "민지원입니다.";
  const [Text, setText] = useState(''); 
  const [Text2, setText2] = useState(''); 
  const [Text3, setText3] = useState(''); 
  const [Count, setCount] = useState(0);
  const [Count2, setCount2] = useState(0);
  const [Count3, setCount3] = useState(0);

  useEffect(() => {

    const interval = setInterval(()=>{
      setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
      setCount(Count+1); // 개수 체크
    }, 150);
    if(Count === txt.length) clearInterval(interval); // 문자열 체크해 setInterval 해제


    // 동일하게 두줄 더 적용
    const interval2 = setInterval(()=>{
      setText2(Text2 + txt2[Count2]); 
      setCount2(Count2+1); 
    }, 150);
    if(Count2 === txt2.length) clearInterval(interval2); 

    const interval3 = setInterval(()=>{
      setText3(Text3 + txt3[Count3]); 
      setCount3(Count3+1); 
    }, 150);
    if(Count3 === txt3.length) clearInterval(interval3); 
    
    return() => {
      // 언마운트 시 setInterval 해제
      clearInterval(interval); 
      clearInterval(interval2);
      clearInterval(interval3); 
    }
  })

  return (
    <>
      <IntroWrapper>
        <IntroContent>
          {Text}<br/>{Text2}<br/>{Text3}
        </IntroContent>
        <IntroImage src={mimoticon} />
        <IntroDownButton src={DownButtonWhite} />
      </IntroWrapper>
    </>
  );
};

export default Intro;