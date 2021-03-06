import styled, {css} from 'styled-components';
import {primary} from './colors';

export const Button = styled.button`
  background: transparent;
  border-radius: 4px;
  border: ${primary} 2px solid;
  font-weight: 600;
  color: ${primary};
  margin: 0.5em 1em;
  padding: 1em 1.5em;
  cursor: pointer;

  a {
    color: ${primary};
  }

  :hover {
    cursor: pointer;
    background: ${primary};
    color: white;
  }

  ${props => props.primary && css`
    background: ${primary};
    color: white;

    a {
      color: white;
    }
  `}

  ${props => props.signup && css`
    background: ${primary};
    color: white;
    padding: .75em 1.5em;
  `}
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
`;

export const Logo = styled.p`
  font-family: 'Exo', sans-serif;
  font-weight: 800;
  font-size: 1.5em;
  flex: auto;

  @media only screen and (min-width: 320px) and (max-width: 425px) {
    display: none;
  }
`;

export const Tube = styled.div`
  color: black;
  background: white;
  border: black 2px solid;
  border-radius: 45px;
  padding: 10px;
  margin-bottom: .5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  :hover {
    & .circle {
      background-color: ${primary};
      color: white;
    }
  }
`;

export const LevelDescription = styled.div`
  text-align: left;
  padding-left: 2em;
`;

export const Circle = styled.div`
  border: ${primary} 6px solid;
  border-radius: 45px;
  padding: 2px;
  min-width: 2em;
  min-height: auto;
  color: ${primary};
  font-size: 24px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  font-weight: 600;
  font-family: 'Exo', sans-serif;
`;

export const StyledEmailForm = styled.iframe`
  position: relative;
  min-width: 100%;
  height: 185px;
  overflow: hidden;
  width: 100%;
  padding-bottom: 5%;
  @media only screen and (max-width: 512px) {
    height: 304px;
  }
`;

export const StyledApplicationForm = styled.iframe`
  position: relative;
  min-width: 100%;
  height: 1880px;
  width: 100%;
  padding-bottom: 5%;

  @media only screen and (max-width: 512px) {
    height: 2850px;
    overflow: scroll;
    padding-bottom: 10%;
  }

  @media only screen and (min-width: 512px) and (max-width: 768px) {
    height: 2080px;
  }
`;