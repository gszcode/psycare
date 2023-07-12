import { FiLinkedin, FiGithub } from 'react-icons/fi'
import styles from './FooterSection.module.css'

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyRight}>
          &copy; {new Date().getFullYear()} gszcode. Todos los derechos
          reservados.
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/gszcode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className={styles.icon} />
          </a>
          <a
            href="https://github.com/gszcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
