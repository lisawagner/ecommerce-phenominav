import { createGlobalStyle } from "styled-components";
// NOTE: webpack or other injection req'd for fonts in production.
// Type depends on which framework: Gatsby/other. Atm index.html link used.
// or just create a css file with font imports, lol.

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {

    /* Colours */
    --eerie-black: hsl(0, 0%, 13%);
    --onyx: hsl(0, 0%, 27%);
    --davys-gray: hsl(0, 0%, 33%);
    --sonic-silver: hsl(0, 0%, 47%);
    --spanish-gray: hsl(0, 0%, 60%);
    --smokey-haze: hsl(0, 0%, 90%);
    --cultured: hsl(0, 0%, 96%);
    --white: hsl(0, 100%, 100%);

    /* new colors - switch names to primary, etc.*/

    --teal: hsl(180, 100%, 25%);
    /* #008080 - teal */
    --coral: hsl(16, 100%, 66%);
    /* #ff7f50 */
    --lazer-lemon: hsl(58, 100%, 71%);
    /* #FFFA69 */
    --blue-violet: hsl(264, 100%, 63%);
    /* #8F42FF */
    --powder-blue: hsl(197, 100%, 39%);
    /* #008fc7 */


    /* old colors */
    --salmon-pink: hsl(353, 100%, 78%);
    --sandy-brown: hsl(29, 90%, 65%);
    --bittersweet: hsl(0, 100%, 70%);
    --ocean-green: hsl(152, 51%, 52%);

    /* styles */
  --border-radius-md: 10px;
  --border-radius-sm: 5px;

  --transition-timing: 0.2s ease;

  }

  body {
    padding: 0;
    margin: 0;
    overflow: auto;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyles;