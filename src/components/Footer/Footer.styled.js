import styled from 'styled-components';

export const FooterEl = styled.footer`
  padding: 30px 0px;

  background-color: ${p => p.theme.colors.header};

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 45px 0px;
  }
`;

export const Text = styled.b`
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.mainBg};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[5]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[6]};
  }
`;
