import React from 'react';
import styled from 'styled-components';

import H1 from 'components/atoms/heading/headingHight';
import H2 from 'components/atoms/heading/headingLight';
import Paragraph from 'components/atoms/paragraph/paragraph';
import IconsAboutUs from 'components/molecules/iconsAboutUs/iconsAboutUs';

const StyledWrapper = styled.section`
  padding: 7rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.grayGradient};
  p {
    text-align: center;
    max-width: 950px;
    font-size: ${({ theme }) => theme.xl};
  }

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

const AboutUs = () => (
  <StyledWrapper id="About-us">
    <H2 secondary>About us</H2>
    <H1 secondary line>
      get to know us
    </H1>
    <Paragraph>
      CoreStore is a small Polish company designing and dveloping creative and unique webpages. Our
      goal is client satisfaction, therefore we provide many solutions for distinct requirements,
      and let the customers involved in creating process.
    </Paragraph>
    <IconsAboutUs />
  </StyledWrapper>
);

export default AboutUs;
