import React, { useState, Component } from 'react';
import { Redirect } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea } from '@material-ui/core';

import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';

import { Button } from '../../components/Button';
import { TextField } from '../../components/TextField';

import { login_login, loginVariables } from '../../schemaTypes';

import { LOGIN } from '../../api/login';

import { TOKEN } from '../../utils/global.constants';


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

const Login: React.FC = () => {
  const classes = useStyles();

  const [loginField, setLogin] = useState('');
  const [passwordField, setPassword] = useState('');

  const [login, { data, error, loading }] = useMutation<{ input: loginVariables, login: login_login }>(LOGIN, {
    variables: {
      input: {
        loginName: loginField,
        password: passwordField,
      },
    },
  });

  if (data) {
    localStorage.setItem(TOKEN, data.login.token);
    return <Redirect to="/"/>;
  }

  return (
    <FormContainer>
      <Card className={classes.root}>
        <CardHeader>Sign in</CardHeader>
        <FieldsContainer>
          <TextField
            label="Login"
            type="text"
            onChange={(e) => setLogin(e.target.value)}
            value={loginField}
          />
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={passwordField}
          />
        </FieldsContainer>
        <ButtonContainer>
          <Button
            onClick={() => login()}
          >Login</Button>
        </ButtonContainer>
      </Card>
    </FormContainer>
  );
};

export default Login;
