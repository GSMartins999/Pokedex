import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70vh;
  background-color: transparent;
  gap: 1.5rem;
`;

export const DragoniteImg = styled.img`
  width: 220px;
  height: 220px;
  object-fit: contain;
  animation: ${float} 3s ease-in-out infinite;
  filter: drop-shadow(0px 15px 20px rgba(0, 0, 0, 0.4));
`;

export const LoadingText = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: #FFCB05;
  text-shadow: 0 4px 15px rgba(255, 203, 5, 0.4), 0 2px 4px rgba(0,0,0,0.8);
  margin: 0;
  animation: ${pulse} 2s ease-in-out infinite;
  letter-spacing: 2px;
`;

export const SubText = styled.p`
  font-size: 1.1rem;
  color: #e0e0e0;
  font-weight: 600;
  margin: 0;
  opacity: 0.85;
`;
