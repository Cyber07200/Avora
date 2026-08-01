import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/HomePage.jsx'
import ServicesPage from './pages/Services/ServicesPage.jsx'
import CasesPage from './pages/Cases/CasesPage.jsx'
import CareersPage from './pages/Careers/CareersPage.jsx'
import ScrollToTop from './ScrollToTop.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </BrowserRouter>
  )
}
