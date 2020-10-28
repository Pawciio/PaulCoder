import React from 'react';
import styled from 'styled-components';

import ImageColection from 'components/atoms/icon/icon';
import Paragraph from 'components/atoms/paragraph/paragraph';

const StyledWrapper = styled.div`
  padding: 10px;
`;

const IconsAboutUs = () => (
  <StyledWrapper>
    <Paragraph left>We work in..</Paragraph>
    <ImageColection />
  </StyledWrapper>
);

export default IconsAboutUs;
