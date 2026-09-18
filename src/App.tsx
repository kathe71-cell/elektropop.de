import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Kuenstler from './pages/Kuenstler'
import RechnerEmbed from './pages/RechnerEmbed'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import Layout from './components/Layout'

import VercelAnalytics from './components/VercelAnalytics'

export function AppRoutes() {
  return (
    <>
      <VercelAnalytics />
      <Routes>
        <Route path="/rechner-embed" element={<RechnerEmbed />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/kuenstler" element={<Kuenstler />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
