import styled from 'styled-components';

const ImageIcons = styled.div`
  margin: 10px;
  width: 100px;
  height: 100px;
  background-image: url(${({ icons }) => icons});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 90%;
`;

export default ImageIcons;
