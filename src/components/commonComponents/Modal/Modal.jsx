import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { ModalBackdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target || e.target.nodeName === 'A') onClose();
  };

  return createPortal(
    <ModalBackdrop
      initial={{ opacity: 0, y: '-100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.5 }}
      onClick={handleBackdropClick}
    >
      {children}
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;
