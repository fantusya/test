import { Box } from 'components/Box/Box';
import CardItem from 'components/CardItem';
import { CardLi } from './CardsList.styled';

const arr = [
  {
    id: 1,
    title: 'The Marina Torch',
    price: 6500000,
    ticket: 60000,
    yield: 9.25,
    daysLeft: 150,
    sold: 75,
    currency: 'Dhs',
    img: 'http://res.cloudinary.com/dpjmbj5vx/image/upload/v1697478557/barmenAvatars/652d560af0a1a8525c7e1c9a.jpg',
  },
  {
    id: 2,
    title: 'The Marina Torch',
    price: 6500000,
    ticket: 60000,
    yield: 9.25,
    daysLeft: 150,
    sold: 75,
    currency: 'Dhs',
    img: 'http://res.cloudinary.com/dpjmbj5vx/image/upload/v1697478557/barmenAvatars/652d560af0a1a8525c7e1c9a.jpg',
  },
  {
    id: 3,
    title: 'The Marina Torch',
    price: 6500000,
    ticket: 60000,
    yield: 9.25,
    daysLeft: 150,
    sold: 75,
    currency: 'Dhs',
    img: 'http://res.cloudinary.com/dpjmbj5vx/image/upload/v1697478557/barmenAvatars/652d560af0a1a8525c7e1c9a.jpg',
  },
  {
    id: 4,
    title: 'The Marina Torch',
    price: 6500000,
    ticket: 60000,
    yield: 9.25,
    daysLeft: 150,
    sold: 75,
    currency: 'Dhs',
    img: 'http://res.cloudinary.com/dpjmbj5vx/image/upload/v1697478557/barmenAvatars/652d560af0a1a8525c7e1c9a.jpg',
  },
];

const CardsList = () => {
  return (
    <Box
      as="ul"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gridGap="20px"
    >
      {arr.map(item => (
        <CardLi key={item.id}>
          <CardItem deal={item} />
        </CardLi>
      ))}
    </Box>
  );
};

export default CardsList;
