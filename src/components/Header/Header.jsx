import { Container } from 'globalStyles/globalStyles';
import { Box } from 'components/Box/Box';

import Navigation from 'components/Navigation';
import Logo from 'components/commonComponents/Logo';

import { HeaderEl } from './Header.styled';

const Header = () => {
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
          <Navigation />
        </Box>
      </Container>
    </HeaderEl>
  );
};

export default Header;
