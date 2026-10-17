import styles from './Item.module.css';

export function Item({ nombre, precio, stock, urlImagen, categoria }) {
  const precioFormateado = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(Number(precio));

  return (
    <article className={styles.card}>
      <div className={styles.imagenContenedor}>
        <img
          src={urlImagen}
          alt={nombre}
          className={styles.imagen}
          loading="lazy"
          onError={(evento) => {
            evento.currentTarget.src = 'https://placehold.co/600x400/111827/e5e7eb?text=TiendaReact';
          }}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.precio}>{precioFormateado}</p>
        <p className={styles.stock}>
          {stock > 0 ? `${stock} unidades disponibles` : 'Sin stock'}
        </p>
        <button className={styles.btnComprar} type="button" disabled>
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}
