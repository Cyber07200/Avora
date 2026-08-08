import type { CSSVars } from '../../types'
import type { MouseEvent } from 'react'
// ServiceCards — карточки услуг на странице "Услуги".
//
// Как это устроено:
// 1. Массив SERVICES (ниже) — данные всех 5 карточек услуг (заголовок,
//    описание, список фич, цена, срок) + компонент Visual для картинки справа.
// 2. Каждая карточка — это position:sticky элемент с НАРАСТАЮЩИМ отступом
//    top (96px, 124px, 152px...) и z-index. За счёт этого при обычной
//    прокрутке страницы карточки "прилипают" одна поверх другой, создавая
//    эффект стопки — без единой строчки JS, чистый CSS.
// 3. Последняя (6-я) карточка — CTA "Расскажите о проекте", встроена в ту же
//    sticky-стопку, но с другим содержимым (см. блок <article className={styles.cardCta}>).
//    У неё есть свечение, следующее за курсором (handleCtaGlowMove).
import { Link } from 'react-router-dom'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import landingPreview from '../../assets/serviceCards/landing.png'
import laptopMockup from '../../assets/serviceCards/desktop-app.png'
import ctaLaptop from '../../assets/images/cta-laptop.webp'
import expressLaptopClock from '../../assets/images/express-laptop-clock.webp'
import iphoneStackNew from '../../assets/serviceCards/web-shop.png'
import webservicesIcons from '../../assets/serviceCards/web-service.png'
import telegramBots from '../../assets/serviceCards/telegram-bots.png'
import styles from './ServiceCards.module.css'

// Tracks the cursor position over the CTA card and exposes it as CSS custom
// properties (--mx / --my), so the radial-gradient glow in .ctaGlow can
// follow the mouse — same technique as FinalCta on the home page.
function handleCtaGlowMove(e: MouseEvent<HTMLElement>) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
  card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
}

function Features({ items }: { items: string[] }) {
  return (
    <div className={styles.featuresBlock}>
      <span className={styles.featuresLabel}>Что входит</span>
      <div className={styles.featuresList}>
        {items.map((f: string) => (
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
      <img src={landingPreview} alt="" loading="lazy" className={styles.visualImg} />
    </div>
  )
}

function StoreVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualNarrow}`}>
      <img
        src={iphoneStackNew}
        alt=""
        loading="lazy"
        className={`${styles.visualImg} ${styles.storeVisualImg}`}
      />
    </div>
  )
}

function WebServicesVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualNarrow}`}>
      <img src={webservicesIcons} alt="" loading="lazy" className={styles.visualImg} />
    </div>
  )
}

function TelegramVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualMid}`}>
      <img src={telegramBots} alt="" loading="lazy" className={styles.visualImg} />
    </div>
  )
}

function MobileVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualMid}`}>
      <img src={laptopMockup} alt="" loading="lazy" className={styles.visualImg} />
    </div>
  )
}

function ExpressVisual() {
  return (
    <div className={`${styles.visual} ${styles.visualNarrow}`}>
      <img src={expressLaptopClock} alt="" loading="lazy" className={styles.expressImg} />
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
    price: 'Цены начинаются от 39 900 ₽',
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
    price: 'Цены начинаются от 89 900 ₽',
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
    price: 'Цены начинаются от 79 900 ₽',
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
    price: 'Цены начинаются От 24 900 ₽',
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
    price: 'Цены начинаются От 149 900 ₽',
    duration: 'Срок от 3-5 недель',
    cardClass: 'cardSlate',
    Visual: MobileVisual,
  },
  {
    key: 'express',
    textWidth: 764,
    title:
      'Мы можем сократить срок проекта до 20% от стандартного за счёт приоритетной работы команды.',
    desc: 'Вы получаете тот же качественный результат, но в ускоренном режиме. Подходит, когда нужно запуститься к рекламной кампании, акции или важному дедлайну.',
    features: [
      'Лендинг — не за 5–7 дней, а за 1–2 дня',
      'Бот — значительно быстрее обычных сроков',
      'Сервис или магазин — с максимальным приоритетом',
    ],
    price: 'Цены начинаются от +40–50% к обычной цене',
    duration: 'Обсудить экспресс-срок',
    cardClass: 'cardExpress',
    Visual: ExpressVisual,
  },
]

export default function ServiceCards() {
  return (
    <div className={styles.list}>
      {SERVICES.map(
        ({ key, title, badge, desc, features, price, duration, cardClass, textWidth, Visual }, i) => (
          <div
            key={key}
            className={styles.cardWrap}
            style={{ top: `${96 + i * 28}px`, zIndex: i + 1 }}
          >
            <article className={`${styles.card} ${styles[cardClass]}`} style={{ '--text-w': `${textWidth}px` } as CSSVars}>
              <div className={styles.content}>
                <div className={styles.titleBlock}>
                  <div className={styles.headRow}>
                    <h3 className={styles.title}>{title}</h3>
                  </div>
                  <p className={styles.desc}>{desc}</p>
                </div>
                <Features items={features} />
                <span className={styles.priceText}>{price}</span>
                <Link to="/contact" className={styles.durationBtn}>
                  <span>{duration}</span>
                  <ArrowUpRight size={20} />
                </Link>
              </div>
              <Visual />
            </article>
            {/* Badge lives outside the card's own overflow:hidden so it can
                stick out past the rounded corner like an attached label. */}
            {badge && <span className={styles.badge}>{badge}</span>}
          </div>
        )
      )}

      <article
        className={`${styles.card} ${styles.cardCta}`}
        style={{ top: `${96 + SERVICES.length * 28}px`, zIndex: SERVICES.length + 1 }}
      >
        <div className={styles.ctaBg} onMouseMove={handleCtaGlowMove}>
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
              <Link to="/contact" className={styles.ctaBtnPrimary}>
                Обсудить проект <ArrowUpRight size={24} />
              </Link>
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
