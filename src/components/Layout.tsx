import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const NAV = [
  { to: '/', label: 'Magazin' },
  { to: '/kuenstler', label: 'Künstler' },
  { to: '/rechner-embed', label: 'BPM-Tool' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isActive = (to: string) => location.pathname === to

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center tracking-tighter">
            <span className="text-[15px] font-extrabold text-slate-900 uppercase">Elektro</span>
            <span className="text-[15px] font-extrabold text-cyan-500 uppercase">pop</span>
            <span className="text-[15px] font-extrabold text-slate-300 uppercase">.de</span>
          </Link>

          <nav className="hidden md:flex items-center">
            {NAV.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-4 text-xs font-bold uppercase tracking-widest border-b-2 transition-colors ${
                  isActive(link.to)
                    ? 'text-slate-900 border-cyan-500'
                    : 'text-slate-400 border-transparent hover:text-slate-900 hover:border-slate-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Werbefrei</span>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden min-h-[48px] min-w-[48px] flex items-center justify-center text-slate-700"
            aria-label="Menü"
          >
            {menuOpen
              ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            {NAV.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`flex px-6 py-4 text-sm font-bold uppercase tracking-widest border-b border-slate-50 ${
                  isActive(link.to) ? 'text-cyan-600' : 'text-slate-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* ── CONTENT ────────────────────────────────────────────────────── */}
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="bg-white border-t border-slate-200">
        {/* Brand Statement */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start border-b border-slate-100">
          <div>
            <div className="flex items-center tracking-tighter mb-4">
              <span className="text-lg font-extrabold text-slate-900 uppercase">Elektro</span>
              <span className="text-lg font-extrabold text-cyan-500 uppercase">pop</span>
              <span className="text-lg font-extrabold text-slate-300 uppercase">.de</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Musikwissenschaft statt Marketing. Fakten statt Floskeln. Unabhängiges Redaktionsportal für Electro Pop.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { to: '/', label: 'Magazin' },
              { to: '/kuenstler', label: 'Künstler' },
              { to: '/rechner-embed', label: 'BPM-Tool' },
              { to: '/impressum', label: 'Impressum' },
              { to: '/datenschutz', label: 'Datenschutz' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="text-xs font-mono text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-wider">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            <div className="flex flex-wrap gap-4">
              <span>© 2026 elektropop.de</span>
              <span>§ 5 DDG</span>
              <span>DSGVO-konform</span>
              <span>Zero-CDN</span>
            </div>
            <div className="flex gap-4">
              <Link to="/impressum" className="hover:text-slate-700 transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-slate-700 transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ── MOBILE BOTTOM BAR ──────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 flex md:hidden">
        {NAV.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`flex-1 flex flex-col items-center justify-center py-3 text-[9px] font-bold uppercase tracking-widest min-h-[56px] transition-colors ${
              isActive(link.to) ? 'text-cyan-600' : 'text-slate-400'
            }`}
          >
            <span className="text-base mb-0.5">
              {link.to === '/' ? '◈' : link.to === '/kuenstler' ? '◉' : '◎'}
            </span>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
