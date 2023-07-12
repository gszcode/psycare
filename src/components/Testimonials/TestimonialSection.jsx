import { FiStar } from 'react-icons/fi'
import styles from './TestimonialSection.module.css'

const TestimonialSection = () => {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className={styles.container}>
        <h2 className={styles.title}>Testimonios</h2>
        <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <div className={styles.rating}>
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
            </div>
            <p className={styles.testimonialText}>
              ¡La terapia en PsyCare ha sido transformadora! Me ha ayudado a
              entender y superar mis miedos. ¡Gracias por su apoyo y
              profesionalidad!
            </p>
            <p className={styles.clientName}>- Ana Gómez</p>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.rating}>
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
            </div>
            <p className={styles.testimonialText}>
              Recomiendo a PsyCare sin ninguna duda. Su enfoque personalizado y
              su trato cálido me han hecho sentir escuchado y comprendido
              durante todo el proceso de terapia.
            </p>
            <p className={styles.clientName}>- Carlos Martínez</p>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.rating}>
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
            </div>
            <p className={styles.testimonialText}>
              Mi experiencia en PsyCare ha sido excepcional. Los profesionales
              son altamente cualificados y han sabido brindarme las herramientas
              necesarias para afrontar mis desafíos emocionales.
            </p>
            <p className={styles.clientName}>- Laura Rodríguez</p>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.rating}>
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
              <FiStar className={styles.starIcon} />
            </div>
            <p className={styles.testimonialText}>
              Estoy muy agradecido por la ayuda y el apoyo que he recibido en
              PsyCare. Gracias a su profesionalismo y dedicación, he logrado un
              gran progreso en mi bienestar emocional.
            </p>
            <p className={styles.clientName}>- Pedro Sánchez</p>
          </div>
        </div>
        {/* <button className={styles.viewMoreButton}>Ver más testimonios</button> */}
      </div>
    </section>
  )
}

export default TestimonialSection
