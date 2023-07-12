import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>PsyCare</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#">Inicio</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Nosotros</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Servicios</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Enfoque</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Testimonios</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
