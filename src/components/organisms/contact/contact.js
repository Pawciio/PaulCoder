import React from 'react';
import styled from 'styled-components';

import BackgroundImage from 'components/atoms/BackgroundImage/BackgroundImage';
import ContactInfo from 'components/molecules/contactComp/contactInfo';
import ContactMessage from 'components/molecules/contactComp/contactMessageBox';
import H2 from 'components/atoms/heading/headingLight';

const StyledWrapper = styled.section`
  text-align: center;
  padding: 70px 10px;

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

const StyledWrapperComp = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: left;
`;

const Contact = () => (
  <BackgroundImage secondary >
    <StyledWrapper id="Contact">
      <H2 secondary white>
        Contact
      </H2>
      <StyledWrapperComp>
        <ContactInfo />
        <ContactMessage />
      </StyledWrapperComp>
    </StyledWrapper>
  </BackgroundImage>
);

export default Contact;
