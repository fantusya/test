import { ThreeCircles } from 'react-loader-spinner';
import { Box } from 'components/Box/Box';

const Refreshing = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <ThreeCircles color="#B29F7E" />
    </Box>
  );
};

export default Refreshing;
