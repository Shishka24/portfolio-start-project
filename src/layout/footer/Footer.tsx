import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { themeStyle } from "../../styles/Theme";
import { Container } from "../../components/Container";
import { font } from "../../styles/Common";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <Name>Vladislav Sischin</Name>
          <SocialItemList>
            <SocialItem>
              <SocialIconLink>
                <Icon
                  iconId={"linked"}
                  veiwBox={"0 0 256 256"}
                  height={"20px"}
                  width={"20"}
                />
                <Icon
                  iconId={"gmail"}
                  veiwBox={"0 0 512 512"}
                  height={"20px"}
                  width={"20"}
                />
                <Icon
                  iconId={"telegram"}
                  veiwBox={"0 0 256 256"}
                  height={"20px"}
                  width={"20"}
                />
                <Icon
                  iconId={"git-hub"}
                  veiwBox={"0 0 70 70"}
                  height={"20px"}
                  width={"20"}
                />
              </SocialIconLink>
            </SocialItem>
          </SocialItemList>
          <Copyright>@2024 Vladislav Sischin</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${themeStyle.colors.backgroundOdd};
  background-color: black;
  padding: 40px 0;
  position: relative;
`;
const Name = styled.span`
  ${font({ weight: 700, Fmax: 22, Fmin: 16, lineHeight: 2 })}
  letter-spacing: 3px;
  @media ${themeStyle.media.mobile} {
  }
`;
const SocialItem = styled.div``;
const SocialItemList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;
const SocialIconLink = styled.a`
  justify-content: space-between;
`;
const Copyright = styled.small`
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  opacity: 0.5;
`;
