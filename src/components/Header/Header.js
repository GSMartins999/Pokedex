import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import {
  Container,
  LeftSlot,
  CenterSlot,
  RightSlot,
  Logo,
  Button,
  ButtonTwo,
  ContainerVoltar,
  Voltar,
} from "./styled.js";
import { goToHome, goToPokedex } from "../../Router/cordinator";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GlobalContext } from "../../contexts/GlobalContexts";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pokedex, addToPokedex, removeFromPokedex, selectedPokemon } = useContext(GlobalContext);

  const isDetailsPage = location.pathname.startsWith("/detalhes");
  const isPokemonInPokedex = selectedPokemon && pokedex?.some(
    (item) => item.name === selectedPokemon.name
  );

  return (
    <Container>
      <LeftSlot>
        {location.pathname !== "/" ? (
          <ContainerVoltar onClick={() => goToHome(navigate)}>
            <AiOutlineArrowLeft size={20} />
            <Voltar>Todos os Pokémons</Voltar>
          </ContainerVoltar>
        ) : null}
      </LeftSlot>

      <CenterSlot>
        <Logo src={logo} alt="logo-pokemon" onClick={() => goToHome(navigate)} />
      </CenterSlot>

      <RightSlot>
        {location.pathname === "/" ? (
          <Button onClick={() => goToPokedex(navigate)}>Pokédex</Button>
        ) : isDetailsPage && selectedPokemon ? (
          isPokemonInPokedex ? (
            <ButtonTwo onClick={() => removeFromPokedex(selectedPokemon)}>Excluir da Pokédex</ButtonTwo>
          ) : (
            <Button onClick={() => addToPokedex(selectedPokemon)}>Adicionar à Pokédex</Button>
          )
        ) : null}
      </RightSlot>
    </Container>
  );
};
