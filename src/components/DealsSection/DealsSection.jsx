import { useEffect, useState } from 'react';
import { Box } from 'components/Box/Box';
import { Container } from 'globalStyles/globalStyles';

import { fetchDeals } from 'api/deals';

import CardsList from 'components/CardsList';

import { DealsTitle } from './DealsSection.styled';

// const array = [
//   {
//     id: 1,
//     title: 'The Marina Torch',
//     price: 6500000,
//     ticket: 60000,
//     yield: 9.25,
//     daysLeft: 150,
//     sold: 75,
//     currency: 'Dhs',
//     img: 'http://res.cloudinary.com/dpjmbj5vx/image/upload/v1697478557/barmenAvatars/652d560af0a1a8525c7e1c9a.jpg',
//   },
//   {
//     id: 2,
//     title: 'The Marina Torch',
//     price: 6500000,
//     ticket: 60000,
//     yield: 9.25,
//     daysLeft: 150,
//     sold: 75,
//     currency: 'Dhs',
//     img: 'http://res.cloudinary.com/dpjmbj5vx/image/upload/v1697478557/barmenAvatars/652d560af0a1a8525c7e1c9a.jpg',
//   },
//   {
//     id: 3,
//     title: 'The Marina Torch',
//     price: 6500000,
//     ticket: 60000,
//     yield: 9.25,
//     daysLeft: 150,
//     sold: 75,
//     currency: 'Dhs',
//     img: 'http://res.cloudinary.com/dpjmbj5vx/image/upload/v1697478557/barmenAvatars/652d560af0a1a8525c7e1c9a.jpg',
//   },
//   {
//     id: 4,
//     title: 'The Marina Torch',
//     price: 6500000,
//     ticket: 60000,
//     yield: 9.25,
//     daysLeft: 150,
//     sold: 75,
//     currency: 'Dhs',
//     img: 'http://res.cloudinary.com/dpjmbj5vx/image/upload/v1697478557/barmenAvatars/652d560af0a1a8525c7e1c9a.jpg',
//   },
// ];

const DealsSection = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function getDeals() {
      // setStatus(Status.PENDING);

      try {
        const fetchedDeals = await fetchDeals();
        console.log('DEALS');
        setDeals(fetchedDeals);
        // setStatus(Status.RESOLVED);
      } catch (error) {
        // setStatus(Status.REJECTED);
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
          <CardsList array={deals} />
        </Box>
      </Container>
    </Box>
  );
};

export default DealsSection;
