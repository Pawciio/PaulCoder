import React from 'react';
import styled from 'styled-components';

import H1 from 'components/atoms/heading/headingHight';
import Button from 'components/atoms/buttons/button';
import ContactInput from 'components/atoms/contactInput/contactInput';

const StyledWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const SeparateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class ContactContent extends React.Component {
  render() {
    let { SendButtonChange } = this.props;
    return (
      <StyledWrapper>
        <SeparateDiv>
          <H1 secondary line>
            Write us a message
          </H1>
          <ContactInput PlaceholderName={'Full name'} />
          <ContactInput PlaceholderName={'Email'} />
          <ContactInput Message PlaceholderName={'Message'} />
        </SeparateDiv>
        <Button type="button" onClick={SendButtonChange}>
          Send
        </Button>
      </StyledWrapper>
    );
  }
}
export default ContactContent;
