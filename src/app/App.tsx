import React, { useState } from 'react';
import styles from './App.module.css';
import Band from './components/Band/Band';
import BandForm from './components/BandForm/BandForm';
import EditBandForm from './components/EditBandForm/EditBandForm';
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
  const [view, setView] = useState('idle');
  const [bandList, setBandList] = useState(BANDLIST);
  const [editId, setEditId] = useState(0);

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
    setView('idle');
  }

  function handleEdit(idx: number) {
    setEditId(idx);
    setView('editBand');
  }
  function handleBandUpdate(band: bandObj) {
    setBandList((prev) => {
      prev[editId] = band;
      return prev;
    });
    setView('idle');
  }

  function handleBandDelete(idx: number) {
    const newBandlist = bandList.filter((_, bandIdx) => bandIdx !== idx);
    setBandList(newBandlist);
    setView('idle');
  }

  return (
    <div className={styles.appContainer}>
      {view === 'addBand' && (
        <BandForm
          onEscape={() => setView('idle')}
          onSubmit={(band: bandObj) => handleBandSubmit(band)}
        />
      )}
      {view === 'editBand' && (
        <EditBandForm
          band={bandList[editId]}
          onEscape={() => setView('idle')}
          onSubmit={(band: bandObj) => handleBandUpdate(band)}
          onDelete={() => handleBandDelete(editId)}
        />
      )}

      <Nav onAddBand={() => setView('addBand')} />
      <div className={styles.bandContainer}>
        {bandList.map((band, idx) => {
          return (
            <Band
              key={band.name}
              payload={band}
              onEdit={() => handleEdit(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
