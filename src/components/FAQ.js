import {
  FAQWrapper,
  FAQTitle,
  FAQSub,
  FAQContent,
  FAQElement,
  FAQQuestion,
  FAQButton,
  FAQAnswer,
} from './StyledComponent';
import DownButton from './img/DownButton.png';
import {useState} from 'react';

const FAQ = () => {

  const [open,setOpen] = useState(0);
  console.log(open);

  const ClickOpen = (n) => {

    console.log('Click!');

    if(n===1){
      (open===1) ? setOpen(0) : setOpen(1);
    }else if(n===2){
      (open===2) ? setOpen(0) : setOpen(2);
    }else if(n===3){
      (open===3) ? setOpen(0) : setOpen(3);
    }else if(n===4){
      (open===4) ? setOpen(0) : setOpen(4);
    }else{
      (open===5) ? setOpen(0) : setOpen(5);
    };

  };

  return(
    <>
      <FAQWrapper>
        <FAQTitle>
          FAQ
          <FAQSub>Frequently Asked Questions</FAQSub>
        </FAQTitle>
        <FAQContent>
          <FAQElement open={open}>
            <FAQQuestion>자신에 대해 자유롭게 표현해주세요.<FAQButton src={DownButton} onClick={()=>ClickOpen(1)}/></FAQQuestion>
            <FAQAnswer>안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다</FAQAnswer>
          </FAQElement>
          <FAQElement open={open}>
            <FAQQuestion>프로그래밍을 생업으로 삼기로 결정한 이유는 무엇인가요?<FAQButton src={DownButton} onClick={()=>ClickOpen(2)}/></FAQQuestion>
            <FAQAnswer>안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다</FAQAnswer>
          </FAQElement>
          <FAQElement open={open}>
            <FAQQuestion>프론트엔드라는 분야를 선택한 이유는 무엇인가요?<FAQButton src={DownButton} onClick={()=>ClickOpen(3)}/></FAQQuestion>
            <FAQAnswer>안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다</FAQAnswer>
          </FAQElement>
          <FAQElement open={open}>
            <FAQQuestion>기술 경향을 파악하고 업무 역량을 강화하기 위한 본인의 학습 방법을 설명해주세요.<FAQButton src={DownButton} onClick={()=>ClickOpen(4)}/></FAQQuestion>
            <FAQAnswer>안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다</FAQAnswer>
          </FAQElement>
          <FAQElement open={open}>
            <FAQQuestion>업무와 관련하여 지금까지의 경험 중 가장 가치 있었던 경험을 이야기해주세요.<FAQButton src={DownButton} onClick={()=>ClickOpen(5)}/></FAQQuestion>
            <FAQAnswer>안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다 안녕하세요 민지원입니다</FAQAnswer>
          </FAQElement>
          <br/><br/>
        </FAQContent>
      </FAQWrapper>
    </>
  )
};

export default FAQ;