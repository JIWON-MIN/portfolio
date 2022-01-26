import React, {forwardRef} from 'react';
import{
  WorksWrapper,
  WorksTitle,
  WorksSub,
  WorksContent,
  WorksElement,
  WorksImg,
  WorksDetail,
  WorksName,
  WorksDesc,
  WorksMyRole,
  WorksRoleElement,
  WorksGithubIcon,
} from './StyledComponent';
import Dokit from './img/dokit.jpg';
import Cosmos from './img/cosmos.JPG';
import portfolio from './img/portfolio.JPG';

const Works = forwardRef((props, ref) => {

  const GotoPage = (link) => {

    // https://m.blog.naver.com/deersoul6662/221805875601

    window.location.href = link;
    window.open(link);
  }

  return (
    <>
      <WorksWrapper>
        <WorksTitle ref={ref}>
          Works
          <WorksSub>What I have created (Only team projects here)</WorksSub>
        </WorksTitle>
        <WorksContent>
          <WorksElement>
            <WorksDetail>
              <WorksName>DOKIT(ToDo + Bucket List)</WorksName>
              <WorksDesc>: 친구 및 팀 목록을 관리하여, 개인 용 일별+월별 투두리스트와 팀 용 캘린더 투두리스트로 모두의 효율적인 일정관리를 돕고, 친구 목록에 있는 사용자의 페이지로 접근해 공개된 일정을 확인하고 방명록을 남길 수 있도록 하는 SNS형 일정 관리 웹 플랫폼</WorksDesc>
              <WorksMyRole>
                <WorksRoleElement>아이디어 산출 및 구체화와 Figma를 사용한 전체 UI 담당</WorksRoleElement>
                <WorksRoleElement>SRS, 최종 보고서, 논문 작성 참여</WorksRoleElement>
                <WorksRoleElement>React와 styled-component를 활용하여 친구 및 팀 검색, 추가, 삭제, 즐겨찾기 관련 Front-end 기능 전담</WorksRoleElement>
              </WorksMyRole>
              <WorksGithubIcon onClick={()=>GotoPage("https://github.com/JIWON-MIN/dokit")} />
            </WorksDetail>
            <WorksImg src={Dokit} />
          </WorksElement>
          <WorksElement>
            <WorksDetail>
              <WorksName>COSMOS(Catch Our Sound, Make Our Script)</WorksName>
              <WorksDesc>: 구글 STT API를 활용하여 오디오 파일을 업로드하면 스크립트를 출력해주고, 별명 및 날짜를 포함한 파일 목록 관리 및 스크립트 관련 요약, 연관 검색어 서치 기능, 번역 기능 등을 제공하여 문서화된 음성을 편리하게 다룰 수 있도록 돕는 웹 사이트</WorksDesc>
              <WorksMyRole>
                <WorksRoleElement>아이디어 구체화 및 설계 제안서(1~4차), 최종 보고서 작성 참여</WorksRoleElement>
                <WorksRoleElement>Figma를 이용한 전체 UI 설계 전담</WorksRoleElement>
                <WorksRoleElement>프론트엔드의 대부분인 STT(Speech-To-Text), 요약, 번역, 오디오 파일 관련 서버 통신 및 출력 기능 전담</WorksRoleElement>
              </WorksMyRole>
              <WorksGithubIcon onClick={()=>GotoPage("https://github.com/JIWON-MIN/HMFingers")} />
            </WorksDetail>
            <WorksImg src={Cosmos} />
            {/* portfolio 추가하기 */}
          </WorksElement>
          <WorksElement>
            <WorksDetail>
              <WorksName>Portfollio</WorksName>
              <WorksDesc>: 소개와 사용 가능한 언어와 기술, 개발 이력 등을 담은 개인 연습 및 홍보 용 포트폴리오 웹사이트 (개인 프로젝트)</WorksDesc>
              <WorksMyRole>
                <WorksRoleElement>Figma를 사용한 전체 UI 구상</WorksRoleElement>
                <WorksRoleElement>React와 styled-component를 활용하여 약 1-2주(2022년 1월 후반)간 개발</WorksRoleElement>
                <WorksRoleElement>꾸준히 유지보수 중!</WorksRoleElement>
              </WorksMyRole>
              <WorksGithubIcon onClick={()=>GotoPage("https://github.com/JIWON-MIN/portfolio")} />
            </WorksDetail>
            <WorksImg src={portfolio} />
          </WorksElement>
        </WorksContent>
      </WorksWrapper>
    </>
  );
});

export default Works;