import React from 'react';
import styled, { keyframes } from 'styled-components';

import Adjusting from 'assets/AdjustingIcon/Adjusting.png';
import Clean from 'assets/AdjustingIcon/Clean.png';
import ModernDesigne from 'assets/AdjustingIcon/ModernDesigne.png';
import Responsive from 'assets/AdjustingIcon/Responsive.png';
import ImageIcons from 'components/atoms/imageIcons/imageIcons';
import H2 from 'components/atoms/heading/headingLight';
import Paragraph from 'components/atoms/paragraph/paragraph';

const appear = keyframes`
  0%{
    transform: translateX(-20px)
    opacity:0;
  }
  80%{
    transform: translateX(10px)
  }
  100%{
    transform: translateX(0)
    opacity:1;
  }
`;

const roadDown = keyframes`
  0%{
    transform: translateY(-20px);
    opacity:0;
  }
  80%{
    transform: translateY(10px)
  }
  100%{
    transform: translateY(0)
    opacity:1;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledWrapperItem = styled.div`
  margin: 30px;
  display: flex;
  align-items: center;
  background: white;
  width: 450px;
  height: 150px;
  border-radius: 5px;
  position: relative;

  @media (max-width: 540px) {
    margin: 10px 0;
    max-width: 320px;
  }
`;

const WrapperHoverContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${roadDown} 0.4s ease-in-out;

  .pVisible {
    visibility: hidden;
    position: absolute;
  }
  &:hover {
    animation: ${appear} 0.4s ease-in-out;
    .pVisible {
      visibility: visible;
      position: absolute;
    }
    .HVisible {
      visibility: hidden;
    }
  }
`;

class AdvantagesComp extends React.Component {
  state = {
    hover: false,
    items: [
      {
        name: 'adjusting',
        icon: Adjusting,
        heading: 'Wordpress adjusting',
        description: 'Free additional wordpress adjustment',
      },
      {
        name: 'clean',
        icon: Clean,
        heading: 'Clean code',
        description: 'We provide clean code websites',
      },
      {
        name: 'modern',
        icon: ModernDesigne,
        heading: 'Simple modern design ',
        description: 'Simplicity and modernity of our designs',
      },
      {
        name: 'responsive',
        icon: Responsive,
        heading: 'Fully responsive ',
        description: 'All of our projects are fully responsive',
      },
    ],
  };

  togglerText = (e) => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    return (
      <StyledWrapper>
        {this.state.items.map((item) => (
          <StyledWrapperItem>
            <ImageIcons icons={item.icon} />
            <WrapperHoverContent
              className={item.name}
              onMouseEnter={(e) => this.togglerText(e)}
              onMouseLeave={(e) => this.togglerText(e)}
            >
              <Paragraph className="pVisible">{item.description}</Paragraph>
              <H2 bolder secondary className="HVisible">
                {item.heading}
              </H2>
            </WrapperHoverContent>
          </StyledWrapperItem>
        ))}
      </StyledWrapper>
    );
  }
}
export default AdvantagesComp;
