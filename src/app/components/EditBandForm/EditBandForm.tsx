import React, { useState } from 'react';
import { setEnvironmentData } from 'worker_threads';
import Button from '../Button/Button';
import styles from './EditBandForm.module.css';

type terminObj = {
  date: string;
  location: string;
};

type bandObj = {
  name: string;
  genre: string[];
  termine: terminObj[] | [];
};

type EditBandFormProps = {
  band: bandObj;
  onSubmit: (arg1: bandObj) => void;
  onEscape: () => void;
  onDelete: () => void;
};

function EditBandForm({
  band,
  onSubmit,
  onEscape,
  onDelete,
}: EditBandFormProps): JSX.Element {
  const [newBand, setNewBand] = useState(band);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(newBand);
  }

  function handleTerminDelete(idx: number) {
    setNewBand((prev) => {
      const termine = prev.termine.filter((_, terminIdx) => terminIdx !== idx);
      return {
        ...prev,
        termine,
      };
    });
  }

  return (
    <div className={styles.EditBandFormContainer}>
      <button className={styles.EditBandForm__escape} onClick={onEscape}>
        X
      </button>
      <form className={styles.EditBandForm} onSubmit={handleSubmit} action="">
        <label className={styles.EditBandForm__label} htmlFor="name">
          band name
        </label>
        <input
          name="name"
          className={styles.EditBandForm__input}
          type="text"
          placeholder="Bandname"
          value={newBand.name}
          required
          onChange={(event) =>
            setNewBand((prev) => {
              return {
                ...prev,
                name: event.target.value,
              };
            })
          }
        />
        <label className={styles.EditBandForm__label} htmlFor="genre">
          genres
        </label>
        <input
          name="genre"
          className={styles.EditBandForm__input}
          type="text"
          placeholder="genre1,genre2,..."
          value={newBand.genre.join(',')}
          required
          onChange={(event) =>
            setNewBand((prev) => {
              return {
                ...prev,
                genre: event.target.value.split(','),
              };
            })
          }
        />
        <h2 className={styles.EditBandForm__label}>Termine</h2>
        {newBand.termine.map((termin, idx) => (
          <div
            key={termin.location + idx}
            className={styles.EditBandForm__terminContainer}
          >
            <input
              className={styles.EditBandForm__input}
              type="text"
              value={termin.date}
              onChange={(event) =>
                setNewBand((prev) => {
                  prev.termine[idx].date = event.target.value;
                  return {
                    ...prev,
                    termine: [...prev.termine],
                  };
                })
              }
            />
            <input
              type="text"
              value={termin.location}
              className={styles.EditBandForm__input}
              onChange={(event) =>
                setNewBand((prev) => {
                  prev.termine[idx].location = event.target.value;
                  return {
                    ...prev,
                    termine: [...prev.termine],
                  };
                })
              }
            />
            <Button type="button" onClick={() => handleTerminDelete(idx)}>
              X
            </Button>
          </div>
        ))}
        <Button type="button" onClick={onDelete}>
          delete Band
        </Button>
        <Button>Edit Band</Button>
      </form>
    </div>
  );
}

export default EditBandForm;
