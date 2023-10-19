import { Box } from 'components/Box/Box';

import { StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Box
      as="ul"
      display="flex"
      gridGap="10px"
      justifyContent="flex-end"
      alignItems="center"
    >
      <li>
        <StyledLink to="/login">Login</StyledLink>
      </li>
      <li>
        <StyledLink $primary to="/signup">
          Sign Up
        </StyledLink>
      </li>
    </Box>
  );
};

export default AuthNav;
