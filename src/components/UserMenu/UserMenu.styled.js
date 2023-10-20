import styled from 'styled-components';

export const WelcomeText = styled.p`
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.s};

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[5]};
  }
`;

export const LogOutBtn = styled.button`
  display: inline-block;
  min-width: 100px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;

  text-align: center;
  font-family: ${p => p.theme.fonts.header};
  font-size: ${p => p.theme.fontSizes[1]};

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.transparent};
  text-decoration: none;

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.main};

  cursor: pointer;

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main},
    border-color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 11px 49px;
    min-width: 160px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;
