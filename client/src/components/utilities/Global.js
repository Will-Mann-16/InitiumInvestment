import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
export default createGlobalStyle`
    ${normalize()}
    html{
      box-sizing: border-box;
    }
    *, *:before, *:after{
      box-sizing: inherit;
    }
    body {
  font-family: 'Nunito', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #333;
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    h1, h2, h3, h4, h5, h6{
      font-weight: 600;
    }
`;