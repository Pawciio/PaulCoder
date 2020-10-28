import React from 'react';
import styled from 'styled-components';

import Coder from 'assets/LogoIcon/coderlogoCoder.svg';
import Paul from 'assets/LogoIcon/paullogoPaul.svg';

const Wrapper = styled.div`
  transform: ${(navlogo) => (navlogo ? 'scale(0.7)' : null)};

  @media (max-width: 1080px) {
    margin: ${(navlogo) => (navlogo ? '4rem' : null)};
    transform: ${(navlogo) => (navlogo ? 'scale(0.7)' : null)};
  }

  @media (max-width: 540px) {
    transform: scale(0.4);
    margin: 0;
  }
`;

const Logo2 = () => (
  <Wrapper>
    <img src={Paul} alt="logoPaulCoder" />
    <img src={Coder} alt="logoPaulCoder" />
  </Wrapper>
);

export default Logo2;
