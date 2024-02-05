import { createGlobalStyle } from 'styled-components';

const GlobalStyle = () => {
   createGlobalStyle `
    *,
    *::before,
    *::after {
        margin: 0px;
        padding: 0px;
        border: none;
        box-sizing: border-box;
    }
     body {
        font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
        color: hsla(0,0%,0%,0.8);
    
    }
    `
};

export default GlobalStyle;