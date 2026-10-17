import { useEffect, useState } from 'react';
import styles from './ItemListContainer.module.css';
import { ItemList } from '../ItemList/ItemList';

export function ItemListContainer({ mensaje }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const controlador = new AbortController();

    fetch('/data/productos.json', { signal: controlador.signal })
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('No se pudo cargar el catálogo.');
        return respuesta.json();
      })
      .then((datos) => {
        if (!Array.isArray(datos)) throw new Error('El archivo de productos no tiene un formato válido.');
        setProductos(datos);
      })
      .catch((errorFetch) => {
        if (errorFetch.name !== 'AbortError') setError(errorFetch.message);
      })
      .finally(() => setCargando(false));

    return () => controlador.abort();
  }, []);

  return (
    <section className={styles.contenedor} id="productos">
      <div className={styles.encabezado}>
        <h2 className={styles.titulo}>{mensaje}</h2>
      </div>
      {cargando && <p className={styles.estado}>Cargando productos...</p>}
      {!cargando && error && <p className={styles.error}>Error: {error}</p>}
      {!cargando && !error && productos.length === 0 && <p className={styles.estado}>Todavía no hay productos para mostrar.</p>}
      {!cargando && !error && productos.length > 0 && <ItemList productos={productos} />}
    </section>
  );
}
