import React, { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/PokemonCard/Card";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { ContainerCard, ContainerTexto, Containerzao, H1 } from "./styled";

export const ListPage = () => {
  const context = useContext(GlobalContext);
  const { pokeList, pokedex, setSelectedPokemon } = context;

  const filteredPokeList = pokeList.filter(
    (pokemonInList) =>
      !pokedex.find(
        (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
      )
  );

  const handleDetailsClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <Header />
      <ContainerCard>
        <ContainerTexto>
          <H1>Todos Pokémons</H1>
        </ContainerTexto>
        <Containerzao>
          {filteredPokeList.map((pokemon) => (
            <Card
              key={pokemon.url}
              pokemonsUrl={pokemon.url}
              onDetailsClick={() => handleDetailsClick(pokemon)}
            />
          ))}
        </Containerzao>
      </ContainerCard>
    </>
  );
};
