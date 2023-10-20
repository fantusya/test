import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Refreshing from 'components/Refreshing';

import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Refreshing />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default SharedLayout;
