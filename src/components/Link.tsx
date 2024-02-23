import styled, { css } from "styled-components";
import { themeStyle } from "../styles/Theme";
import { font } from "../styles/Common";

export const Link = styled.a<{ active?: boolean }>`
  ${font({
    weight: 400,
    Fmax: 14,
    Fmin: 12,
    color: "E4E4E4",
  })}
  color: ${themeStyle.colors.secondFontColor};
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;
  &:hover {
    &::before {
      height: 5px;
    }
  }
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -1px;
    left: -10px;
    right: -10px;
    background-color: ${themeStyle.colors.fontColor};
    z-index: -1;
    ${(props) =>
      props.active &&
      css<{ active?: boolean }>`
        height: 5px;
      `}
  }
`;
