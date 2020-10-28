import React from 'react';
import styled from 'styled-components';
// import { BrowserRouter as Router, Link } from 'react-router-dom';

import NameLogo from 'components/atoms/logo/nameLogo';
import ButtonNav from 'components/atoms/buttons/buttonNav';

const StyledWrapper = styled.div`
  background-color: ${({ open, theme }) => (open ? theme.crimson : theme.backgroundGray)};
  display: flex;
  align-items: center;
  padding: 0 30px;
  z-index: 10;
  width: 100%;
  position: fixed;

  @media (max-width: 1310px) {
    flex-direction: column;
    justify-content: flex-start;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    width: ${({ open }) => (open ? '100%' : null)};

    a {
      letter-spacing: 0.5rem;

      &:hover {
        color: #343078;
      }
    }
  }
`;

const Navigation = ({ open }) => (
  <StyledWrapper open={open}>
    <a href="#Home">
      <NameLogo />
    </a>
    <a href="#About-us">
      <ButtonNav>About us</ButtonNav>
    </a>
    <a href="#Service">
      <ButtonNav>Service</ButtonNav>
    </a>
    <a href="#Advantage">
      <ButtonNav>Advantage</ButtonNav>
    </a>
    <a href="#Contact">
      <ButtonNav>Contact</ButtonNav>
    </a>
  </StyledWrapper>
);

export default Navigation;
