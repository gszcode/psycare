import styles from './Header.module.css'
import { headerLinks } from '../../utils/data'

const LargeNav = () => {
  return (
    <ul className={styles.navList}>
      {headerLinks.map((link) => (
        <li key={link.id} className={styles.navItem}>
          <a href={`#${link.href}`}>{link.link}</a>
        </li>
      ))}
    </ul>
  )
}

export default LargeNav
