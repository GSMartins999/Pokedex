import React from 'react';
import { DragoniteImg, LoadingContainer, LoadingText, SubText } from './styled';

export const Loading = () => {
  return (
    <LoadingContainer>
      <DragoniteImg 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/149.gif" 
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png";
        }}
        alt="Dragonite voando" 
      />
      <LoadingText>CARREGANDO...</LoadingText>
      <SubText>Buscando informações na Pokédex</SubText>
    </LoadingContainer>
  );
};
