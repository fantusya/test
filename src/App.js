import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import { GlobalStyle } from 'globalStyles/globalStyles';
import FontStyles from 'globalStyles/fontStyles';

import { RestrictedRoute } from 'components/commonComponents/RestrictedRoute';

import Refreshing from 'components/Refreshing';
import SharedLayout from 'components/SharedLayout';
import SignupForm from 'components/Forms/SignUpForm';
import LoginForm from 'components/Forms/LoginForm';
import NotFound from 'components/NotFound';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('pages/HomePage'));
const AuthPage = lazy(() => import('pages/AuthPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Refreshing />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="signup"
            element={
              <RestrictedRoute
                component={
                  <AuthPage titleName="Sign Up" component={<SignupForm />} />
                }
                redirectTo="/"
              />
            }
          />
          {/* <Route
            path="signup"
            element={
              <AuthPage titleName="Sign Up" component={<SignupForm />} />
            }
          /> */}
          <Route
            path="login"
            element={
              <RestrictedRoute
                component={
                  <AuthPage titleName="Login" component={<LoginForm />} />
                }
                redirectTo="/"
              />
            }
          />
          {/* <Route
            path="login"
            element={<AuthPage titleName="Login" component={<LoginForm />} />}
          /> */}

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

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Toaster position="top-right" />
      <FontStyles />
      <GlobalStyle />
    </>
  );
};

export default App;
