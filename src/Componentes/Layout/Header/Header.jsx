import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header} id="inicio">
      <a className={styles.marca} href="#inicio" aria-label="ByteStore, inicio">
        <span className={styles.icono}>TR</span><span>Tienda<span className={styles.acento}>React</span></span>
      </a>
      <nav className={styles.nav} aria-label="Navegación principal">
        <a href="#inicio" className={styles.link}>Inicio</a>
        <a href="#productos" className={styles.link}>Productos</a>
        <a href="#formulario" className={styles.link}>Agregar producto</a>
        <a href="#nosotros" className={styles.link}>Nosotros</a>
      </nav>
    </header>
  );
}
export default Header;
