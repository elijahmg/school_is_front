import React from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import { Wrapper } from './components/Button/index';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <Wrapper>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
