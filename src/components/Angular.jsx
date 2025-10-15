import { Col, Container, Row, Card, Table } from "react-bootstrap"

const Angular = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧱 STEP 1 – Crea il progetto Angular moderno
                  </Card.Title>

                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`ng new nome-progetto --style=css --routing --standalone
cd nome-progetto`}
                  </pre>

                  <p className="mt-3 text-start">
                    ✅ Questo comando crea una nuova applicazione Angular con
                    alcune opzioni molto utili:
                  </p>

                  <ul className="text-start text-light">
                    <li>
                      <strong>--style=css</strong>: usa i fogli di stile CSS
                      classici. Puoi cambiarlo in <code>scss</code> o{" "}
                      <code>sass</code> se preferisci.
                    </li>
                    <li>
                      <strong>--routing</strong>: abilita il sistema di{" "}
                      <em>routing</em>, cioè la gestione delle pagine e degli
                      URL.
                    </li>
                    <li>
                      <strong>--standalone</strong>: ogni componente sarà
                      indipendente, senza bisogno di moduli. Questo semplifica
                      la struttura e rende il codice più moderno.
                    </li>
                  </ul>

                  <p className="mt-3 text-start">
                    ✅ Dopo la creazione, il comando{" "}
                    <code>cd nome-progetto</code> ti porta dentro la cartella
                    del progetto. Da qui puoi iniziare a lavorare.
                  </p>

                  <p className="mt-3 text-start">✅ Il progetto include già:</p>

                  <ul className="text-start text-light">
                    <li>
                      Una struttura base con <code>src/</code>,{" "}
                      <code>app/</code>, e file di configurazione.
                    </li>
                    <li>
                      Un componente iniziale chiamato <code>AppComponent</code>.
                    </li>
                    <li>
                      Un file <code>main.ts</code> che avvia l’applicazione.
                    </li>
                    <li>
                      Un file <code>angular.json</code> che gestisce stili,
                      script e build.
                    </li>
                  </ul>

                  <p className="mt-3 text-center">
                    🎯 <strong>Obiettivo:</strong> avere una base solida,
                    moderna e pronta per essere personalizzata.
                  </p>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🎨 STEP 2 – Installa Angular Material
                  </Card.Title>

                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`ng add @angular/material`}
                  </pre>

                  <p className="mt-3 text-start">
                    ✅ Questo comando installa Angular Material e ti guida con
                    una serie di domande:
                  </p>

                  <ul className="text-start text-light">
                    <li>
                      <strong>Choose a theme:</strong> puoi scegliere un tema
                      predefinito (es. <code>Indigo/Pink</code>).
                    </li>
                    <li>
                      <strong>Set up global typography styles?</strong> → di
                      solito <em>sì</em>.
                    </li>
                    <li>
                      <strong>Set up animations?</strong> → <em>sì</em>, se vuoi
                      usare effetti visivi (es. menu a scomparsa).
                    </li>
                  </ul>

                  <p className="mt-3 text-start">
                    ✅ Angular aggiorna automaticamente il file{" "}
                    <code>angular.json</code> per includere il tema scelto nei
                    tuoi stili globali:
                  </p>

                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`"styles": [
  "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
  "src/styles.css"
]`}
                  </pre>

                  <p className="mt-3 text-start">
                    🧠 <strong>Nota:</strong> in passato si doveva copiare
                    manualmente il file del tema, ma ora Angular lo gestisce da
                    solo. Quindi niente più:
                  </p>

                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`mkdir src/styles
copy node_modules/@angular/material/prebuilt-themes/indigo-pink.css src/styles/material-theme.css`}
                  </pre>

                  <p className="mt-3 text-start">
                    ✅ Se vuoi cambiare tema in futuro, ti basta modificare il
                    percorso nel file <code>angular.json</code> oppure usare un
                    tema personalizzato.
                  </p>

                  <p className="mt-3 text-start">
                    ✅ I componenti Angular Material funzionano perfettamente
                    anche in progetti <strong>standalone</strong>: basta
                    importarli nel componente dove li usi.
                  </p>

                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [MatButtonModule],
  template: \`<button mat-button>Cliccami</button>\`
})`}
                  </pre>

                  <p className="mt-3 text-center">
                    🎯 <strong>Obiettivo:</strong> avere uno stile moderno e
                    componenti UI pronti all’uso, senza doverli creare da zero.
                  </p>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧩 STEP 4 – Crea i componenti base
                  </Card.Title>

                  <p className="text-start">
                    In Angular moderno (con{" "}
                    <strong>componenti standalone</strong>), ogni componente è
                    indipendente e può essere usato senza moduli. Qui creiamo:
                  </p>

                  <ul className="text-start text-light">
                    <li>
                      <strong>AppComponent</strong>: il contenitore principale
                    </li>
                    <li>
                      <strong>NavbarComponent</strong>: la barra di navigazione
                    </li>
                    <li>
                      <strong>HomeComponent</strong>: la pagina iniziale
                    </li>
                    <li>
                      <strong>app.config.ts</strong>: la configurazione del
                      routing
                    </li>
                  </ul>

                  <h6 className="mt-4">
                    🔹 AppComponent – il contenitore principale
                  </h6>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: \`<app-navbar></app-navbar><router-outlet></router-outlet>\`
})
export class AppComponent {}`}
                  </pre>
                  <p className="text-start">
                    ✅ Questo è il componente principale. Mostra la navbar e
                    gestisce il contenuto delle pagine tramite{" "}
                    <code>&lt;router-outlet&gt;</code>.
                  </p>

                  <h6 className="mt-4">
                    🔹 app.config.ts – definisci le rotte
                  </h6>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'slider', component: SliderComponent }
    ])
  ]
};`}
                  </pre>
                  <p className="text-start">
                    ✅ Qui dici ad Angular quali URL portano a quali componenti.
                    Ad esempio:
                    <code>/</code> mostra <code>HomeComponent</code>,{" "}
                    <code>/slider</code> mostra <code>SliderComponent</code>.
                  </p>

                  <h6 className="mt-4">
                    🔹 NavbarComponent – la barra di navigazione
                  </h6>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: \`
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/slider">Slider</a>
    </nav>
  \`
})
export class NavbarComponent {}`}
                  </pre>
                  <p className="text-start">
                    ✅ Usa <code>routerLink</code> per creare link che cambiano
                    pagina senza ricaricare il sito. Angular gestisce tutto in
                    automatico.
                  </p>

                  <h6 className="mt-4">
                    🔹 HomeComponent – la pagina iniziale
                  </h6>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`@Component({
  selector: 'app-home',
  standalone: true,
  template: \`<h2>Ciao Stella 👋</h2><p>Questa è la tua Home.</p>\`
})
export class HomeComponent {}`}
                  </pre>
                  <p className="text-start">
                    ✅ Questo è il contenuto che vedi quando visiti{" "}
                    <code>/</code>. Puoi personalizzarlo come vuoi.
                  </p>

                  <h6 className="mt-4">📦 Cos’è il routing?</h6>
                  <p className="text-start">
                    Il <strong>routing</strong> ti permette di creare un’app a
                    più pagine. Ogni URL mostra un componente diverso. Angular
                    lo gestisce con:
                  </p>
                  <ul className="text-start text-light">
                    <li>
                      <code>provideRouter()</code>: definisce le rotte
                    </li>
                    <li>
                      <code>routerLink</code>: crea i link
                    </li>
                    <li>
                      <code>router-outlet</code>: mostra il contenuto della
                      pagina
                    </li>
                  </ul>

                  <p className="mt-3 text-center">
                    ✅ Con questi componenti hai già una mini SPA (Single Page
                    Application) funzionante, modulare e pronta per essere
                    estesa.
                  </p>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🎨 Dove modificare per personalizzare l’app
                  </Card.Title>

                  <p className="text-start">
                    Angular ti dà una struttura modulare: ogni file ha un ruolo
                    preciso. Ecco dove intervenire per cambiare contenuti, stili
                    e comportamento dell’app:
                  </p>

                  <ul className="text-start text-light">
                    <li>
                      <strong>Contenuto della Home:</strong>{" "}
                      <code>home.component.ts</code>
                      <br />
                      ✏️ Qui scrivi il testo, i titoli e gli elementi visivi
                      della pagina iniziale.
                    </li>
                    <li>
                      <strong>Stili della Home:</strong>{" "}
                      <code>home.component.css</code>
                      <br />
                      🎨 Qui definisci i colori, margini, font e layout della
                      Home.
                    </li>
                    <li>
                      <strong>Navigazione:</strong>{" "}
                      <code>navbar.component.ts</code>
                      <br />
                      🧭 Qui modifichi i link del menu, aggiungi icone o cambi
                      il layout della barra.
                    </li>
                    <li>
                      <strong>Nuove pagine:</strong> crea componenti e
                      aggiungili in <code>app.config.ts</code>
                      <br />
                      📄 Ogni nuova pagina è un componente standalone. Per
                      renderla visibile, devi aggiungerla al routing.
                    </li>
                    <li>
                      <strong>Layout generale:</strong>{" "}
                      <code>app.component.ts</code>
                      <br />
                      🏗️ Qui decidi cosa appare in tutte le pagine (es. navbar,
                      footer, router-outlet).
                    </li>
                    <li>
                      <strong>Tema Material:</strong>{" "}
                      <code>material-theme.css</code>
                      <br />
                      🎨 Qui puoi cambiare il tema visivo di Angular Material
                      (colori, tipografia).
                    </li>
                    <li>
                      <strong>Stili globali:</strong> <code>styles.css</code>
                      <br />
                      🌍 Qui definisci regole CSS valide per tutta l’app (es.
                      font base, sfondo, reset).
                    </li>
                  </ul>

                  <p className="mt-3 text-center">
                    ✅ Ogni parte è indipendente e riusabile. Puoi clonare,
                    adattare e migliorare tutto per progetti futuri.
                  </p>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧠 Vuoi aggiungere una nuova pagina?
                  </Card.Title>

                  <p className="text-start">
                    In Angular moderno con componenti{" "}
                    <strong>standalone</strong>, creare una nuova pagina è
                    semplice e modulare. Ecco i 3 passaggi fondamentali:
                  </p>

                  <h6 className="mt-3">
                    🔹 1. Crea il componente della pagina
                  </h6>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`ng generate component about --standalone`}
                  </pre>
                  <p className="text-start">
                    ✅ Questo comando crea automaticamente il file{" "}
                    <code>about.component.ts</code> e gli altri file associati
                    (HTML, CSS, spec). Il flag <code>--standalone</code> è
                    fondamentale per usare il componente senza moduli.
                  </p>

                  <p className="text-start">
                    Oppure puoi scriverlo manualmente così:
                  </p>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`@Component({
  selector: 'app-about',
  standalone: true,
  template: \`<h2>About</h2><p>Questa è la pagina About.</p>\`
})
export class AboutComponent {}`}
                  </pre>

                  <h6 className="mt-3">
                    🔹 2. Aggiungi la rotta nel file di configurazione
                  </h6>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`// app.config.ts
{ path: 'about', component: AboutComponent }`}
                  </pre>
                  <p className="text-start">
                    ✅ Così Angular sa che quando visiti <code>/about</code>,
                    deve mostrare quel componente.
                  </p>

                  <h6 className="mt-3">🔹 3. Aggiungi il link nella navbar</h6>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`// navbar.component.ts
<a routerLink="/about">About</a>`}
                  </pre>
                  <p className="text-start">
                    ✅ Ora puoi cliccare sul link e navigare tra le pagine senza
                    ricaricare l’app.
                  </p>

                  <h6 className="mt-4">⚡ Scorciatoie utili da terminale</h6>
                  <ul className="text-start text-light">
                    <li>
                      <code>ng g c nome --standalone</code> → crea un componente
                      standalone
                    </li>
                    <li>
                      <code>ng g c pages/contatti --standalone</code> → crea una
                      pagina in una sottocartella
                    </li>
                    <li>
                      <code>ng g c shared/bottone --standalone</code> → crea un
                      componente riusabile (es. bottone)
                    </li>
                  </ul>

                  <h6 className="mt-4">📦 Cos’è il routing?</h6>
                  <p className="text-start">
                    Il <strong>routing</strong> è il sistema che collega gli URL
                    ai componenti. In una SPA (Single Page Application), non si
                    ricarica la pagina: Angular cambia solo il contenuto
                    visibile.
                  </p>

                  <ul className="text-start text-light">
                    <li>
                      <code>provideRouter()</code>: definisce le rotte nel file
                      <code>app.config.ts</code>
                    </li>
                    <li>
                      <code>routerLink</code>: crea i link che navigano tra le
                      pagine
                    </li>
                    <li>
                      <code>router-outlet</code>: è il contenitore che mostra la
                      pagina attiva
                    </li>
                  </ul>

                  <p className="mt-3 text-center">
                    💥 Boom! Hai creato una nuova pagina Angular, visibile
                    all’URL <code>/about</code>, collegata alla navbar e gestita
                    dal routing.
                  </p>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    💅 Come aggiungere Bootstrap in Angular
                  </Card.Title>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`STEP 1 – Installa Bootstrap
npm install bootstrap

STEP 2 – Aggiungi lo stile in angular.json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]

STEP 3 – (Facoltativo) Aggiungi Bootstrap JS per dropdown e navbar mobile
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]

STEP 4 – Riavvia il server
ng serve`}
                  </pre>
                  <p className="mt-3 text-center">
                    ✅ Ora puoi usare tutte le classi Bootstrap (
                    <code>container</code>, <code>row</code>,{" "}
                    <code>navbar</code>, <code>btn</code>, ecc.) nei tuoi
                    template Angular.
                  </p>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📦 Quando importare un componente Angular
                  </Card.Title>

                  <p className="text-start">
                    In Angular con componenti <strong>standalone</strong>, ogni
                    componente è indipendente e può essere usato in due modi:
                  </p>

                  <h6 className="mt-3">
                    🔹 1. Uso diretto nel <code>template</code>
                  </h6>
                  <p className="text-start">
                    Se vuoi mostrare un componente dentro un altro (es. una
                    card, un bottone, un’immagine), devi{" "}
                    <strong>importarlo manualmente</strong> nel file TypeScript
                    del componente padre.
                  </p>

                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImmagineComponent], // ✅ lo importi qui
  template: \`
    <h2>Ciao Stella 👋</h2>
    <app-immagine></app-immagine> <!-- ✅ lo usi nel template -->
  \`
})
export class HomeComponent {}`}
                  </pre>

                  <p className="text-start">
                    ✅ Angular ha bisogno di sapere che{" "}
                    <code>ImmagineComponent</code> è disponibile nel contesto
                    del componente padre. Senza l’import, il template non lo
                    riconosce.
                  </p>

                  <h6 className="mt-4">
                    🔹 2. Uso tramite <code>routing</code>
                  </h6>
                  <p className="text-start">
                    Se il componente è una <strong>pagina</strong> e lo carichi
                    tramite URL (es. <code>/immagine</code>), allora{" "}
                    <strong>non serve importarlo</strong>
                    nel componente padre. Angular lo gestisce automaticamente
                    tramite il sistema di routing.
                  </p>

                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`// app.config.ts
{ path: 'immagine', component: ImmagineComponent } // ✅ routing automatico`}
                  </pre>

                  <p className="text-start">
                    ✅ In questo caso, il componente viene caricato solo quando
                    l’utente visita l’URL corrispondente. Angular lo importa
                    dietro le quinte.
                  </p>

                  <h6 className="mt-4">📌 Regola d’oro</h6>
                  <ul className="text-start text-light">
                    <li>
                      ✅ <strong>Importa</strong> i componenti che usi
                      direttamente nel <code>template</code> (cioè che scrivi
                      con <code>&lt;app-nome&gt;</code>)
                    </li>
                    <li>
                      ✅ <strong>Non serve importare</strong> i componenti che
                      usi solo nel <code>routing</code> (cioè che vengono
                      mostrati tramite URL)
                    </li>
                  </ul>

                  <p className="mt-3 text-center">
                    🧠 Angular standalone semplifica tutto: meno moduli, meno
                    boilerplate, più chiarezza. Basta sapere{" "}
                    <strong>dove</strong> lo usi per capire se serve l’import.
                  </p>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔁 Ciclo di vita di un componente Angular
                  </Card.Title>
                  <p className="text-start">
                    Angular offre diversi <strong>hook</strong> per gestire
                    momenti specifici nella vita di un componente. Non sono
                    obbligatori, ma diventano utili quando hai logiche
                    dinamiche, chiamate API, timer, o interazioni con il DOM.
                  </p>
                  <Table
                    striped
                    bordered
                    hover
                    variant="dark"
                    className="mt-3 text-center"
                  >
                    <thead>
                      <tr>
                        <th>Metodo</th>
                        <th>Quando viene chiamato</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <code>constructor</code>
                        </td>
                        <td>Quando il componente viene istanziato</td>
                      </tr>
                      <tr>
                        <td>
                          <code>ngOnInit</code>
                        </td>
                        <td>Dopo l’inizializzazione del componente</td>
                      </tr>
                      <tr>
                        <td>
                          <code>ngDoCheck</code>
                        </td>
                        <td>Ad ogni rilevamento di cambiamenti</td>
                      </tr>
                      <tr>
                        <td>
                          <code>ngAfterContentInit</code>
                        </td>
                        <td>
                          Dopo che il contenuto proiettato è inizializzato
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>ngAfterContentChecked</code>
                        </td>
                        <td>Dopo ogni check del contenuto proiettato</td>
                      </tr>
                      <tr>
                        <td>
                          <code>ngAfterViewInit</code>
                        </td>
                        <td>Dopo che la view è inizializzata</td>
                      </tr>
                      <tr>
                        <td>
                          <code>ngAfterViewChecked</code>
                        </td>
                        <td>Dopo ogni check della view</td>
                      </tr>
                      <tr>
                        <td>
                          <code>ngOnDestroy</code>
                        </td>
                        <td>Quando il componente viene distrutto</td>
                      </tr>
                    </tbody>
                  </Table>
                  <p className="mt-3 text-center">
                    ✅ Usa solo i metodi che ti servono: per logiche dinamiche,
                    cleanup, o accesso al DOM.
                    <br />✅ Nei componenti <strong>standalone</strong>, il
                    ciclo di vita funziona esattamente come prima.
                  </p>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔗 I 4 tipi di Data Binding in Angular
                  </Card.Title>

                  <p className="text-start">
                    Il <strong>data binding</strong> è il meccanismo con cui
                    colleghi i dati del tuo componente alla parte visibile (la
                    view). Angular ti offre 4 modalità principali, ognuna
                    pensata per un tipo diverso di interazione.
                  </p>

                  <h6 className="mt-4">
                    1️⃣ Interpolation – mostrare un valore
                  </h6>
                  <pre
                    className="text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`<h1>{{ titolo }}</h1>`}
                  </pre>
                  <p className="text-start">
                    ✅ Mostra il valore della variabile <code>titolo</code> nel
                    template. È utile per testi, titoli, paragrafi, ecc.
                  </p>

                  <h6 className="mt-4">
                    2️⃣ Property Binding – impostare proprietà dinamiche
                  </h6>
                  <pre
                    className="text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`<img [src]="immagineUrl">`}
                  </pre>
                  <p className="text-start">
                    ✅ Collega una proprietà HTML (es. <code>src</code>,{" "}
                    <code>disabled</code>,<code>value</code>) a una variabile
                    del componente. Se il valore cambia, la view si aggiorna
                    automaticamente.
                  </p>

                  <h6 className="mt-4">
                    3️⃣ Event Binding – reagire agli eventi
                  </h6>
                  <pre
                    className="text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`<button (click)="saluta()">Clicca</button>`}
                  </pre>
                  <p className="text-start">
                    ✅ Ascolta eventi del DOM (click, input, mouseover, ecc.) e
                    chiama una funzione nel componente. Perfetto per bottoni,
                    form, interazioni.
                  </p>

                  <h6 className="mt-4">
                    4️⃣ Two-way Binding – sincronizzare input e variabili
                  </h6>
                  <pre
                    className="text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`<input [(ngModel)]="nome">`}
                  </pre>
                  <p className="text-start">
                    ✅ Collega un input a una variabile: se l’utente scrive, la
                    variabile si aggiorna; se la variabile cambia, l’input si
                    aggiorna. Serve per form e campi dinamici.
                  </p>
                  <p className="text-start">
                    ⚠️ Per usare <code>[(ngModel)]</code> devi importare{" "}
                    <code>FormsModule</code> nel componente:
                  </p>
                  <pre
                    className="text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`imports: [FormsModule]`}
                  </pre>

                  <h6 className="mt-4">📌 Quando usare cosa?</h6>
                  <ul className="text-start text-light">
                    <li>
                      🖼️ <strong>Interpolation</strong> → per mostrare testo o
                      valori
                    </li>
                    <li>
                      🔧 <strong>Property Binding</strong> → per gestire
                      attributi HTML
                    </li>
                    <li>
                      🖱️ <strong>Event Binding</strong> → per reagire a click o
                      input
                    </li>
                    <li>
                      🔁 <strong>Two-way Binding</strong> → per sincronizzare
                      input e dati
                    </li>
                  </ul>

                  <p className="mt-3 text-center">
                    ✅ Angular ti dà flessibilità e controllo: puoi creare
                    interfacce dinamiche senza scrivere troppa logica manuale.
                  </p>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📄 Simulare una chiamata API con JSON
                  </Card.Title>
                  <p className="text-start">
                    Per testare componenti dinamici in Angular, puoi simulare
                    una chiamata API usando un file <code>.json</code> locale.
                    Ecco come fare passo passo:
                  </p>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`✅ 1. Crea un file JSON in /assets/

Esempio: /assets/cani.json

[
  {
    "nome": "Roger",
    "razza": "Pastore Tedesco",
    "colore": "Nero",
    "immagine": "https://esempio.com/roger.jpg"
  },
  {
    "nome": "Luna",
    "razza": "Golden Retriever",
    "colore": "Biondo",
    "immagine": "https://esempio.com/luna.jpg"
  }
]

✅ 2. Importa HttpClientModule nel componente

imports: [HttpClientModule, ImmagineComponent]

✅ 3. Carica i dati nel componente

cani: any[] = [];

constructor(private http: HttpClient) {}

ngOnInit() {
  this.http.get<any[]>('/assets/cani.json').subscribe(data => {
    this.cani = data;
  });
}

✅ 4. Usa *ngFor per ciclare le card

<app-immagine *ngFor="let cane of cani" [cane]="cane"></app-immagine>`}
                  </pre>
                  <p className="mt-3 text-center">
                    ✅ Questo ti permette di testare layout e logica come se
                    arrivassero da un backend.
                    <br />✅ Puoi modificare il file JSON per simulare diversi
                    scenari.
                    <br />✅ Utile per esercitarsi prima di collegarsi a vere
                    API.
                  </p>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧪 Le Pipeline (Pipe) in Angular
                  </Card.Title>

                  <p className="text-start">
                    Le <strong>pipe</strong> sono dei trasformatori magici 🪄:
                    prendono un valore e lo modificano direttamente nel
                    template, senza toccare il dato originale. Perfette per
                    formattare <em>date</em>, <em>numeri</em>,<em>stringhe</em>{" "}
                    e molto altro.
                  </p>

                  <h6 className="mt-4">🔹 Pipe già pronte (built-in)</h6>
                  <pre
                    className="text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`<!-- Formatta una data -->
