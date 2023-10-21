import styled from 'styled-components';

export const IconLink = styled.a`
  display: inline-block;

  width: 20px;
  height: 20px;

  color: ${p => p.theme.colors.accent};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainBg};
  }

  transition: color ${p => p.theme.transition.main};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 25px;
    height: 25px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 32px;
    height: 32px;
  }
`;
