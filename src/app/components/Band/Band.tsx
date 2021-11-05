import React from 'react';
import Termin from '../Termin/Termin';
import styles from './Band.module.css';

type BandObj = {
  name: string;
  genre: string[];
  termine: { date: string; location: string }[];
};

type BandProps = {
  payload: BandObj;
};

function Band({ payload }: BandProps): JSX.Element {
  const { name, genre, termine } = payload;
  return (
    <div className={styles.band}>
      <h2>{name}</h2>
      <span>{genre}</span>
      <ul>
        {termine.map((termin) => (
          <Termin payload={termin} />
        ))}
      </ul>
    </div>
  );
}

export default Band;
