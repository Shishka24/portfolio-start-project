import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { themeStyle } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const items = ["Home", "Projects", "About Me", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
          <h1>PineCone</h1>
          <HeaderMenu menuItems={items} />
          <MobileMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: linear-gradient(110deg, #324040 60%, #0c5252 60%);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  h1 {
    padding-right: 30%;
    font-family: Nico Moji;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
