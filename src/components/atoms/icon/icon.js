import React from 'react';
import styled from 'styled-components';
import ImageIcons from 'components/atoms/imageIcons/imageIcons';

import Html from 'assets/AboutIcon/HTMLIcon.png';
import Css from 'assets/AboutIcon/CSSIcon.png';
import Js from 'assets/AboutIcon/JSIcon.png';
import Php from 'assets/AboutIcon/PHPIcon.png';
import Sass from 'assets/AboutIcon/SassIcon.png';
import Boostr from 'assets/AboutIcon/BootstrapIcon.png';
import Figma from 'assets/AboutIcon/FigmaIcon.png';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 540px) {
    .imageIcon {
      width: 50px;
      height: 50px;
    }
  }
`;

const ImageColection = () => {
  const items = [Html, Css, Js, Php, Sass, Boostr, Figma];

  return (
    <StyledWrapper>
      {items.map((item) => (
        <ImageIcons className="imageIcon" icons={item} />
      ))}
    </StyledWrapper>
  );
};

export default ImageColection;
