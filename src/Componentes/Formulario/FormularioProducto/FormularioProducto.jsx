import styles from './FormularioProducto.module.css';

function FormularioProducto({ datosForm, manejarCambio, manejarImagen, manejarEnvio, subiendo, mensaje, tipoMensaje, archivoImagen }) {
  return (
    <form className={styles.contenedorForm} onSubmit={manejarEnvio}>
      <div className={styles.grupoInput}>
        <label className={styles.label} htmlFor="id">ID del producto</label>
        <input className={styles.input} id="id" type="text" name="id"  value={datosForm.id} onChange={manejarCambio} required />
      </div>
      <div className={styles.grupoInput}>
        <label className={styles.label} htmlFor="nombre">Nombre del producto</label>
        <input className={styles.input} id="nombre" type="text" name="nombre"  value={datosForm.nombre} onChange={manejarCambio} required />
      </div>
      <div className={styles.fila}>
        <div className={styles.grupoInput}>
          <label className={styles.label} htmlFor="precio">Precio (ARS)</label>
          <input className={styles.input} id="precio" type="number" name="precio" min="0" step="1" value={datosForm.precio} onChange={manejarCambio} required />
        </div>
        <div className={styles.grupoInput}>
          <label className={styles.label} htmlFor="stock">Stock</label>
          <input className={styles.input} id="stock" type="number" name="stock" min="0" step="1" value={datosForm.stock} onChange={manejarCambio} required />
        </div>
      </div>
      <div className={styles.grupoInput}>
        <label className={styles.label} htmlFor="imagen">Imagen del producto</label>
        <input className={styles.inputArchivo} id="imagen" type="file" accept="image/*" onChange={manejarImagen} required />
       
      </div>
      {mensaje && <p className={`${styles.mensaje} ${tipoMensaje === 'error' ? styles.mensajeError : styles.mensajeExito}`} role="status">{mensaje}</p>}
      <button className={styles.botonSubmit} type="submit" disabled={subiendo}>
        {subiendo ? 'Subiendo imagen...' : 'Guardar producto'}
      </button>
    
    </form>
  );
}

export default FormularioProducto;
