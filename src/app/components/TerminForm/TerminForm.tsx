import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './TerminForm.module.css';

type terminObj = {
  date: string;
  location: string;
};

type TerminFormProps = {
  onSubmit: (arg1: terminObj) => void;
  onEscape: () => void;
};

function TerminForm({ onSubmit, onEscape }: TerminFormProps): JSX.Element {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const termin = {
      date,
      location,
    };
    onSubmit(termin);
  }

  return (
    <div className={styles.TerminFormContainer}>
      <button className={styles.TerminForm__escape} onClick={onEscape}>
        X
      </button>
      <form className={styles.TerminForm} onSubmit={handleSubmit} action="">
        <label className={styles.TerminForm__label} htmlFor="name">
          Date
        </label>
        <input
          name="date"
          className={styles.TerminForm__input}
          type="text"
          placeholder="01/01/2022"
          value={date}
          required
          onChange={(event) => setDate(event.target.value)}
        />
        <label className={styles.TerminForm__label} htmlFor="genre">
          Location
        </label>
        <input
          name="location"
          className={styles.TerminForm__input}
          type="text"
          placeholder="Club, City"
          value={location}
          required
          onChange={(event) => setLocation(event.target.value)}
        />
        <Button>Add Gig</Button>
      </form>
    </div>
  );
}

export default TerminForm;
