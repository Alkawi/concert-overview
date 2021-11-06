import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './BandForm.module.css';

type terminObj = {
  date: string;
  location: string;
};

type bandObj = {
  name: string;
  genre: string[];
  termine: terminObj[] | [];
};

type BandFormProps = {
  onSubmit: (arg1: bandObj) => void;
  onEscape: () => void;
};

function BandForm({ onSubmit, onEscape }: BandFormProps): JSX.Element {
  const [bandName, setBandName] = useState('');
  const [genre, setGenre] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const band = {
      name: bandName,
      genre: genre.split(','),
      termine: [],
    };
    onSubmit(band);
  }

  return (
    <div className={styles.bandFormContainer}>
      <button className={styles.bandForm__escape} onClick={onEscape}>
        X
      </button>
      <form className={styles.bandForm} onSubmit={handleSubmit} action="">
        <label className={styles.bandForm__label} htmlFor="name">
          band name
        </label>
        <input
          name="name"
          className={styles.bandForm__input}
          type="text"
          placeholder="Bandname"
          value={bandName}
          required
          onChange={(event) => setBandName(event.target.value)}
        />
        <label className={styles.bandForm__label} htmlFor="genre">
          genres
        </label>
        <input
          name="genre"
          className={styles.bandForm__input}
          type="text"
          placeholder="genre1,genre2,..."
          value={genre}
          required
          onChange={(event) => setGenre(event.target.value)}
        />
        <Button>Add Band</Button>
      </form>
    </div>
  );
}

export default BandForm;
