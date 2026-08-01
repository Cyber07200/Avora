import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import PageHero from '../../components/PageHero/PageHero.jsx'
import ServiceCards from './ServiceCards.jsx'
import styles from './ServicesPage.module.css'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Наши услуги"
          subtitle="Разрабатываем цифровые продукты под ключ — от лендингов до сложных сервисов и приложений. С чёткими сроками, договором и понятным результатом"
        />

        <section className={styles.searchSection}>
          <div className="container">
            <ServiceCards />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
