import styled from 'styled-components';

export const FormLabel = styled.span`
  font-family: ${p => p.theme.fonts.header};
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: ${p => p.theme.lineHeights.l};

  color: ${p => p.theme.colors.header};

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[5]};
  }
`;

export const Input = styled.input`
  padding: 10px 14px;

  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.lineHeights.l};
  font-weight: ${p => p.theme.fontWeights.normal};

  border: ${p => p.theme.borders.bold} ${p => p.theme.colors.inputBg};
  border-radius: ${p => p.theme.radii.main};

  color: ${p => p.theme.colors.placeholder};
  background-color: ${p => p.theme.colors.inputBg};

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 14px 20px 12px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 100px;
  padding: 10px 14px;

  text-align: center;
  font-family: ${p => p.theme.fonts.header};
  font-size: ${p => p.theme.fontSizes[1]};

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  text-decoration: none;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.main};

  cursor: pointer;

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main},
    border-color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.white};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 11px 49px;
    min-width: 160px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;
