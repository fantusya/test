import { Box } from 'components/Box/Box';
import { AuthSection, FormContainer } from './AuthPage.styled';

const AuthPage = ({ component: Component }) => {
  return (
    <Box height="100vh">
      <AuthSection>
        <FormContainer>{Component}</FormContainer>
      </AuthSection>
    </Box>
  );
};

export default AuthPage;
