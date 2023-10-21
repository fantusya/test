import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { logIn } from 'redux/auth/operations';
import { loginValidationSchema } from 'helpers/validationSchemas';

import { Box } from 'components/Box/Box';
import RouteFormLoginSignUp from 'components/commonComponents/RouteFormLoginSignUp';
import Modal from 'components/commonComponents/Modal';
import { ModalContent } from 'components/commonComponents/Modal/Modal.styled';
import ForgotPassword from 'components/ForgotPassword';
import {
  Form,
  FormWrapper,
  FormButton,
  FormLabel,
  Field,
  FieldContainer,
  ErrorMessage,
  ForgotPass,
  AuthTitle,
} from 'components/commonComponents/FormsStyles/AuthForm.styled';

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    const { error, payload } = await dispatch(logIn({ email, password }));
    if (error) {
      toast.error(payload.response.data.message);
    }
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <AuthTitle>Login</AuthTitle>

            <FormWrapper>
              <FieldContainer>
                <FormLabel>Email</FormLabel>
                <Field name="email" type="email" placeholder="Email" />
                {errors.email && touched.email && (
                  <ErrorMessage component="span" name="email" />
                )}
              </FieldContainer>

              <FieldContainer>
                <FormLabel>Password</FormLabel>
                <Field name="password" type="password" placeholder="Password" />
                {errors.password && touched.password && (
                  <ErrorMessage component="span" name="password" />
                )}
              </FieldContainer>
            </FormWrapper>

            <Box textAlign="end">
              <ForgotPass
                type="button"
                onClick={() => setShowModal(!showModal)}
              >
                Forgot password?
              </ForgotPass>
            </Box>

            <FormButton type="submit">Sign In</FormButton>

            <RouteFormLoginSignUp
              question="Don’t have an account?"
              pageName="Sign Up"
              link="/signup"
            />
          </Form>
        )}
      </Formik>
      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)}>
          <ModalContent>
            <ForgotPassword onShow={a => setShowModal(a)} />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default LoginForm;
