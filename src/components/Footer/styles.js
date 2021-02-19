import styled from 'styled-components';

import GrayBG from '../../assets/background-cinza.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 100px;

  background: url(${GrayBG}) center no-repeat;
  background-size: cover;

  padding: 60px 0;


  @media(max-width: 768px) {
    flex-direction: column-reverse;
    padding: 30px;
  }

`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 414px) {
  }
 
`;
export const Title = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  color: #3c3d3e;
  font-weight: 400;

  @media(max-width: 768px) {
    font-size: 16px;
  }
`;
export const Description = styled.div`
  font-size: 12px;
  color: #3c3d3e; 
  width: 700px;
  margin-right: 100px;
  margin-top: 20px;

  @media(max-width: 768px) {
    margin: 10px 0;
    width: 80%;
  }
`;
export const Logo = styled.img`
  width: 200px;

  @media(max-width: 768px) {
    width: 150px;
    margin-bottom: 30px;
  }
`;
export const Infos = styled.div`
  background: #E8A612;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px 20px;
  margin: 0 10%;

  @media(max-width: 414px) {
    display: flex;
    margin: 0;
    justify-content: space-between;
  }

`;
export const InfoText = styled.text`
  color: #fff;
  font-size: 12px;

  @media(max-width: 414px) {
    font-size: 9px;
  }
  
`;

export const P = styled.text`
  color: #000;
`;

