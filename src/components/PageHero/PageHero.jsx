import iphoneRockMockup from '../../assets/images/iphone-rock-mockup.webp'
import styles from './PageHero.module.css'

export default function PageHero({ title, subtitle, subtitleWidth = 700, innerWidth = 740 }) {
  return (
    <section className={styles.hero}>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="glassLetters" x="-40%" y="-40%" width="180%" height="180%">
            {/* bottom-right inset shadow (soft dark pressed edge) */}
            <feOffset in="SourceAlpha" dx="6" dy="6" result="off1" />
            <feGaussianBlur in="off1" stdDeviation="3" result="blur1" />
            <feComposite in="blur1" in2="SourceAlpha" operator="out" result="inset1" />
            <feFlood floodColor="#000000" floodOpacity="0.55" result="color1" />
            <feComposite in="color1" in2="inset1" operator="in" result="shadow1" />

            {/* top-left inset highlight (glass edge catching light) */}
            <feOffset in="SourceAlpha" dx="-6" dy="-6" result="off2" />
            <feGaussianBlur in="off2" stdDeviation="3" result="blur2" />
            <feComposite in="blur2" in2="SourceAlpha" operator="out" result="inset2" />
            <feFlood floodColor="#ffffff" floodOpacity="1" result="color2" />
            <feComposite in="color2" in2="inset2" operator="in" result="shadow2" />

            {/* soft outer glow for extra depth/sheen */}
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="outerBlur" />
            <feFlood floodColor="#ffffff" floodOpacity="0.35" result="outerColor" />
            <feComposite in="outerColor" in2="outerBlur" operator="in" result="outerGlow" />

            <feMerge>
              <feMergeNode in="outerGlow" />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="shadow2" />
              <feMergeNode in="shadow1" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <div className={styles.heroBg} aria-hidden="true">
        <img src={iphoneRockMockup} alt="" />
      </div>
      <div className={`container ${styles.heroInner}`} style={{ '--inner-w': `${innerWidth}px` }}>
        <h1 className={styles.title}>
          <span className={styles.titleGlass}>{title}</span>
        </h1>
        <p className={styles.subtitle} style={{ '--subtitle-w': `${subtitleWidth}px` }}>
          {subtitle}
        </p>
      </div>
    </section>
  )
}
