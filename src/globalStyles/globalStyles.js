import styled, { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
 body {
    margin: 0;

    font-family: 'Lato', sans-serif;
    font-size: ${p => p.theme.fontSizes[5]};
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.m};

    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.mainBg};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  input{
    outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  /* outline: 1px solid red; */

  padding: 0 20px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: ${p => p.theme.breakpoints[1]};
    padding: 0 ${p => p.theme.space[5]}px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p => p.theme.breakpoints[2]};
    padding: 0 80px;
  }
`;
