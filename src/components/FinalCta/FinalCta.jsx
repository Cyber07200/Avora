import { ArrowUpRight, BookOpen } from 'lucide-react'
import styles from './FinalCta.module.css'

function handleGlowMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
  card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
}

export default function FinalCta() {
  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.card} onMouseMove={handleGlowMove}>
          <div className={styles.glow} aria-hidden="true" />

          <div className={styles.headGroup}>
            <span className={styles.eyebrow}>Готовы начать</span>
            <h2 className={styles.title}>
              Расскажите о проекте —<br />
              остальное сделаем мы
            </h2>
          </div>

          <p className={styles.subtitle}>
            Бесплатная консультация и оценка. Ответим в течение дня, предложим решение и
            сориентируем по срокам и стоимости.
          </p>

          <div className={styles.ctaRow}>
            <a href="#calculator" className={styles.btnPrimary}>
              Обсудить проект <ArrowUpRight size={24} />
            </a>
            <a href="#services" className={styles.btnGlass}>
              Смотреть кейсы <BookOpen size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
