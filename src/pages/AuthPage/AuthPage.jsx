import { Box } from 'components/Box/Box';
import { AuthSection, FormContainer } from './AuthPage.styled';

const AuthPage = ({ component: Component }) => {
  return (
    <Box as="main" height="100vh">
      <AuthSection>
        <FormContainer>{Component}</FormContainer>
      </AuthSection>
    </Box>
    // <Box as="main" display="flex">
    //   <Diva></Diva>
    //   {/* <AuthSection> */}
    //   <FormContainer>
    //     <AuthTitle>{titleName}</AuthTitle>
    //     {Component}
    //   </FormContainer>
    //   {/* </AuthSection> */}
    // </Box>
  );
};

export default AuthPage;
