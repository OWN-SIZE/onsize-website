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
        @media (min-width: 1024px) {
            font-size: 35%;
        }
        @media (min-width: 1280px) {
            font-size: 45%;
        }
        @media (min-width: 1600px) {
            font-size: 50%;
        }
        @media (min-width: 2000px) {
            font-size: 62.5%;
        }
    }
    

    a {
    color: inherit;
    text-decoration: none;
    }

    .non-clickable {
        pointer-events: none;
    }
`;

export default GlobalStyle;
