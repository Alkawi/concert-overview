import React from 'react';
import styles from './Termin.module.css';

type TerminObj = {
  date: string;
  location: string;
};

type TerminProps = {
  payload: TerminObj;
};

function Termin({ payload }: TerminProps): JSX.Element {
  const { date, location } = payload;
  return (
    <li className={styles.termin}>
      <span className={styles.termin__date}>{date}</span>
      <span className={styles.termin__location}>{location}</span>
    </li>
  );
}

export default Termin;
