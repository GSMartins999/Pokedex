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
    position: relative; /* Para controlar a Pokébola */
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
    width: 500px;
    height: auto;
    min-height: 55vh;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10px;
    border-radius: 10px;
    background-color: white;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column ;

`

export const Stats = styled.div`
    width: 307px;
    height: 300px;
    margin-top: 10px;
    color: black;
    border: bottom 2px red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerMovimentos = styled.div`
    width: 500px;
    height: auto;
    min-height: 55vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    padding-bottom: 20px;
`

export const Moves = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
`

export const ProgressBarContainer = styled.div`
    width: 100%;
    max-width: 307px;
    height: 30px;
    border-radius: 5px;
    position: relative;
    margin: 10px 0;
    border: solid black 2px
`

export const ProgressBarFiller = styled.div`
    background-color: #76c7c0;
    height: 30px;
    border-radius: 5px;
`

export const ProgressBarLabel = styled.span`
    position: absolute;
    text-align: center;
    width: 100%;
    color: black;
    font-weight: bold;
`


export const ContainerPokebola = styled.div`
  width: auto;
  height: auto;
  max-width: 800px;
  max-height: 900px;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Para controle de posicionamento absoluto */
`;

export const Pokebola = styled.img`
  width: 30vw; /* Ajuste a largura da Pokébola para ser responsiva */
  height: auto; /* Mantenha a altura automática para manter a proporção */
  max-width: 800px;
  max-height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameAndTypes = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  h2 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
  }
  p {
    margin: 0;
    font-size: 1rem;
  }
`;

export const TypeBadge = styled.span`
    width: 500px;
    height: 100px;
    `;

