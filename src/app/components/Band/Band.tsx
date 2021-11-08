import React from 'react';
import Button from '../Button/Button';
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
  onAddTermin: () => void;
};

function Band({ payload, onEdit, onAddTermin }: BandProps): JSX.Element {
  const { name, genre, termine } = payload;
  return (
    <div className={styles.band}>
      <h2 className={styles.band__title}>{name}</h2>
      <ul className={styles.band__genreList}>
        {genre.map((g) => (
          <li className={styles.band__genre}>{g}</li>
        ))}
      </ul>
      <ul className={styles.band__terminList}>
        {termine.map((termin) => (
          <Termin payload={termin} />
        ))}
      </ul>
      <Button onClick={onAddTermin}>add gig</Button>
      <button className={styles.band__editBtn} onClick={onEdit}>
        edit
      </button>
    </div>
  );
}

export default Band;
