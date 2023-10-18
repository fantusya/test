import styled from 'styled-components';

export const CardLi = styled.li`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: calc((100% - 20px) / 2);
  }
`;
