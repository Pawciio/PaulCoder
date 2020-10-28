import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.light};
  text-align: ${({ left }) => (left ? 'left' : null)};

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme, white }) => ( white ? 'white' : theme.darkGray)};
      font-weight: ${({ bold, theme }) => (bold ? theme.bolder : null)};
      margin: 7px;
    `}
`;

export default Paragraph;
