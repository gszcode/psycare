import styles from './Header.module.css'
import { headerLinks } from '../../utils/data'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>PsyCare</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {headerLinks.map((link) => (
            <li key={link.id} className={styles.navItem}>
              <a href={`#${link.href}`}>{link.link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
