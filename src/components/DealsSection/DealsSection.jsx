import { useEffect, useState } from 'react';
import { Box } from 'components/Box/Box';
import { Container } from 'globalStyles/globalStyles';

import { fetchDeals } from 'api/deals';

import CardsList from 'components/CardsList';
import { DealsTitle } from './DealsSection.styled';

import Refreshing from 'components/Refreshing';
import NotFound from 'components/NotFound';
import { Status } from 'constants/stateMachine';

const DealsSection = () => {
  const [deals, setDeals] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    async function getDeals() {
      setStatus(Status.pending);

      try {
        const fetchedDeals = await fetchDeals();
        setDeals(fetchedDeals);
        setStatus(Status.resolved);
      } catch (error) {
        setStatus(Status.rejected);
        console.log(error);
      }
    }

    getDeals();
  }, []);
  return (
    <Box as="section" py="50px">
      <Container>
        <DealsTitle id="deals">Open Deals</DealsTitle>
        <Box>
          {status === Status.resolved && <CardsList array={deals} />}
          {status === Status.pending && <Refreshing />}
          {status === Status.rejected && <NotFound />}
        </Box>
      </Container>
    </Box>
  );
};

export default DealsSection;
