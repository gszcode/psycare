import styles from './Header.module.css'
import { headerLinks } from '../../utils/data'
import { AiOutlineBars } from 'react-icons/ai'
import { useState } from 'react'

const SmallNav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  console.log(openMenu)
  const openMenuClick = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <AiOutlineBars className={styles.navIcon} onClick={openMenuClick} />
      <ul className={`${openMenu ? styles.smNavList : styles.hiddenMenu}`}>
        {headerLinks.map((link) => (
          <li key={link.id} className={styles.smNavItem}>
            <a href={`#${link.href}`}>{link.link}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SmallNav
