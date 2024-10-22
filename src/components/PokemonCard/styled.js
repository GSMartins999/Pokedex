import styled from "styled-components";

const getColors = {
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


const getColorsTipos = {
    'normal': '#A8A878',
    'fire': '#F08030',
    'fighting': '#C03028',
    'water': '#6890F0',
    'flying': '#A890F0',
    'grass': '#78C850',
    'poison': '#A040A0',
    'electric': '#F8D030',
    'ground': '#E0C068',
    'rock': '#B8A038',
    'ice': '#98D8D8',
    'bug': '#A8B820',
    'ghost': '#705898',
    'steel': '#B8B8D0',
    'dragon': '#7038F8',
    'dark': '#705848',
    'fairy': '#EE99AC',
  };




export const Container = styled.div`
    width: 440px;
    min-width: 440px;
    height: 263px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 53px;
`

export const Conteudo = styled.div`
    width: 400px;
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: blue;
    background-color: ${props => getColors[props.type] };


`

export const Detalhes = styled.p`
    color: white;
    width: 74px;
    height: 24px;
    text-align: center;
    cursor: pointer;

`

export const Capturar = styled.button`
    background-color: white;
    width: 146px;
    height: 38px;
    text-align: center;
    border-radius: 10px;
    border: none;
    cursor: pointer;

`
export const ContainerBotoes = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 395px;
    height: 38px;
    justify-content: space-between;
    
`
export const ContainerImg = styled.div`
    width: 193px;
    height: 193px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 90px;

`

export const ImgPokemons = styled.img`
    width: 193px;
    height: 193px;
    position: absolute;
    margin-left: 20px;
`

export const ContainerAtriImg = styled.div`
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    height: 150px;
`
export const ContainerAtributos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    height: 45px;
    width: 100px;
    color: white;
    gap: 2px;
    font-size: 20px;
    margin-bottom: 10px;
`
export const ContainerPokebola = styled.div`
    justify-content: center;
    align-items: center;
    position: absolute;
    border: solid yellow 2px;
`

export const ContainerAtri = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Tipo = styled.div`
    background-color: ${props => getColorsTipos[props.type] };
    width: 200px;
    height: 31px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    color: white;
    margin-bottom: 5px;
    gap: 10px;
`

export const Pokebola = styled.img`
    width: 280px;
    margin-top: 90px;
    height: 150px;
    color: black;

`

export const ContainerTipos = styled.div`
    display: flex;
    flex-direction: row;
    width: 100px;
    justify-content: left;
    align-items: center;
    gap: 10px;
    margin-right: 80px;

`

export default getColors;