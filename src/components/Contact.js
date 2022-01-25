import { forwardRef } from 'react';
import {
  ContactWrapper,
  ContactTitle,
  ContactSub,
  ContactContent,
  ContactClickInducing,
  ContactElement,
  ContactMailIcon,
  ContactGithubIcon,
  ContactBlogIcon,
  ContactAddress,
} from './StyledComponent';


const Contact = forwardRef((props, ref) => {

  const CopyEmail = () => {

    // https://kyounghwan01.github.io/blog/React/clipboard-copy/

    if(!document.queryCommandSupported("copy")){
      return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }

    const textarea = document.createElement("textarea");
    textarea.value = "z_zzz7@naver.com";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    return alert("이메일 주소가 클립보드에 복사되었습니다!");

  }

  const GotoPage = (link) => {

    // https://m.blog.naver.com/deersoul6662/221805875601

    window.location.href = link;
    window.open(link);
  }

  return(
    <>
    <ContactWrapper>
      <ContactTitle ref={ref}>
        Contact
        <ContactSub>Contact me on...</ContactSub>
      </ContactTitle>
      <ContactContent>
        <ContactClickInducing>Click on Icon!</ContactClickInducing>
        <ContactElement>
          <ContactMailIcon onClick={CopyEmail}/>
          <ContactAddress>z_zzz7@naver.com</ContactAddress>
        </ContactElement>
        <ContactElement>
          <ContactGithubIcon onClick={()=>GotoPage("https://github.com/JIWON-MIN")}/>
          <ContactAddress>https://github.com/JIWON-MIN</ContactAddress>
        </ContactElement>
        <ContactElement>
          <ContactBlogIcon onClick={()=>GotoPage("https://velog.io/@loopy")}/>
          <ContactAddress>https://velog.io/@loopy</ContactAddress>
        </ContactElement>
      </ContactContent>
    </ContactWrapper>
    </>
  )
});

export default Contact;