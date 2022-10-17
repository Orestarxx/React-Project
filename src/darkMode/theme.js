import {createGlobalStyle} from 'styled-components'
const lightTheme = {
    body: "#fff",
    fontColor: "#0A0A25FF"
}
const darkTheme = {
 body: "#0A0A25FF",
 fontColor: "#fff"
}
const GlobalStyles = createGlobalStyle`
    body {
    background-color: ${(props) => props.theme.body};
    }

`;
export {lightTheme,darkTheme,GlobalStyles};