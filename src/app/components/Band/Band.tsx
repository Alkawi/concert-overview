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
  onEdit: () => void;
};

function Band({ payload, onEdit }: BandProps): JSX.Element {
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
      <button className={styles.band__editBtn} onClick={onEdit}>
        edit
      </button>
    </div>
  );
}

export default Band;