<p>{{ oggi | date:'longDate' }}</p>

<!-- Mostra prezzo in euro -->
<p>{{ prezzo | currency:'EUR' }}</p>

<!-- Tutto maiuscolo -->
<p>{{ nome | uppercase }}</p>

<!-- Riduci decimali -->
<p>{{ valore | number:'1.2-2' }}</p>`}
                  </pre>

                  <p className="text-start">
                    ✅ Sintassi: <code>{"{{ valore | nomePipe }}"}</code>
                    <br />✅ Puoi concatenare più pipe:{" "}
                    <code>{"{{ valore | pipe1 | pipe2 }}"}</code>
                  </p>

                  <h6 className="mt-4">🔧 Pipe personalizzata – Titolo Case</h6>
                  <pre
                    className="text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`@Pipe({ name: 'titoloCase', standalone: true })
export class TitoloCasePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .toLowerCase()
      .split(' ')
      .map(parola => parola.charAt(0).toUpperCase() + parola.slice(1))
      .join(' ');
  }
}`}
                  </pre>

                  <p className="text-start">
                    ✅ Questa pipe trasforma{" "}
                    <code>"ciao stella marucelli"</code> in{" "}
                    <code>"Ciao Stella Marucelli"</code>. Utile per titoli,
                    nomi, etichette.
                  </p>

                  <h6 className="mt-4">📦 Come usarla in un componente</h6>
                  <pre
                    className="text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitoloCasePipe],
  template: \`
    <p>{{ 'ciao stella marucelli' | titoloCase }}</p>
  \`
})
export class HomeComponent {}`}
                  </pre>

                  <p className="text-start">
                    ✅ Se la pipe è <strong>standalone</strong>, va importata
                    nel componente dove la usi (come un qualsiasi componente).
                  </p>

                  <h6 className="mt-4">📌 Quando usare una pipe?</h6>
                  <ul className="text-start text-light">
                    <li>✅ Per formattare dati direttamente nel template</li>
                    <li>✅ Per evitare logica nel file .ts</li>
                    <li>
                      ✅ Per riutilizzare trasformazioni comuni (es. tagliare
                      testo, formattare nomi)
                    </li>
                  </ul>

                  <p className="mt-3 text-center">
                    🧠 Le pipe rendono il tuo HTML più leggibile e il tuo codice
                    più elegante. Usale con stile!
                  </p>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📄 Simulare una chiamata API con JSON
                  </Card.Title>

                  <p className="text-start">
                    Vuoi testare componenti dinamici in Angular senza collegarti
                    a un backend? Puoi simulare una chiamata API usando un file{" "}
                    <code>.json</code> locale. Ecco come fare passo passo:
                  </p>

                  <h6 className="mt-4">
                    🔧 1. Crea un file JSON in <code>/assets</code>
                  </h6>
                  <pre
                    className="text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`// /assets/cani.json
