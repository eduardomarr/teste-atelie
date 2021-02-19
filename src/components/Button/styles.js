import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #e8a612;
  height: 40px;
  border-radius: 6px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 150px;
  text-transform: uppercase;
  font-weight: 700;
  transition: background 0.2s;

  margin: 40px 12px 0px;

  &:hover {
    background: ${shade(0.2, '#e8a612')};
  }
`;
