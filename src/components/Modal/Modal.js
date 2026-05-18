import React, { useEffect } from 'react';
import { CloseButton, ModalBox, ModalOverlay } from './styled';

export const Modal = ({ isOpen, type, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} title="Fechar">&times;</CloseButton>
        {type === 'add' ? (
          <>
            <h2>Gotcha!</h2>
            <p>O Pokémon foi adicionado a sua Pokédex</p>
          </>
        ) : (
          <>
            <h2>Oh, no!!</h2>
            <p>O Pokémon foi removido da sua Pokedéx</p>
          </>
        )}
      </ModalBox>
    </ModalOverlay>
  );
};
