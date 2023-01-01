import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    html,
    body {
    max-width: 100vw;
    overflow-x: hidden;
    }

    html {
        font-size: 62.5%;
    }
    

    a {
    color: inherit;
    text-decoration: none;
    }

`;

export default GlobalStyle;
