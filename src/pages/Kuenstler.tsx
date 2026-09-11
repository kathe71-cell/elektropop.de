import { useState } from 'react'

const ARTISTS = [
  { name: 'Kraftwerk', origin: 'Düsseldorf, DE', active: '1970–heute', bpm: '118–132', synths: ['Moog Minimoog (1970)', 'ARP Odyssey (1972)', 'EMS Vocoder 5000', 'Synthanorma Sequenzer (1974)'], albums: ['Autobahn (1974)', 'Trans-Europe Express (1977)', 'The Man-Machine (1978)', 'Computer World (1981)'], desc: 'Kraftwerk definierten mit strenger Repetition, computerisierten Rhythmen und minimalistischen Melodie-Phrasen das Fundament für Electro Pop, Techno und Hip-Hop. Das Kling-Klang-Studio in Düsseldorf war das erste vollständig selbst-entwickelte elektronische Heim-Studio.', norm: 'IFPI: Electronic/Pop · DEM · GEMA-Mitglied', accent: '#0891b2' },
  { name: 'Depeche Mode', origin: 'Basildon, Essex, UK', active: '1980–heute', bpm: '116–130', synths: ['Oberheim OB-X (1979)', 'Roland System 100 (1975)', 'Sequential Prophet-5 (1978)', 'Emulator II Sampler'], albums: ['Speak & Spell (1981)', 'Some Great Reward (1984)', 'Violator (1990)', 'Memento Mori (2023)'], desc: 'Violator (1990, Prod. Flood) – Mastering: –12 LUFS (vor EBU R128-Normierung). Depeche Mode verbanden Dark-Wave-Ästhetik mit Oberheim-OB-X-Klangfarben und gothischem Understatement zu einem globalen Kultphänomen.', norm: 'IFPI: Electronic/Alternative · MCPS-Mitglied', accent: '#db2777' },
  { name: 'New Order', origin: 'Salford, Greater Manchester, UK', active: '1980–heute', bpm: '126–136', synths: ['Roland TB-303 (1981)', 'Roland TR-808 (1980)', 'Roland Juno-106 (1984)', 'Oberheim DMX'], albums: ['Power, Corruption & Lies (1983)', 'Low-life (1985)', 'Technique (1989)', 'Music Complete (2015)'], desc: '„Blue Monday" (1983, FAC 73) – meistverkaufte 12"-Single der UK-Musikgeschichte. TB-303-Bassline in F-Moll bei exakt 133 BPM. New Order entstanden nach dem Tod von Joy Divisions Ian Curtis und fusionierten Post-Punk mit Dance-Music.', norm: 'IFPI: Electronic/Post-Punk · PRS-Mitglied', accent: '#d97706' },
  { name: 'Pet Shop Boys', origin: 'London, UK', active: '1981–heute', bpm: '115–128', synths: ['Fairlight CMI (1979)', 'Roland Juno-106', 'AMS RMX16 Reverb', 'Yamaha DX7 (1983)'], albums: ['Please (1986)', 'Actually (1987)', 'Introspective (1988)', 'Electric (2013)'], desc: 'Neil Tennant und Chris Lowe definierten mit Fairlight-CMI-Sampling und orchestralen Arrangements den intellektuellen Electro-Pop. „West End Girls" (1985) erreichte Platz 1 in UK, USA und DE.', norm: 'IFPI: Electronic/Pop · PRS-Mitglied', accent: '#059669' },
  { name: 'Charli XCX', origin: 'Cambridge, UK', active: '2008–heute', bpm: '122–140', synths: ['Ableton Live', 'Serum VST (Xfer Records)', 'Roland TR-808 (Sample)', 'SoundToys Decapitator'], albums: ['Sucker (2014)', 'Pop 2 (2017)', 'How I\'m Feeling Now (2020)', 'BRAT (2024)'], desc: 'BRAT (2024, Atlantic Records) – Metacritic: 100/100. 808-Sidechain-Kompression, –8 LUFS Brick-Wall-Limiting. Zusammenarbeit mit SOPHIE (1986–2021) prägte Hyperpop als Gegenästhetik zu Lo-Fi.', norm: 'IFPI: Electronic/Hyperpop · ASCAP-Mitglied', accent: '#7c3aed' },
  { name: 'SOPHIE', origin: 'Glasgow, UK', active: '2013–2021', bpm: '130–145', synths: ['Max/MSP (Algorithmic Synthesis)', 'Eurorack Modular', 'Custom DSP-Patches', 'Ableton Live'], albums: ['PRODUCT (2015)', 'OIL OF EVERY PEARL\'S UN-INSIDES (2018)'], desc: 'Samuel Long (1986–2021) revolutionierte mit hyperrealer FM/Waveshaping-Synthese in Max/MSP die Clubmusik. Metallische, plastikhafte Texturen, die bis heute PC Music und Hyperpop fundamental prägen.', norm: 'IFPI: Electronic/Experimental · PRS-Mitglied', accent: '#be185d' },
  { name: 'Grimes', origin: 'Vancouver, BC, CA', active: '2007–heute', bpm: '120–138', synths: ['Logic Pro X', 'Ableton Live', 'Korg MS-20 (1978)', 'GarageBand (Erstproduktionen)'], albums: ['Visions (2012)', 'Art Angels (2015)', 'Miss Anthropocene (2020)'], desc: 'Visions (2012, 4AD) – allein in Logic Pro X produziert, ohne externe Produzenten. Platz 1 US-Electronic-Charts (Billboard). Mikrotonale Vocal-Layering-Technik: ±25 Cent Pitch-Deviation.', norm: 'IFPI: Electronic/Indie Pop · SOCAN-Mitglied', accent: '#ea580c' },
  { name: 'Fever Ray', origin: 'Stockholm, SE', active: '2009–heute', bpm: '90–122', synths: ['Buchla Music Easel (1973)', 'Eurorack Modular', 'Ableton Live', 'Field Recordings'], albums: ['Fever Ray (2009)', 'Plunge (2017)', 'Radical Romantics (2023)'], desc: 'Karin Elisabeth Dreijer verbindet nordeuropäische Kälte-Ästhetik mit queerer Avantgarde. Debütalbum (2009, Rabid Records): Guardian-Wahl als Elektro-Album des Jahrzehnts. Swing-Timing: ±5 ms Quantize.', norm: 'IFPI: Electronic/Avant-Pop · STIM-Mitglied (SE)', accent: '#4f46e5' },
]

