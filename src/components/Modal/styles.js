import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalBG = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  padding: 30px;
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 2;
  overflow-y: scroll;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.7);
  animation: ${fade} 0.5s;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  animation: ${fade} 0.7s;
  position: absolute;
  padding: 25px;
  overflow: hidden;
  z-index: 3;
  top: 50%; 
  left: 50%;

  transform: translate(-50%, -50%);
  text-align: center;

  width: 480px;
  height: 200px;
  background: #E8A629;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  border-radius: 12px;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.5);
  transition: background-color 0.5s ease;
  
  @media(max-width: 414px) {
    width: 300px;
    height: 150px;
    font-size: 28px;
    padding: 12px;
  }

`;
