import React from 'react';
import styled from 'styled-components';

import H1 from 'components/atoms/heading/headingHight';
import ContactInfoIcon from 'components/molecules/contactInfoIcon/contactInfoIcon';

const StyledWrapper = styled.div`
  margin: 25px 0;
`;

const ContactInfo = () => (
  <StyledWrapper>
    <H1 white line>
      Contact Info
    </H1>
    <ContactInfoIcon />
  </StyledWrapper>
);

export default ContactInfo;
