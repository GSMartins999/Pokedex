import { useLocation, useNavigate } from "react-router-dom";
import {
  Capturar,
  Container,
  ContainerAtri,
  ContainerAtriImg,
  ContainerAtributos,
  ContainerBotoes,
  ContainerImg,
  ContainerTipos,
  Conteudo,
  Detalhes,
  ImgPokemons,
  Pokebola,
  Tipo,
} from "./styled";
import { goToDetalhes } from "../../Router/cordinator";
import { GlobalContext } from "../../contexts/GlobalContexts";
import { useContext, useEffect, useState } from "react";
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


export const Card = ({ pokemonsUrl, onDetailsClick }) => {
  const [pokemon, setPokemon] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex, setSelectedPokemon } = context;

  const getAtributos = async () => {
    try {
      const response = await axios.get(pokemonsUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Error", error.response);
    }
  };

  useEffect(() => {
    getAtributos();
  }, []);

  const type = pokemon.types;



  //switch para mudar a img dos tipos
  const ComponenteComSwitch = ({ type }) => {
    let backgroundImagem;

    switch (type) {
      case "bug":
        backgroundImagem = bug;
        break;
      case "dark":
        backgroundImagem = dark;
        break;
      case "dragon":
        backgroundImagem = dragon;
        break;
      case "electric":
        backgroundImagem = electric;
        break;
      case "fairy":
        backgroundImagem = fairy;
        break;
      case "fighting":
        backgroundImagem = fighting;
        break;
      case "fire":
        backgroundImagem = fire;
        break;
      case "flying":
        backgroundImagem = flying;
        break;
      case "ghost":
        backgroundImagem = ghost;
        break;
      case "grass":
        backgroundImagem = grass;
        break;
      case "ground":
        backgroundImagem = ground;
        break;
      case "ice":
        backgroundImagem = ice;
        break;
      case "normal":
        backgroundImagem = normal;
        break;
      case "poison":
        backgroundImagem = poison;
        break;
      case "psychic":
        backgroundImagem = psychic;
        break;
      case "rock":
        backgroundImagem = rock;
        break;
      case "steel":
        backgroundImagem = steel;
        break;
      case "water":
        backgroundImagem = water;
        break;
      default:
        backgroundImagem = pokebola;
    }

    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImagem})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '30px'
        }}
      >
      </div>
    );
  };

  //Função para mostrar os tipos e os fundos alternativos:
  const tipos = () => {
    if (pokemon.types && pokemon.types.length >= 2) {
      return (
        <Tipo>
        <ComponenteComSwitch type={pokemon.types[0].type.name} />
        <ComponenteComSwitch type={pokemon.types[1].type.name} />
        </Tipo>
      );
    } else if (pokemon.types && pokemon.types.length === 1) {
      return <ComponenteComSwitch type={pokemon.types[0].type.name} />;
    } else {
      return "Tipo não especificado";
    }
  };


  //Função para deixar a primeira letra maiuscula:
  const capitalizarPrimeiraLetra = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <Container>
        <Conteudo
          type={
            type && type.length > 0
              ? type[0].type.name
              : "Tipo não especificado"
          }
        >
          <ContainerAtriImg>
            <ContainerAtri>
              <ContainerAtributos>
                #{pokemon.id}
                <strong>
                  {capitalizarPrimeiraLetra(pokemon.name || "")}
                </strong>
              </ContainerAtributos>
              <ContainerTipos>
                <Tipo>{tipos(type)}</Tipo>
              </ContainerTipos>
            </ContainerAtri>
            <ContainerImg>
              <Pokebola src={pokebola} />
              <ImgPokemons
                src={pokemon.sprites?.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
            </ContainerImg>
          </ContainerAtriImg>
          <ContainerBotoes>
          {location.pathname === "/" || location.pathname === "/pokedex" ? (
                       <Detalhes
                       onClick={() => {
                         setSelectedPokemon(pokemon);
                         navigate(`/detalhes/${pokemon.name}`);
                       }}
                     >
                       <strong>Detalhes</strong>
                     </Detalhes>
          ) : (
              ""
            )}
            {location.pathname === "/" ? (
              <Capturar onClick={() => addToPokedex(pokemon)}>
                <strong>Capturar!</strong>
              </Capturar>
            ) : (
              ""
            )}
            {location.pathname === "/pokedex" ? (
              <Capturar
                style={{ backgroundColor: "#FF6262", color: "white" }}
                onClick={() => removeFromPokedex(pokemon)}
              >
                <strong>Excluir</strong>
              </Capturar>
            ) : (
              ""
            )}
            {location.pathname === "/detalhes" ? "" : ""}
          </ContainerBotoes>
        </Conteudo>
      </Container>
    </>
  );
};