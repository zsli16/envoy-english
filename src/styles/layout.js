import styled, {css} from 'styled-components';
import {primary} from '../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em 5% 5em;

  ${props => props.hero && css`
    padding-bottom: 9em;
  `}

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 3em;

    ${props => props.hero && css`
      padding-bottom: 9em;
    `}
  }

  @media only screen and (min-width: 320px) and (max-width: 425px) {
    padding: 1em;

    ${props => props.hero && css`
      padding-bottom: 9em;
    `}
  }
`;

export const ColoredContainer = styled(Container)`
  background: ${primary};
  color: white;
  padding-bottom: 0;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1em 5% 3em;
  background: black;
  color: white;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    padding-left: 2em;
    padding-bottom: 2em;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 40px;
  justify-content: center;
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
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  align-items: flex-start;

  img {
    flex: 0 2 400px;
    width: 60px !important;
    height: auto;
    margin: 0 1.5em;
    vertical-align: middle;
  }

  div {
    flex: 0 3 auto;
  }

  ${props => props.block && css`
    width: 90%;
    background-color: ${primary};
    color: white;
    height: auto;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;

    img {
      width: 50px;
      margin-left: 0;
      margin-right: 1em;
    }

    a {
      color: white;
    }
  `}

  ${props => props.left && css`
    align-self: flex-start;
    text-align: left;
    justify-content: space-around;
  `}

  ${props => props.right && css`
    align-self: flex-end;
    text-align: right;
    justify-content: space-around;
  `}

  ${props => props.tall && css`
    margin: 3em 0;
  `}

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 1.5em 0;
  }

  @media only screen and (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    justify-content: center;

    img {
      width: 100%;
      flex: 0 0 auto;
    }

    ${props => props.right && css`
      flex-direction: column-reverse;
      align-self: flex-start;
    `}
  }
`;