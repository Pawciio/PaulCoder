import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${({ theme }) => theme.crimson};
  border-radius: 7px;
  font-size: ${({ theme }) => theme.l};
  box-shadow: ${({ theme }) => theme.shadowButton};
  color: white;
  font-weight: ${({ theme }) => theme.bold};

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: white;
      color: black;
    `};
`;

export default Button;
