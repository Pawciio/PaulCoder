import styled, { css } from 'styled-components';

const H1 = styled.h2`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme, title }) => (title ? theme.xxxl : theme.xxl)};
  text-transform: uppercase;
  color: ${({ white }) => (white ? 'white' : 'black')};
  display: flex;
  justify-content: center;
  position: relative;

  ${({ line }) =>
    line &&
    css`
      &::before {
        content: '';
        position: absolute;
        bottom: -10px;
        width: 70%;
        height: 2px;
        background: ${({ theme }) => theme.crimson};
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.crimson};
      text-shadow: ${({ theme }) => theme.shadowTitle};
    `};

  ${({ line }) =>
    line &&
    css`
      &::before {
        content: '';
        position: absolute;
        bottom: -10px;
        width: 70%;
        height: 2px;
        background: ${({ theme, white }) => (white ? 'white' : theme.crimson)};
      }
    `}
`;

export default H1;
