import { Box } from 'components/Box/Box';
import CardItem from 'components/CardItem';
import { CardLi } from './CardsList.styled';

const CardsList = ({ array }) => {
  return (
    <Box
      as="ul"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gridGap="20px"
    >
      {array.map(item => (
        <CardLi key={item.id}>
          <CardItem deal={item} />
        </CardLi>
      ))}
    </Box>
  );
};

export default CardsList;
