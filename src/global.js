import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-weight: 300;
    font-family: Apercu, "Source Sans Pro", system,system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  h1 {
    font-size: 2.5rem;
    max-width: 800px;
  }

  span {
    font-weight: 500;
  }

  h2 a {
    text-decoration: underline solid #4AA8FF;
  }

  p {
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.text};
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
  }
`;