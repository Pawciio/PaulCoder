import styled from 'styled-components';

const ButtonNav = styled.p`
  font-size: ${({ theme }) => theme.xl};
  font-weight: ${({ theme }) => theme.semiBold};
  color: white;
  cursor: pointer;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 10px 20px;
  transition: margin 0.6s ease-in-out;

  &::before {
    content: '';
    width: 0;
    height: 2px;
    background-color: white;
    position: absolute;
    top: 31px;
    transition: width 0.5s ease-in-out;
  }
  &:hover::before {
    width: 100%;
  }

  &:hover {
    font-weight: ${({ theme }) => theme.bolder};
    margin: 15px 25px;
  }
`;

export default ButtonNav;
