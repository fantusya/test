import styled from 'styled-components';
import { SlMenu } from 'react-icons/sl';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  width: 30px;
  height: 30px;

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.transparent};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  cursor: pointer;

  transition: color ${p => p.theme.transition.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
  }
`;

export const Icon = styled(SlMenu)`
  width: 100%;
  height: 100%;

  color: inherit;
`;
