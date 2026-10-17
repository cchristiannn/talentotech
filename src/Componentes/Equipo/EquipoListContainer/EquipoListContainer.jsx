import { useEffect, useState } from 'react';
import styles from './EquipoListContainer.module.css';
import { EquipoList } from '../EquipoList/EquipoList';

export function EquipoListContainer({ mensaje }) {
  const [equipo, setEquipo] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/data/equipo.json')
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('No se pudo cargar la información del equipo.');
        return respuesta.json();
      })
      .then(setEquipo)
      .catch((errorFetch) => setError(errorFetch.message));
  }, []);

  if (error) return <p className={styles.error}>{error}</p>;
  if (equipo.length === 0) return <p className={styles.estado}>Cargando equipo...</p>;

  return (
    <section className={styles.contenedor}>
      {mensaje && <h2 className={styles.titulo}>{mensaje}</h2>}
      <EquipoList equipo={equipo} />
    </section>
  );
}
