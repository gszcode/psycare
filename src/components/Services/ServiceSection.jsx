import { FiHeart, FiUsers, FiActivity, FiSmile } from 'react-icons/fi'
import styles from './ServiceSection.module.css'
import { servicesData } from '../../utils/data'

const ServiceSection = () => {
  const renderIcons = (id) => {
    if (id === 1) return <FiHeart className={styles.icon} />
    if (id === 2) return <FiUsers className={styles.icon} />
    if (id === 3) return <FiActivity className={styles.icon} />
    if (id === 4) return <FiSmile className={styles.icon} />
  }

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestros Servicios</h2>
        <div className={styles.services}>
          {servicesData.map((item) => {
            return (
              <div key={item.id} className={styles.service}>
                {renderIcons(item.id)}
                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <p className={styles.serviceDescription}>{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
