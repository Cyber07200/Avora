import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, BookOpen, Check, Clock, Code2, Smartphone } from 'lucide-react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { CASES } from '../../data/cases.js'
import caseCover from '../../assets/images/case-kids-cover.webp'
import phoneFrame from '../../assets/images/phone-frame-empty.webp'
import phoneScreen from '../../assets/images/phone-screen-home.webp'
import styles from './CaseDetailPage.module.css'

function handleGlowMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
  card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
}

export default function CaseDetailPage() {
  const { slug } = useParams()
  const caseItem = CASES.find((c) => c.slug === slug)

  // Плавно поднимаем страницу наверх при переходе между кейсами (например,
  // по кнопке "Следующий кейс") — иначе остался бы прежний скролл.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  // Некорректный/устаревший slug в URL — отправляем на список кейсов, а не
  // показываем пустую страницу.
  if (!caseItem) return <Navigate to="/cases" replace />

  return (
    <>
      <Header />
      <main>
        <section className={styles.heroSection}>
          <div className="container">
            <Link to="/cases" className={styles.backLink}>
              <ArrowLeft size={18} />
              <span>Назад</span>
            </Link>

            <div className={styles.heroCard}>
              <h1 className={styles.title}>{caseItem.title}</h1>

              <div className={styles.statsRow}>
                <span className={styles.stat}>
                  <Clock size={18} />
                  {caseItem.tags[0]}
                </span>
                <span className={styles.stat}>
                  <Code2 size={18} />
                  {caseItem.tags[1]}
                </span>
                <span className={styles.stat}>
                  <Smartphone size={18} />
                  {caseItem.category}
                </span>
              </div>

              <img src={caseCover} alt={caseItem.title} className={styles.coverImg} />
            </div>
          </div>
        </section>

        <section className={styles.body}>
          <div className="container">
            <h2 className={styles.sectionTitle}>О проекте</h2>

            <div className={styles.threeCol}>
              <div className={styles.infoCard}>
                <h3 className={styles.blockTitle}>Задача клиента</h3>
                <p className={styles.blockText}>{caseItem.task}</p>
              </div>
              <div className={styles.infoCard}>
                <h3 className={styles.blockTitle}>Что мы сделали</h3>
                <p className={styles.blockText}>{caseItem.solution}</p>
              </div>
              <div className={styles.infoCard}>
                <h3 className={styles.blockTitle}>Особенности</h3>
                <ul className={styles.featureList}>
                  {caseItem.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <Check size={16} strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Технологии</h2>
            <div className={styles.techRow}>
              {caseItem.technologies.map((t) => (
                <span key={t} className={styles.techTag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaCard} onMouseMove={handleGlowMove}>
              <div className={styles.ctaGlow} aria-hidden="true" />
              <div className={styles.ctaText}>
                <span className={styles.ctaEyebrow}>Вы почти на месте</span>
                <h2 className={styles.ctaTitle}>Нужен похожий проект?</h2>
                <p className={styles.ctaSubtext}>
                  Расскажите задачу — мы предложим решение, сориентируем по срокам и стоимости.
                </p>
                <div className={styles.ctaRow}>
                  <Link to="/contact" className={styles.ctaPrimary}>
                    Обсудить проект <ArrowUpRight size={20} />
                  </Link>
                  <Link to="/cases" className={styles.ctaSecondary}>
                    Смотреть другие кейсы <BookOpen size={18} />
                  </Link>
                </div>
              </div>
              <div className={styles.ctaVisual} aria-hidden="true">
                <div className={styles.ctaPhone}>
                  <img src={phoneScreen} alt="" className={styles.ctaPhoneScreen} />
                  <img src={phoneFrame} alt="" className={styles.ctaPhoneFrame} />
                </div>
                <div className={`${styles.ctaNotif} ${styles.ctaNotif1}`}>
                  <span className={styles.ctaNotifCheck}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className={styles.ctaNotifText}>
                    <strong>Понятная реализация</strong>
                    <span>В самый короткий срок</span>
                  </span>
                  <span className={styles.ctaNotifTime}>9:41 AM</span>
                </div>
                <div className={`${styles.ctaNotif} ${styles.ctaNotif2}`}>
                  <span className={styles.ctaNotifCheck}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className={styles.ctaNotifText}>
                    <strong>Надежность на каждом этапе</strong>
                    <span>Работаем строго по договору</span>
                  </span>
                  <span className={styles.ctaNotifTime}>9:41 AM</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
