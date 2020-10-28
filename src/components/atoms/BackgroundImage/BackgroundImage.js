import styled, { css } from 'styled-components';
import Hero from 'assets/HeroImage.png';
import Contact from 'assets/ContactBG.svg';

const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('${Hero}');
  background-size: 100vw 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ secondary }) =>
    secondary &&
    css`
      background-image: url('${Contact}');
      height: 100%;
    `}
`;

export default BackgroundImage;
