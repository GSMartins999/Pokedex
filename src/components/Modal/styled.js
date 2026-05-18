import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const ModalBox = styled.div`
  background: white;
  width: 90%;
  max-width: 500px;
  min-height: 240px;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 2.5rem;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
  animation: scaleUp 0.2s ease-out;

  @keyframes scaleUp {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 900;
    color: #1a1a1a;
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 1.3rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
    text-align: center;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #f0f0f0;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #666;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
    color: #1a1a1a;
    transform: scale(1.05);
  }
`;
