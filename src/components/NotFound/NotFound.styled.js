import styled from 'styled-components';

export const NotFoundImg = styled.img`
  width: 250px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 320px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 420px;
  }
`;
