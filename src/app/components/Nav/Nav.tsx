import React from 'react';
import Button from '../Button/Button';
import styles from './Nav.module.css';

function Nav(): JSX.Element {
  return (
    <header className={styles.Nav}>
      <h1>RockList</h1>
      <Button>Add Band</Button>
    </header>
  );
}

export default Nav;
