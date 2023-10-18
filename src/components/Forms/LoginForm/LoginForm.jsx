import { Formik } from 'formik';
import { loginValidationSchema } from 'helpers/validationSchemas';

import RouteFormLoginSignUp from 'components/commonComponents/RouteFormLoginSignUp';

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
  const handleSubmit = ({ email, password }, { resetForm }) => {
    //   dispatch(signup({ email, password }));
    resetForm();
  };
  return (
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
          <ForgotPass>Forgot password?</ForgotPass>

          <FormButton type="submit">Sign In</FormButton>

          <RouteFormLoginSignUp
            question="Don’t have an account?"
            pageName="Sign Up"
            link="/signup"
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
