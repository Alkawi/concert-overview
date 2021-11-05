import React from 'react';
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
    <div>
      <h2>{name}</h2>
      <span>{genre}</span>
      <ul>
        {termine.map((termin) => {
          return (
            <li>
              <span>{termin.date}</span>
              <span>{termin.location}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Band;
