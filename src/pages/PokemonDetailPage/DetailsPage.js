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
  NameAndTypes,
  TypeBadge,
  ContainerPokebola,
  Moves,
} from "./styled";
import { Loading } from "../../components/Loading/Loading";
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
  const { pokedex, setSelectedPokemon: setGlobalSelectedPokemon } = useContext(GlobalContext);
  const { pokemonId } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const foundPokemonInPokedex = pokedex.find(
      (pokemon) => pokemon.name === pokemonId || String(pokemon.id) === pokemonId
    );

    if (foundPokemonInPokedex) {
      const timer = setTimeout(() => {
        setSelectedPokemon(foundPokemonInPokedex);
        if (setGlobalSelectedPokemon) setGlobalSelectedPokemon(foundPokemonInPokedex);
        setLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      const fetchPokemonDetails = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${pokemonId}`);
          setTimeout(() => {
            setSelectedPokemon(response.data);
            if (setGlobalSelectedPokemon) setGlobalSelectedPokemon(response.data);
            setLoading(false);
          }, 800);
        } catch (error) {
          console.error("Erro ao buscar detalhes do Pokémon", error);
          setLoading(false);
        }
      };

      fetchPokemonDetails();
    }
  }, [pokedex, pokemonId, setGlobalSelectedPokemon]);

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
      <ProgressBarContainer>
        <ProgressBarLabel>
          {label}: {value}
        </ProgressBarLabel>
        <ProgressBarFiller style={{ width: `${percentage}%`, backgroundColor: color }} />
      </ProgressBarContainer>
    );
  };

  return (
    <>
      <Header />
      <ContainerCard>
        <H1>Detalhes</H1>
        {loading || !selectedPokemon ? (
          <Loading />
        ) : (
          <ContainerAtri bgColor={typeColorMap[selectedPokemon?.types[0]?.type.name] || "#1f2024"}>
          <ContainerImgs>
            {selectedPokemon && (
              <>
                <NameAndTypes>
                  <h2 style={{ color: "white" }}>
                    {selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}
                  </h2>
                  <p style={{ color: "white" }}>#{selectedPokemon.id}</p>
                  <div>
                    {selectedPokemon.types.map((type) => (
                      <TypeBadge key={type.type.name}>
                        <img
                          src={getTypeImage(type.type.name)}
                          alt={type.type.name}
                        />
                      </TypeBadge>
                    ))}
                  </div>
                </NameAndTypes>
                <Img1>
                  <img
                    src={selectedPokemon.sprites.versions["generation-v"]["black-white"].animated?.front_default || selectedPokemon.sprites.front_default}
                    alt={selectedPokemon.name}
                  />
                </Img1>
                <Img2>
                  <img
                    src={selectedPokemon.sprites.versions["generation-v"]["black-white"].animated?.back_default || selectedPokemon.sprites.back_default}
                    alt={selectedPokemon.name}
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
                    label={stat.stat.name.toUpperCase()}
                  />
                ))}
                <ProgressBar
                  max={1000}
                  value={selectedPokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0)}
                  label="TOTAL"
                />
              </Stats>
            )}
          </ContainerBaseStats>

          <ContainerMovimentos>
            {selectedPokemon && (
              <Moves>
                <h1>Moves</h1>
                <div
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                    border: "1px solid #e6e6e6",
                    borderRadius: "12px",
                    padding: "16px",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                    {selectedPokemon.moves.slice(0, 10).map((move) => (
                      <li
                        key={move.move.name}
                        style={{
                          border: "1px solid #e0e0e0",
                          backgroundColor: "#f9f9f9",
                          padding: "0.8rem 1rem",
                          margin: "0.5rem 0",
                          borderRadius: "8px",
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "#333",
                          textTransform: "capitalize",
                        }}
                      >
                        {move.move.name.replace("-", " ")}
                      </li>
                    ))}
                  </ul>
                </div>
              </Moves>
            )}
          </ContainerMovimentos>

          <ContainerPokebola>
            {selectedPokemon && (
              <img
                src={selectedPokemon.sprites?.other["official-artwork"].front_default}
                alt={selectedPokemon.name}
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "350px",
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 2,
                }}
              />
            )}
          </ContainerPokebola>
        </ContainerAtri>
        )}
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
    default: return pokebola;
  }
};
