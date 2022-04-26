import { createGlobalStyle } from "styled-components";
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/500.css"
import "@fontsource/raleway/700.css"

const GlobalStyle = createGlobalStyle`

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --custom-darkblue-100 : #1E213A;
  --custom-darkblue-200: #100E1D;
  --custom-lightblue: #3C47E9;
  --custom-white: #E7E7EB;
  --custom-gray-100: #A09FB1;
  --custom-gray-200: #6E707A;
  --custom-gray-300: #585676;
  --custom-font-family: 'Raleway', sans-serif;
}

body{
  margin: 0;
  padding: 0;
  height: 100%;

}
html, #root {
  height: 100%;
}

*{
  font-family: var(--custom-font-family);
  font-weight: 500;
  /* font-size: 1rem; */

}

`

export default GlobalStyle;