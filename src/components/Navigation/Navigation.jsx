import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import { useAuth } from 'hooks/useAuth';

import AuthNav from 'components/AuthNav';
import Modal from 'components/commonComponents/Modal';
import UserMenu from 'components/UserMenu';
import Burger from 'components/commonComponents/Burger';

import { ModalContent } from 'components/commonComponents/Modal/Modal.styled';

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const { isLoggedIn } = useAuth();

  const isMobile = useMediaQuery({
    query: '(max-device-width: 767px)',
  });

  return (
    <>
      <div>
        {!isMobile && !isLoggedIn && <AuthNav />}
        {isLoggedIn && <UserMenu />}
        {isMobile && !isLoggedIn && (
          <Burger setOpen={setShowModal} open={showModal} />
        )}
      </div>

      {showModal && isMobile && !isLoggedIn && (
        <Modal onClose={() => setShowModal(!showModal)}>
          <ModalContent $burger>
            <AuthNav $burger />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Navigation;
