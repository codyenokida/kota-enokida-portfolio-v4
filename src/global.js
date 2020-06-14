import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: Apercu, "Source Sans Pro", system,system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  a {
    color: ${({ theme }) => theme.text};
  }
`;