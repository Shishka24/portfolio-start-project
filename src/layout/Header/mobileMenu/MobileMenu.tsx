import styled, { css } from "styled-components";
import { themeStyle } from "../../../styles/Theme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMobileNav>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <PopUpMenu isOpen={false}>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <ListStyled key={index}>
                <LinkStyled href="">
                  {item}
                  <Mask>
                    <span>{item}</span>
                  </Mask>
                  <Mask>
                    <span>{item}</span>
                  </Mask>
                </LinkStyled>
              </ListStyled>
            );
          })}
        </ul>
      </PopUpMenu>
    </StyledMobileNav>
  );
};

const StyledMobileNav = styled.nav`
  display: none;
  @media ${themeStyle.media.tablet} {
    display: block;
  }
`;
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${themeStyle.colors.secondFontColor};
    position: absolute;
    left: 40px;
    bottom: 50px;
    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${themeStyle.colors.secondFontColor};
      position: absolute;
      transform: translateY(-10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          /* background-color: rgba(255, 255, 255, 0); */
          transform: rotate(-45deg) translateY(0);
        `}
    }
    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${themeStyle.colors.secondFontColor};
      position: absolute;
      transform: translateY(10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          /* background-color: rgba(255, 255, 255, 0); */
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;
const PopUpMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: none;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
const LinkStyled = styled.a`
  font-family: Arodora Pro;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${themeStyle.colors.secondFontColor};
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListStyled = styled.li`
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -10px;
    right: -10px;
    top: 50%;
    height: 1px;
    background-color: ${themeStyle.colors.secondFontColor};
    z-index: 1;
    transform: scale(0);
  }
  &:hover {
    &::before {
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: white;

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;
