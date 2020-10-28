import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 80%;
`;

const Label = styled.label`
  position: relative;
  padding: ${({ TextareaPad }) => (TextareaPad ? null : '10px 0')};

  :hover::before {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.crimson};
    bottom: ${({ TextareaPad }) => (TextareaPad ? '2px' : '0')};
    box-shadow: ${({ theme }) => theme.shadowLine};
  }
`;

const Textarea = styled.textarea`
  padding: 10px 12px;
  border: none;
  background: ${({ theme }) => theme.lightGray};
  width: 100%;
  height: 120px;
  font-size: ${({ theme }) => theme.s};
  resize: none;
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  padding: 10px 12px;
  border: none;
  background: ${({ theme }) => theme.lightGray};
  width: 100%;
  font-size: ${({ theme }) => theme.s};
  margin: 10px 0;
  &:focus {
    outline: none;
  }
`;

const ContactInput = ({ PlaceholderName, Message, TextareaPad }) => {
  const addVisible = () => {
    // const classToVisible = document.querySelector('.test');
    // const classToVisible2 = document.querySelector('.test2');
    console.log('działa');
  };

  return (
    <StyledWrapper>
      {Message ? (
        <Label TextareaPad className="test2">
          <Textarea
            onFocus={() => {
              addVisible();
            }}
            onBlur={() => {
              console.log('nie działa');
            }}
            placeholder={PlaceholderName}
          />
        </Label>
      ) : (
        <Label className="test2">
          <Input placeholder={PlaceholderName} />
        </Label>
      )}
    </StyledWrapper>
  );
};

export default ContactInput;
