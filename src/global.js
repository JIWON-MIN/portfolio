import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';
  // ${reset} // export 내 첫번째줄에
  
export const GlobalStyle = createGlobalStyle`  
  body {
    background: rgba(248, 248, 248, 1);
    font-family: 'Poppins', 'NanumGothic', 'sans-serif';
    // font-family: 'NanumGothic', 'sans-serif';
  }
`;

export default GlobalStyle;