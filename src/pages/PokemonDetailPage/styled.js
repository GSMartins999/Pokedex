import styled from "styled-components"

export const ContainerCard = styled.div`
    background-color: #5E5E5E;
    height: 100vh;
    width: 100%;
    min-height: 100vh;
    padding-top: 20px;
    padding-inline: 40px;
    gap: 10px;
`
export const H1 = styled.h1`
    color: white;
`

export const ContainerAtri = styled.div`
    width: 93%;
    height: 633px;
    min-height: 500px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    gap: 20px;

`

export const ContainerImgs = styled.div`
    width: 300px;
    height: 90%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    padding: 10px;
`

export const Img1 = styled.div`
    width: 282px;
    height: 282px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

`

export const Img2 = styled.div`
    width: 282px;
    height: 282px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerBaseStats = styled.div`
    width: 343px;
    height: auto;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: start;
    top: 10px;
    border-radius: 10px;
    background-color: white;
    padding-bottom: 20px;

`

export const Stats = styled.div`
    width: 307px;
    height: 257px;
    margin-top: 10px;
    color: black;
    

`

export const ContainerMovimentos = styled.div`
    width: 500px;
    height: 300px;
    border-radius:10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 200px;
    background-color: white;
    padding-bottom: 20px;


`

export const Moves = styled.div`
    width: 200px;
    /* height: auto; */
    height: 200px;
    border-radius:10px;
    justify-content: center;
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;

`

export const ContainerPokemon = styled.div`
    background-color: salmon;
    width: 307px;
    height: 257px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px black;
`
export const Pokemon = styled.div`
    background-color: blue;
    width: 307px;
    height: 200px;
    margin-top: 10px;
`

export const ContainerPokeMove = styled.div`
    background-color: white;
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 90%;
    display: flex;
    justify-content: start;
    align-items: center;
`

export const Movies = styled.li`
    width: auto;
    height: auto;
    background-color: green;
`

export const ProgressBarContainer = styled.div`
  width: 100%; /* Garanta que ocupa 100% da largura do seu pai */
  max-width: 307px; /* Ajuste para o mesmo tamanho das outras barras, se necessário */
  background-color: #e0e0e0;
  border-radius: 5px;
  position: relative;
  margin: 10px 0;
`;


export const ProgressBarFiller = styled.div`
    background-color: #76c7c0;
    height: 20px;
    border-radius: 5px;
`;

export const ProgressBarLabel = styled.span`
    position: absolute;
    text-align: center;
    width: 100%;
    color: black;
    font-weight: bold;
`;

export const Pokebola = styled.div`
    width: 280px;
    margin-top: 90px;
    height: 150px;
    color: red;
    border: solid black 2px;
`;
