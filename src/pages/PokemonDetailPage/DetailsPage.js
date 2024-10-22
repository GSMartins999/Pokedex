import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContexts";
import {
  ContainerAtri,
  ContainerBaseStats,
  ContainerCard,
  ContainerImgs,
  ContainerMovimentos,
  H1,
  Img1,
  Img2,
  Stats,
  ProgressBarContainer,
  ProgressBarFiller,
  ProgressBarLabel,
} from "./styled";
import { BASE_URL } from "../../contants";
import axios from "axios";
import pokebola from "../../img/pokebola2.png";

export const DetailsPage = () => {
  const { pokedex } = useContext(GlobalContext);
  const { pokemonId } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const foundPokemonInPokedex = pokedex.find(
      (pokemon) => pokemon.name === pokemonId
    );

    if (foundPokemonInPokedex) {
      setSelectedPokemon(foundPokemonInPokedex);
    } else {
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

  const pokemonType = selectedPokemon?.types[0]?.type.name || "normal";

  const typeColorMap = {
    water: "#71C3FF",
    bug: "#76A866",
    dark: "#A79FA6",
    dragon: "#004170",
    electric: "#F2E7AA",
    fairy: "#E9CDEA",
    fighting: "#D88EAB",
    fire: "#EAAB7D",
    flying: "#A4B8C9",
    ghost: "#9B9FB9",
    grass: "#729F92",
    ground: "#E1A48A",
    ice: "#B5DCD5",
    normal: "#BF9762",
    poison: "#C5A9C4",
    psychic: "#F3A9A9",
    rock: "#D2CAB3",
    steel: "#C8C8C8",
  };

  const backgroundColor = typeColorMap[pokemonType] || "white";

  const getProgressBarColor = (value) => {
    if (value < 30) return "red";
    if (value >= 30 && value <= 60) return "yellow";
    return "green";
  };

  const ProgressBar = ({ max, value, label }) => {
    const percentage = max > 0 ? (value / max) * 100 : 0; // Calcula a porcentagem
    const color = getProgressBarColor(value); // Obtém a cor da barra de progresso

    return (
      <ProgressBarContainer style={{ display: "flex", alignItems: "center" }}>
        <ProgressBarLabel style={{ marginRight: "10px" }}>
          {label}: {value}
        </ProgressBarLabel>
        <div style={{ flexGrow: 1 }}>
          <ProgressBarFiller style={{ width: `${percentage}%`, backgroundColor: color }} />
        </div>
      </ProgressBarContainer>
    );
  };

  return (
    <>
      <Header />
      <ContainerCard>
        <H1>Detalhes</H1>
        <ContainerAtri style={{ backgroundColor }}>
          <ContainerImgs>
            {selectedPokemon && (
              <>
                <Img1>
                  <img
                    src={selectedPokemon.sprites.versions["generation-v"]["black-white"]
                      .animated.front_default}
                    alt={selectedPokemon.name}
                    style={{ width: "200px", height: "200px" }}
                  />
                </Img1>
                <Img2>
                  <img
                    src={selectedPokemon.sprites.versions["generation-v"]["black-white"]
                      .animated.back_default}
                    alt={selectedPokemon.name}
                    style={{ width: "200px", height: "200px" }}
                  />
                </Img2>
              </>
            )}
          </ContainerImgs>
          <ContainerBaseStats>
            {selectedPokemon && (
              <Stats>
                {selectedPokemon.stats.map((stat) => (
                  <ProgressBar
                    key={stat.stat.name}
                    max={200}
                    value={stat.base_stat}
                    label={stat.stat.name}
                  />
                ))}
                <ProgressBar
                  max={1000} // Máximo para a barra total
                  value={selectedPokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0)}
                  label="Total"
                />
              </Stats>
            )}
          </ContainerBaseStats>

          <ContainerMovimentos>
            {selectedPokemon && (
              <Stats>
                <h1>Moves:</h1>
                <div style={{
                  maxHeight: "25vh", // Altura máxima responsiva
                  overflowY: "auto", // Permite rolagem vertical
                  border: "1px solid #ccc", // Borda ao redor da lista
                  borderRadius: "5px", // Bordas arredondadas (opcional)
                  backgroundColor: "#f9f9f9", // Fundo da lista
                  padding: "10px", // Espaçamento interno
                }}>
                  <ul style={{ padding: 0 }}> {/* Remove o padding da lista */}
                    {selectedPokemon.moves.slice(0, 10).map((move) => (
                      <li
                        key={move.move.name}
                        style={{
                          border: "1px dotted #000", // Borda pontilhada
                          backgroundColor: "#f0f0f0", // Fundo cinza claro
                          padding: "0.5rem", // Preenchimento em rem para responsividade
                          margin: "0.5rem 0", // Margem entre os itens
                          borderRadius: "5px", // Bordas arredondadas (opcional)
                          fontSize: "1rem", // Tamanho da fonte responsivo
                          wordBreak: "break-word", // Quebra de linha para palavras longas
                        }}
                      >
                        {move.move.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Stats>
            )}
          </ContainerMovimentos>
          <img 
            src={pokebola} 
            alt="Pokebola" 
            style={{ 
              position: "absolute", 
              right: "20px", 
              bottom: "50%", 
              transform: "translateY(50%)", // Centraliza verticalmente
              width: "30vw", // Ajuste para ser responsivo
              height: "30vw",
              maxWidth: "300px", // Limita o tamanho máximo
              maxHeight: "300px",
              zIndex: 1 // Para garantir que fique acima de outros elementos
            }} 
          />
        </ContainerAtri>
      </ContainerCard>
    </>
  );
};
