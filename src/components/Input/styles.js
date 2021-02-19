import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    margin: 10px 0;
    border: none;
    background: transparent;
    border-bottom: solid 2px #fff;
    color: #fff;
    font-size: 18px;
    padding: 0 4px;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #fff;
    }
    :-ms-input-placeholder {
      color: #fff;
    }

    transform: border-color 0.2s;

    &:focus {
      border-color: #e8a612;
    }  
  }
  .error {
    color: #e8a612;
    font-size: 14px;
  }

 

`;
