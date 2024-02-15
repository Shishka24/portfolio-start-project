import styled from "styled-components";
import profilePic from "../../../assets/images/haha.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { themeStyle } from "../../../styles/Theme";
import { Button } from "../../../components/Button";
import { Icon } from "../../../components/icon/Icon";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"}>
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
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  align-items: center;
  /* min-height: 100vh; */
  display: flex;
  box-sizing: border-box;
`;

const StyledSpan = styled.span`
  font-family: NEXT ART;
  font-size: 38px;
  font-weight: 400;
`;

const StyledIntroTitle = styled.h2`
  font-family: NEXT ART;
  font-size: 52px;
  font-weight: 500;
  span {
    position: relative;
    z-index: 0;
    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 12px;
      background-color: ${themeStyle.colors.secondFontColor};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const StyledTitle = styled.span`
  font-size: 18px;
  font-weight: 100;
`;

const ImgWrapper = styled.div`
  margin-top: 30px;
  width: 600px;
  height: 400px;
  border: 20px solid #4eadbe; /* Set the border color and width */
  border-radius: 50%; /* Make it a circle by setting border-radius to 50% */
  overflow: inherit;
`;
const ProfilePic = styled.img`
  width: 330px;
  height: 430px;
  object-fit: cover;
  border-radius: 3cap;
  position: relative;
  display: block;
`;

const IconWrapper = styled.svg``;

/* margin-top: 120px;
position: relative;
&::before {
  content: "";
  width: 632px;
  height: 674.47px;
  position: absolute;
  background: url(${require("../../../assets/images/Ellipse 6.svg")})
  center/cover no-repeat;
} */
