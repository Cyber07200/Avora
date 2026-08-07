import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage.jsx'
import ServicesPage from './pages/Services/ServicesPage.jsx'
import CasesPage from './pages/Cases/CasesPage.jsx'
import CaseDetailPage from './pages/CaseDetail/CaseDetailPage.jsx'
import CareersPage from './pages/Careers/CareersPage.jsx'
import ContactPage from './pages/Contact/ContactPage.jsx'
import ScrollToTop from './ScrollToTop.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/cases/:slug" element={<CaseDetailPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
