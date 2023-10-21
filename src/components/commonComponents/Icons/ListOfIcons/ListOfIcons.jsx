import { Box } from 'components/Box/Box';
import IconItem from '../IconItem';
import { IconLink } from './ListOfIcons.styled';

const ListOfIcons = ({ array }) => {
  return (
    <Box as="ul" display="flex" gridGap={[4, null, 5]}>
      {array.map(el => (
        <li key={el}>
          <IconLink href="/">
            <IconItem icon={el} />
          </IconLink>
        </li>
      ))}
    </Box>
  );
};

export default ListOfIcons;
