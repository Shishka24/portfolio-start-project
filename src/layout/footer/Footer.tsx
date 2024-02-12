import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { themeStyle } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
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
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${themeStyle.colors.backgroundOdd};
  background-color: black;
  padding: 40px 0;
`;
const Name = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 3px;
`;
const SocialItem = styled.div``;
const SocialItemList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;
const SocialIconLink = styled.a`
  /* background-color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex; */
`;
const Copyright = styled.small`
  font-weight: 400;
  text-align: center;
  font-size: 14px;
  opacity: 0.5;
`;
