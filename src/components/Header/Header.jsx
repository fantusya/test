import { Container } from 'globalStyles/globalStyles';
import { Box } from 'components/Box/Box';

import { HeaderEl, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <nav>
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
        </nav>
      </Container>
    </HeaderEl>
  );
};

export default Header;
