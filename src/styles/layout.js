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
  padding: 3em 8em 5em;

  ${props => props.hero && css`
    padding-bottom: 9em;
  `}

`;

export const ColoredContainer = styled(Container)`
  background: ${primary};
  color: white;
  padding-bottom: 0;
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
  padding: 30px 20px;
  margin: 0 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const Row = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 1em 0;
  justify-content: center;
  font-size: 1em;

  img {
    max-width: 500px;
    height: auto;
    width: 100%;
    margin: 0 1.5em;
  }

  ${props => props.left && css`
    align-items: flex-start;
    align-self: flex-start;
    text-align: left;
    justify-content: space-around;
  `}

  ${props => props.right && css`
    align-items: flex-end;
    align-self: flex-end;
    text-align: right;
    justify-content: space-around;
  `}

  ${props => props.tall && css`
    margin: 3em 0;
  `}
`;