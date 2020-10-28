import styled, { css } from 'styled-components';

const H2 = styled.h3`
  font-weight: ${({ theme, bolder }) => (bolder ? theme.bolder : theme.semiBold)};
  font-size: ${({ theme }) => theme.xl};
  color: ${({ white }) => (white ? 'white' : 'black')};
  ${({ secondary }) =>
    secondary &&
    css`
      text-transform: uppercase;
      color: ${({ theme, white }) => (white ? 'white' : theme.darkgray)};
    `}
`;

export default H2;
