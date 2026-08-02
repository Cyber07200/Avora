import iphoneRockMockup from '../../assets/images/iphone-rock-mockup.webp'
import styles from './PageHero.module.css'

export default function PageHero({
  title,
  subtitle,
  subtitleWidth = 700,
  innerWidth = 740
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true">
        <img src={iphoneRockMockup} alt="" />
      </div>

      <div
        className={`container ${styles.heroInner}`}
        style={{ '--inner-w': `${innerWidth}px` }}
      >
        <h1 className={styles.title}>{title}</h1>

        <p
          className={styles.subtitle}
          style={{ '--subtitle-w': `${subtitleWidth}px` }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  )
}