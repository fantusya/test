import { Formik } from 'formik';
import { signUpValidationSchema } from 'helpers/validationSchemas';

import RouteFormLoginSignUp from 'components/commonComponents/RouteFormLoginSignUp';

import {
  Form,
  FormWrapper,
  FormButton,
  FormLabel,
  Field,
  FieldContainer,
  ErrorMessage,
  AuthTitle,
} from 'components/commonComponents/FormsStyles/AuthForm.styled';

const SignUpForm = () => {
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    //   dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={signUpValidationSchema}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <AuthTitle>Sign Up</AuthTitle>

          <FormWrapper $signup>
            <FieldContainer>
              <FormLabel>Name</FormLabel>
              <Field name="name" type="text" placeholder="Name" />
              {errors.email && touched.email && (
                <ErrorMessage component="p" name="name" />
              )}
            </FieldContainer>

            <FieldContainer>
              <FormLabel>Email</FormLabel>
              <Field name="email" type="email" placeholder="Email" />
              {errors.email && touched.email && (
                <ErrorMessage component="p" name="email" />
              )}
            </FieldContainer>

            <FieldContainer>
              <FormLabel>Password</FormLabel>
              <Field name="password" type="password" placeholder="Password" />
              {errors.password && touched.password && (
                <ErrorMessage component="p" name="password" />
              )}
            </FieldContainer>
          </FormWrapper>

          <FormButton type="submit">Sign Up</FormButton>

          <RouteFormLoginSignUp
            question="Already have an account?"
            pageName="Login"
            link="/login"
          />
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
