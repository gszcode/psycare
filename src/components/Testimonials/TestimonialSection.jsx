import { FiStar } from 'react-icons/fi'
import styles from './TestimonialSection.module.css'
import { testimonialsData } from '../../utils/data'

const TestimonialSection = () => {
  const starsCount = 4

  const renderStars = () => {
    const stars = []

    for (let i = 1; i <= starsCount; i++) {
      stars.push(<FiStar key={i} className={styles.starIcon} />)
    }

    return stars
  }

  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className={styles.container}>
        <h2 className={styles.title}>Testimonios</h2>
        <div className={styles.testimonials}>
          {testimonialsData.map((item) => {
            return (
              <div key={item.id} className={styles.testimonial}>
                <div className={styles.rating}>{renderStars()}</div>
                <p className={styles.testimonialText}>{item.description}</p>
                <p className={styles.clientName}>- {item.name}</p>
              </div>
            )
          })}
        </div>
        {/* <button className={styles.viewMoreButton}>Ver más testimonios</button> */}
      </div>
    </section>
  )
}

export default TestimonialSection
