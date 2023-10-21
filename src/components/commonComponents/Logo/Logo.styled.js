import styled from 'styled-components';
import { BsBuildingsFill } from 'react-icons/bs';

export const Icon = styled(BsBuildingsFill)`
  width: 100%;
  height: 100%;

  color: inherit;

  transition: color ${p => p.theme.transition.main};
`;

export const LogoLink = styled.a`
  display: inline-block;
  width: 30px;
  height: 30px;

  color: ${p => p.theme.colors.accent};

  transition: color ${p => p.theme.transition.main};

  &:hover ${Icon}, &:focus ${Icon} {
    color: ${p => p.theme.colors.mainBg};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 45px;
    height: 45px;
  }
`;
