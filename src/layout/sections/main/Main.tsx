import styled from "styled-components";
import profilePic from "../../../assets/images/haha.png";
import {
  FlexWrapper,
  FlexWrapperPropsType,
} from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { themeStyle } from "../../../styles/Theme";
import { Button } from "../../../components/Button";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexMainWrapper align={"center"} justify={"space-between"}>
          <div>
            <StyledSpan>Hi There</StyledSpan>
            <StyledIntroTitle>
              My Name is <span>Vladislav Sischin</span>
            </StyledIntroTitle>
            <StyledTitle>
              I've been doing web design, front-end and back-end development for
              a year now. Do you need a website design, site layout, or maybe a
              turnkey website? <Button>Then contact me</Button>
            </StyledTitle>
          </div>
          <ImgWrapper>
            <ProfilePic src={profilePic} alt="Me" />
          </ImgWrapper>
        </FlexMainWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`;

const FlexMainWrapper = styled(FlexWrapper)<FlexWrapperPropsType>`
  @media ${themeStyle.media.mobile} {
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
  }
`;

const StyledSpan = styled.span`
  ${font({
    family: "'NEXT ART'",
    weight: 400,
    Fmax: 38,
    Fmin: 20,
    color: "E4E4E4",
  })}
  letter-spacing: 0.05em;
`;

const StyledIntroTitle = styled.h1`
  ${font({
    family: "'NEXT ART'",
    weight: 700,
    Fmax: 45,
    Fmin: 36,
    color: "E4E4E4",
  })}
  letter-spacing: 0.05em;
  margin: 10px 0;
  span {
    position: relative;
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 12px;
      background-color: #47d9ec37;
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
  @media ${themeStyle.media.mobile} {
    margin: 20px 0px 20px;
  }
`;

const StyledTitle = styled.span`
  ${font({
    weight: 100,
    Fmax: 18,
    Fmin: 10,
    color: "E4E4E4",
  })}
  letter-spacing: 0.05em;
  line-height: 1.5;
`;

const ImgWrapper = styled.div`
  position: relative;
  padding-top: 10px;
  padding-left: 10px;
  width: 600px;
  height: 500px;
  border: 15px solid #4eadbec1; /* Set the border color and width */
  border-radius: 50%; /* Make it a circle by setting border-radius to 50% */
  overflow: inherit;
  @media ${themeStyle.media.mobile} {
    border: 10px solid #4eadbe;
    width: 220px;
    height: 240px;
    padding-top: 5px;
    padding-left: 5px;
  }
`;
const ProfilePic = styled.img`
  margin-right: 10px;
  width: 430px;
  height: 530px;
  object-fit: cover;
  position: relative;
  display: block;
  @media ${themeStyle.media.mobile} {
    width: 200px;
    height: 250px;
  }
`;
