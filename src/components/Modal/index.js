import React from 'react';

import { ModalBG, Container } from './styles';

function Modal({id = 'modal', onClose = () => {}, children}) {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  };
  
  return (
    <ModalBG id={id} onClick={handleOutsideClick}>
      <Container onClick={onClose}>
        {children}
      </Container>
    </ModalBG>
  );
};

export default Modal;
