import styled from "styled-components";
import { font } from "../styles/Common";

export const Button = styled.button`
  ${font({
    family: "'NEXT ART'",
    weight: 700,
    Fmax: 24,
    Fmin: 10,
    color: "#1cc0e9df",
  })}
  letter-spacing: 1px;
  height: 47px;
  text-transform: uppercase;
  border-radius: 6px;
  background: linear-gradient(110deg, #485c5c 50%, #127c7c 50%);
  box-shadow: 2px 2px 13px 0px #2a9b3c79;
`;
