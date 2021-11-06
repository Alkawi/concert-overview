import { addListener } from 'process';
import React, { useState } from 'react';
import styles from './App.module.css';
import Band from './components/Band/Band';
import BandForm from './components/BandForm/BandForm';
import Nav from './components/Nav/Nav';

type terminObj = {
  date: string;
  location: string;
};

type bandObj = {
  name: string;
  genre: string[];
  termine: terminObj[] | [];
};

const BANDLIST = [
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
    name: 'Feine Sahne Fischfilet2',
    genre: ['Ska-Punk', 'Punk', 'Indie-Rock'],
    termine: [
      { date: 'test', location: 'halle, ort' },
      { date: 'test', location: 'halle, ort' },
      { date: 'test', location: 'halle, ort' },
    ],
  },
  {
    name: 'Feine Sahne Fischfilet3',
    genre: ['Ska-Punk', 'Punk', 'Indie-Rock'],
    termine: [
      { date: 'test', location: 'halle, ort' },
      { date: 'test', location: 'halle, ort' },
      { date: 'test', location: 'halle, ort' },
    ],
  },
  {
    name: 'Feine Sahne Fischfilet4',
    genre: ['Ska-Punk', 'Punk', 'Indie-Rock'],
    termine: [
      { date: 'test', location: 'halle, ort' },
      { date: 'test', location: 'halle, ort' },
      { date: 'test', location: 'halle, ort' },
    ],
  },
  {
    name: 'Feine Sahne Fischfilet5',
    genre: ['Ska-Punk', 'Punk', 'Indie-Rock'],
    termine: [
      { date: 'test', location: 'halle, ort' },
      { date: 'test', location: 'halle, ort' },
      { date: 'test', location: 'halle, ort' },
    ],
  },
];

function App(): JSX.Element {
  const [showForm, setShowForm] = useState(false);
  const [bandList, setBandList] = useState(BANDLIST);

  function handleBandSubmit(band: bandObj) {
    if (!band.name || !band.genre) {
      alert('Opps, something went wrong.');
      return;
    }

    if (bandList.some(({ name }) => name === band.name)) {
      alert(`A band called ${band.name} already exists!`);
      return;
    }

    setBandList((prev) => [...prev, band]);
    setShowForm(false);
  }

  return (
    <div className={styles.appContainer}>
      {showForm && (
        <BandForm
          onEscape={() => setShowForm(false)}
          onSubmit={(band: bandObj) => handleBandSubmit(band)}
        />
      )}
      <Nav onAddBand={() => setShowForm(true)} />
      <div className={styles.bandContainer}>
        {bandList.map((band) => {
          return <Band key={band.name} payload={band} />;
        })}
      </div>
    </div>
  );
}

export default App;
