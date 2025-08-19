import { Col, Container, Row, Card } from "react-bootstrap"
import "../styles/creazione.css"

const Creazione = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <h1>Creazione Progetto React</h1>
              <h2 className="mt-4">Passaggi da terminale</h2>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    ⚙️ Setup Vite + Bootstrap
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>📦 Crea progetto Vite:</strong>
                      <br />
                      <code>npm create vite@latest</code>
                    </li>
                    <li className="mt-3">
                      <strong>📝 Dai un nome al progetto:</strong>
                      <br />
                      <code>nome-progetto</code>
                    </li>
                    <li className="mt-3">
                      <strong>📁 Vai nella cartella:</strong>
                      <br />
                      <code>cd nome-progetto</code>
                    </li>
                    <li className="mt-3">
                      <strong>📥 Installa dipendenze:</strong>
                      <br />
                      <code>npm install</code>
                    </li>
                    <li className="mt-3">
                      <strong>🚀 Avvia il progetto:</strong>
                      <br />
                      <code>npm run dev</code>
                    </li>
                    <li className="mt-3">
                      <strong>🎨 Installa Bootstrap + React-Bootstrap:</strong>
                      <br />
                      <code>npm install bootstrap react-bootstrap</code>
                    </li>
                    <li className="mt-3">
                      <strong>🧭 Installa React Router:</strong>
                      <br />
                      <code>npm install react-router-dom</code>
                    </li>
                    <li className="mt-3">
                      <strong>⭐ Installa FontAwesome:</strong>
                      <br />
                      <code>npm install @fortawesome/fontawesome-free</code>
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <h2 className="mt-5">
                Una volta avviato il progetto segui questi passaggi:
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🛠️ Pulizia & Setup Routing
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>🧹 Elimina i file CSS:</strong>
                      <br />
                      Rimuovi i 2 file CSS inutili e cancella l'import nel
                      progetto.
                    </li>
                    <li className="mt-3">
                      <strong>🎨 Importa Bootstrap:</strong>
                      <br />
                      <code>
                        import 'bootstrap/dist/css/bootstrap.min.css';
                      </code>
                      <br />
                      (da inserire in <code>main.jsx</code>)
                    </li>
                    <li className="mt-3">
                      <strong>🧭 Importa React Router:</strong>
                      <br />
                      <code>
                        import &#123; BrowserRouter &#125; from
                        'react-router-dom';
                      </code>
                      <br />
                      (sempre in <code>main.jsx</code>)
                    </li>
                    <li className="mt-3">
                      <strong>📦 Avvolgi App:</strong>
                      <br />
                      Avvolgi <code>&lt;App /&gt;</code> dentro{" "}
                      <code>&lt;BrowserRouter&gt;</code>
                    </li>
                    <li className="mt-3">
                      <strong>🧼 Pulisci App.jsx:</strong>
                      <br />
                      Elimina CSS e tutto ciò che non serve.
                    </li>
                    <li className="mt-3">
                      <strong>📍 Importa Routes:</strong>
                      <br />
                      <code>
                        import &#123; Routes, Route &#125; from
                        'react-router-dom';
                      </code>
                    </li>
                    <li className="mt-3">
                      <strong>📂 Aggiungi le Route:</strong>
                      <br />
                      Sotto la Navbar, apri <code>&lt;Routes&gt;</code> e
                      inserisci le rotte.
                    </li>
                    <li className="mt-3">
                      <strong>🧪 Esempio di Route:</strong>
                      <br />
                      <code>
                        &lt;Route path="/home" element=&lt;Home /&gt; /&gt;
                      </code>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">Carica su git hub</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🌐 Pubblica il tuo progetto su GitHub
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>🆕 Crea una nuova repository su GitHub:</strong>
                      <br />
                      Vai su <code>github.com</code>, accedi al tuo account e
                      clicca su <strong>"New"</strong> per creare una nuova
                      repo. Dai un nome (es. <code>nome-progetto</code>), scegli{" "}
                      <strong>Public</strong> o <strong>Private</strong>, e
                      clicca <strong>Create repository</strong>.
                    </li>
                    <li className="mt-3">
                      <strong>📁 Vai nella cartella del tuo progetto:</strong>
                      <br />
                      <code>cd nome-progetto</code>
                    </li>
                    <li className="mt-3">
                      <strong>🔧 Inizializza Git:</strong>
                      <br />
                      <code>git init</code>
                    </li>
                    <li className="mt-3">
                      <strong>📦 Aggiungi tutti i file:</strong>
                      <br />
                      <code>git add .</code>
                    </li>
                    <li className="mt-3">
                      <strong>📝 Fai il primo commit:</strong>
                      <br />
                      <code>git commit -m "Primo commit"</code>
                    </li>
                    <li className="mt-3">
                      <strong>🔗 Collega la repository remota:</strong>
                      <br />
                      <code>
                        git remote add origin
                        https://github.com/tuo-username/nome-progetto.git
                      </code>
                    </li>
                    <li className="mt-3">
                      <strong>
                        📛 Rinomina la branch principale (opzionale):
                      </strong>
                      <br />
                      Se la tua branch si chiama <code>master</code> e vuoi
                      usare <code>main</code>:
                      <br />
                      <code>git branch -m master main</code>
                    </li>
                    <li className="mt-3">
                      <strong>🚀 Spingi il progetto su GitHub:</strong>
                      <br />
                      <code>git push -u origin main</code>
                      <br />
                      (Oppure <code>origin master</code> se non hai rinominato
                      la branch)
                    </li>
                    <li className="mt-3">
                      <strong>✅ Fatto!</strong>
                      <br />
                      Il tuo progetto è ora online su GitHub. Puoi condividerlo,
                      collaborare o usarlo come portfolio.
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <h2 className="mt-5">Comandi git hub</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧠 Comandi Git essenziali
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>📦 Inizializza Git:</strong>
                      <br />
                      <code>git init</code>
                    </li>
                    <li className="mt-3">
                      <strong>📥 Aggiungi file:</strong>
                      <br />
                      <code>git add .</code> (aggiunge tutti i file)
                      <br />
                      <code>git add nomefile</code> (aggiunge solo uno)
                    </li>
                    <li className="mt-3">
                      <strong>📝 Fai un commit:</strong>
                      <br />
                      <code>git commit -m "Messaggio del commit"</code>
                    </li>
                    <li className="mt-3">
                      <strong>🔗 Collega la repo remota:</strong>
                      <br />
                      <code>
                        git remote add origin
                        https://github.com/tuo-username/nome-repo.git
                      </code>
                    </li>
                    <li className="mt-3">
                      <strong>🚀 Push iniziale:</strong>
                      <br />
                      <code>git push -u origin main</code>
                    </li>
                    <li className="mt-3">
                      <strong>🔄 Vedi lo stato:</strong>
                      <br />
                      <code>git status</code>
                    </li>
                    <li className="mt-3">
                      <strong>📂 Vedi le modifiche:</strong>
                      <br />
                      <code>git diff</code>
                    </li>
                    <li className="mt-3">
                      <strong>🌿 Crea una nuova branch:</strong>
                      <br />
                      <code>git branch nome-branch</code>
                    </li>
                    <li className="mt-3">
                      <strong>🔀 Passa a una branch:</strong>
                      <br />
                      <code>git checkout nome-branch</code>
                    </li>
                    <li className="mt-3">
                      <strong>🔁 Unisci una branch:</strong>
                      <br />
                      Vai sulla branch di destinazione (es. <code>main</code>) e
                      poi:
                      <br />
                      <code>git merge nome-branch</code>
                    </li>
                    <li className="mt-3">
                      <strong>🧹 Elimina una branch:</strong>
                      <br />
                      <code>git branch -d nome-branch</code>
                    </li>
                    <li className="mt-3">
                      <strong>📡 Scarica aggiornamenti remoti:</strong>
                      <br />
                      <code>git pull</code>
                    </li>
                    <li className="mt-3">
                      <strong>📤 Invia modifiche:</strong>
                      <br />
                      <code>git push</code>
                    </li>
                    <li className="mt-3">
                      <strong>📚 Vedi tutte le branch:</strong>
                      <br />
                      <code>git branch</code>
                    </li>
                    <li className="mt-3">
                      <strong>🕵️‍♀️ Vedi la cronologia:</strong>
                      <br />
                      <code>git log</code>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">Vercel</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🚀 Deploy su Vercel (React / Vite)
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>📦 Build del progetto:</strong>
                      <br />
                      Assicurati che nel <code>package.json</code> ci sia lo
                      script:
                      <br />
                      <code>"build": "vite build"</code>
                      <br />E lancia <code>npm run build</code> prima del
                      deploy.
                    </li>
                    <li className="mt-3">
                      <strong>📁 Cartella di output:</strong>
                      <br />
                      Vite genera i file nella cartella <code>dist</code>.
                      <br />
                      Su Vercel, imposta <strong>
                        Output Directory
                      </strong> su <code>dist</code> nelle impostazioni del
                      progetto.
                    </li>
                    <li className="mt-3">
                      <strong>🔄 Routing client-side:</strong>
                      <br />
                      Se usi React Router o simili, crea un file{" "}
                      <code>vercel.json</code> nella root con:
                      <br />
                      <code>{`{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}`}</code>
                      <br />
                      Questo evita l’errore “Page Not Found” quando navighi tra
                      le pagine.
                    </li>
                    <li className="mt-3">
                      <strong>🧪 Test locale:</strong>
                      <br />
                      Dopo la build, puoi testare con:
                      <br />
                      <code>npx serve dist</code>
                      <br />
                      Se funziona localmente, sei pronta per il deploy!
                    </li>
                    <li className="mt-3">
                      <strong>✅ Fatto!</strong>
                      <br />
                      Il tuo sito è ora online su <code>vercel.app</code>.
                      Condividilo con il mondo!
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Creazione
