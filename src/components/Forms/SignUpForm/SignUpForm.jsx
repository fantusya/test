import { useDispatch } from 'react-redux';
import { signUp, logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
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
  const dispatch = useDispatch();

  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    const { error: errorSignUp, payload } = await dispatch(
      signUp({ name, email, password })
    );

    if (errorSignUp) {
      toast.error(payload.message);
    } else {
      const { error: errorLogIn, payload } = await dispatch(
        logIn({ email, password })
      );
      if (errorLogIn) {
        toast.error(payload.message);
      }
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
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
