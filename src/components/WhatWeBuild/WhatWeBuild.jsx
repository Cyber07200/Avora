import { HelpCircle, ArrowUpRight } from 'lucide-react'
import landingPreview from '../../assets/images/landing-preview.webp'
import iphoneStackNew from '../../assets/images/iphone-stack-new.webp'
import laptopMockup from '../../assets/images/laptop-app-mockup.webp'
import webservicesIcons from '../../assets/images/webservices-icons.svg'
import telegramPills from '../../assets/images/telegram-pills.svg'
import styles from './WhatWeBuild.module.css'

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
                <img src={iphoneStackNew} alt="" loading="lazy" className={styles.storeStackImg} />
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
                <img src={webservicesIcons} alt="" loading="lazy" className={styles.webservicesImg} />
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
                <img src={telegramPills} alt="" loading="lazy" className={styles.telegramImg} />
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
