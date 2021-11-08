import React, { useState } from 'react';
import styles from './App.module.css';
import Band from './components/Band/Band';
import BandForm from './components/BandForm/BandForm';
import EditBandForm from './components/EditBandForm/EditBandForm';
import Nav from './components/Nav/Nav';
import TerminForm from './components/TerminForm/TerminForm';

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
      { date: '08/05/2022', location: 'Uebel und Gefaehrlich, Hamburg' },
      { date: '06/60/2022', location: 'Gruenspan, Hamburg' },
    ],
  },
  {
    name: 'Bullet for my Valentine',
    genre: ['Alternative Metal', 'Metal', 'Indie-Rock'],
    termine: [
      { date: '28/02/2022', location: 'Gruenspan, Hamburg' },
      { date: '12/03/2022', location: 'Uebel und Gefaehrlich, Hamburg' },
      { date: '05/10/2022', location: 'Molotow, Hamburg' },
    ],
  },
  {
    name: 'Ton Steine Scherben',
    genre: ['Punk'],
    termine: [
      { date: '15/07/2022', location: 'Uebel und Gefaehrlich, Hamburg' },
      { date: '01/09/2022', location: 'Molotow, Hamburg' },
      { date: '11/11/2022', location: 'Gruenspan, Hamburg' },
    ],
  },
  {
    name: 'Airborne',
    genre: ['Heavy Metal', 'Rock'],
    termine: [
      { date: '16/01/2022', location: 'Gruenspan, Hamburg' },
      { date: '12/04/2022', location: 'Uebel und Gefaehrlich, Hamburg' },
      { date: '23/12/2022', location: 'Molotow, Hamburg' },
    ],
  },
  {
    name: 'Flogging Molly',
    genre: ['Rock', 'Folk Rock'],
    termine: [
      { date: '01/12/2022', location: 'Gruenspan, Hamburg' },
      { date: '10/22/2022', location: 'Molotow, Hamburg' },
      { date: '07/05/2022', location: 'Uebel und Gefaehrlich, Hamburg' },
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

  function handleAddTermin(idx: number) {
    setEditId(idx);
    setView('addTermin');
  }

  function handleTerminSubmit(termin: terminObj) {
    setBandList((prev) => {
      prev[editId].termine = [...prev[editId].termine, termin];
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
      {view === 'addTermin' && (
        <TerminForm
          onEscape={() => setView('idle')}
          onSubmit={(termin: terminObj) => handleTerminSubmit(termin)}
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
              onAddTermin={() => handleAddTermin(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
