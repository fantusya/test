import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PiArrowBendDownRightBold } from 'react-icons/pi';

export const LinkList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  ${props =>
    props.$burger &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
    `}
`;

export const LinkLi = styled.li`
  ${props =>
    props.$burger &&
    css`
      display: flex;
      gap: ${p => p.theme.space[4]}px;
    `}
`;

export const StyledLink = styled(NavLink)`
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

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  ${props =>
    props.$primary &&
    css`
      color: ${p => p.theme.colors.white};
      background-color: ${p => p.theme.colors.accent};

      &:hover,
      &:focus {
        color: ${p => p.theme.colors.accent};
        background-color: ${p => p.theme.colors.transparent};
      }
    `}

  transition: color ${p => p.theme.transition.main}, background-color ${p =>
    p.theme.transition.main}, border-color ${p => p.theme.transition.main};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 11px 49px;
    min-width: 160px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${p => p.theme.fontSizes[2]};
  }

  ${props =>
    props.$burger &&
    css`
      color: ${p => p.theme.colors.white};
      background-color: ${p => p.theme.colors.accent};
    `}
`;

export const Icon = styled(PiArrowBendDownRightBold)`
  width: 30px;
  height: 30px;

  color: ${p => p.theme.colors.accent};
`;
