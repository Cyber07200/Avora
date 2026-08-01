import { useRef } from 'react'
import { HelpCircle, FastForward, Layers, FileText, Calendar, Code, BarChart3 } from 'lucide-react'
import styles from './WhyUs.module.css'

const CARDS = [
  {
    icon: FastForward,
    title: 'Быстрая разработка',
    text: 'Лендинг — от 5 дней. Сервис — от 3–4 недель. Без потери качества и бесконечных правок.',
  },
  {
    icon: Layers,
    title: 'Полный цикл под ключ',
    text: 'От аналитики и дизайна до разработки, тестирования и запуска. Одна команда — одна ответственность.',
  },
  {
    icon: FileText,
    title: 'Работа строго по договору',
    text: 'Фиксируем сроки, стоимость и объём работ. Никаких «ой, это будет дороже».',
  },
  {
    icon: Calendar,
    title: 'Фиксированные сроки и прозрачность',
    text: 'Вы всегда понимаете, на каком этапе проект и когда будет готов результат.',
  },
  {
    icon: Code,
    title: 'Современный дизайн и чистый код',
    text: 'Делаем так, чтобы продукт не устарел через полгода и его было легко развивать.',
  },
  {
    icon: BarChart3,
    title: 'Поддержка после запуска',
    text: 'Не бросаем после сдачи. Помогаем с правками, обновлениями и развитием.',
  },
]

function WhyUsCard({ icon: Icon, title, text }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    card.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div className={styles.card} ref={cardRef} onMouseMove={handleMouseMove}>
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.iconBubble}>
        <Icon size={32} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section className={styles.section} id="why-us">
      <div className="container">
        <div className="sectionEyebrow">
          <HelpCircle size={40} color="rgba(17,17,17,0.8)" />
          <h2 style={{ color: 'rgba(17,17,17,0.8)' }}>Почему с нами спокойно?</h2>
        </div>
        <p className="sectionSubtitle" style={{ color: 'rgba(17,17,17,0.6)' }}>
          Мы убираем хаос из разработки. Чёткие договорённости, предсказуемые сроки и результат,
          которым можно гордиться.
        </p>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <WhyUsCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
