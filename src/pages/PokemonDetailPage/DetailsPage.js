import React, { useContext, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
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
  Pokebola,
  NameAndTypes,
  TypeBadge,
  ContainerPokebola,
} from "./styled";
import { BASE_URL } from "../../contants";
import axios from "axios";
import pokebola from "../../img/pokebola2.png";
import poison from "../../img/poison.png";
import bug from "../../img/bug.png";
import dragon from "../../img/dragon.png";
import electric from "../../img/electric.png";
import fairy from "../../img/fairy.png";
import fighting from "../../img/fighting.png";
import fire from "../../img/fire.png";
import flying from "../../img/flying.png";
import ghost from "../../img/ghost.png";
import grass from "../../img/grass.png";
import ground from "../../img/ground.png";
import ice from "../../img/ice.png";
import normal from "../../img/normal.png";
import psychic from "../../img/psychic.png";
import rock from "../../img/rock.png";
import steel from "../../img/steel.png";
import water from "../../img/water.png";
import dark from "../../img/dark.png";

export const DetailsPage = () => {
  const { pokedex } = useContext(GlobalContext);
  const { pokemonId } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const location = useLocation();

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

  const getProgressBarColor = (value) => {
    if (value < 20) return "red";
    else if (value >= 30 && value <= 50) return "orange";
    else if (value >= 50 && value <= 70) return "yellow";
    return "green";
  };

  const ProgressBar = ({ max, value, label }) => {
    const percentage = max > 0 ? (value / max) * 100 : 0;
    const color = getProgressBarColor(value);

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
        <ContainerAtri style={{ backgroundColor: typeColorMap[selectedPokemon?.types[0]?.type.name] || "white" }}>


          <ContainerImgs>
            {selectedPokemon && (
              <>
                <NameAndTypes>
                  {selectedPokemon ? (
                    <>
                      <h2 style={{ color: "white", marginBottom: "10px", fontSize: "2.5rem" }}>{selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}</h2>
                      <p style={{ color: "white", marginBottom: "10px", fontSize: "1.5rem" }}>#{selectedPokemon.id}</p>
                      <div>
                        {selectedPokemon.types.map((type) => (
                          <TypeBadge key={type.type.name}>
                            <img
                              src={getTypeImage(type.type.name)} // Adicione a função getTypeImage para obter a imagem correspondente
                              alt={type.type.name}
                              style={{ width: "100px", height: "40px", marginRight: "5px" }}
                            />
                          </TypeBadge>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p>Carregando...</p>
                  )}
                </NameAndTypes>
                <Img1>
                  <img
                    src={selectedPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
                    alt={selectedPokemon.name}
                    style={{ width: "200px", height: "200px" }}
                  />
                </Img1>
                <Img2>
                  <img
                    src={selectedPokemon.sprites.versions["generation-v"]["black-white"].animated.back_default}
                    alt={selectedPokemon.name}
                    style={{ width: "200px", height: "200px" }}
                  />
                </Img2>
              </>
            )}
          </ContainerImgs>



          <ContainerBaseStats>
            <h2>Base Stats</h2>
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
                  max={1000}
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
                  maxHeight: "25vh",
                  overflowY: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "10px",
                  height: "25vh",
                  width: "15vw"
                }}>
                  <ul style={{ padding: 0 }}>
                    {selectedPokemon.moves.slice(0, 10).map((move) => (
                      <li
                        key={move.move.name}
                        style={{
                          border: "1px dotted #000",
                          backgroundColor: "#f0f0f0",
                          padding: "0.5rem",
                          margin: "1rem 0",
                          borderRadius: "5px",
                          fontSize: "1rem",
                          wordBreak: "break-word",
                          display: "flex",
                          flexDirection: "column",
                          width: "auto"
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
          <ContainerPokebola>
            {selectedPokemon && (
              <>
                <img
                  src={selectedPokemon.sprites?.other["official-artwork"].front_default}
                  alt={selectedPokemon.name}
                  style={{
                    width: "100%", 
                    height: "auto",
                    position: "absolute",
                    top: "50%",
                    left: "50%", 
                    transform: "translate(-50%, -50%)", 
                    zIndex: 1,
                  }}
                  
                />
                <Pokebola src={pokebola} alt="Pokebola" />
              </>
            )}
          </ContainerPokebola>
        </ContainerAtri>
      </ContainerCard>
    </>
  );
};

const getTypeImage = (type) => {
  switch (type) {
    case "bug": return bug;
    case "dark": return dark;
    case "dragon": return dragon;
    case "electric": return electric;
    case "fairy": return fairy;
    case "fighting": return fighting;
    case "fire": return fire;
    case "flying": return flying;
    case "ghost": return ghost;
    case "grass": return grass;
    case "ground": return ground;
    case "ice": return ice;
    case "normal": return normal;
    case "poison": return poison;
    case "psychic": return psychic;
    case "rock": return rock;
    case "steel": return steel;
    case "water": return water;
  }
};
