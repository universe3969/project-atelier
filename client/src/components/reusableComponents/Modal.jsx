import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = ({ children, className, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={className}>
      <div className='modal-backdrop' onClick={onClose} data-testid='close-modal'></div>
      <div className='modal-content'>
        {children}
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
};

export default Modal;