[
  {
    "nome": "Roger",
    "razza": "Pastore Tedesco",
    "colore": "Nero",
    "immagine": "https://esempio.com/roger.jpg"
  },
  {
    "nome": "Luna",
    "razza": "Golden Retriever",
    "colore": "Biondo",
    "immagine": "https://esempio.com/luna.jpg"
  }
]`}
                  </pre>

                  <h6 className="mt-4">
                    🔧 2. Importa <code>HttpClientModule</code>
                  </h6>
                  <p className="text-start">
                    Nel componente dove vuoi caricare i dati, aggiungi{" "}
                    <code>HttpClientModule</code> negli <code>imports</code>.
                  </p>

                  <h6 className="mt-4">🔧 3. Carica i dati nel componente</h6>
                  <pre
                    className="text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`// app.component.ts
cani: any[] = [];

constructor(private http: HttpClient) {}

ngOnInit() {
  this.http.get<any[]>('/assets/cani.json').subscribe(data => {
    this.cani = data;
  });
}`}
                  </pre>

                  <h6 className="mt-4">🔧 4. Mostra i dati nel template</h6>
                  <pre
                    className="text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`<!-- app.component.html -->
<app-immagine *ngFor="let cane of cani" [cane]="cane"></app-immagine>`}
                  </pre>

                  <h6 className="mt-4">📌 Cosa impari da questo esercizio?</h6>
                  <ul className="text-start text-light">
                    <li>✅ Come simulare un backend con file statici</li>
                    <li>
                      ✅ Come usare <code>HttpClient</code> per caricare dati
                    </li>
                    <li>
                      ✅ Come ciclare un array con <code>*ngFor</code>
                    </li>
                    <li>
                      ✅ Come passare dati a un componente figlio con{" "}
                      <code>@Input()</code>
                    </li>
                  </ul>

                  <p className="mt-3 text-center">
                    🧠 Questo approccio è perfetto per esercitarsi, creare demo,
                    o testare layout prima di collegarsi a vere API.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Angular
