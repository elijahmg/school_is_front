import React from 'react';
import styled from 'styled-components';
import { TextField as MaterialTextField, TextFieldProps, Input, InputProps } from '@material-ui/core';


export const TextField_1 = styled(MaterialTextField)`
  display: flex;
  margin: 10px 0 !important;
  &:hover {
    &:before {
    border-bottom: 1px dotted #61595e !important;
    }
  }
    &:after {
      border-bottom: 2px solid #9AD55C !important;
    }
 `;

interface Props {

}

export class TextField extends React.Component<TextFieldProps & Props> {

  render() {

    return <TextField_1 {...this.props} />
  }
}