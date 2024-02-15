import { createGlobalStyle } from "styled-components";
import { themeStyle } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
    margin:0 ;
    padding:0 ;
    box-sizing:border-box ;
}


body {
  margin: 0;
  font-family: 'Arodora Pro', serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:${themeStyle.colors.secondFontColor};
  line-height:1.2;
}
section{
  padding:100px 0 ;
}
a{
    text-decoration:none ;
    color:${themeStyle.colors.fontColor}
}
ul{
    list-style:none;
}
button{
    background-color:unset;
    border:none;
    cursor: pointer;
    /* color:${themeStyle.colors.fontColor} ; */
}
section:nth-of-type(odd){
  background-image: ${themeStyle.colors.backgroundOdd};
}
section:nth-of-type(even){
 background-image: ${themeStyle.colors.backgroundEven};
}
h3{
  font-size: 20px;
  font-weight:600 ;
  letter-spacing: 1px;
}
p{
  font-size: 16px;
  font-weight:400px ;
  line-height:1.4 ;
}
/* button{
  position: fixed;
  bottom: 20px;
  /* right: 20px; */
  /* width:100px ;
  border:15px solid red ;
}  */
`;
