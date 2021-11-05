import React, { useState } from 'react';
import styles from './App.module.css';
import Band from './components/Band/Band';
import Nav from './components/Nav/Nav';

function App(): JSX.Element {
  const [bandList, setBandList] = useState([
    {
      name: 'Feine Sahne Fischfilet',
      genre: ['Ska-Punk', 'Punk', 'Indie-Rock'],
      termine: [
        { date: 'test', location: 'halle, ort' },
        { date: 'test', location: 'halle, ort' },
        { date: 'test', location: 'halle, ort' },
      ],
    },
    {
      name: 'Feine Sahne Fischfilet',
      genre: ['Ska-Punk', 'Punk', 'Indie-Rock'],
      termine: [
        { date: 'test', location: 'halle, ort' },
        { date: 'test', location: 'halle, ort' },
        { date: 'test', location: 'halle, ort' },
      ],
    },
    {
      name: 'Feine Sahne Fischfilet',
      genre: ['Ska-Punk', 'Punk', 'Indie-Rock'],
      termine: [
        { date: 'test', location: 'halle, ort' },
        { date: 'test', location: 'halle, ort' },
        { date: 'test', location: 'halle, ort' },
      ],
    },
    {
      name: 'Feine Sahne Fischfilet',
      genre: ['Ska-Punk', 'Punk', 'Indie-Rock'],
      termine: [
        { date: 'test', location: 'halle, ort' },
        { date: 'test', location: 'halle, ort' },
        { date: 'test', location: 'halle, ort' },
      ],
    },
    {
      name: 'Feine Sahne Fischfilet',
      genre: ['Ska-Punk', 'Punk', 'Indie-Rock'],
      termine: [
        { date: 'test', location: 'halle, ort' },
        { date: 'test', location: 'halle, ort' },
        { date: 'test', location: 'halle, ort' },
      ],
    },
  ]);

  return (
    <div className={styles.appContainer}>
      <Nav />
      <div className={styles.bandContainer}>
        {bandList.map((band) => {
          return <Band key={band.name} payload={band} />;
        })}
      </div>
    </div>
  );
}

export default App;
