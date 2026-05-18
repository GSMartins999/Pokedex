import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: #27282c;
  min-height: 100vh;
  width: 100%;
  padding: 2rem 5%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const H1 = styled.h1`
  color: white;
  text-align: left;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
`;

export const ContainerTexto = styled.div`
  margin-bottom: 2rem;
`;

export const Containerzao = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 3rem 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 1rem;
  box-sizing: border-box;
`;
