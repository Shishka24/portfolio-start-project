import styled from "styled-components";
import { themeStyle } from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledNav>
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
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
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