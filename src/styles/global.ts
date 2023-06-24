import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle<Object>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'DM Sans', sans-serif;;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    background: ${(props) => props.theme['background-white']};
  }

  button, input, optgroup, select, textarea {
    font-weight: 600;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
  }

  h1, h2 {
    font-size: 2.8rem;
  }

  :focus {
    outline: 0;
  }
`
