import styles from './HomeSection.module.css'

const HomeSection = () => {
  return (
    <section className={styles.homeSection}>
      <div className={styles.backgroundImage} />
      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenido a PsyCare</h1>
        <p className={styles.subtitle}>Tu camino hacia el bienestar mental</p>
        <a href="#" className={styles.button}>
          ¡Comienza tu viaje!
        </a>
      </div>
    </section>
  )
}

export default HomeSection
