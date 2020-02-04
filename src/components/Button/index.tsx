import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: 3px solid ${(props: any) => props.secondary ? '#b01925' : '#282c34'};;
  width: 20vw;
  height: 4vh;
  border-radius: 4px;
  color: #282c34;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition-duration: 0.2s;
  font-weight: 600;
  margin: 7px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 4px 4px 7px 0 rgba(0,0,0,0.3);
    background-color: ${(props: any) => props.secondary ? '#b01925' : '#282c34'};
    border: 3px solid ${(props: any) => props.secondary ? '#b01925' : '#282c34'};
    color: white;
     transform: translate(-1px, -1px);
  }
`;