import styles from './FocusSection.module.css'
import { FiTarget, FiBookOpen, FiUsers, FiHeart } from 'react-icons/fi'
import { focusData } from '../../utils/data'

const FocusSection = () => {
  return (
    <section className={styles.focusSection} id="focus">
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestro Enfoque</h2>
        <div className={styles.focusAreas}>
          {focusData.map((item) => (
            <div key={item.id} className={styles.focusArea}>
              {item.icon === 'FiTarget' && <FiTarget className={styles.icon} />}
              {item.icon === 'FiBookOpen' && (
                <FiBookOpen className={styles.icon} />
              )}
              {item.icon === 'FiUsers' && <FiUsers className={styles.icon} />}
              {item.icon === 'FiHeart' && <FiHeart className={styles.icon} />}
              <h3 className={styles.focusAreaTitle}>{item.title}</h3>
              <p className={styles.focusAreaDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FocusSection
