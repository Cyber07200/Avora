import { HelpCircle, ArrowUpRight, User, Calendar, TrendingUp, Clock } from 'lucide-react'
import landingPreview from '../../assets/images/landing-preview.webp'
import iphoneOrange from '../../assets/images/iphone-17-pro-orange.webp'
import laptopMockup from '../../assets/images/laptop-app-mockup.webp'
import styles from './WhatWeBuild.module.css'

// Decorative "floating icon" collage behind the Web-services card copy.
// Positions are percentages lifted directly from the source design.
const BUBBLE_ICONS = { User, Calendar, TrendingUp, Clock }
const ICON_BUBBLES = [
  { icon: 'User', x: 89.6, y: 65.2 },
  { icon: 'Calendar', x: 66.1, y: 72.5 },
  { icon: 'TrendingUp', x: 83.2, y: 97.0 },
  { icon: 'Clock', x: 59.7, y: 104.4 },
  { icon: 'User', x: 78.2, y: 12.4 },
  { icon: 'User', x: 41.9, y: 83.5 },
  { icon: 'Calendar', x: 54.7, y: 19.7 },
  { icon: 'Calendar', x: 28.8, y: 39.3 },
  { icon: 'TrendingUp', x: 71.8, y: 44.3 },
  { icon: 'TrendingUp', x: 95.1, y: 33.9 },
  { icon: 'TrendingUp', x: 35.4, y: 115.4 },
  { icon: 'Clock', x: 48.3, y: 51.6 },
  { icon: 'Clock', x: 22.3, y: 71.2 },
]

const PRODUCT_CARD = { name: 'iPhone 17 Pro 256GB Оранжевый', price: '97 990 ₽', old: '114 990 ₽' }

const TELEGRAM_PILLS = ['Mini Apps', 'Платежи', 'CRM-связки', 'Рассылки']

// Three static, staggered rows (no scrolling animation) — exact offsets from the design.
const PILL_ROWS = [
  { x: -20.0, y: 0 },
  { x: -72.5, y: 35.9 },
  { x: 3.4, y: 71.9 },
]

function PriceButton({ children, tone = 'orange' }) {
  return (
    <a href="#contact" className={`${styles.priceBtn} ${styles[`tone-${tone}`]}`}>
      <span>{children}</span>
      <ArrowUpRight size={24} />
    </a>
  )
}

