import { Container } from 'globalStyles/globalStyles';
import { Box } from 'components/Box/Box';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

import Logo from 'components/commonComponents/Logo';
import ListOfIcons from 'components/commonComponents/Icons/ListOfIcons';
import { FooterEl, Text } from './Footer.styled';

const array = [BsFacebook, BsInstagram, BsLinkedin, BsTwitter];

const Footer = () => {
  return (
    <FooterEl>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Logo />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            gridGap={['10px', null, 4, '25px']}
          >
            <Text>Feel free to contact us</Text>
            <ListOfIcons array={array} />
          </Box>
        </Box>
      </Container>
    </FooterEl>
  );
};

export default Footer;
