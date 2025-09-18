import { Col, Container, Row, Card, Table } from "react-bootstrap"

const Angular = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <h1>🧩Creazione progetto Angular</h1>
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
                  <p className="mt-3 text-center">
                    ✅ Progetto con componenti <strong>standalone</strong>,{" "}
                    <strong>routing</strong> attivo e <strong>CSS</strong>{" "}
                    semplice.
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
                    {`ng add @angular/material
mkdir src/styles
copy node_modules/@angular/material/prebuilt-themes/indigo-pink.css src/styles/material-theme.css`}
                  </pre>
                  <p className="mt-3 text-center">
                    ✅ Aggiorna <code>angular.json</code>:
                  </p>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`"styles": [
  "src/styles/material-theme.css",
  "src/styles.css"
]`}
                  </pre>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🚀 STEP 3 – Disattiva hydration
                  </Card.Title>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`import { bootstrapApplication } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [...appConfig.providers, provideClientHydration()]
}).catch(err => console.error(err));`}
                  </pre>
                  <p className="mt-3 text-center">
                    ✅ Evita errori strani legati al rendering lato client.
                  </p>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧩 STEP 4 – Crea i componenti base
                  </Card.Title>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`// AppComponent
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: \`<app-navbar></app-navbar><router-outlet></router-outlet>\`
})
export class AppComponent {}

// app.config.ts
export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'slider', component: SliderComponent }
    ])
  ]
};

// NavbarComponent
@Component({
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
export class NavbarComponent {}

// HomeComponent
@Component({
  selector: 'app-home',
  standalone: true,
  template: \`<h2>Ciao Stella 👋</h2><p>Questa è la tua Home.</p>\`
})
export class HomeComponent {}`}
                  </pre>
                  <p className="mt-3 text-center">
                    ✅ Layout modulare con routing, navbar e pagina iniziale.
                  </p>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🎨 Dove modificare per personalizzare l’app
                  </Card.Title>
                  <ul className="text-start text-light">
                    <li>
                      <strong>Contenuto della Home:</strong>{" "}
                      <code>home.component.ts</code>
                    </li>
                    <li>
                      <strong>Stili della Home:</strong>{" "}
                      <code>home.component.css</code>
                    </li>
                    <li>
                      <strong>Navigazione:</strong>{" "}
                      <code>navbar.component.ts</code>
                    </li>
                    <li>
                      <strong>Nuove pagine:</strong> crea componenti e
                      aggiungili in <code>app.config.ts</code>
                    </li>
                    <li>
                      <strong>Layout generale:</strong>{" "}
                      <code>app.component.ts</code>
                    </li>
                    <li>
                      <strong>Tema Material:</strong>{" "}
                      <code>material-theme.css</code>
                    </li>
                    <li>
                      <strong>Stili globali:</strong> <code>styles.css</code>
                    </li>
                  </ul>
                  <p className="mt-3 text-center">
                    ✅ Tutto è modificabile e riusabile per progetti futuri.
                  </p>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧠 Vuoi aggiungere una nuova pagina?
                  </Card.Title>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`// about.component.ts
@Component({
  selector: 'app-about',
  standalone: true,
  template: \`<h2>About</h2><p>Questa è la pagina About.</p>\`
})
export class AboutComponent {}

// app.config.ts
{ path: 'about', component: AboutComponent }

// navbar.component.ts
<a routerLink="/about">About</a>`}
                  </pre>
                  <p className="mt-3 text-center">
                    💥 Boom! Nuova pagina attiva e navigabile.
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
                    🧩 Cosa aggiungere per ogni componente Angular
                  </Card.Title>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`✅ 1. Crea il componente
ng generate component nome-componente --standalone

✅ 2. Importa il componente dove lo usi
Nel file .ts del componente padre:
imports: [NomeComponente]

✅ 3. Inseriscilo nel template (solo se vuoi mostrarlo direttamente)
template: \`<app-nome-componente></app-nome-componente>\`

✅ 4. Oppure aggiungilo al routing (se è una pagina)
Nel app.config.ts:
{ path: 'nome', component: NomeComponente }

✅ 5. Aggiungi il link nella navbar (se serve)
<a routerLink="/nome">Vai a Nome</a>`}
                  </pre>
                  <p className="mt-3 text-center">
                    ✅ <strong>Usa il template</strong> se vuoi che il
                    componente sia sempre visibile.
                    <br />✅ <strong>Usa il routing</strong> se vuoi che appaia
                    solo quando l’utente visita una pagina specifica.
                  </p>
                </Card.Body>
              </Card>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📦 Quando importare un componente Angular
                  </Card.Title>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`✅ Se usi il componente nel template → devi importarlo

Esempio:
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImmagineComponent], // ✅ lo importi qui
  template: \`
    <h2>Ciao Stella 👋</h2>
    <app-immagine></app-immagine> <!-- ✅ lo usi nel template -->
  \`
})
export class HomeComponent {}

❌ Se usi il componente via routing → NON serve importarlo

Esempio:
app.config.ts
{ path: 'immagine', component: ImmagineComponent } // ✅ routing automatico`}
                  </pre>
                  <p className="mt-3 text-center">
                    ✅ <strong>Importa</strong> solo i componenti che usi
                    direttamente nel <code>template:</code>
                    <br />✅ I componenti usati via <code>
                      provideRouter()
                    </code>{" "}
                    vengono gestiti da Angular in automatico.
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
                    Il <strong>data binding</strong> è il modo in cui colleghi i
                    dati del componente alla view. Angular offre 4 modalità
                    principali:
                  </p>
                  <pre
                    className="text-light bg-black p-3 rounded mt-3"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`1️⃣ Interpolation
Mostra un valore nella view
Sintassi: {{ titolo }}

2️⃣ Property Binding
Imposta una proprietà HTML dinamicamente
Sintassi: [src]="immagineUrl"

3️⃣ Event Binding
Ascolta eventi DOM (click, input, ecc.)
Sintassi: (click)="saluta()"

4️⃣ Two-way Binding
Collega input ↔ variabile
Sintassi: [(ngModel)]="nome"
⚠️ Richiede FormsModule negli imports`}
                  </pre>
                  <p className="mt-3 text-center">
                    ✅ Usa il binding giusto per ogni situazione: visualizzare,
                    reagire, aggiornare o sincronizzare.
                    <br />✅ Angular ti dà flessibilità e controllo, senza dover
                    scrivere troppa logica.
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
                    📄 Simulare una chiamata API con JSON
                  </Card.Title>
                  <p className="text-start">
                    In Angular, puoi simulare una chiamata API usando un file{" "}
                    <code>.json</code> locale. Questo è utile per testare
                    componenti dinamici prima di collegarti a un backend reale.
                    Ecco cosa ti serve e perché:
                  </p>

                  <h6 className="mt-3">
                    🔧 1. <code>HttpClientModule</code>
                  </h6>
                  <p className="text-start">
                    È il modulo che abilita le richieste HTTP in Angular. Serve
                    per usare <code>HttpClient</code>, il servizio che ti
                    permette di caricare dati da file JSON o API esterne.
                  </p>

                  <h6 className="mt-3">
                    🔧 2. <code>HttpClient</code>
                  </h6>
                  <p className="text-start">
                    È il servizio che effettua la richiesta. Lo inietti nel
                    costruttore del componente per poterlo usare. È come dire:
                    “voglio avere accesso alla rete”.
                  </p>

                  <h6 className="mt-3">
                    🔧 3. <code>any[]</code>
                  </h6>
                  <p className="text-start">
                    È il tipo della variabile che conterrà i dati.{" "}
                    <code>any[]</code> significa “array di qualsiasi tipo”. Puoi
                    poi tipizzarlo meglio se vuoi, ma per iniziare va benissimo.
                  </p>

                  <h6 className="mt-3">
                    🔧 4. <code>ngOnInit()</code>
                  </h6>
                  <p className="text-start">
                    È il metodo che Angular chiama quando il componente è
                    pronto. Qui dentro metti la logica per caricare i dati. È il
                    posto giusto per inizializzazioni.
                  </p>

                  <h6 className="mt-3">
                    🔧 5. <code>*ngFor</code>
                  </h6>
                  <p className="text-start">
                    È una direttiva Angular che ti permette di ciclare un array
                    nel template. Serve per creare una card per ogni elemento
                    del JSON.
                  </p>

                  <h6 className="mt-4">📦 Esempio completo</h6>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`// app.component.ts

cani: any[] = [];

constructor(private http: HttpClient) {}

ngOnInit() {
  this.http.get<any[]>('/assets/cani.json').subscribe(data => {
    this.cani = data;
  });
}

// nel template
<app-immagine *ngFor="let cane of cani" [cane]="cane"></app-immagine>`}
                  </pre>

                  <p className="mt-3 text-center">
                    ✅ Questo approccio ti permette di testare il flusso dei
                    dati come se arrivassero da un backend.
                    <br />✅ Puoi usare file diversi per simulare scenari reali.
                    <br />✅ È perfetto per esercitarsi con{" "}
                    <code>@Input()</code>, <code>*ngFor</code> e{" "}
                    <code>HttpClient</code>.
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
