import React from 'react';
import styled from 'styled-components';

import Face from 'assets/LogoIcon/Face.svg';

const Wrapper = styled.div`
  img {
    transform: scale(0.8);
  }

  @media (max-width: 1310px) {
    margin: ${(navlogo) => (navlogo ? '4rem' : null)};
    transform: ${(navlogo) => (navlogo ? 'scale(0.7)' : null)};
  }
  @media (max-width: 790px) {
    display: none;
  }
`;

const FaceLogo = () => (
  <Wrapper>
    <img src={Face} alt="logoPaulCoder" />
  </Wrapper>
);

export default FaceLogo;
