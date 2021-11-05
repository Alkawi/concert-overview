import React from 'react';
import Button from '../Button/Button';
import styles from './Nav.module.css';

type NavProps = {
  onAddBand: () => void;
};

function Nav({ onAddBand }: NavProps): JSX.Element {
  return (
    <header className={styles.Nav}>
      <h1>RockList</h1>
      <Button onClick={onAddBand}>Add Band</Button>
    </header>
  );
}

export default Nav;
