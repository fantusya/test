import { Container } from 'globalStyles/globalStyles';
import { Box } from 'components/Box/Box';

import { HeroSection, HeroTitle, HeroText, HeroLink } from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Box mb={['30px', null, '20px', '30px']}>
          <HeroTitle>The chemical negatively charged</HeroTitle>
          <HeroText>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is{' '}
          </HeroText>
        </Box>

        <HeroLink href="#deals">Get Started</HeroLink>
      </Container>
    </HeroSection>
  );
};

export default Hero;
