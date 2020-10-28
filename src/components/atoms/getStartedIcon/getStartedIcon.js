import React from 'react';
import styled, { keyframes } from 'styled-components';

const test = keyframes`
      0%{
        opacity:0;
        bottom:35px;
      }
      50%{
        opacity: 1;
      }
      100%{
        bottom: -20px;
        opacity: 0;
      }
`;

const Span = styled.span`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.crimson};
  position: absolute;
  bottom: 0;
  right: 48.5%;
  display: flex;
  justify-content: center;

  &::before {
    content: 'V';
    position: absolute;
    font-size: 50px;
    font-weight: 900;
    color: white;
    animation: ${test} 2s ease-in-out infinite;
  }

  &:hover::before {
    color: black;
  }
`;

const GetStarted = () => <Span />;

export default GetStarted;
