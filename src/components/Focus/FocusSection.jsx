import { FiTarget, FiBookOpen, FiUsers, FiHeart } from 'react-icons/fi'
import styles from './FocusSection.module.css'

const FocusSection = () => {
  return (
    <section className={styles.focusSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestro Enfoque</h2>
        <div className={styles.focusAreas}>
          <div className={styles.focusArea}>
            <FiTarget className={styles.icon} />
            <h3 className={styles.focusAreaTitle}>Enfoque Personalizado</h3>
            <p className={styles.focusAreaDescription}>
              Adaptamos nuestras terapias para satisfacer tus necesidades
              individuales y brindarte el apoyo adecuado.
            </p>
          </div>
          <div className={styles.focusArea}>
            <FiBookOpen className={styles.icon} />
            <h3 className={styles.focusAreaTitle}>
              Terapias Basadas en Evidencia
            </h3>
            <p className={styles.focusAreaDescription}>
              Utilizamos métodos y técnicas respaldados por la investigación
              para garantizar la efectividad de nuestras terapias.
            </p>
          </div>
          <div className={styles.focusArea}>
            <FiUsers className={styles.icon} />
            <h3 className={styles.focusAreaTitle}>Enfoque de Equipo</h3>
            <p className={styles.focusAreaDescription}>
              Trabajamos en colaboración con otros profesionales de la salud
              para brindarte un cuidado integral y multidisciplinario.
            </p>
          </div>
          <div className={styles.focusArea}>
            <FiHeart className={styles.icon} />
            <h3 className={styles.focusAreaTitle}>Compromiso Empático</h3>
            <p className={styles.focusAreaDescription}>
              Nos dedicamos a establecer una relación de confianza y empatía
              contigo para que te sientas cómodo y apoyado en todo momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FocusSection
