import { useState, useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

type Subgenre = {
  name: string
  bpmRange: [number, number]
  description: string
  synths: string[]
  refTracks: string[]
  lufs: string
  color: string
  emoji: string
}

const SUBGENRES: Subgenre[] = [
  {
    name: 'Minimal Electro (Krautrock-Derivat)',
    bpmRange: [80, 100],
    description: 'Repetitive Minimal-Strukturen, inspiriert von Kraftwerk (Kling-Klang, 1970–1983). Sequenzer-basierte Loops, Vocoder-Einsatz, atonale Melodiefragmente.',
    synths: ['Moog Minimoog', 'ARP 2600', 'EMS VCS3', 'Synthanorma Sequenzer'],
    refTracks: ['Kraftwerk – Autobahn (1974, 98 BPM)', 'Neu! – Hallogallo (1972, 95 BPM)'],
    lufs: '–16 bis –18 LUFS (Analog Mastering)',
    color: 'bg-cyan-50 border-cyan-400',
    emoji: '🔬',
  },
  {
    name: 'Synth-Pop / New Wave',
    bpmRange: [100, 118],
    description: 'UK-Ursprung ca. 1977–1985. Kältere Synthie-Texturen, Post-Punk-Strukturen, sparsame Produktion. Typisch: Oberheim- und Roland-Juno-Klangteppiche.',
    synths: ['Roland Juno-106', 'Oberheim OB-X', 'Sequential Prophet-5', 'Roland TR-606'],
    refTracks: ['Depeche Mode – Just Can\'t Get Enough (1981, 112 BPM)', 'Yazoo – Only You (1982, 108 BPM)'],
    lufs: '–14 bis –16 LUFS',
    color: 'bg-pink-50 border-pink-400',
    emoji: '🎹',
  },
  {
    name: 'Classic Electro Pop',
    bpmRange: [118, 130],
    description: 'Der Kern des Genres: Vers-Refrain-Struktur, 4/4-Takt, Hookline-dominiert. Typisch für 80er–90er Mainstream-Elektro, heute für Chart-Elektropop.',
    synths: ['Roland TR-808', 'Yamaha DX7', 'Fairlight CMI', 'Roland Juno-106'],
    refTracks: ['Pet Shop Boys – West End Girls (1985, 120 BPM)', 'New Order – Blue Monday (1983, 133 BPM)'],
    lufs: '–14 LUFS (EBU R128 Standard)',
    color: 'bg-amber-50 border-amber-400',
    emoji: '⚡',
  },
  {
    name: 'Dance-Elektro / Club-Pop',
    bpmRange: [130, 140],
    description: 'Club-orientierter Electro Pop mit House-Einflüssen. Starke Kick-Drum (Roland TR-909-Charakter), Sidechain-Kompression, Pluck-Synths.',
    synths: ['Roland TR-909', 'Roland TB-303', 'Ableton Live + Serum VST', 'Native Instruments Massive'],
    refTracks: ['Charli XCX – Boom Clap (2014, 126 BPM)', 'Grimes – Oblivion (2012, 134 BPM)'],
    lufs: '–8 bis –12 LUFS (Brick-Wall Limiting)',
    color: 'bg-violet-50 border-violet-400',
    emoji: '🕺',
  },
  {
    name: 'Hyper-Pop / PC Music',
    bpmRange: [140, 180],
    description: 'Extremes BPM, maximaler Sättigungs-Grad, metallische FM-Synthese, Pitch-Shifting >+12 Semitone. SOPHIE-Ästhetik, digitale Texturüberladung.',
    synths: ['Max/MSP', 'Ableton Live + Custom Racks', 'Serum VST', 'Eurorack Modular'],
    refTracks: ['SOPHIE – Lemonade (2014, 148 BPM)', 'A.G. Cook – Waking Up (2020, 160 BPM)'],
    lufs: '–6 bis –9 LUFS (Hyper-Komprimiert)',
    color: 'bg-rose-50 border-rose-400',
    emoji: '🚀',
  },
]

const KEYS = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']
const MODES = [
  { label: 'Dur (Ionisch)', semitones: [0,2,4,5,7,9,11], character: 'Hell, offen, Pop-Charakter' },
  { label: 'Moll (Äolisch)', semitones: [0,2,3,5,7,8,10], character: 'Dunkel, emotional, Synth-Wave-Charakter' },
  { label: 'Dorisch', semitones: [0,2,3,5,7,9,10], character: 'Funky, smooth, Soul-Einfluss' },
  { label: 'Phrygisch', semitones: [0,1,3,5,7,8,10], character: 'Spanisch, exotisch, Dark Electro' },
]

function getSubgenre(bpm: number): Subgenre | null {
  return SUBGENRES.find(s => bpm >= s.bpmRange[0] && bpm <= s.bpmRange[1]) || null
}

function getScaleNotes(rootIdx: number, semitones: number[]): string[] {
  return semitones.map(s => KEYS[(rootIdx + s) % 12])
}

export default function RechnerEmbed() {
  const [searchParams, setSearchParams] = useSearchParams()
  
  // URL-Query Parameter Initialisierung
  const initialBpm = Number(searchParams.get('bpm')) || 120
  const initialRoot = Number(searchParams.get('key')) || 0
  const initialMode = Number(searchParams.get('mode')) || 0

  const [bpm, setBpm] = useState(initialBpm >= 60 && initialBpm <= 220 ? initialBpm : 120)
  const [bpmInput, setBpmInput] = useState(String(bpm))
  const [rootKey, setRootKey] = useState(initialRoot >= 0 && initialRoot < 12 ? initialRoot : 0)
  const [modeIdx, setModeIdx] = useState(initialMode >= 0 && initialMode < MODES.length ? initialMode : 0)
  const [copied, setCopied] = useState(false)

  // URL synchronisieren
  useEffect(() => {
    const params = new URLSearchParams()
    params.set('bpm', String(bpm))
    params.set('key', String(rootKey))
    params.set('mode', String(modeIdx))
    setSearchParams(params, { replace: true })
  }, [bpm, rootKey, modeIdx, setSearchParams])

  const subgenre = getSubgenre(bpm)
  const scaleNotes = getScaleNotes(rootKey, MODES[modeIdx].semitones)
  const noteLength16 = Math.round((60 / bpm) * 1000 / 4)
  const noteLength8 = noteLength16 * 2
  const noteLength4 = noteLength16 * 4

  const handleBpmInput = useCallback((v: string) => {
    setBpmInput(v)
    const n = parseInt(v)
    if (!isNaN(n) && n >= 60 && n <= 220) setBpm(n)
  }, [])

  const copyShareLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="min-h-screen bg-slate-50" style={{fontFamily:'-apple-system,BlinkMacSystemFont,ui-sans-serif,system-ui,sans-serif'}}>
      
      {/* Print-Only Header */}
      <div className="hidden print-only p-6 border-b border-slate-300">
        <h1 className="text-2xl font-bold">elektropop.de – Technisches Datenblatt</h1>
        <p className="text-sm text-slate-600">BPM-Klassifikation &amp; Skalenberechnung · Stand: September 2026</p>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-4 no-print">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-600 mb-0.5">Interaktives Tool</div>
            <h1 className="text-xl font-extrabold text-slate-900">BPM &amp; Subgenre-Klassifikator</h1>
            <p className="text-xs text-slate-500 mt-0.5">Electro Pop · elektropop.de</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={copyShareLink}
              className="text-xs font-bold px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1.5"
              title="Ergebnis-Link mit aktuellen Parametern kopieren"
            >
              {copied ? '✓ Kopiert!' : '🔗 Link kopieren'}
            </button>
            <button
              onClick={() => window.print()}
              className="text-xs font-bold px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors"
              title="Als PDF speichern oder drucken"
            >
              🖨️ PDF
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">

        {/* BPM Slider */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <label className="block text-sm font-bold text-slate-700 mb-4">
            Tempo (BPM) <span className="text-slate-400 font-normal">· Beats Per Minute</span>
          </label>
          <div className="flex items-center gap-4 mb-4">
            <input
              type="range"
              min={60}
              max={220}
              value={bpm}
              onChange={e => { setBpm(Number(e.target.value)); setBpmInput(e.target.value) }}
              className="flex-1 h-2 bg-slate-200 rounded-full appearance-none cursor-pointer"
              style={{accentColor:'#0891b2'}}
            />
            <div className="flex items-center gap-1">
              <input
                type="number"
                min={60}
                max={220}
                value={bpmInput}
                onChange={e => handleBpmInput(e.target.value)}
                className="w-20 text-center text-2xl font-extrabold text-slate-900 border border-slate-200 rounded-xl py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <span className="text-sm text-slate-400 font-semibold">BPM</span>
            </div>
          </div>
          {/* Note lengths */}
          <div className="grid grid-cols-3 gap-3 text-center">
            {[['♩ 1/4-Note', noteLength4], ['♪ 1/8-Note', noteLength8], ['♬ 1/16-Note', noteLength16]].map(([label, ms]) => (
              <div key={String(label)} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <div className="text-xs text-slate-400 mb-1">{label}</div>
                <div className="text-base font-bold text-slate-800 font-mono">{ms} ms</div>
              </div>
            ))}
          </div>
        </div>

        {/* Subgenre Result */}
        {subgenre ? (
          <div className={`rounded-2xl border-2 p-6 shadow-sm ${subgenre.color}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{subgenre.emoji}</span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">Subgenre-Klassifikation</div>
                <h2 className="text-xl font-extrabold text-slate-900">{subgenre.name}</h2>
                <div className="text-xs font-mono text-slate-500">{subgenre.bpmRange[0]}–{subgenre.bpmRange[1]} BPM · {subgenre.lufs}</div>
              </div>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed mb-5">{subgenre.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Typische Synthesizer</div>
                <ul className="space-y-1">
                  {subgenre.synths.map(s => (
                    <li key={s} className="text-xs text-slate-600 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Referenz-Tracks</div>
                <ul className="space-y-1">
                  {subgenre.refTracks.map(t => (
                    <li key={t} className="text-xs text-slate-600 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-100 rounded-2xl border border-slate-200 p-6 text-center text-slate-500 text-sm">
            BPM-Wert liegt außerhalb der Electro-Pop-Klassifikation (60–220 BPM)
          </div>
        )}

        {/* Tonart & Skala */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-700 mb-4">Tonart &amp; Skalenrechner</h2>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Grundton</label>
              <select
                value={rootKey}
                onChange={e => setRootKey(Number(e.target.value))}
                className="w-full border border-slate-200 rounded-xl p-2.5 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-slate-50 min-h-[48px]"
              >
                {KEYS.map((k, i) => <option key={k} value={i}>{k}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Modus</label>
              <select
                value={modeIdx}
                onChange={e => setModeIdx(Number(e.target.value))}
                className="w-full border border-slate-200 rounded-xl p-2.5 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-slate-50 min-h-[48px]"
              >
                {MODES.map((m, i) => <option key={m.label} value={i}>{m.label}</option>)}
              </select>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Töne der Skala · {KEYS[rootKey]}-{MODES[modeIdx].label}</div>
            <div className="flex flex-wrap gap-2 mb-3">
              {scaleNotes.map((note, i) => (
                <span key={i} className={`px-3 py-1.5 rounded-lg text-sm font-bold border ${i === 0 ? 'bg-cyan-600 text-white border-cyan-700' : 'bg-white text-slate-700 border-slate-200'}`}>
                  {note}
                </span>
              ))}
            </div>
            <div className="text-xs text-slate-500 italic">{MODES[modeIdx].character}</div>
          </div>
        </div>

        {/* Attribution & Legal */}
        <div className="text-center text-xs text-slate-400 pb-4">
          <a href="https://elektropop.de" target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-semibold hover:underline">
            elektropop.de
          </a>{' '}– Das deutsche Electro Pop Magazin · Alle Angaben ohne Gewähr.
          <br />
          * Modellrechnung. Tatsächliche Notenlängen und Subgenre-Grenzen können abweichen.
        </div>
      </div>
    </div>
  )
}
