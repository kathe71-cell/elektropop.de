import { Link } from 'react-router-dom'
import { useState } from 'react'

const STATS = [
  { value: '1977', label: 'Geburtsjahr des Genres' },
  { value: '133', label: 'BPM — Blue Monday (New Order)' },
  { value: '–14', label: 'LUFS Streaming-Norm EBU R128' },
  { value: '808', label: 'Roland TR-808 — Geburtsjahr 1980' },
]

const ARTISTS = [
  { name: 'Kraftwerk', year: '1970', bpm: '125', tag: 'Minimal · Düsseldorf', accent: '#0891b2', border: 'border-cyan-200', bg: 'bg-cyan-50' },
  { name: 'Depeche Mode', year: '1980', bpm: '122', tag: 'Dark Synth · UK', accent: '#db2777', border: 'border-pink-200', bg: 'bg-pink-50' },
  { name: 'New Order', year: '1980', bpm: '133', tag: 'Post-Punk · Manchester', accent: '#d97706', border: 'border-amber-200', bg: 'bg-amber-50' },
  { name: 'Pet Shop Boys', year: '1981', bpm: '120', tag: 'Orchestral Pop · London', accent: '#059669', border: 'border-emerald-200', bg: 'bg-emerald-50' },
  { name: 'Charli XCX', year: '2008', bpm: '128', tag: 'Hyper-Pop · Cambridge', accent: '#7c3aed', border: 'border-violet-200', bg: 'bg-violet-50' },
  { name: 'SOPHIE', year: '2013', bpm: '140', tag: 'PC Music · Glasgow', accent: '#be185d', border: 'border-rose-200', bg: 'bg-rose-50' },
]

const FAQ = [
  { q: 'Was ist Electro Pop?', a: 'Electro Pop verbindet elektronische Klangerzeugung (Synthesizer, Drum Machines nach MMA MIDI-Standard 1.0, 1983) mit formalen Pop-Strukturen (4/4-Takt, Vers-Refrain, 100–140 BPM). Streaming-Norm: –14 LUFS (EBU R128).' },
  { q: 'Welche BPM-Werte sind typisch?', a: 'Chart-Elektropop: 118–130 BPM. New Order „Blue Monday" (1983): exakt 133 BPM. Charli XCX „Boom Clap" (2014): 126 BPM. Hyper-Pop kann 140–180 BPM erreichen.' },
  { q: 'Was unterscheidet Synth-Pop von Electro Pop?', a: 'Synth-Pop (ca. 1977, UK/DE) betont kältere Analog-Texturen (Roland Juno-106, Oberheim OB-Xa). Electro Pop integriert stärker Drum Machines (TR-808/909) und ist näher am Radio-Format.' },
  { q: 'Welche Synthesizer prägten das Genre?', a: 'Moog Minimoog (1970), Roland Juno-106 (1984, 6 DCO-Stimmen), Yamaha DX7 (1983, FM-Synthese), Roland TR-808 (1980, Analog-Drumcomputer) und Korg MS-20 (1978, Semimodular VCF).' },
]

