import React from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import { Button } from './components/Button/index';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
`

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <ButtonWrapper>
          <Button>Sign In</Button>
          <Button secondary>Sign up</Button>
        </ButtonWrapper>
      </header>
    </div>
  );
};

export default App;
