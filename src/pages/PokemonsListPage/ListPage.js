import React, { useContext, useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/PokemonCard/Card";
import { Loading } from "../../components/Loading/Loading";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { ContainerCard, ContainerTexto, Containerzao, H1 } from "./styled";

export const ListPage = () => {
  const context = useContext(GlobalContext);
  const { pokeList, pokedex, setSelectedPokemon, isLoading: globalIsLoading } = context;
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocalLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const isLoading = globalIsLoading || localLoading;

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
        {isLoading ? (
          <Loading />
        ) : (
          <Containerzao>
            {filteredPokeList.map((pokemon) => (
              <Card
                key={pokemon.url}
                pokemonsUrl={pokemon.url}
                onDetailsClick={() => handleDetailsClick(pokemon)}
              />
            ))}
          </Containerzao>
        )}
      </ContainerCard>
    </>
  );
};
