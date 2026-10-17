import styles from './Footer.module.css';
import { EquipoListContainer } from '../../Equipo/EquipoListContainer/EquipoListContainer';

function Footer() {
  return (
    <footer className={styles.footer} id="nosotros">
      <div className={styles.equipo}>
        <div className={styles.encabezadoEquipo}>
          <h2 className={styles.tituloEquipo}>Conocé nuestro equipo</h2>
        </div>
        <EquipoListContainer mensaje="" />
      </div>
      <div className={styles.contenedor}>
        <div className={styles.columna}>
          <h3 className={styles.tituloMarca}>Tienda<span>React</span></h3>
          <p className={styles.texto}>Somos una tienda de tecnología dedicada a acercarte componentes y accesorios para armar el setup que necesitás.</p>
        </div>
        <div className={styles.columna}>
          <h4 className={styles.subtitulo}>Explorá</h4>
          <ul className={styles.lista}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#formulario">Agregar producto</a></li>
          </ul>
        </div>
        <div className={styles.columna}>
          <h4 className={styles.subtitulo}>Información</h4>
          <p className={styles.texto}>Buenos Aires, Argentina</p>
          <p className={styles.texto}>Talento Tech</p>
          <p className={styles.texto}>Consultas: contacto@tiendareact.com</p>
        </div>
      </div>
      <div className={styles.copyright}><p>© 2026 TiendaReact · Talento Tech.</p></div>
    </footer>
  );
}

export default Footer;
