import styled from 'styled-components';

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;  

  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${backgroundImg}) center no-repeat;
  background-size: cover;
  z-index: 0;

  @media(max-width: 768px) {
  height: 60vh;
  }
  `;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 32px;

  @media(max-width: 414px) {
    margin-left: 0;
  }
`;

export const Logo = styled.img`
  margin-top: 60px;

  @media(max-width: 768px) {
  width: 120px;
  }

  @media(max-width: 414px) {
  width: 200px;
  margin-top: 20px;
  }

`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  @media(max-width: 414px) {
    margin-top: 20px;
  }

  @media(max-width: 414px) {
    margin-top: 0;
  }


`;

export const Image = styled.img`
  width: 1000px;

  @media(max-width: 768px) {
    max-width: 380px;
  }

  @media(max-width: 414px) {
    display: none;
  }
  
`;
