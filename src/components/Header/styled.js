import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    padding: 1rem 5%;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    position: relative;
    z-index: 100;

    @media (max-width: 640px) {
        flex-direction: column;
        gap: 1.2rem;
        padding: 1.5rem 1rem;
    }
`;

export const LeftSlot = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    @media (max-width: 640px) {
        width: 100%;
        justify-content: flex-start;
    }
`;

export const CenterSlot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const RightSlot = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    @media (max-width: 640px) {
        width: 100%;
        justify-content: center;
    }
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 260px;
    height: auto;
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.03);
    }
`;

export const Button = styled.button`
    padding: 0.8rem 1.5rem;
    background-color: #33A4F5;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 10px rgba(51, 164, 245, 0.3);

    &:hover {
        background-color: #2b8cd0;
        transform: translateY(-2px);
        box-shadow: 0 6px 14px rgba(51, 164, 245, 0.4);
    }
    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        padding: 0.6rem 1.2rem;
        font-size: 0.95rem;
    }
`;

export const ButtonTwo = styled(Button)`
    background-color: #FF6262;
    box-shadow: 0 4px 10px rgba(255, 98, 98, 0.3);

    &:hover {
        background-color: #e55555;
        box-shadow: 0 6px 14px rgba(255, 98, 98, 0.4);
    }
`;

export const ContainerVoltar = styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;
    cursor: pointer;    
    gap: 8px;
    transition: transform 0.2s ease, color 0.2s ease;
    color: #1a1a1a;
    white-space: nowrap;

    &:hover {
        transform: translateX(-4px);
        color: #33A4F5;
    }
`;

export const Voltar = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
    border-bottom: 2px solid currentColor;
`;