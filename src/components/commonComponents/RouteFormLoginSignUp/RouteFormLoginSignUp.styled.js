import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Text = styled.p`
  text-align: center;

  font-family: ${p => p.theme.fonts.text};
  font-size: ${p => p.theme.fontSizes[1]};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: ${p => p.theme.lineHeights.l};

  color: ${p => p.theme.colors.mainBg};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    color: ${p => p.theme.colors.header};
  }
`;

export const LinkToOtherPage = styled(Link)`
  position: relative;

  text-decoration: none;

  color: ${p => p.theme.colors.accent};

  transition: color ${p => p.theme.transition.main},
    background-color ${p => p.theme.transition.main};

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0px;

    width: 0%;
    height: ${p => p.theme.space[1]}px;

    border-radius: ${p => p.theme.radii.main};

    background-color: ${p => p.theme.colors.accent};

    transition: width ${p => p.theme.transition.main},
      background-color ${p => p.theme.transition.main};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.placeholder};
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
    background-color: ${p => p.theme.colors.placeholder};
  }
`;
