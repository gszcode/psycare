import aboutImage from '../../assets/aboutImage.jpg'
import styles from './AboutSection.module.css'

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Nosotros</h2>
          <p className={styles.description}>
            En PsyCare, nos dedicamos a brindar apoyo emocional y terapia
            personalizada para ayudar a las personas a alcanzar un bienestar
            mental óptimo. Nuestro equipo de psicólogos altamente capacitados y
            experimentados se compromete a proporcionar un entorno seguro y
            confidencial para que nuestros clientes puedan explorar sus desafíos
            y lograr un crecimiento personal significativo.
          </p>
          <p className={styles.description}>
            Nuestro enfoque se basa en la creencia de que cada individuo es
            único y merece un tratamiento personalizado. Trabajamos de cerca con
            nuestros clientes para comprender sus necesidades, metas y
            preocupaciones, y desarrollamos estrategias terapéuticas efectivas
            que se adapten a sus circunstancias específicas.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutImage}
            alt="Imagen de nosotros"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
