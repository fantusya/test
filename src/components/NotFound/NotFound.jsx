import { Box } from 'components/Box/Box';
import { Container } from 'globalStyles/globalStyles';
import img from 'images/notFound/notFound.png';
import { NotFoundImg } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <Box as="section" py={6}>
        <Container>
          <Box textAlign="center">
            <NotFoundImg src={img} alt="Page not found" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default NotFound;
