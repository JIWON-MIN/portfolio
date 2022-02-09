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
import {forwardRef, useState} from 'react';

const FAQ = forwardRef((props, ref) => {

  const [open,setOpen] = useState(0);

  const ClickOpen = (n) => {

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
        <FAQTitle ref={ref}>
          FAQ
          <FAQSub>Frequently Asked Questions</FAQSub>
        </FAQTitle>
        <FAQContent>
          <FAQElement open={open}>
            <FAQQuestion>자신에 대해 자유롭게 표현해주세요.<FAQButton src={DownButton} onClick={()=>ClickOpen(1)}/></FAQQuestion>
            <FAQAnswer>
              신입 프론트엔드 엔지니어로 React와 Github를 이용하여 최근 1~2년간 개인 및 팀 프로젝트의 설계, 배포 경험을 가지고 있습니다.
              <br/>저의 MBTI인 ISTJ는 강한 집중력과 책임감, 신중한 일처리의 특징을 가지며, 꼼꼼하고 열정이 넘치는 성격 또한 저의 장점이라고 자부할 수 있습니다. 초반에는 다소 내향적일 수 있지만, 조직에 유연성 있게 적응하기 위해 항상 노력하고, 계획표에 맞춰 주어진 일을 미루지 않고 정확하게 분석하여 실행함과 더불어 빠른 학습 속도를 갖추고 있습니다.</FAQAnswer>
          </FAQElement>
          <FAQElement open={open}>
            <FAQQuestion>프로그래밍을 생업으로 삼기로 결정한 이유는 무엇인가요?<FAQButton src={DownButton} onClick={()=>ClickOpen(2)}/></FAQQuestion>
            <FAQAnswer>
              적성에 맞는다고 생각하기 때문입니다. 개발을 하는 동안에는 힘든 상황에도 흥미를 느낍니다. 포기하고 중단하고 싶다는 생각이 들지 않았고, 앞으로의 제 자신의 발전 또한 기대되는 분야입니다.
            </FAQAnswer>
          </FAQElement>
          <FAQElement open={open}>
            <FAQQuestion>프론트엔드라는 분야를 선택한 이유는 무엇인가요?<FAQButton src={DownButton} onClick={()=>ClickOpen(3)}/></FAQQuestion>
            <FAQAnswer>
              가장 큰 포인트는 직관적으로 출력되는 결과에 대한 행복감과 성취감이었습니다. 코드를 한 줄 한 줄 적어 내려갈 때마다 기대감이 더해지고, 중간 결과물을 확인했을 때 어떻게 하면 더 나은 코드와 결과를 만들어낼 수 있을까 고민하게 되며, 얼른 다음 섹션도 만들어보고 싶은 생각이 듭니다. 소프트웨어 학부에서 많은 분야와 직업을 접해볼 수 있었지만, 프론트엔드는 이러한 모든 과정이 굉장히 매력적인 분야입니다.
            </FAQAnswer>
          </FAQElement>
          <FAQElement open={open}>
            <FAQQuestion>업무 역량을 강화하기 위한 본인의 학습 방법을 설명해주세요.<FAQButton src={DownButton} onClick={()=>ClickOpen(4)}/></FAQQuestion>
            <FAQAnswer>
              2019년부터 약 2년 이상 중고등학생을 대상으로 시간제 강사로서 인천에 위치한 학원에서 근무 중이며 동시에 영어, 수학 과외를 진행하고 있습니다. 때문에 다양한 분야의 학습 방법에 관하여 깊게 고민해 본 경험이 여러 번 있습니다.
              <br/>우선적으로, 시간을 체계적이고 효율적으로 사용하기 위해 항상 노력합니다. 먼저 다양한 맥락을 가진 작업들의 임팩트와 우선순위를 판단하고, 작업물이 본인의 손을 떠나기 직전까지 만족할 수 없는 부분에 대하여 틈틈이 수정 및 보완의 방향과 방법을 고민하여 완성도를 높이고자 하는 습관을 가지고 있습니다. 더불어 유지 보수 가능한 코드를 작성하기 위해 끊임없이 고민하며, 다양한 방법으로 도움을 구할 수 있습니다.
              <br/>복습 또한 중요합니다. 이러한 복습은 단순 암기를 넘어 한 번 학습한 내용을 스스로 머릿속에 정리하고 활용법을 숙지하는 전반적인 과정을 의미합니다. 이를 성실히 한다면 단단한 기초와 자유로운 활용 능력은 자연스레 따라올 수 있을 것이라고 생각합니다. 
            </FAQAnswer>
          </FAQElement>
          <FAQElement open={open}>
            <FAQQuestion>업무와 관련하여 가장 가치 있었던 경험을 이야기해주세요.<FAQButton src={DownButton} onClick={()=>ClickOpen(5)}/></FAQQuestion>
            <FAQAnswer>
              사실 대학에 진학하기 전까지 개발 경험이 거의 없었습니다. 입학 직후 약 2개월간 C언어를 배우고, 교수님께서 공지하신 명세에 맞추어 학습한 내용만으로 소코반 게임을 개발하라는 첫 과제를 받았습니다. 처음으로 해보는 팀 프로젝트 개발이었는데, 랜덤으로 짜인 팀원 넷이서 며칠 동안이나 밤을 지새웠던 기억이 아직 생생합니다. 마침내 기한에 다다라 구색을 갖춰 제출했던 저희의 제출물에 대한 채점 결과는 처참했습니다. 너무나 부족했던 예외 처리, 가독성이라고는 찾아볼 수 없는 700줄이 넘는 지저분한 코드는 지금 돌아보면 게임이 진행되었던 것이 신기할 뿐입니다. 
              <br/>욕심이 생겼습니다. 일단 정신없이 한 학기를 먼저 마무리해두고, 모아둔 알바비로 방학 동안 매일 아침 학교에서 진행하는 C언어 특강에 참석하고, 유튜브 강의와 여러 레퍼런스들을 학습하여 2학기가 시작하기 전 해당 코드를 100줄 이하로 줄여볼 수 있었습니다.  예외 처리와 유지 보수의 효율성 또한 당연히 향상되었고, 행복했습니다. 
              <br/>단순히 실행만이 목적인 코드는 아주 짧은 학습을 거친 사람들도 누구나 작성할 수 있습니다. 개발자와 사용자 모두가 행복한 프로그래머가 되겠습니다.
            </FAQAnswer>
          </FAQElement>
        </FAQContent>
      </FAQWrapper>
    </>
  )
});

export default FAQ;