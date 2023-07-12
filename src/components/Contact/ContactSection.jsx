import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import styles from './ContactSection.module.css'

const ContactSection = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Contacto</h2>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <FiMail className={styles.icon} />
            <p className={styles.infoText}>contacto@psycare.com</p>
          </div>
          <div className={styles.infoItem}>
            <FiPhone className={styles.icon} />
            <p className={styles.infoText}>(123) 456-7890</p>
          </div>
          <div className={styles.infoItem}>
            <FiMapPin className={styles.icon} />
            <p className={styles.infoText}>
              Calle Principal 123, Buenos Aires, Argentina
            </p>
          </div>
        </div>
        <form className={styles.contactForm}>
          <input
            type="text"
            placeholder="Nombre"
            className={styles.formInput}
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className={styles.formInput}
          />
          <textarea
            placeholder="Mensaje"
            className={styles.formTextarea}
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
