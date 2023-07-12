import { FiHeart, FiUsers, FiActivity, FiSmile } from 'react-icons/fi'
import styles from './ServiceSection.module.css'

const ServiceSection = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestros Servicios</h2>
        <div className={styles.services}>
          <div className={styles.service}>
            <FiHeart className={styles.icon} />
            <h3 className={styles.serviceTitle}>Apoyo Emocional</h3>
            <p className={styles.serviceDescription}>
              Brindamos un espacio seguro y confidencial para ayudarte a
              gestionar tus emociones y superar desafíos emocionales.
            </p>
          </div>
          <div className={styles.service}>
            <FiUsers className={styles.icon} />
            <h3 className={styles.serviceTitle}>Terapia Individual</h3>
            <p className={styles.serviceDescription}>
              Ofrecemos terapia individual personalizada para abordar tus
              necesidades específicas y promover tu bienestar mental.
            </p>
          </div>
          <div className={styles.service}>
            <FiActivity className={styles.icon} />
            <h3 className={styles.serviceTitle}>Terapia de Grupo</h3>
            <p className={styles.serviceDescription}>
              Facilitamos sesiones de terapia de grupo donde puedes conectarte y
              compartir experiencias con personas afines.
            </p>
          </div>
          <div className={styles.service}>
            <FiSmile className={styles.icon} />
            <h3 className={styles.serviceTitle}>Crecimiento Personal</h3>
            <p className={styles.serviceDescription}>
              Te ayudamos a desarrollar habilidades de afrontamiento y fomentar
              un crecimiento personal significativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
