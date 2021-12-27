import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        background: #123123;
        color: #fbfbfb;
        height: 100bh;
        width: 100vw;
        margin: 0;
        padding: 0;
        overflow: hidden;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
    }
`