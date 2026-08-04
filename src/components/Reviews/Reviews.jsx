import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'
import styles from './Reviews.module.css'

const REVIEWS = [
  {
    name: 'Артём Соколов',
    role: 'Основатель, сеть кофеен «Друга»',
    initials: 'АС',
    color: '#fc8003',
    text: 'Сделали лендинг за 5 дней, как и обещали. Заявки пошли уже на второй день после запуска рекламы. Больше всего понравилось, что не пропадали — на связи весь проект.',
  },
  {
    name: 'Марина Ковалёва',
    role: 'CEO, онлайн-школа «Практика»',
    initials: 'МК',
    color: '#7c5cfc',
    text: 'Заказывали личный кабинет для учеников. Команда сама предлагала решения там, где мы плавали в требованиях. Результат — ровно то, что нужно бизнесу, без лишнего.',
  },
  {
    name: 'Дмитрий Волков',
    role: 'Владелец, интернет-магазин электроники',
    initials: 'ДВ',
    color: '#03a6fc',
    text: 'До этого работали с фрилансерами и постоянно срывали сроки. С AvoraLab всё по договору и в срок — магазин запустили день в день, как записали в контракте.',
  },
  {
    name: 'Елена Прохорова',
    role: 'Маркетолог, event-агентство',
    initials: 'ЕП',
    color: '#fc4e03',
    text: 'Telegram-бот для записи на мероприятия работает без единого сбоя уже полгода. Отдельное спасибо за понятную админку — сама вношу изменения без разработчиков.',
  },
  {
    name: 'Игорь Романов',
    role: 'Директор, строительная компания',
    initials: 'ИР',
    color: '#0ba360',
    text: 'Нужен был корпоративный сайт с каталогом объектов. Получили не просто картинку, а рабочий инструмент — заявки с сайта теперь основной канал продаж.',
  },
  {
    name: 'Анна Белова',
    role: 'Основатель, студия красоты',
    initials: 'АБ',
    color: '#e91e8c',
    text: 'Небольшой бюджет, но отнеслись серьёзно, как к крупному проекту. Сайт с онлайн-записью окупился в первый месяц. Уже обсуждаем второй этап — мобильное приложение.',
  },
]

// Каждая карточка появляется с небольшой задержкой относительно предыдущей —
// эффект "волны" при попадании блока в область видимости.
function useRevealOnScroll(count) {
  const containerRef = useRef(null)
  const [visible, setVisible] = useState(() => new Array(count).fill(false))

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          REVIEWS.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev]
                next[i] = true
                return next
              })
            }, i * 90)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { containerRef, visible }
}

function handleCardGlow(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  card.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

export default function Reviews() {
  const { containerRef, visible } = useRevealOnScroll(REVIEWS.length)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <Quote size={40} className={styles.headIcon} />
          <div>
            <h2 className={styles.title}>Что говорят клиенты</h2>
            <p className={styles.subtitle}>
              Реальные отзывы о работе с AvoraLab — без купленных пятёрок и общих фраз.
            </p>
          </div>
        </div>

        <div ref={containerRef} className={styles.grid}>
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className={`${styles.card} ${visible[i] ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
              onMouseMove={handleCardGlow}
            >
              <span className={styles.cardGlow} aria-hidden="true" />
              <div className={styles.stars} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className={styles.text}>{r.text}</p>
              <div className={styles.person}>
                <span className={styles.avatar} style={{ background: r.color }}>
                  {r.initials}
                </span>
                <span>
                  <span className={styles.name}>{r.name}</span>
                  <span className={styles.role}>{r.role}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
