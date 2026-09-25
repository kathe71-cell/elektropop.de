export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Impressum</h1>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-slate-700 leading-relaxed">

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">Angaben gemäß § 5 DDG</h2>
          <p>
            <strong>Jens Kathe</strong><br />
            Hansastraße 6<br />
            34119 Kassel<br />
            Deutschland
          </p>
          <p className="mt-3">
            <a href="mailto:jens@kathe.org" className="text-cyan-600 hover:underline">jens@kathe.org</a><br />
            <a href="tel:+4917866526230" className="text-cyan-600 hover:underline">+49 178 6652623</a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">Redaktionelle Unabhängigkeit</h2>
          <p>
            elektropop.de ist ein unabhängiges redaktionelles Musikportal und steht in keinem gesellschaftsrechtlichen Verhältnis zu genannten Künstlern, Musik-Labels, Verwertungsgesellschaften (GEMA, GVL, ASCAP, PRS) oder Streaming-Diensten.
          </p>
          <p className="mt-2">
            Auf diesem Portal werden <strong>keine Affiliate-Links</strong> und <strong>keine bezahlten Produktplatzierungen</strong> eingesetzt. Alle Inhalte sind redaktionell erstellt und werbefrei.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">Haftungsausschluss</h2>
          <h3 className="font-semibold text-slate-800 mb-1">Haftung für Inhalte</h3>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>

          <h3 className="font-semibold text-slate-800 mb-1 mt-4">Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          </p>

          <h3 className="font-semibold text-slate-800 mb-1 mt-4">Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Jens Kathe, Hansastraße 6, 34119 Kassel
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-3">Online-Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="mt-2">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  )
}
