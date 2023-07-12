import styles from './Header.module.css'
import LargeNav from './LargeNav'
import SmallNav from './SmallNav'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>PsyCare</h1>
      <nav className={styles.nav}>
        <LargeNav />
        <SmallNav />
      </nav>
    </header>
  )
}

export default Header
