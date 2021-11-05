import React, { useState } from 'react';
import styles from './App.module.css';

function App(): JSX.Element {
  const [bandList, setBandList] = useState([
    {
      name: 'Feine Sahne Fischfilet',
      genre: ['Ska-Punk', 'Punk', 'Indie-Rock'],
      termine: [{ date: 'test', location: 'halle, ort' }],
    },
  ]);

  return (
    <div>
      {bandList.map((band) => (
        <div>{JSON.stringify(band)}</div>
      ))}
    </div>
  );
}

export default App;
