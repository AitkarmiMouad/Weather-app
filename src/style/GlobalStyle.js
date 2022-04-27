import { createGlobalStyle } from 'styled-components'
import "@fontsource/raleway/300.css"
import "@fontsource/raleway/500.css"
import "@fontsource/raleway/700.css"

const GlobalStyle = createGlobalStyle`

:root {
  --custom-darkblue-100 : #1E213A;
  --custom-darkblue-200: #100E1D;
  --custom-lightblue: #3C47E9;
  --custom-white: #E7E7EB;
  --custom-grey-100: #A09FB1;
  --custom-grey-200: #6E707A;
  --custom-grey-300: #585676;
  --custom-font-family: 'Raleway', sans-serif;
}

body{
  margin: 0;
  padding: 0;
}

*{
  font-family: var(--custom-font-family);
  font-weight: 500;
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: var(--custom-darkblue-100);
}

::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: var(--custom-darkblue-200);
}

::-webkit-scrollbar {
	width: 12px;
	background-color: var(--custom-darkblue-200);
}

`

export default GlobalStyle;