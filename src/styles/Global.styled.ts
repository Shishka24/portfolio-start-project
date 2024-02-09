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

/* code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} */

a{
    text-decoration:none ;
}

ul{
    list-style:none;
}

button{
    background-color:unset;
    border:none;
}

section:nth-of-type(odd){
  background-color:${themeStyle.colors.primaryBG} ;
}
section:nth-of-type(even){
  background-color:${themeStyle.colors.secondaryBG} ;
}
`;
