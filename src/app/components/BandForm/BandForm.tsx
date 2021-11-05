import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './BandForm.module.css';

type BandFormProps = {
  onSubmit: () => void;
  onEscape: () => void;
};

function BandForm({ onSubmit, onEscape }: BandFormProps): JSX.Element {
  const [bandName, setBandName] = useState('');
  const [genre, setGenre] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit();
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
        />
        <label className={styles.bandForm__label} htmlFor="genre">
          genres
        </label>
        <input
          name="genre"
          className={styles.bandForm__input}
          type="text"
          placeholder="genre1,genre2,..."
        />
        <Button>Add</Button>
      </form>
    </div>
  );
}

export default BandForm;
