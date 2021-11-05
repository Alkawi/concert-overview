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
    <li>
      <span>{date}</span>
      <span>{location}</span>
    </li>
  );
}

export default Termin;
