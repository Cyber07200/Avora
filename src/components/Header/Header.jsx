import { Link, useLocation } from 'react-router-dom'
import { PhoneCall } from 'lucide-react'
import Logo from './Logo.jsx'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/services' },
  { label: 'Кейсы', href: '/cases' },
  { label: 'Вакансии', href: '/careers' },
]

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className={styles.header} id="top">
      <Link to="/" aria-label="AvoraLab — на главную">
        <Logo className={styles.logo} />
      </Link>

      <nav className={styles.nav} aria-label="Основная навигация">
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname === item.href
          const className = isActive ? styles.navItemActive : styles.navItem
          // Internal routes use client-side navigation; anchors to home-page
          // sections use a plain link so the hash scroll still works.
          if (item.href.startsWith('/#')) {
            return (
              <a key={item.label} href={item.href} className={className}>
                {item.label}
              </a>
            )
          }
          return (
            <Link key={item.label} to={item.href} className={className}>
              {item.label}
            </Link>
          )
        })}
      </nav>

      <a href="/#contact" className={styles.cta}>
        <PhoneCall size={16} />
        <span>Обсудить проект</span>
      </a>
    </header>
  )
}
