import{
  WorksWrapper,
  WorksTitle,
  WorksSub,
  WorksContent,
  WorksElement,
} from './StyledComponent';
import Dokit from './img/dokit.jpg';
import Cosmos from './img/cosmos.JPG';

const Works = () => {
  return (
    <>
      <WorksWrapper>
        <WorksTitle>
          Works
          <WorksSub>What I have created</WorksSub>
        </WorksTitle>
        <WorksContent>
          <WorksElement src={Dokit}/>
          <WorksElement src={Cosmos}/>
          <WorksElement />
        </WorksContent>
      </WorksWrapper>
    </>
  );
};

export default Works;