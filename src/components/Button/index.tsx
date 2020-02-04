import React from 'react';
import styled from 'styled-components';
//@ts-ignore
import { Button as MaterialButton } from '@material-ui/core';

interface Props {
  secondary?: boolean
  theme: {
    colors: {
      primaryButton: string,
      secondaryButton: string,
    }
  },
}

export const Button = styled(MaterialButton)` 
    background-color: transparent !important;
    border: 3px solid ${(props: Props) => props.secondary ? props.theme.colors.secondaryButton : props.theme.colors.primaryButton} !important;
    width: 20vw;
    height: 4vh;
    border-radius: 17px !important;
    color: #282c34 !important;
    letter-spacing: 2px !important;
    transition-duration: 0.2s !important;
    line-height: 1 !important;
    margin: 7px !important;
    user-select: none;
    &:hover {
      box-shadow: 4px 4px 7px 0 rgba(0,0,0,0.3);
      background-color: ${(props: Props) => props.secondary ? props.theme.colors.secondaryButton : props.theme.colors.primaryButton} !important;
      border: 3px solid ${(props: Props) => props.secondary ? props.theme.colors.secondaryButton : props.theme.colors.primaryButton} !important;
      color: white !important;
      transform: translate(-1px, -1px);
      cursor: pointer;
    } 
   
`;