function EqBar({ delay, height }: { delay: number; height: number }) {
  return (
    <div
      className="w-1.5 rounded-sm"
      style={{
        height: `${height}px`,
        background: 'linear-gradient(to top, #0891b2, #22d3ee)',
        animation: `eq-pulse 0.9s ease-in-out infinite alternate`,
        animationDelay: `${delay}ms`,
        transformOrigin: 'bottom',
      }}
    />
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>

      {/* ══ HERO – hell, editorial ════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.5,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
          {/* Top meta bar */}
          <div className="border-b border-slate-100 py-3 flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
              Gegründet 1977 · Elektronische Musik · DE / UK
            </span>
            <div className="flex items-center gap-2">
              {/* Mini equalizer */}
              <div className="flex items-end gap-px h-4" aria-hidden="true">
                {[12, 16, 10, 20, 14, 18, 8].map((h, i) => (
                  <EqBar key={i} height={h * 0.7} delay={i * 80} />
                ))}
              </div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Live</span>
            </div>
          </div>

          {/* Main hero */}
          <div className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-6 bg-cyan-500" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-600">
                  Das deutsche Electro Pop Magazin
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-none tracking-tighter mb-6">
                Elektro&shy;pop.<br />
                <span className="text-cyan-500">Archiv</span>
                <span className="text-slate-300">.</span>
              </h1>
              <p className="text-slate-500 text-base leading-relaxed max-w-md mb-8">
                Musikwissenschaftliche Fakten zu Synthesizer-Architekturen, BPM-Klassifikationen und der Geschichte des elektronischen Pop — ohne Marketing-Floskeln.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/kuenstler"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-sm px-6 py-3.5 hover:bg-slate-700 transition-colors min-h-[48px] tracking-wide">
                  Künstler entdecken →
                </Link>
                <Link to="/rechner-embed"
                  className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 font-semibold text-sm px-6 py-3.5 hover:border-cyan-500 hover:text-cyan-700 transition-colors min-h-[48px]">
                  🎛 BPM-Rechner
                </Link>
              </div>
            </div>

            {/* Right: Stats panel */}
            <div className="bg-slate-50 border border-slate-200 divide-y divide-slate-200">
              {STATS.map((s, i) => (
                <div key={i} className="px-6 py-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500 leading-snug max-w-[180px]">{s.label}</span>
                  <span className="font-mono text-2xl font-extrabold text-slate-900">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ DEFINITION ════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Definition */}
            <div className="lg:col-span-2 bg-white border border-slate-200 p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">Definition · IFPI Genre-Klassifikation</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-4">Was ist Electro Pop?</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                <strong>Electro Pop</strong> bezeichnet ein Musikgenre, das seit ca. 1977 (UK/DE) Elemente der elektronischen Klangerzeugung – Synthesizer, Drum Machines (Roland TR-808/909), MIDI-Sequenzer – mit formalen Pop-Strukturen (Vers-Refrain-Brücke, 4/4-Takt, 2:30–4:00 min) verbindet. Typischer BPM-Bereich: <strong>100–140 BPM</strong>. Streaming-Norm: <strong>–14 LUFS</strong> nach EBU R128.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
                {[['100–140', 'BPM-Range'], ['–14 LUFS', 'EBU R128'], ['4/4', 'Taktart'], ['MIDI 1.0', 'seit 1983']].map(([v, l]) => (
                  <div key={v}>
                    <div className="font-mono text-lg font-extrabold text-slate-900">{v}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* E-E-A-T Trust */}
            <div className="bg-white border border-slate-200 p-8">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">Fachredaktion · E-E-A-T</div>
              <div className="space-y-2 text-xs font-mono text-slate-500">
                {['✓ IFPI Genre-Klassifikation', '✓ MMA MIDI-Standard 1.0', '✓ EBU R128 Lautstärke-Norm', '✓ Geprüft Sept. 2026', '✓ Werbefrei · Unabhängig'].map(s => (
                  <div key={s} className="flex items-center gap-2">{s}</div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[10px] text-slate-300 font-mono uppercase tracking-wider">
                Kein Sponsoring · Keine Affiliate-Links
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ARTIST GRID ═══════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">Künstler-Matrix</div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Schlüsselkünstler</h2>
            </div>
            <Link to="/kuenstler" className="text-xs font-mono font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-wider hidden sm:block">
              Alle ansehen →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ARTISTS.map(a => (
              <div
                key={a.name}
                className={`${a.bg} border ${a.border} p-6 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: a.accent }}>{a.tag}</div>
                    <div className="text-xl font-extrabold text-slate-900 tracking-tight">{a.name}</div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{a.year}</span>
                </div>
                <div className="font-mono text-3xl font-extrabold tracking-tighter" style={{ color: a.accent, opacity: 0.25 }}>
                  {a.bpm}
                </div>
                <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">BPM</div>
              </div>
            ))}
          </div>
          <div className="mt-4 sm:hidden text-center">
            <Link to="/kuenstler" className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Alle ansehen →</Link>
          </div>
        </div>
      </section>

      {/* ══ BPM TOOL ══════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="bg-white border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">Interaktives Tool</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">BPM & Subgenre-Klassifikator</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  BPM eingeben → sofortige Klassifikation in Minimal Electro, Synth-Pop, Classic Electro Pop, Dance-Elektro oder Hyper-Pop — mit Synthesizer-Matrix, Referenz-Tracks und Tonart-Rechner.
                </p>
                <Link to="/rechner-embed"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-sm px-6 py-3.5 hover:bg-slate-700 transition-colors min-h-[48px]">
                  BPM eingeben →
                </Link>
              </div>
              <div className="p-8 sm:p-10 bg-slate-50 flex flex-col justify-center">
                <div className="font-mono text-[72px] font-extrabold text-slate-900 leading-none mb-1">120</div>
                <div className="font-mono text-xs text-cyan-600 uppercase tracking-widest mb-6 font-bold">BPM · Classic Electro Pop</div>
                <div className="space-y-2 text-xs divide-y divide-slate-100">
                  {[['BPM-Range', '118–130 BPM'], ['Synthesizer', 'Roland TR-808 · DX7'], ['LUFS', '–14 dBFS (EBU R128)'], ['Referenz', 'New Order, Pet Shop Boys']].map(([k, v]) => (
                    <div key={k} className="flex gap-4 pt-2">
                      <span className="font-mono text-slate-400 w-24 shrink-0">{k}</span>
                      <span className="text-slate-700">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EMBED WIDGET ══════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-3">Webmaster · Embed</div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">Tool einbetten</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Kostenfrei, kein API-Key, kein Tracking, responsive. Attribution-Link ist enthalten.</p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-slate-900 p-5 font-mono text-xs text-emerald-400 overflow-x-auto select-all border border-slate-700 leading-relaxed">
                {'<iframe src="https://elektropop.de/rechner-embed" width="100%" height="600" frameborder="0" title="Electro Pop BPM Klassifikator – elektropop.de" style="border:none;"></iframe>'}
              </div>
              <div className="mt-2 text-[10px] text-slate-400 font-mono uppercase tracking-wider">frame-ancestors: * · DSGVO-konform · Zero-CDN</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-3">FAQ</div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-6">Häufige Fragen</h2>
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-loose space-y-1">
                {['IFPI-Klassifikation', 'MMA MIDI 1.0', 'EBU R128', 'GEMA · GVL · PRS'].map(t => <div key={t}>{t}</div>)}
              </div>
            </div>
            <div className="lg:col-span-2 bg-white border border-slate-200 divide-y divide-slate-100">
              {FAQ.map((item, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group hover:bg-slate-50 transition-colors min-h-[56px]"
                  >
                    <span className="font-semibold text-slate-800 text-sm group-hover:text-cyan-700 transition-colors">{item.q}</span>
                    <span className="text-slate-400 font-mono text-lg shrink-0">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
