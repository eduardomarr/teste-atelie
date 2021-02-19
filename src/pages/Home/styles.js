import styled from 'styled-components';

import BrownBG from '../../assets/background-marrom.png';
import selectArrow from '../../assets/seta.svg';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

export const FormContainer = styled.div`
  height: 65vh;
  width: 100%;

  background: url(${BrownBG}) center no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 414px) {
    height: 100%;
    padding: 35px 20px;
  }

  .Form {
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 414px) {
      width: 80%;
    }
  }
  
`;

export const Title = styled.text`
  color: #fff;
  font-weight: bold;
  font-size: 36px;
  text-transform: uppercase;
`;
export const Description = styled.text`
  margin-top: 26px;
  color: #fff;
  text-align: center;
  
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  .Select {
    width: 100%;
    margin-top: 6px;
    border: none;
    background: transparent;
    border-bottom: solid 2px #fff;
    color: #fff;
    font-size: 18px;

    -webkit-appearance: none;
    -moz-appearance: none;

    padding-right: 25px;
    background: url(${selectArrow});
    background-repeat: no-repeat;
    background-position: 95% 42%;

    transform: border-color 0.2s;

    &:focus {
      border-color: #e8a612;
    }
    .option {
      background-color: #805234; 
    }
  }
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;

  grid-column-gap: 20px;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 414px) {
    display: flex;
    margin: 0;
    width: 100%;
  }
`;

export const Label = styled.text`
  color: #fff;
  margin-top: 12px;
  align-self: flex-start;
`;

export const Icon = styled.img`
  align-self: flex-end;
  width: 24px;
  cursor: pointer;

  @media(max-width: 414px) {
    width: 16px; 
  }
`;
export const ModalMessage = styled.text`
  margin-bottom: 60px;

  @media(max-width: 414px) {
    margin-bottom: 26px;

  }
`;