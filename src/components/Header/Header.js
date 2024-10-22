import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  ContainerLogo,
  Logo,
  Container,
  Button,
  Voltar,
  ContainerVoltar,
  ButtonTwo,
} from "./styled.js";
import { goToHome, goToPokedex } from "../../Router/cordinator";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      {location.pathname === "/" ? (
        <>
          <ContainerLogo>
            <Logo src={logo} alt="logo-pokemon" />
          </ContainerLogo>
          <Button onClick={() => goToPokedex(navigate)}>Pokedex</Button>
        </>
      ) : (
        <>
          <ContainerVoltar onClick={() => goToHome(navigate)}>
            <AiOutlineArrowLeft />
            <Voltar> <strong>Todos os pokemons</strong></Voltar>
          </ContainerVoltar>
          <ContainerLogo>
            <Logo src={logo} alt="logo-pokemon" />
          </ContainerLogo>
        </>
      )}
      {location.pathname === "/detalhes" ? (
        <>
          <ButtonTwo>Excluir da Pokédex</ButtonTwo>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};
