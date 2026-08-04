import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PhoneCall, Menu, X } from 'lucide-react'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuMounted, setMenuMounted] = useState(false)

  function openMenu() {
    setMenuMounted(true)
    // mount closed first, then flip to open on the next frame so the
    // slide-in transition actually runs instead of snapping open instantly
    requestAnimationFrame(() => requestAnimationFrame(() => setMenuOpen(true)))
  }

  function closeMenu() {
    setMenuOpen(false)
    // keep the drawer in the DOM just long enough for the close transition
    // to finish, then drop it entirely so an off-screen fixed element can
    // never contribute to the page's horizontal scroll width
    setTimeout(() => setMenuMounted(false), 480)
  }

  // Close the mobile menu whenever the route changes (e.g. after tapping a link).
  useEffect(() => {
    if (menuOpen) closeMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Lock background scroll while the drawer is open, and allow closing with Escape.
  useEffect(() => {
    if (!menuOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen])

  function renderNavItem(item, className) {
    const isActive = item.href === '/' ? pathname === '/' : pathname === item.href
    const cls = isActive ? className.active : className.item
    if (item.href.startsWith('/#')) {
      return (
        <a key={item.label} href={item.href} className={cls}>
          {item.label}
        </a>
      )
    }
    return (
      <Link key={item.label} to={item.href} className={cls}>
        {item.label}
      </Link>
    )
  }

  return (
    <header className={styles.header} id="top">
      <Link to="/" aria-label="AvoraLab — на главную">
        <Logo className={styles.logo} />
      </Link>

      <nav className={styles.nav} aria-label="Основная навигация">
        {NAV_ITEMS.map((item) =>
          renderNavItem(item, { item: styles.navItem, active: styles.navItemActive })
        )}
      </nav>

      <Link to="/contact" className={styles.cta}>
        <PhoneCall size={16} />
        <span>Обсудить проект</span>
      </Link>

      <button
        type="button"
        className={styles.burger}
        aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
        aria-expanded={menuOpen}
        onClick={() => (menuOpen ? closeMenu() : openMenu())}
      >
        <Menu size={24} className={`${styles.burgerIcon} ${menuOpen ? styles.iconHidden : ''}`} />
        <X size={24} className={`${styles.burgerIcon} ${styles.burgerIconX} ${menuOpen ? '' : styles.iconHidden}`} />
      </button>

      {menuMounted && (
        <>
          <div
            className={`${styles.backdrop} ${menuOpen ? styles.backdropOpen : ''}`}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
            <nav className={styles.drawerNav} aria-label="Мобильная навигация">
              {NAV_ITEMS.map((item) =>
                renderNavItem(item, { item: styles.drawerItem, active: styles.drawerItemActive })
              )}
            </nav>
            <Link to="/contact" className={styles.drawerCta} onClick={closeMenu}>
              <PhoneCall size={18} />
              <span>Обсудить проект</span>
            </Link>
          </div>
        </>
      )}
    </header>
  )
}