function handleCardGlow(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  card.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

function StackedProductCards() {
  return (
    <div className={styles.productStack}>
      {[0, 1, 2].map((i) => (
        <div key={i} className={styles.productCard} style={{ '--i': i }}>
          <img src={iphoneOrange} alt={PRODUCT_CARD.name} loading="lazy" />
          <p className={styles.productName}>{PRODUCT_CARD.name}</p>
          <div className={styles.productPrices}>
            <span>{PRODUCT_CARD.price}</span>
            <span className={styles.oldPrice}>{PRODUCT_CARD.old}</span>
          </div>
          <span className={styles.buyBtn}>Купить</span>
        </div>
      ))}
    </div>
  )
}

export default function WhatWeBuild() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className="sectionEyebrow">
          <HelpCircle size={32} color="rgba(255, 255, 255, 0.8)" />
          <h2 style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 24 }}>Что мы разрабатываем?</h2>
        </div>
        <p className="sectionSubtitle" style={{ color: 'rgba(255, 255, 255, 0.6)', marginTop: 20, fontSize: 18 }}>
          Берём проект любой сложности — от лендинга до полноценной платформы. Полный цикл под
          одной крышей.
        </p>

        <div className={styles.topRow}>
          <div className={styles.leftCol}>
            {/* Landing pages */}
            <article
              className={`${styles.card} ${styles.cardLight} ${styles.cardShort}`}
              onMouseMove={handleCardGlow}
            >
              <span className={styles.cardGlow} aria-hidden="true" />
              <div className={styles.cardHeadRow}>
                <h3 className={styles.cardTitleDark}>Лендинги и промо сайты</h3>
                <span className={`${styles.softBadge} ${styles.badgeOrange}`}>Популярно</span>
              </div>
              <p className={styles.cardTextDark}>
                Одностраничники, которые продают. Чистый дизайн, быстрая загрузка и акцент на
                заявки.
              </p>
              <PriceButton tone="orange">От 29 990 ₽</PriceButton>
              <div className={styles.landingArt} aria-hidden="true">
                <div className={styles.landingGlow} />
                <img src={landingPreview} alt="" loading="lazy" />
              </div>
            </article>

            {/* Online stores */}
            <article
              className={`${styles.card} ${styles.cardPurple} ${styles.cardShort}`}
              onMouseMove={handleCardGlow}
            >
              <span className={styles.cardGlow} aria-hidden="true" />
              <div className={styles.cardHeadRow}>
                <h3 className={styles.cardTitleLight}>Интернет-магазины</h3>
                <span className={`${styles.softBadge} ${styles.badgeWhite}`}>Выгодно</span>
              </div>
              <p className={`${styles.cardTextLight} ${styles.storeCardText}`}>
                Полноценные магазины с каталогом, корзиной, оплатой и личным кабинетом. Готовы к
                запуску рекламы.
              </p>
              <PriceButton tone="white-orange">От 47 590 ₽</PriceButton>
              <div className={styles.storeArt} aria-hidden="true">
                <div className={styles.storeGlow} />
                <StackedProductCards />
              </div>
            </article>
          </div>

          <div className={styles.rightCol}>
            {/* Web services */}
            <article
              className={`${styles.card} ${styles.cardDarkGradient} ${styles.cardNarrowTall}`}
              onMouseMove={handleCardGlow}
            >
              <span className={styles.cardGlow} aria-hidden="true" />
              <h3 className={styles.narrowTitle2Line}>Веб сервисы и личные кабинеты</h3>
              <p className={styles.narrowCardText}>
                Сложные продукты: личные кабинеты, платформы, автоматизация процессов. Под ваши
                задачи.
              </p>
              <PriceButton tone="white-dark">От 17 990 ₽</PriceButton>
              <div className={styles.bubbleField} aria-hidden="true">
                {ICON_BUBBLES.map(({ icon, x, y }, i) => {
                  const Icon = BUBBLE_ICONS[icon]
                  return (
                    <span key={i} className={styles.bubble} style={{ left: `${x}%`, top: `${y}%` }}>
                      <Icon size={20} />
                    </span>
                  )
                })}
                <div className={styles.bubbleFade} />
              </div>
            </article>

            {/* Telegram bots */}
            <article
              className={`${styles.card} ${styles.cardBlue} ${styles.cardNarrowTall}`}
              onMouseMove={handleCardGlow}
            >
              <span className={styles.cardGlow} aria-hidden="true" />
              <h3 className={styles.narrowTitle1Line}>Telegram-боты</h3>
              <p className={styles.narrowCardText}>
                Боты для продаж, поддержки, записи и автоматизации. От простых до сложных
                сценариев с оплатой и CRM.
              </p>
              <PriceButton tone="white-blue">От 7 960 ₽</PriceButton>
              <div className={styles.marquee} aria-hidden="true">
                {PILL_ROWS.map((row, i) => (
                  <div key={i} className={styles.pillRow} style={{ left: `${row.x}%`, top: `${row.y}%` }}>
                    {TELEGRAM_PILLS.map((p) => (
                      <span key={p} className={styles.pill}>
                        {p}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <article
            className={`${styles.card} ${styles.cardSlate} ${styles.bottomWide}`}
            onMouseMove={handleCardGlow}
          >
            <span className={styles.cardGlow} aria-hidden="true" />
            <div className={styles.cardHeadRow}>
              <h3 className={styles.cardTitleDark}>Мобильные и десктоп-приложения</h3>
              <span className={`${styles.softBadge} ${styles.badgeDark}`}>
                Полный цикл разработки
              </span>
            </div>
            <p className={styles.cardTextDark}>
              Нативные и кроссплатформенные приложения с удобным интерфейсом и стабильной работой.
            </p>
            <PriceButton tone="dark">От 58 790 ₽</PriceButton>
            <div className={styles.laptopArt} aria-hidden="true">
              <div className={styles.laptopGlow} />
              <img src={laptopMockup} alt="" loading="lazy" />
            </div>
          </article>

          <article
            className={`${styles.card} ${styles.cardGlassDark} ${styles.bottomNarrow}`}
            onMouseMove={handleCardGlow}
          >
            <span className={styles.cardGlow} aria-hidden="true" />
            <div className={styles.oneStepInner}>
              <h3 className={styles.oneStepTitle}>Остался один шаг!</h3>
              <p className={styles.cardTextLight}>
                Оформите заявку уже сейчас и получите полноценный рассчет вашего проекта и готовый
                договр.
              </p>
            </div>
            <a href="#contact" className={styles.oneStepBtn}>
              <span>Стоимость моего проекта</span>
              <ArrowUpRight size={24} />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
