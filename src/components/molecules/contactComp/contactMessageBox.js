import React from 'react';
import styled from 'styled-components';

import ContactContent from 'components/molecules/contactComp/contactContent';
import ContactThanksBox from 'components/molecules/contactComp/contactThanksBox';
import H1 from 'components/atoms/heading/headingHight';

const StyledWrapper = styled.div`
  margin: 25px 0;
`;

const BackgroundOrange = styled.div`
  width: 500px;
  height: 600px;
  background: ${({ theme }) => theme.crimsonOpacity};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 540px) {
    max-width: 318px;
    max-height: 460px;
  }
`;

const WhiteBackground = styled.div`
  width: 450px;
  height: 550px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 540px) {
    max-width: 300px;
    height: 450px;
  }
`;

class ContactMessage extends React.Component {
  state = {
    sendButton: false,
  };

  SendButtonChange = () => {
    this.setState({
      sendButton: true,
    });
    setTimeout(() => {
      this.setState({
        sendButton: false,
      });
    }, 10000);
  };

  changeToFalse = () => {};

  render() {
    return (
      <StyledWrapper>
        <H1 white line>
          Get in touch
        </H1>
        <BackgroundOrange>
          <WhiteBackground>
            {this.state.sendButton === true ? (
              <ContactThanksBox />
            ) : (
              <ContactContent SendButtonChange={this.SendButtonChange} />
            )}
          </WhiteBackground>
        </BackgroundOrange>
      </StyledWrapper>
    );
  }
}

export default ContactMessage;
