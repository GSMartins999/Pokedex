import { Card } from "../../components/PokemonCard/Card";
import { Header } from "../../components/Header/Header";
import { Loading } from "../../components/Loading/Loading";
import { ContainerCard, ContainerTexto, H1, Containerzao } from "./styled";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { BASE_URL } from "../../contants";

export const PokedexPage = () => {
  const { pokedex } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <ContainerCard>
        <ContainerTexto>
          <H1>Meus Pokémons</H1>
        </ContainerTexto>
        {loading ? (
          <Loading />
        ) : (
          <Containerzao>
            {pokedex.map((pokemon) => (
              <Card
                key={pokemon.name}
                pokemonsUrl={`${BASE_URL}/${pokemon.name}`}
              />
            ))}
          </Containerzao>
        )}
      </ContainerCard>
    </>
  );
};
