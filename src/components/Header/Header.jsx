import { Container } from 'globalStyles/globalStyles';
import { Box } from 'components/Box/Box';

import { useAuth } from 'hooks/useAuth';

import Logo from 'components/commonComponents/Logo';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { HeaderEl } from './Header.styled';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderEl>
      <Container>
        <Box
          as="nav"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Container>
    </HeaderEl>
  );
};

export default Header;
