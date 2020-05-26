import React from 'react';
import { useSelector } from 'react-redux';
import ModalLogin from './auth/ModalLogin';
import ModalRegister from './auth/ModalRegister';

const modalLookup = {
  ModalLogin,
  ModalRegister,
};

function ModalManger(props) {
  const currentModal = useSelector(state => state.modal);
  let renderModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderModal = <ModalComponent {...modalProps} />;
  }

  return <span>{renderModal}</span>;
}

export default ModalManger;
