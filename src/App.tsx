import { useState } from 'react'
import { DotField } from './components/DotField'

const SERVER_IP = 'play.bumblecraft.hu'
const DISCORD_URL = 'https://dc.bumblecraft.hu'
const VERSION = '1.21+'

const MODES = [
  {
    id: 'randomcraft',
    name: 'RandomCraft',
    tag: 'Random drop',
    description: 'Üss ki blokkot és lásd meg milyen tárgyat dob.',
  },
  {
    id: 'fullpvp',
    name: 'FullPvP',
    tag: 'Szerveruralom',
    description:
      'Bányássz, szerelkezz fel, vásárolj in-game pénzért és hozz létre csapatot, majd urald a szervert!',
  },
  {
    id: 'elytrabox',
    name: 'ElytraBox',
    tag: 'Box harc',
    description:
      'Harcolj egy box-ban, hozz létre csapatot, szerelkezz fel és urald a szervert!',
  },
] as const

const STEPS = [
  {
    title: 'Indítsd a Minecraftot',
    text: `Használd a hivatalos launchert vagy egy optimalizált klienst. Verzió: ${VERSION}.`,
  },
  {
    title: 'Többjátékos mód',
    text: 'A főmenüben válaszd a Többjátékos módot, majd az Új szerver hozzáadása gombot.',
  },
  {
    title: 'Add meg a szerver IP-t',
    text: SERVER_IP,
  },
  {
    title: 'Csatlakozz és játssz',
    text: 'Lépj be a szerverre, válassz játékmódot, és indulhat a káosz.',
  },
] as const

function App() {
  const [activeMode, setActiveMode] = useState<(typeof MODES)[number]['id']>('randomcraft')
  const [copied, setCopied] = useState(false)
  const mode = MODES.find((m) => m.id === activeMode) ?? MODES[0]

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="page">
      <DotField />
      <div className="grain" aria-hidden="true" />

      <header className="topbar">
        <a className="brand-mark" href="#top">
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img src="/logo.png" alt="" width={40} height={40} className="brand-logo" />
          </picture>
          BumbleCraft
        </a>
        <nav className="nav" aria-label="Főnavigáció">
          <a href="#modok">Módok</a>
          <a href="#csatlakozas">Csatlakozás</a>
          <a href={DISCORD_URL} target="_blank" rel="noreferrer">
            Discord
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <p className="hero-meta">
            <span>{VERSION}</span>
            <span className="meta-sep" aria-hidden="true" />
            <span>{SERVER_IP}</span>
          </p>
          <h1 className="hero-brand">BumbleCraft</h1>
          <p className="hero-lead">Három mód. Egy szerver. Nulla unalom.</p>
          <p className="hero-sub">
            RandomCraft, FullPvP és ElytraBox — gyors körök, éles harc, közösség Discordon.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={copyIp}>
              {copied ? 'IP bemásolva' : 'IP másolása'}
            </button>
            <a className="btn btn-ghost" href={DISCORD_URL} target="_blank" rel="noreferrer">
              Discord
            </a>
          </div>
        </section>

        <section className="section modes" id="modok">
          <div className="section-head">
            <h2>Játékmódok</h2>
            <p>Válassz tempót — mindegyik másféle káosz.</p>
          </div>

          <div className="mode-switch" role="tablist" aria-label="Játékmódok">
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={activeMode === m.id}
                className={`mode-tab${activeMode === m.id ? ' is-active' : ''}`}
                onClick={() => setActiveMode(m.id)}
              >
                {m.name}
              </button>
            ))}
          </div>

          <article className="mode-panel" key={mode.id}>
            <p className="mode-tag">{mode.tag}</p>
            <h3>{mode.name}</h3>
            <p>{mode.description}</p>
          </article>
        </section>

        <section className="section join" id="csatlakozas">
          <div className="section-head">
            <h2>Hogyan csatlakozhatsz?</h2>
            <p>Négy lépés a szerverre — ennyi az egész.</p>
          </div>

          <ol className="steps">
            {STEPS.map((step, i) => (
              <li key={step.title} className="step">
                <span className="step-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  {step.text === SERVER_IP ? (
                    <button type="button" className="ip-inline" onClick={copyIp}>
                      {copied ? 'Bemásolva' : SERVER_IP}
                    </button>
                  ) : (
                    <p>{step.text}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section discord-band">
          <h2>Közösség Discordon</h2>
          <p>Frissítések, társak, eventek — minden ott történik.</p>
          <a className="btn btn-primary" href={DISCORD_URL} target="_blank" rel="noreferrer">
            Csatlakozás a Discordhoz
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Bali0531. Minden jog fenntartva.</p>
      </footer>
    </div>
  )
}

export default App
