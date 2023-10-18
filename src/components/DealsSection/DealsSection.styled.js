import styled from 'styled-components';

export const DealsTitle = styled.h2`
  margin-bottom: 20px;

  font-family: ${p => p.theme.fonts.header};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: ${p => p.theme.lineHeights.xxs};

  color: ${p => p.theme.colors.accent};

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[6]};
  }
`;
