import { ArrowUpRight, BookOpen } from 'lucide-react'
import landingPreview from '../../assets/images/landing-preview.webp'
import laptopMockup from '../../assets/images/laptop-app-mockup.webp'
import ctaLaptop from '../../assets/images/cta-laptop.webp'
import iphoneStackNew from '../../assets/images/iphone-stack-new.webp'
import webservicesIcons from '../../assets/images/webservices-icons.svg'
import telegramPills from '../../assets/images/telegram-pills.svg'
import telegramGlow from '../../assets/images/telegram-glow.webp'
import styles from './ServiceCards.module.css'

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
      <img src={iphoneStackNew} alt="" loading="lazy" className={styles.storeStackImg} />
    </div>
  )
}

function WebServicesVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualNarrow}`}>
      <img src={webservicesIcons} alt="" loading="lazy" className={styles.webservicesImg} />
    </div>
  )
}

function TelegramVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualMid}`}>
      <img src={telegramGlow} alt="" loading="lazy" className={styles.telegramGlowImg} />
      <img src={telegramPills} alt="" loading="lazy" className={styles.telegramImg} />
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
