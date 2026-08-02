import { ArrowUpRight, BookOpen, User, Calendar, TrendingUp, Clock } from 'lucide-react'
import landingPreview from '../../assets/images/landing-preview.webp'
import iphoneOrange from '../../assets/images/iphone-17-pro-orange.webp'
import laptopMockup from '../../assets/images/laptop-app-mockup.webp'
import ctaLaptop from '../../assets/images/cta-laptop.webp'
import styles from './ServiceCards.module.css'

const BUBBLE_ICONS = { User, Calendar, TrendingUp, Clock }

// Exact scattered icon positions (center, % of a 669x609 visual area) from the design.
const ICON_BUBBLES = [
  { icon: 'User', x: 89.6, y: 74.0 },
  { icon: 'Calendar', x: 66.1, y: 79.5 },
  { icon: 'TrendingUp', x: 83.2, y: 98.1 },
  { icon: 'Clock', x: 59.7, y: 103.6 },
  { icon: 'User', x: 78.2, y: 34.0 },
  { icon: 'User', x: 41.9, y: 87.8 },
  { icon: 'Calendar', x: 54.7, y: 39.6 },
  { icon: 'Calendar', x: 28.8, y: 54.4 },
  { icon: 'TrendingUp', x: 71.8, y: 58.2 },
  { icon: 'TrendingUp', x: 95.1, y: 50.3 },
  { icon: 'TrendingUp', x: 35.4, y: 112.0 },
  { icon: 'Clock', x: 48.3, y: 63.7 },
  { icon: 'Clock', x: 22.3, y: 78.5 },
]

const TELEGRAM_PILLS = ['Mini Apps', 'Платежи', 'CRM-связки', 'Рассылки']
const PILL_ROWS = [
  { x: 4.6, y: 73.4 },
  { x: -28.1, y: 123.9 },
  { x: 40.5, y: 90.7 },
]

function Features({ items }) {
  return (
    <div className={styles.featuresBlock}>
      <span className={styles.featuresLabel}>Что входит</span>
      <div className={styles.featuresList}>
        {items.map((f) => (
          <span key={f} className={styles.featurePill}>
            {f}
          </span>
        ))}
      </div>
    </div>
  )
}

function LandingVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualWide}`}>
      <div className={styles.landingGlow} aria-hidden="true" />
      <img src={landingPreview} alt="" loading="lazy" className={styles.landingImg} />
    </div>
  )
}

function StoreVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualNarrow}`}>
      <div className={styles.storeGlow} aria-hidden="true" />
      <div className={styles.productStack}>
        {[0, 1, 2].map((i) => (
          <div key={i} className={styles.productCard} style={{ '--i': i }}>
            <img src={iphoneOrange} alt="iPhone 17 Pro 256GB Оранжевый" loading="lazy" />
            <p className={styles.productName}>iPhone 17 Pro 256GB Оранжевый</p>
            <div className={styles.productPrices}>
              <span>97 990 ₽</span>
              <span className={styles.oldPrice}>114 990 ₽</span>
            </div>
            <span className={styles.buyBtn}>Купить</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WebServicesVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualNarrow}`}>
      <div className={styles.bubbleField}>
        {ICON_BUBBLES.map(({ icon, x, y }, i) => {
          const Icon = BUBBLE_ICONS[icon]
          return (
            <span key={i} className={styles.bubble} style={{ left: `${x}%`, top: `${y}%` }}>
              <Icon size={28} />
            </span>
          )
        })}
      </div>
    </div>
  )
}

function TelegramVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualMid}`}>
      {PILL_ROWS.map((row, i) => (
        <div key={i} className={styles.pillRow} style={{ left: `${row.x}%`, top: `${row.y}%` }}>
          {TELEGRAM_PILLS.map((p, j) => (
            <span key={j} className={styles.pill}>
              {p}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

function MobileVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualMid}`}>
      <div className={styles.laptopGlow} aria-hidden="true" />
      <img src={laptopMockup} alt="" loading="lazy" className={styles.laptopImg} />
    </div>
  )
}

const SERVICES = [
  {
    key: 'landing',
    textWidth: 667,
    title: 'Лендинги и промо сайты',
    badge: 'Популярно',
    desc: 'Одностраничные сайты, которые продают. Мы делаем не просто «красивую страницу», а инструмент для заявок и продаж.',
    features: [
      'Продающая структура',
      'Современный дизайн',
      'Адаптив под все устройства',
      'Быстрая загрузка',
      'Формы заявок и аналитика',
      'Базовая SEO-оптимизация',
    ],
    price: 'Цены начинаются От 29 990 ₽',
    duration: 'Срок от 5 дней',
    cardClass: 'cardWhite',
    Visual: LandingVisual,
  },
  {
    key: 'store',
    textWidth: 667,
    title: 'Интернет-магазины',
    badge: 'Выгодно',
    desc: 'Полноценные e-commerce решения с каталогом, корзиной, оплатой и личным кабинетом.',
    features: [
      'Каталог товаров',
      'Корзина и оформление заказа',
      'Онлайн-оплата',
      'Личный кабинет покупателя',
      'Админ-панель',
      'Интеграции с доставкой и CRM',
    ],
    price: 'Цены начинаются От 47 590 ₽',
    duration: 'Срок от 3-5 недель',
    cardClass: 'cardPurple',
    Visual: StoreVisual,
  },
  {
    key: 'webservices',
    textWidth: 764,
    title: 'Веб-сервисы и личные кабинеты',
    desc: 'Сложные продукты: платформы, личные кабинеты, внутренние системы и автоматизация процессов.',
    features: [
      'Проектирование логики',
      'Роли и доступы',
      'Личные кабинеты пользователей',
      'Административная панель',
      'Интеграции с внешними сервисами',
      'Масштабируемая архитектура',
    ],
    price: 'Цены начинаются от 17 990 ₽',
    duration: 'Срок от 4–8 недель',
    cardClass: 'cardDark',
    Visual: WebServicesVisual,
  },
  {
    key: 'telegram',
    textWidth: 667,
    title: 'Telegram-боты',
    desc: 'Боты для продаж, поддержки, записи, уведомлений и автоматизации.',
    features: [
      'Сценарии диалогов',
      'Приём заявок и заказов',
      'Оплата внутри бота',
      'Интеграция с CRM и таблицами',
      'Админ-панель',
      'Рассылки и уведомления',
    ],
    price: 'Цены начинаются От 7 960 ₽',
    duration: 'Срок от 5–14 дней',
    cardClass: 'cardBlue',
    Visual: TelegramVisual,
  },
  {
    key: 'mobile',
    textWidth: 764,
    title: 'Мобильные и десктоп-приложения',
    badge: 'Полный цикл разработки',
    desc: 'Нативные и кроссплатформенные приложения с удобным интерфейсом и стабильной работой.',
    features: [
      'UX/UI дизайн',
      'Разработка под iOS / Android / Desktop',
      'Личный кабинет',
      'Уведомления',
      'Интеграции',
      'Публикация в сторах (при необходимости)',
    ],
    price: 'Цены начинаются От 58 790 ₽',
    duration: 'Срок от 3-5 недель',
    cardClass: 'cardSlate',
    Visual: MobileVisual,
  },
]

export default function ServiceCards() {
  return (
    <div className={styles.list}>
      {SERVICES.map(
        ({ key, title, badge, desc, features, price, duration, cardClass, textWidth, Visual }, i) => (
          <article
            key={key}
            className={`${styles.card} ${styles[cardClass]}`}
            style={{ '--text-w': `${textWidth}px`, top: `${96 + i * 28}px`, zIndex: i + 1 }}
          >
            <div className={styles.content}>
              <div className={styles.titleBlock}>
                <div className={styles.headRow}>
                  <h3 className={styles.title}>{title}</h3>
                </div>
                <p className={styles.desc}>{desc}</p>
              </div>
              <Features items={features} />
              <span className={styles.priceText}>{price}</span>
              <a href="#contact" className={styles.durationBtn}>
                <span>{duration}</span>
                <ArrowUpRight size={20} />
              </a>
            </div>
            <Visual />
            {badge && <span className={styles.badge}>{badge}</span>}
          </article>
        )
      )}

      <article
        className={`${styles.card} ${styles.cardCta}`}
        style={{ top: `${96 + SERVICES.length * 28}px`, zIndex: SERVICES.length + 1 }}
      >
        <div className={styles.ctaBg}>
          <div className={styles.ctaGlow} aria-hidden="true" />
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>Готовы начать</span>
            <h2 className={styles.ctaTitle}>
              Расскажите о проекте —<br />
              остальное сделаем мы
            </h2>
            <p className={styles.ctaSubtitle}>
              Бесплатная консультация и оценка. Ответим в течение дня, предложим решение и
              сориентируем по срокам и стоимости.
            </p>
            <div className={styles.ctaRow}>
              <a href="#contact" className={styles.ctaBtnPrimary}>
                Обсудить проект <ArrowUpRight size={24} />
              </a>
              <a href="/#services" className={styles.ctaBtnGlass}>
                Смотреть кейсы <BookOpen size={22} />
              </a>
            </div>
          </div>
        </div>
        <img src={ctaLaptop} alt="" loading="lazy" className={styles.ctaLaptopLeft} />
        <img src={ctaLaptop} alt="" loading="lazy" className={styles.ctaLaptopRight} />
      </article>
    </div>
  )
}