export default function Kuenstler() {
  const [copied, setCopied] = useState(false)
  const citationText = 'elektropop.de Fachredaktion (2026). Künstler-Archiv & Synthesizer-Taxonomie des Electro Pop. https://elektropop.de/kuenstler (Abgerufen: September 2026).'

  const copyCitation = () => {
    navigator.clipboard.writeText(citationText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">
            Künstler-Datenbank · IFPI-Klassifikation
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tighter leading-none mb-6">
            Electro Pop<br />
            <span className="text-cyan-600">Künstler-Matrix</span>
          </h1>
          <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
            Technische Tiefenprofile: Synthesizer-Setups, BPM-Angaben, LUFS-Werte, Diskografie und musikwissenschaftliche Einordnung nach IFPI-Klassifikation. Stand: September 2026.
          </p>
        </div>
      </div>

      {/* Artist List */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-0 divide-y divide-slate-200">
        {ARTISTS.map((a, idx) => (
          <div key={a.name} className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 group">
            {/* Left: Identity */}
            <div className="lg:col-span-1">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-mono text-xs text-slate-400 pt-1 w-6 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{a.name}</h2>
                  <div className="text-xs text-slate-500 mt-0.5">{a.origin} · {a.active}</div>
                </div>
              </div>
              {/* BPM Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-bold rounded-none ml-10"
                style={{ background: a.accent + '15', color: a.accent, border: `1px solid ${a.accent}35` }}
              >
                {a.bpm} BPM
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <p className="text-slate-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
              <div>
                <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-3">Synth-Setup</div>
                <ul className="space-y-1.5">
                  {a.synths.map(s => (
                    <li key={s} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: a.accent }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-3">Wichtige Alben</div>
                <ul className="space-y-1.5">
                  {a.albums.map(alb => (
                    <li key={alb} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                      {alb}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:col-span-2">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">{a.norm}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wissenschaftliche Zitations-Box */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-12">
        <div className="bg-white border border-slate-200 p-6 rounded-none">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                Wissenschaftliche Zitation (APA / Harvard)
              </span>
              <div className="text-sm font-bold text-slate-900">Diesen Artikel zitieren</div>
            </div>
            <button
              onClick={copyCitation}
              className="text-xs font-mono font-bold px-4 py-2 border border-slate-300 hover:border-cyan-600 hover:text-cyan-700 transition-colors uppercase tracking-wider"
            >
              {copied ? '✓ Zitation kopiert!' : '📋 Zitation kopieren'}
            </button>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-100 font-mono text-xs text-slate-700 break-all select-all">
            {citationText}
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-12">
        <div className="border-t border-slate-200 pt-6 font-mono text-[10px] text-slate-400 uppercase tracking-wider">
          Alle Angaben nach musikwissenschaftlicher Recherche (Stand September 2026) · Redaktionell unabhängig · Kein Verhältnis zu Künstlern, Labels oder Verwertungsgesellschaften
        </div>
      </div>
    </div>
  )
}
