import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import PageHero from '../../components/PageHero/PageHero.jsx'
import CaseSearchFilter from './CaseSearchFilter.jsx'
import caseKidsApp from '../../assets/images/case-kids-app.webp'
import styles from './CasesPage.module.css'

const CASES = [
  {
    category: 'Мобильное приложение',
    price: 65000,
    title: 'Приложение для центра «Дети на планете»',
    desc: 'Сделали кроссплатформенное приложение с онлайн-записью для детского центра «Дети на планете». Акцент — на запись и удобный интерфейс, а также визуал.',
    tags: ['7 дней', 'Next.js + Telegram', 'Сокращение трудозатрат'],
    img: caseKidsApp,
  },
  {
    category: 'Лендинг',
    price: 29990,
    title: 'Промо-сайт для запуска нового продукта',
    desc: 'Разработали продающий лендинг с акцентом на конверсию: чёткий оффер, формы заявок и аналитика с первого дня запуска.',
    tags: ['5 дней', 'React + Vite', '+38% заявок'],
    img: caseKidsApp,
  },
  {
    category: 'Интернет магазин',
    price: 47590,
    title: 'Каталог и продажи для бренда электроники',
    desc: 'Запустили интернет-магазин с каталогом, корзиной и онлайн-оплатой. Отдельно продумали личный кабинет и интеграцию с доставкой.',
    tags: ['4 недели', 'Next.js + CMS', 'Каталог 500+ SKU'],
    img: caseKidsApp,
  },
  {
    category: 'Веб-сервис',
    price: 17990,
    title: 'Личный кабинет для B2B-платформы',
    desc: 'Спроектировали и разработали личный кабинет с ролями, доступами и админ-панелью для внутренних процессов клиента.',
    tags: ['6 недель', 'Node.js + React', 'Роли и доступы'],
    img: caseKidsApp,
  },
  {
    category: 'Десктоп приложение',
    price: 58790,
    title: 'Кроссплатформенное приложение для сервиса услуг',
    desc: 'Собрали нативное ощущение на кроссплатформенном стеке: быстрый онбординг, push-уведомления и стабильная работа офлайн.',
    tags: ['5 недель', 'React Native', 'iOS + Android'],
    img: caseKidsApp,
  },
  {
    category: 'Telegram-бот',
    price: 7960,
    title: 'Бот для приёма заказов и оплаты',
    desc: 'Разработали Telegram-бота с приёмом заявок, оплатой внутри чата и интеграцией с CRM для отдела продаж.',
    tags: ['10 дней', 'Node.js + CRM', 'Оплата в боте'],
    img: caseKidsApp,
  },
]

export default function CasesPage() {
  const [filters, setFilters] = useState({ query: '', selectedTypes: [], priceFrom: 7000 })

  const filtered = useMemo(() => {
    const q = filters.query.trim().toLowerCase()
    return CASES.filter((c) => {
      if (q && !c.title.toLowerCase().includes(q) && !c.desc.toLowerCase().includes(q)) {
        return false
      }
      if (filters.selectedTypes.length && !filters.selectedTypes.includes(c.category)) {
        return false
      }
      if (c.price < filters.priceFrom) {
        return false
      }
      return true
    })
  }, [filters])

  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Наши Кейсы"
          subtitle="На этой странице расположены наши кейсы, вы можете подробно ознакомиться с ними и убедиться в качестве продукта заранее."
          subtitleWidth={620}
        />

        <section className={styles.section}>
          <div className="container">
            <CaseSearchFilter onChange={setFilters} />

            {filtered.length === 0 ? (
              <p className={styles.empty}>Ничего не найдено — попробуйте изменить фильтры.</p>
            ) : (
              <div className={styles.grid}>
                {filtered.map((c, i) => (
                  <article key={i} className={styles.card}>
                    <div className={styles.imgWrap}>
                      <img src={c.img} alt="" loading="lazy" />
                      <span className={styles.categoryBadge}>{c.category}</span>
                    </div>
                    <div className={styles.content}>
                      <h3 className={styles.title}>{c.title}</h3>
                      <p className={styles.desc}>{c.desc}</p>
                      <div className={styles.tags}>
                        {c.tags.map((t) => (
                          <span key={t} className={styles.tag}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a href="#contact" className={styles.viewBtn}>
                      Смотреть кейс <ArrowUpRight size={20} />
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
