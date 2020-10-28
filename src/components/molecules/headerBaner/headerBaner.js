import React from 'react';
import styled from 'styled-components';

import NameLogo from 'components/atoms/logo/nameLogo';
import FaceLogo from 'components/atoms/logo/faceLogo';
import H1 from 'components/atoms/heading/headingHight';

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 25vh;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.crimsonOpacity};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 540px) {
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }
    .logo-heading {
      width: 100vw;
      
    }
  }
`;

const HeaderBaner = () => (
  <StyledWrapper>
    <FaceLogo />
    <div className="logo-heading">
      <NameLogo />
      <H1 white>web development & design</H1>
    </div>
  </StyledWrapper>
);

export default HeaderBaner;
