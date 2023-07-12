import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>PsyCare</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#home">Inicio</a>
          </li>
          <li className={styles.navItem}>
            <a href="#about">Nosotros</a>
          </li>
          <li className={styles.navItem}>
            <a href="#services">Servicios</a>
          </li>
          <li className={styles.navItem}>
            <a href="#focus">Enfoque</a>
          </li>
          <li className={styles.navItem}>
            <a href="#testimonials">Testimonios</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
