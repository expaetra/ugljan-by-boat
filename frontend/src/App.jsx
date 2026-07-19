import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import HomePage from './pages/home/HomePage.jsx'
import RentPage from './pages/rent/RentPage.jsx'
import TaxiPage from './pages/taxi/TaxiPage.jsx'
import ContactPage from './pages/contact/ContactPage.jsx'
import ExcursionsPage from './pages/excursions/ExcursionsPage.jsx'
import ScrollToTop from './components/shared/ScrollToTop.jsx'
import NotFound from './pages/NotFound.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-foam text-ink">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/taxi" element={<TaxiPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/excursions" element={<ExcursionsPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
