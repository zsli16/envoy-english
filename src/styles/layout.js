import styled, {css} from 'styled-components';
import {primary} from '../styles/colors';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 45px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 100px;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 40px;
`;

export const Cell = styled.div`
  height: 18em;
  width: 14em;
  border: ${primary} 4px solid;
  padding: 30px 25px 20px;
  margin: 0 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div`
  text-align: center;
  margin: 1em 0;
`;