import styled from "styled-components";
import { themeStyle } from "../styles/Theme";

export const TitleSection = styled.h2`
  text-align: center;
  font-family: " Nico Moji", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 5px;
  //в принципе это не важно так как это просто черточка под заголовком
  /* &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${themeStyle.colors.fontColor};
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    margin-bottom: 90px;
  } */
`;
