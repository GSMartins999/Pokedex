import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;
`

export const ContainerLogo = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 30vw;
    left: 0;
`

export const Logo = styled.img`
    width: 20vw;
`

export const Button = styled.button`
    width: 15vw;
    height: 8vh;
    position: absolute;
    top: 7vh;
    right: 20px;
    background-color: #33A4F5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    border: none;
    cursor: pointer;
    &:hover{
        color: orange;
    }
`
export const Voltar = styled.p`
    color: black;
    border-bottom: solid black 2px;
`
export const ContainerVoltar = styled.p`
    color: black;
    display: flex;    
    left: 2vw;
    height: 5vh;
    position: absolute;
    justify-content: center;
    align-items: center;
    cursor: pointer;    
    gap: 5px;
`

export const ButtonTwo = styled.button`
    width: 15vw;
    height: 8vh;
    position: absolute;
    top: 7vh;
    right: 20px;
    background-color: #FF6262;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    border: none;
    cursor: pointer;
    &:hover{
        color: orange;
    }
`