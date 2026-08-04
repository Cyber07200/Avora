import { useState } from 'react'
import { ArrowUpRight, Send, Mail, PhoneCall } from 'lucide-react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import ctaLaptop from '../../assets/images/cta-laptop.webp'
import iphoneRock from '../../assets/images/iphone-rock-mockup.png'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [value, setValue] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!value.trim()) return
    // Реальной отправки на бэкенд здесь нет — это визуальный прототип формы.
    setSent(true)
  }

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.bgImages} aria-hidden="true">
            <img src={ctaLaptop} alt="" className={styles.bgLaptop} />
            <img src={iphoneRock} alt="" className={styles.bgPhone} />
          </div>

          <div className={`container ${styles.inner}`}>
            <div className={styles.left}>
              <h1 className={styles.title}>Обсудим ваш проект?</h1>
              <p className={styles.subtitle}>
                Оставьте заявку или напишите нам напрямую. Мы перезвоним или ответим в мессенджере,
                уточним задачу и предложим оптимальный вариант с сроками и бюджетом.
              </p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <span className={styles.formLabel}>Заполните ваши данные</span>
                <label className={styles.fieldLabel} htmlFor="contact-value">
                  Номер телефона / Telegram
                </label>
                <input
                  id="contact-value"
                  type="text"
                  className={styles.input}
                  placeholder="+7 (000) 000-00-00 / @NICK_TG"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit" className={styles.submit}>
                  <span>{sent ? 'Заявка отправлена' : 'Оставить заявку'}</span>
                  <ArrowUpRight size={22} />
                </button>
              </form>
            </div>

            <div className={styles.contactCards}>
              <a href="#" className={`${styles.pill} ${styles.pillTelegram}`}>
                <Send size={24} />
                <span>Telegram</span>
              </a>
              <a href="mailto:avora-lab@gmail.com" className={`${styles.pill} ${styles.pillMail}`}>
                <Mail size={24} />
                <span>avora-lab@gmail.com</span>
              </a>
              <a href="tel:+79319792764" className={`${styles.pill} ${styles.pillPhone}`}>
                <PhoneCall size={24} />
                <span>+7 (931) 979-27-64</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
