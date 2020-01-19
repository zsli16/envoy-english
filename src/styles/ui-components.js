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

  ${props => props.primary && css`
    background: ${primary};
    color: white;
  `}

  ${props => props.signup && css`
    background: ${primary};
    color: white;
    padding: .75em 1.5em;
  `}
`;

export const Logo = styled.p`
  font-family: 'Exo', sans-serif;
  font-weight: 800;
  font-size: 24px;
  flex: auto;
`;