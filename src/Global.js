import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle `
${normalize}
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
     body {
        font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
        color: hsla(0,0%,0%,0.8);
        background-color: #202329;
    
    }
    `;