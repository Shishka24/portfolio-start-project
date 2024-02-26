import styled from "styled-components";
import { themeStyle } from "../../../styles/Theme";
import { Link } from "react-scroll";

type HeaderMenuPropsType = {
  menuItems: Array<{
    title: string;
    href: string;
  }>;
};

export const HeaderMenu = (props: HeaderMenuPropsType) => {
  return (
    <StyledNav>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListStyled key={index}>
              <NavLinkStyled
                smooth={true}
                to={item.href}
                activeClass="active"
                spy={true}
                offset={50}
              >
                {item.title}
                <Mask>
                  <span>{item.title}</span>
                </Mask>
                <Mask>
                  <span>{item.title}</span>
                </Mask>
              </NavLinkStyled>
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
  @media ${themeStyle.media.tablet} {
    display: none;
  }
`;
const ListStyled = styled.li`
  position: relative;
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
const NavLinkStyled = styled(Link)`
  font-family: Arodora Pro;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: transparent;
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
  &:hover,
  &.active {
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
