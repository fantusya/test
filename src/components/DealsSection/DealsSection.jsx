import { Box } from 'components/Box/Box';
import { Container } from 'globalStyles/globalStyles';

import CardsList from 'components/CardsList';

import { DealsTitle } from './DealsSection.styled';

const DealsSection = () => {
  return (
    <Box as="section" py="50px">
      <Container>
        <DealsTitle id="deals">Open Deals</DealsTitle>
        <Box>
          <CardsList />
        </Box>
      </Container>
    </Box>
  );
};

export default DealsSection;
