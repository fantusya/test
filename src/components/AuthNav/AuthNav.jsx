import { LinkList, StyledLink, LinkLi, Icon } from './AuthNav.styled';

const AuthNav = ({ $burger }) => {
  return (
    <LinkList $burger={$burger}>
      <LinkLi $burger={$burger}>
        {$burger && <Icon />}
        <StyledLink to="/login">Login</StyledLink>
      </LinkLi>
      <LinkLi $burger={$burger}>
        {$burger && <Icon />}
        <StyledLink $primary to="/signup">
          Sign Up
        </StyledLink>
      </LinkLi>
    </LinkList>
  );
};

export default AuthNav;
