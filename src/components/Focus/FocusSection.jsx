import styles from './FocusSection.module.css'
import { FiTarget, FiBookOpen, FiUsers, FiHeart } from 'react-icons/fi'
import { focusData } from '../../utils/data'

const FocusSection = () => {
  const renderIcons = (id) => {
    if (id === 1) return <FiTarget className={styles.icon} />
    if (id === 2) return <FiBookOpen className={styles.icon} />
    if (id === 3) return <FiUsers className={styles.icon} />
    if (id === 4) return <FiHeart className={styles.icon} />
  }

  return (
    <section className={styles.focusSection} id="focus">
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestro Enfoque</h2>
        <div className={styles.focusAreas}>
          {focusData.map((item) => (
            <div key={item.id} className={styles.focusArea}>
              {renderIcons(item.id)}
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
