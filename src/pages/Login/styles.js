import styled from 'styled-components';

import {shade} from 'polished';

import BrownBG from '../../assets/background-marrom.png';

import { Form } from '@unform/web'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const LoginContainer = styled.div`
  height: 65vh;
  width: 100%;

  background: url(${BrownBG}) center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
export const LoginContent = styled(Form)`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 414px) {
    width: 80%;
  }
`;

export const Title = styled.text`
  color: #fff;
  font-weight: bold;
  font-size: 36px;
  text-transform: uppercase;
  margin: 30px;
`;
export const Links = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 14px 0;

  .link {
    border: none;
    background: transparent;
    color: #e8a612;
    transition: color 0.2s;
    font-size: 14px;
    transform: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#e8a612')};
    }
  }

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

