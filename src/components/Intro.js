import React, {useState, useEffect} from 'react';
import {
  IntroWrapper,
  IntroContent
} from './StyledComponent';


const Intro = () => {

  // https://wazacs.tistory.com/35

  const txt = "방문해주셔서 영광입니다!";
  const txt2 = "저는 Front-end developer 민지원입니다."
  const [Text, setText] = useState(''); 
  const [Text2, setText2] = useState(''); 
  const [Count, setCount] = useState(0);
  const [Count2, setCount2] = useState(0);

  useEffect(() => {

    const interval = setInterval(()=>{
      setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
      setCount(Count+1); // 개수 체크
    }, 150);
    if(Count === txt.length) clearInterval(interval); // 문자열 체크해 setInterval 해제


    // 동일하게 한줄 더 적용
    const interval2 = setInterval(()=>{
      setText2(Text2 + txt2[Count2]); 
      setCount2(Count2+1); 
    }, 150);
    if(Count2 === txt2.length) clearInterval(interval2); 
    
    return() => {
      // 언마운트 시 setInterval 해제
      clearInterval(interval); 
      clearInterval(interval2);
    }
  })

  return (
    <>
      <IntroWrapper>
        <IntroContent>{Text}<br/>{Text2}</IntroContent>
      </IntroWrapper>
    </>
  );
};

export default Intro;