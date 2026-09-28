export default function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Datenschutzerklärung</h1>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-slate-700 leading-relaxed">

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">1. Verantwortlicher (Art. 13 DSGVO)</h2>
          <p>
            <strong>Jens Kathe</strong> – vollständige Kontaktdaten siehe{' '}
            <a href="/impressum" className="text-cyan-600 hover:underline">Impressum</a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">2. Grundsätze der Datenverarbeitung</h2>
          <p>
            elektropop.de setzt keine zustimmungspflichtigen Tracking-Cookies, Analytics-Dienste wie Google Analytics oder Werbenetzwerk-Pixel ein. Beim Seitenaufruf werden durch Vercel technische Server-Logfiles erfasst (siehe Abschnitt 3). Es werden keine dauerhaften Nutzerprofile erstellt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">3. Hosting (Vercel)</h2>
          <p>
            Diese Website wird über <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Vercel erfasst beim Abruf der Website automatisch Server-Log-Dateien (IP-Adresse, User-Agent, Zeitstempel) zur Gewährleistung der technischen Bereitstellung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung eines sicheren und funktionsfähigen Webauftritts).
          </p>
          <p className="mt-2">
            Für Datenübertragungen in die USA gilt der EU-U.S. Data Privacy Framework (Durchführungsbeschluss EU 2023/1795). Vercel ist unter dem EU-U.S. DPF zertifiziert.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">4. Schriften & externe Ressourcen</h2>
          <p>
            Auf dieser Website werden ausschließlich <strong>systemseitige Schriftarten</strong> verwendet (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto). Es werden <strong>keine Google Fonts</strong>, Adobe Fonts oder sonstige Schriftarten-CDNs eingebunden. Damit findet keine IP-Übertragung in Drittstaaten beim Laden von Schriftarten statt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">5. BPM-Rechner (Interaktives Tool)</h2>
          <p>
            Der BPM & Subgenre-Klassifikator unter <strong>/rechner-embed</strong> verarbeitet alle Eingaben ausschließlich lokal im Browser des Nutzers. Es werden keine Eingabedaten an Server übertragen oder gespeichert.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">6. Betroffenenrechte (Art. 15–21 DSGVO)</h2>
          <p>Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie das Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO). Zur Ausübung Ihrer Rechte wenden Sie sich an: redaktion [at] elektropop.de</p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">7. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI), Gustav-Stresemann-Ring 1, 65189 Wiesbaden.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">8. Änderungen dieser Datenschutzerklärung</h2>
          <p>Stand: September 2026. Diese Erklärung wird bei Bedarf aktualisiert. Die jeweils aktuelle Version ist unter elektropop.de/datenschutz abrufbar.</p>
        </section>
      </div>
    </div>
  )
}
