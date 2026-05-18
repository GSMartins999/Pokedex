import styled from "styled-components";

const getColors = {
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


export const Container = styled.div`
  width: 100%;
  max-width: 440px;
  min-width: 280px;
  height: 263px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 15px 0;

  @media (max-width: 480px) {
    height: auto;
    min-height: 230px;
  }
`;

export const Conteudo = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 24px;
  border-radius: 16px;
  background-color: ${(props) => getColors[props.type] || "#BF9762"};
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 480px) {
    height: auto;
    min-height: 220px;
    padding: 18px;
  }
`;

export const ContainerAtriImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  position: relative;
  z-index: 2;
`;

export const ContainerAtri = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 60%;
`;

export const ContainerAtributos = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  line-height: 1.2;

  span {
    font-size: 1rem;
    font-weight: bold;
    opacity: 0.85;
  }
  strong {
    font-size: 1.8rem;
    font-weight: 800;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 380px) {
    strong {
      font-size: 1.4rem;
    }
  }
`;

export const ContainerTipos = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ContainerImg = styled.div`
  position: absolute;
  right: 10px;
  top: -50px;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  @media (max-width: 480px) {
    width: 135px;
    height: 135px;
    top: -35px;
    right: 5px;
  }
`;

export const ImgPokemons = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 3;
  filter: drop-shadow(0 10px 16px rgba(0, 0, 0, 0.4));
`;

export const Pokebola = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 210px;
  height: 210px;
  object-fit: cover;
  object-position: top right;
  opacity: 0.85;
  z-index: 1;
  pointer-events: none;
  border-top-right-radius: 16px;

  @media (max-width: 480px) {
    width: 170px;
    height: 170px;
  }
`;

export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  z-index: 3;
`;

export const Detalhes = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #ffde00;
  }
`;

export const Capturar = styled.button`
  padding: 8px 24px;
  background-color: white;
  color: #0f0f0f;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #f2f2f2;
  }
  &:active {
    transform: scale(1);
  }
`;

export default getColors;