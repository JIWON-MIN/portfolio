import {
  FAQWrapper,
  FAQTitle,
  FAQSub,
  FAQContent,
  FAQElement,
  FAQButton,
} from './StyledComponent';

const FAQ = () => {
  return(
    <>
      <FAQWrapper>
        <FAQTitle>
          FAQ
          <FAQSub>Frequently Asked Questions</FAQSub>
        </FAQTitle>
        <FAQContent>
          <FAQElement>자신에 대해 자유롭게 표현해주세요.<FAQButton/></FAQElement>
          <FAQElement>프로그래밍을 생업으로 삼기로 결정한 이유는 무엇인가요?<FAQButton/></FAQElement>
          <br/><br/>
        </FAQContent>
      </FAQWrapper>
    </>
  )
};

export default FAQ;