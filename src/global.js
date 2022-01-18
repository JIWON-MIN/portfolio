import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';
  // ${reset} // export 내 첫번째줄에
  
export const GlobalStyle = createGlobalStyle`  
  body {
    background: rgba(248, 248, 248, 1);
    font-family: 'Poppins', 'Nanum Gothic', 'sans-serif';
    // font-family: 'NanumGothic', 'sans-serif';
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('※'),
    url('../fonts/Roboto-Regular.eot'),
    url('../fonts/Roboto-Regular.eot#iefix') format('embedded-opentype')
    url('../fonts/Roboto-Regular.woff') format('woff'),
    url('../fonts/Roboto-Regular.otf') format('opentype'),
    url('../fonts/Roboto-Regular.ttf') format('truetype');
    unicode-range:U+0041-005A, U+0061-007A, U+0030-0039;
}
`;

export default GlobalStyle;