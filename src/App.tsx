import React from 'react';
//@ts-ignore
import { Card, CardActionArea } from '@material-ui/core';
import styled from 'styled-components';

import { Button } from './components/Button';
import { TextField } from './components/TextField';

import { makeStyles } from '@material-ui/core/styles';


const FormContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CardHeader = styled.span`
  width: 100%;
  height: 10vh;
  font-size: 2em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
`;

const useStyles = makeStyles({
  root: {
    minWidth: '300px',
    minHeight: '450px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  }
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <FormContainer>
      <Card className={classes.root}>
        <CardHeader>Sign in</CardHeader>
        <FieldsContainer>
          <TextField label="Login" type="text"/>
          <TextField label="Password" type="text"/>
        </FieldsContainer>
        <ButtonContainer>
          <Button>Login</Button>
        </ButtonContainer>
      </Card>
    </FormContainer>
  );
};

export default App;
