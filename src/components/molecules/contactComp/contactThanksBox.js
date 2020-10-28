import React from 'react';
import styled, { keyframes } from 'styled-components';

import ImageIcons from 'components/atoms/imageIcons/imageIcons';
import ThanksImage from 'assets/ThanksImage.png';
import H1 from 'components/atoms/heading/headingHight';
import Paragraph from 'components/atoms/paragraph/paragraph';

const appearInTop = keyframes`
    0%{
        opacity: 0;
        top: -20px;
    }
    100%{
        opacity: 1;
        top: 0;
    }
`;

const StyledWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .animation-appear {
    position: relative;
    animation: ${appearInTop} 1s ease-in-out;
  }
`;

const ContactThanksBox = () => (
  <StyledWrapper>
    <ImageIcons className="animation-appear" icons={ThanksImage} />
    <H1 className="animation-appear" secondary line>
      Thank you
    </H1>
    <Paragraph className="animation-appear">We’ll answer your message soon.</Paragraph>
  </StyledWrapper>
);

export default ContactThanksBox;
