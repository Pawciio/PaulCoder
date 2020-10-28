import React from 'react';
import styled from 'styled-components';

import AdvantagesComp from 'components/molecules/advantagesComp/advantagesComp';
import H1 from 'components/atoms/heading/headingHight';
import H2 from 'components/atoms/heading/headingLight';

const StyledWrapper = styled.section`
  padding: 60px 0;
  background: ${({ theme }) => theme.crimson};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 540px) {
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 15px;
    }
  }
`;

const Advantages = () => (
  <StyledWrapper id="Advantage">
    <H1 white line>
      Our Advantages
    </H1>
    <H2 white>We keep a standard of all our pages.</H2>
    <AdvantagesComp />
  </StyledWrapper>
);

export default Advantages;
