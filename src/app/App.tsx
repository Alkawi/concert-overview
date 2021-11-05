import React, { useState } from 'react';
import styles from './App.module.css';
import Band from './components/Band/Band';

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
      {bandList.map((band) => {
        return <Band key={band.name} payload={band} />;
      })}
    </div>
  );
}

export default App;
