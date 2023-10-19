import { Container } from 'globalStyles/globalStyles';

import Logo from 'components/commonComponents/Logo';
import { FooterEl } from './Footer.styled';

const Footer = () => {
  return (
    <FooterEl>
      <Container>
        <div>
          <Logo />
        </div>
      </Container>
    </FooterEl>
  );
};

export default Footer;
