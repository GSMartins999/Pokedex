import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/PokemonCard/Card";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { ContainerAtri, ContainerBaseStats, ContainerCard, ContainerImgs, ContainerMovimentos, H1, Img1, Img2, Stats } from "./styled";
import { BASE_URL } from "../../contants";
import axios from "axios";

export const DetailsPage = () => {
  const { pokedex } = useContext(GlobalContext);
  const { pokemonId } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    // Procurar na Pokédex
    const foundPokemonInPokedex = pokedex.find(
      (pokemon) => pokemon.name === pokemonId
    );

    if (foundPokemonInPokedex) {
      setSelectedPokemon(foundPokemonInPokedex);
    } else {
      // Se não estiver na Pokédex, busca na API
      const fetchPokemonDetails = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${pokemonId}`);
          setSelectedPokemon(response.data);
        } catch (error) {
          console.error("Erro ao buscar detalhes do Pokémon", error);
        }
      };

      fetchPokemonDetails();
    }
  }, [pokedex, pokemonId]);

  const pokemonType = selectedPokemon?.types[0]?.type.name || 'normal';

  const typeColorMap = {
    "water": "#71C3FF" ,
    "bug" : "#76A866",
    "dark": "#A79FA6",
    "dragon": "#004170",
    'electric': '#F2E7AA',
    'fairy': '#E9CDEA',
    'fighting': '#D88EAB',
    'fire':'#EAAB7D',
    'flying': '#A4B8C9',
    'ghost':'#9B9FB9',
    'grass':'#729F92',
    'ground': '#E1A48A',
    'ice':'#B5DCD5',
  'normal':'#BF9762',
  'poison':'#C5A9C4',
  'psychic':'#F3A9A9',
   'rock':'#D2CAB3',
   'steel': '#C8C8C8'
  }


  const backgroundColor = typeColorMap[pokemonType] || 'white';



  return (
    <>
      <Header />
      <ContainerCard>
    
        <H1>Detalhes</H1>
        <ContainerAtri style={{ backgroundColor }}>
        <ContainerImgs >
          {selectedPokemon && (
            <>
              <Img1>
                {selectedPokemon && (
                  <>
                    <img
                      src={selectedPokemon.sprites.front_default}
                      alt={selectedPokemon.name}
                      style={{ width: '200px', height: '200px' }}

                    />
                  </>
                )}
              </Img1>
              <Img2>
                {selectedPokemon && (
                  <>
                    <img
                      src={selectedPokemon.sprites.back_default}
                      alt={selectedPokemon.name}
                      style={{ width: '200px', height: '200px' }}
                    />
                  </>
                )}
              </Img2>
            </>
          )}
        </ContainerImgs>
        <ContainerBaseStats>
        {selectedPokemon && (
          <>
            <Stats>
              {selectedPokemon.stats.map((stat) => (
                <ul key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </ul>
              ))}
            </Stats>
          </>
        )}
        </ContainerBaseStats>
        
        <ContainerMovimentos>
        {selectedPokemon && (
          <>
            <Stats>
            <h1>Moves:</h1>
            {selectedPokemon.moves.slice(0, 10).map((move) => (
                <li key={move.move.name}>{move.move.name}</li>
              ))}
            </Stats>
          </>
        )}
        </ContainerMovimentos>
        </ContainerAtri>
      </ContainerCard>
    </>
  );
};
