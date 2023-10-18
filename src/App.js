import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from 'globalStyles/globalStyles';
import FontStyles from 'globalStyles/fontStyles';

import SharedLayout from 'components/SharedLayout';
import SignupForm from 'components/Forms/SignUpForm';
import LoginForm from 'components/Forms/LoginForm';

const HomePage = lazy(() => import('pages/HomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="signup"
            element={
              <AuthPage titleName="Sign Up" component={<SignupForm />} />
            }
          />
          <Route
            path="login"
            element={<AuthPage titleName="Login" component={<LoginForm />} />}
          />

          {/* <Route path="/auth" element={<AuthPage />} /> */}

          {/* <Route
            path="register"
            element={
              <RestrictedRouteRegister
                successRegister={<Message />}
                failedOrNotRegistered={
                  <AuthPage
                    titleName="registration"
                    formName="Registration form"
                    component={<RegisterForm />}
                  />
                }
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={
                  <AuthPage
                    titleName="login"
                    formName="Login form"
                    component={<LoginForm />}
                  />
                }
              />
            }
          /> */}

          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>

      <FontStyles />
      <GlobalStyle />
    </>
  );
};

export default App;
