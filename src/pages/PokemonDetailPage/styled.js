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
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

export const ContainerAtri = styled.div`
  width: 100%;
  min-height: 70vh;
  height: auto;
  background-color: ${(props) => props.bgColor || "#1f2024"};
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
  }

  align-items: center;
  border-radius: 24px;
  gap: 2.5rem;
  padding: 3rem 2rem;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  margin: 1rem 0;
  overflow: hidden;
`;

export const ContainerImgs = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Img1 = styled.div`
  width: 100%;
  max-width: 260px;
  aspect-ratio: 1;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Img2 = styled(Img1)``;

export const ContainerBaseStats = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  h2 {
    color: #1a1a1a;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    font-weight: 800;
  }
`;

export const Stats = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ContainerMovimentos = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: white;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  h1 {
    color: #1a1a1a;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    font-weight: 800;
  }
`;

export const Moves = styled.div`
  width: 100%;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  position: relative;
  background-color: #e6e6e6;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

export const ProgressBarFiller = styled.div`
  height: 100%;
  border-radius: 8px;
  transition: width 0.5s ease-in-out;
`;

export const ProgressBarLabel = styled.span`
  position: absolute;
  left: 12px;
  color: #1a1a1a;
  font-weight: 800;
  font-size: 0.95rem;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
  z-index: 2;
`;

export const ContainerPokebola = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 380px;

  @media (max-width: 768px) {
    min-height: 280px;
  }
`;


export const NameAndTypes = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  h2 {
    font-size: 2.5rem;
    margin: 0 0 5px 0;
    font-weight: 900;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
  p {
    margin: 0 0 15px 0;
    font-size: 1.4rem;
    font-weight: bold;
    opacity: 0.85;
  }
`;

export const TypeBadge = styled.span`
  display: inline-block;
  margin: 0 4px;
  img {
    height: 36px;
    width: auto;
    object-fit: contain;
  }
`;
