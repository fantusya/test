import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAuth } from 'hooks/useAuth';
import { Box } from 'components/Box/Box';
import { AuthSection, FormContainer } from './AuthPage.styled';

const AuthPage = ({ component: Component }) => {
  const { error } = useAuth();

  // useEffect(() => {
  //   // toast(error?.statusCode);

  //   // if (error?.statusCode) {
  //   //   console.log('ERROR');
  //   //   toast(error?.message);
  //   // }
  // }, [error]);

  return (
    <Box height="100vh">
      <AuthSection>
        <FormContainer>{Component}</FormContainer>
      </AuthSection>
    </Box>
    // <Box display="flex">
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
