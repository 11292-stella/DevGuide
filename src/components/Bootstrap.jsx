import { Col, Container, Row, Card, Table } from "react-bootstrap"

const Bootstrap = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <h1>Bootstrap: cose da ricordare</h1>
              <p>
                Bootstrap è una libreria CSS che ti permette di creare layout
                responsivi e componenti già pronti, senza scrivere tutto da
                zero. È come avere una cassetta degli attrezzi elegante e
                funzionale.
              </p>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧰 Bootstrap: cosa ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>📐 Sistema a griglia:</strong>
                      <br />
                      Usa <code>container</code>, <code>row</code> e{" "}
                      <code>col</code> per creare layout responsivi.
                    </li>
                    <li className="mt-3">
                      <strong>📱 Classi responsive:</strong>
                      <br />
                      <code>col-md-6</code>, <code>d-none d-lg-block</code>,{" "}
                      <code>order-sm-1</code> → si adattano ai breakpoint.
                    </li>
                    <li className="mt-3">
                      <strong>🧩 Componenti già pronti:</strong>
                      <br />
                      Bottoni, card, navbar, modali, alert… tutto stilizzato e
                      personalizzabile.
                    </li>
                    <li className="mt-3">
                      <strong>🎨 Utility classes:</strong>
                      <br />
                      <code>m-3</code>, <code>p-2</code>,{" "}
                      <code>text-center</code>, <code>bg-dark</code> → per
                      spaziature, colori, allineamenti.
                    </li>
                    <li className="mt-3">
                      <strong>⚡ Helpers:</strong>
                      <br />
                      <code>clearfix</code>, <code>visually-hidden</code>,{" "}
                      <code>shadow</code>, <code>rounded</code> → migliorano
                      accessibilità e stile.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧱 Griglia Bootstrap: come funziona</h2>

              <Table
                striped
                bordered
                hover
                responsive
                variant="dark"
                className="mt-4"
              >
                <thead>
                  <tr>
                    <th>Elemento</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>container</code>
                    </td>
                    <td>Contenitore principale, con padding orizzontale</td>
                    <td>
                      <code>&lt;Container&gt;...&lt;/Container&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>row</code>
                    </td>
                    <td>Riga che contiene le colonne</td>
                    <td>
                      <code>&lt;Row&gt;...&lt;/Row&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>col</code>
                    </td>
                    <td>Colonna che si adatta automaticamente</td>
                    <td>
                      <code>&lt;Col&gt;...&lt;/Col&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>col-*</code>
                    </td>
                    <td>Colonna con larghezza fissa (1–12)</td>
                    <td>
                      <code>col-6</code> → metà riga
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>col-md-*</code>
                    </td>
                    <td>
                      Colonna che cambia a partire da breakpoint <code>md</code>
                    </td>
                    <td>
                      <code>col-md-4</code> → 1/3 della riga su schermi medi
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>col-auto</code>
                    </td>
                    <td>Colonna che si adatta al contenuto</td>
                    <td>
                      <code>col-auto</code> → larghezza dinamica
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>g-*</code>
                    </td>
                    <td>Spaziatura tra colonne (gutters)</td>
                    <td>
                      <code>g-3</code> → spazio medio tra colonne
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">🧱Bootstrap Layout – Container, Row, Col</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📦 Bootstrap Layout – Struttura flessibile
                  </Card.Title>

                  <p className="text-start">
                    <strong>🔹 Container</strong>
                    <br />
                    <em>Contenitore principale, con padding orizzontale</em>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<Container>...</Container>`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔸 Row</strong>
                    <br />
                    <em>Riga che contiene le colonne</em>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<Row>...</Row>`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔺 Col</strong>
                    <br />
                    <em>Colonna che si adatta automaticamente</em>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<Col>...</Col>`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📐 col-*</strong>
                    <br />
                    <em>Colonna con larghezza fissa (1–12)</em>
                    <br />
                    <code>col-6</code> → metà riga
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<Col className="col-6">...</Col>`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📱 col-md-*</strong>
                    <br />
                    <em>Colonna che cambia a partire da breakpoint md</em>
                    <br />
                    <code>col-md-4</code> → 1/3 della riga su schermi medi
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<Col className="col-md-4">...</Col>`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📦 col-auto</strong>
                    <br />
                    <em>Colonna che si adatta al contenuto</em>
                    <br />
                    <code>col-auto</code> → larghezza dinamica
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<Col className="col-auto">Testo</Col>`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🧩 g-*</strong>
                    <br />
                    <em>Spaziatura tra colonne (gutters)</em>
                    <br />
                    <code>g-3</code> → spazio medio tra colonne
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<Row className="g-3">...</Row>`}
                  </pre>
                </Card.Body>
              </Card>
              <h2 className="mt-4">
                🧱 Layout Bootstrap – Esempi pratici da usare
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧰 Layout Bootstrap – Esempi pronti all’uso
                  </Card.Title>

                  {/* Layout centrato responsive */}
                  <p className="text-start mt-3">
                    <strong>📍 Layout centrato responsive</strong>
                    <br />
                    Contenuto centrato orizzontalmente e verticalmente.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
  <h1>Ciao Stella!</h1>
</Container>`}
                  </pre>

                  {/* Immagine con testo affiancato */}
                  <p className="text-start mt-4">
                    <strong>🖼️ Immagine con testo affiancato</strong>
                    <br />
                    Layout classico per presentazioni o profili.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<Row className="align-items-center">
  <Col md={4}>
    <img src="foto.jpg" alt="Profilo" className="img-fluid rounded" />
  </Col>
  <Col md={8}>
    <h2>Benvenuta!</h2>
    <p>Questo è il tuo spazio personale.</p>
  </Col>
</Row>`}
                  </pre>

                  {/* Griglia di card responsive */}
                  <p className="text-start mt-4">
                    <strong>🧱 Griglia di card responsive</strong>
                    <br />3 colonne su desktop, 2 su tablet, 1 su mobile.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<Row className="g-4">
  {[...Array(6)].map((_, i) => (
    <Col key={i} xs={12} sm={6} md={4} lg={3}>
      <Card className="bg-secondary text-light">
        <Card.Body>
          <Card.Title>Card {i + 1}</Card.Title>
          <Card.Text>Contenuto dinamico</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>`}
                  </pre>

                  {/* Bonus: Container fluido per layout full-width */}
                  <p className="text-start mt-4">
                    <strong>🌊 Container fluido</strong>
                    <br />
                    Occupa tutta la larghezza disponibile.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<Container fluid className="bg-dark text-light p-5">
  <h2>Layout full-width</h2>
</Container>`}
                  </pre>
                </Card.Body>
              </Card>

              <h2 className="mt-4">🧱 Bootstrap Grid – consigli pratici</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧱 Griglia Bootstrap: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>📦 Centrare una colonna:</strong>
                      <br />
                      Usa <code>mx-auto</code> su una <code>col-*</code> per
                      centrarla orizzontalmente.
                    </li>
                    <li className="mt-3">
                      <strong>📱 Layout responsive:</strong>
                      <br />
                      Usa <code>col-md-*</code>, <code>col-lg-*</code> per
                      cambiare larghezza in base allo schermo.
                    </li>
                    <li className="mt-3">
                      <strong>🔄 Colonne che si adattano:</strong>
                      <br />
                      <code>&lt;Col&gt;</code> senza numero → si divide lo
                      spazio in modo uniforme.
                    </li>
                    <li className="mt-3">
                      <strong>🎯 Colonna che segue il contenuto:</strong>
                      <br />
                      <code>col-auto</code> → la larghezza dipende dal
                      contenuto.
                    </li>
                    <li className="mt-3">
                      <strong>🧮 Spaziatura tra colonne:</strong>
                      <br />
                      Usa <code>g-*</code> su <code>Row</code> per gestire il
                      “gutter” (es. <code>g-4</code>).
                    </li>
                    <li className="mt-3">
                      <strong>🧲 Ordine personalizzato:</strong>
                      <br />
                      <code>order-md-1</code>, <code>order-lg-2</code> → cambia
                      l’ordine delle colonne nei breakpoint.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-4">
                🧱 Struttura base di un layout responsive
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📐 Layout Responsive – Struttura consigliata
                  </Card.Title>

                  {/* Contenitore principale */}
                  <p className="text-start mt-3">
                    <strong>📦 Contenitore principale</strong>
                    <br />
                    Crea una pagina alta almeno quanto lo schermo, con layout
                    verticale.
                    <br />
                    <code>min-vh-100</code> = altezza minima 100% viewport
                    <br />
                    <code>d-flex flex-column</code> = imposta il layout a
                    colonna
                  </p>

                  {/* Esempio completo */}
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`<div className="d-flex flex-column min-vh-100">
  {/* Header */}
  <header className="py-3 bg-dark text-light text-center">
    <h1>Logo</h1>
  </header>

  {/* Sezione centrale */}
  <Container className="flex-grow-1 py-5">
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <Card className="bg-secondary text-light">
          <Card.Body>
            <Card.Title>Benvenuta Stella!</Card.Title>
            <Card.Text>Contenuto centrale responsive</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>

  {/* Footer stabile */}
  <footer className="bg-dark text-light text-center py-3 mt-auto">
    <small>© 2025 Stella Dev</small>
  </footer>
</div>`}
                  </pre>

                  {/* Spiegazioni aggiuntive */}
                  <p className="text-start mt-4">
                    <strong>🧱 Sezione centrale</strong>
                    <br />
                    <code>flex-grow-1</code> → espande il contenuto
                    <br />
                    <code>py-5</code> → padding verticale (top + bottom)
                  </p>

                  <p className="text-start mt-3">
                    <strong>📐 Colonne responsive</strong>
                    <br />
                    <code>md=8</code> → su schermi medi (≥768px) occupa 8/12
                    <br />
                    <code>lg=6</code> → su schermi grandi (≥992px) occupa 6/12
                  </p>

                  <p className="text-start mt-3">
                    <strong>🧯 Footer stabile</strong>
                    <br />
                    Inserito <strong>fuori dal Container</strong>, ma{" "}
                    <strong>dentro il div principale</strong>
                    <br />
                    <code>mt-auto</code> → lo spinge in fondo anche con poco
                    contenuto
                  </p>
                </Card.Body>
              </Card>

              <h2 className="mt-5">
                🎨 Utility classes: stile veloce e flessibile
              </h2>

              <Table
                striped
                bordered
                hover
                responsive
                variant="dark"
                className="mt-4"
              >
                <thead>
                  <tr>
                    <th>Categoria</th>
                    <th>Classe</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Spaziatura</td>
                    <td>
                      <code>m-3</code>, <code>p-2</code>
                    </td>
                    <td>Margine e padding (0–5)</td>
                    <td>
                      <code>className="mt-4 mb-2 px-3"</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Testo</td>
                    <td>
                      <code>text-center</code>, <code>text-uppercase</code>
                    </td>
                    <td>Allineamento e trasformazione del testo</td>
                    <td>
                      <code>className="text-end text-lowercase"</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Colori</td>
                    <td>
                      <code>text-light</code>, <code>bg-dark</code>
                    </td>
                    <td>Colori di testo e sfondo</td>
                    <td>
                      <code>className="bg-primary text-white"</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Display</td>
                    <td>
                      <code>d-none</code>, <code>d-md-block</code>
                    </td>
                    <td>Mostra/nasconde elementi in base al breakpoint</td>
                    <td>
                      <code>className="d-none d-lg-block"</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Flexbox</td>
                    <td>
                      <code>d-flex</code>, <code>justify-content-center</code>
                    </td>
                    <td>Layout flessibile e allineamenti</td>
                    <td>
                      <code>className="d-flex align-items-center"</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Bordi & ombre</td>
                    <td>
                      <code>border</code>, <code>rounded</code>,{" "}
                      <code>shadow</code>
                    </td>
                    <td>Stile visivo degli elementi</td>
                    <td>
                      <code>className="border rounded shadow-sm"</code>
                    </td>
                  </tr>
                  <tr>
                    <td>Visibilità</td>
                    <td>
                      <code>visually-hidden</code>
                    </td>
                    <td>
                      Nasconde l’elemento agli occhi ma non agli screen reader
                    </td>
                    <td>
                      <code>className="visually-hidden"</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🎨 Utility Bootstrap: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>📏 Spaziatura rapida:</strong>
                      <br />
                      Usa <code>m-*</code> per margini e <code>p-*</code> per
                      padding (da 0 a 5).
                      <br />→ <code>mt-4</code> = margine top
                      <br />→ <code>px-3</code> = padding orizzontale
                    </li>

                    <li className="mt-3">
                      <strong>📐 Allineamento testo:</strong>
                      <br />
                      <code>text-center</code>, <code>text-start</code>,{" "}
                      <code>text-end</code> → per allineare il contenuto
                    </li>

                    <li className="mt-3">
                      <strong>🎨 Colori rapidi:</strong>
                      <br />
                      <code>bg-primary</code>, <code>text-light</code>,{" "}
                      <code>bg-dark</code> → per sfondo e testo
                    </li>

                    <li className="mt-3">
                      <strong>🧲 Layout flessibile:</strong>
                      <br />
                      <code>d-flex</code> + <code>justify-content-*</code> +{" "}
                      <code>align-items-*</code> → per gestire il posizionamento
                    </li>

                    <li className="mt-3">
                      <strong>📱 Visibilità responsive:</strong>
                      <br />
                      <code>d-none d-md-block</code> → nasconde su mobile,
                      mostra su desktop
                      <br />→ utile per menu, immagini, colonne
                    </li>

                    <li className="mt-3">
                      <strong>🧯 Accessibilità & stile:</strong>
                      <br />
                      <code>visually-hidden</code> = contenuto solo per screen
                      reader
                      <br />→ <code>shadow</code>, <code>rounded</code>,{" "}
                      <code>border</code> = stile visivo immediato
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧩 Componenti Bootstrap: pronti all’uso</h2>

              <Table
                striped
                bordered
                hover
                responsive
                variant="dark"
                className="mt-4"
              >
                <thead>
                  <tr>
                    <th>Componente</th>
                    <th>Descrizione</th>
                    <th>Uso base</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>&lt;Card&gt;</code>
                    </td>
                    <td>Contenitore elegante con titolo, testo e immagine</td>
                    <td>
                      <code>&lt;Card.Body&gt;...&lt;/Card.Body&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Button&gt;</code>
                    </td>
                    <td>Bottone stilizzato con varianti</td>
                    <td>
                      <code>
                        &lt;Button variant="primary"&gt;Click&lt;/Button&gt;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Navbar&gt;</code>
                    </td>
                    <td>Barra di navigazione responsive</td>
                    <td>
                      <code>&lt;Navbar expand="lg"&gt;...&lt;/Navbar&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Modal&gt;</code>
                    </td>
                    <td>Finestra pop-up per contenuti extra</td>
                    <td>
                      <code>&lt;Modal show={true}&gt;...&lt;/Modal&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Form&gt;</code>
                    </td>
                    <td>Campi di input, checkbox, select, ecc.</td>
                    <td>
                      <code>&lt;Form.Control type="text" /&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Alert&gt;</code>
                    </td>
                    <td>Messaggio evidenziato per notifiche</td>
                    <td>
                      <code>
                        &lt;Alert variant="danger"&gt;Errore!&lt;/Alert&gt;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Accordion&gt;</code>
                    </td>
                    <td>Sezioni espandibili per contenuti nascosti</td>
                    <td>
                      <code>
                        &lt;Accordion.Item
                        eventKey="0"&gt;...&lt;/Accordion.Item&gt;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Spinner&gt;</code>
                    </td>
                    <td>Indicatore di caricamento</td>
                    <td>
                      <code>&lt;Spinner animation="border" /&gt;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧩 Componenti Bootstrap: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>🎴 Card:</strong>
                      <br />
                      Usa <code>&lt;Card.Body&gt;</code> per contenuto interno,{" "}
                      <code>Card.Title</code> per il titolo, e{" "}
                      <code>Card.Text</code> per il testo.
                      <br />→ Puoi aggiungere <code>bg="dark"</code>,{" "}
                      <code>text="light"</code> per stile rapido.
                    </li>

                    <li className="mt-3">
                      <strong>🔘 Button:</strong>
                      <br />
                      <code>variant="primary"</code>, <code>outline</code>,{" "}
                      <code>size="sm"</code> → per stile e dimensione.
                      <br />→ Puoi usare <code>onClick</code> per gestire
                      eventi.
                    </li>

                    <li className="mt-3">
                      <strong>📍 Navbar:</strong>
                      <br />
                      Usa <code>expand="lg"</code> per renderla responsive.
                      <br />→ Aggiungi <code>bg="dark"</code> e{" "}
                      <code>variant="dark"</code> per stile scuro.
                    </li>

                    <li className="mt-3">
                      <strong>🪟 Modal:</strong>
                      <br />
                      Controlla visibilità con <code>show</code> e{" "}
                      <code>onHide</code>.
                      <br />→ Puoi inserire qualsiasi contenuto dentro{" "}
                      <code>Modal.Body</code>.
                    </li>

                    <li className="mt-3">
                      <strong>📝 Form:</strong>
                      <br />
                      Usa <code>Form.Group</code> per ogni campo,{" "}
                      <code>Form.Control</code> per input.
                      <br />→ Puoi gestire lo stato con <code>useState</code> in
                      React.
                    </li>

                    <li className="mt-3">
                      <strong>🚨 Alert:</strong>
                      <br />
                      Mostra messaggi con <code>variant="success"</code>,{" "}
                      <code>danger</code>, ecc.
                      <br />→ Puoi renderlo chiudibile con{" "}
                      <code>dismissible</code>.
                    </li>

                    <li className="mt-3">
                      <strong>📂 Accordion:</strong>
                      <br />
                      Perfetto per contenuti nascosti.
                      <br />→ Ogni <code>Accordion.Item</code> ha un{" "}
                      <code>eventKey</code> unico.
                    </li>

                    <li className="mt-3">
                      <strong>⏳ Spinner:</strong>
                      <br />
                      Usa <code>animation="border"</code> o <code>grow</code>{" "}
                      per stile.
                      <br />→ Utile per indicare caricamenti.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                📐 Breakpoint Bootstrap: adattabilità su ogni schermo
              </h2>

              <Table
                striped
                bordered
                hover
                responsive
                variant="dark"
                className="mt-4"
              >
                <thead>
                  <tr>
                    <th>Breakpoint</th>
                    <th>Dimensione minima</th>
                    <th>Uso comune</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>sm</code>
                    </td>
                    <td>≥ 576px</td>
                    <td>Smartphone in orizzontale</td>
                    <td>
                      <code>col-sm-6</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>md</code>
                    </td>
                    <td>≥ 768px</td>
                    <td>Tablet</td>
                    <td>
                      <code>col-md-4</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>lg</code>
                    </td>
                    <td>≥ 992px</td>
                    <td>Laptop</td>
                    <td>
                      <code>col-lg-3</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>xl</code>
                    </td>
                    <td>≥ 1200px</td>
                    <td>Desktop grande</td>
                    <td>
                      <code>col-xl-2</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>xxl</code>
                    </td>
                    <td>≥ 1400px</td>
                    <td>Monitor ultra-wide</td>
                    <td>
                      <code>col-xxl-1</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>d-*</code>
                    </td>
                    <td>Controlla visibilità</td>
                    <td>Mostra/nasconde elementi</td>
                    <td>
                      <code>d-none d-md-block</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>order-*</code>
                    </td>
                    <td>Ordina le colonne</td>
                    <td>Personalizza la sequenza</td>
                    <td>
                      <code>order-lg-1</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-4">📱 Responsive design – consigli pratici</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📱 Breakpoint Bootstrap: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        📐 Usa i breakpoint per adattare il layout:
                      </strong>
                      <br />
                      <code>col-md-6</code> = metà riga su tablet e oltre
                      <br />→ Prima di <code>md</code>, l’elemento occupa tutta
                      la riga
                    </li>

                    <li className="mt-3">
                      <strong>🧲 Controlla la visibilità:</strong>
                      <br />
                      <code>d-none d-lg-block</code> = nasconde su mobile,
                      mostra su desktop
                      <br />→ Utile per menu, immagini, sidebar
                    </li>

                    <li className="mt-3">
                      <strong>🔀 Cambia l’ordine delle colonne:</strong>
                      <br />
                      <code>order-md-2</code>, <code>order-lg-1</code> →
                      perfetto per layout mobile-first
                    </li>

                    <li className="mt-3">
                      <strong>
                        📦 Usa <code>container-fluid</code> per layout a tutta
                        larghezza:
                      </strong>
                      <br />
                      Ideale per sezioni che devono occupare tutto lo schermo
                    </li>

                    <li className="mt-3">
                      <strong>🎯 Ricorda: mobile-first!</strong>
                      <br />
                      Bootstrap applica le classi a partire dal breakpoint
                      indicato → tutto ciò che non ha breakpoint vale per mobile
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">📝 Form e validazione in Bootstrap</h2>

              <Table
                striped
                bordered
                hover
                responsive
                variant="dark"
                className="mt-4"
              >
                <thead>
                  <tr>
                    <th>Elemento</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>&lt;Form&gt;</code>
                    </td>
                    <td>Contenitore del modulo</td>
                    <td>
                      <code>&lt;Form&gt;...&lt;/Form&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Form.Group&gt;</code>
                    </td>
                    <td>Gruppo di input con label</td>
                    <td>
                      <code>&lt;Form.Group controlId="email"&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Form.Control&gt;</code>
                    </td>
                    <td>Campo di input (text, email, password…)</td>
                    <td>
                      <code>&lt;Form.Control type="text" /&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Form.Check&gt;</code>
                    </td>
                    <td>Checkbox o radio button</td>
                    <td>
                      <code>&lt;Form.Check type="checkbox" /&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>isValid / isInvalid</code>
                    </td>
                    <td>Stato visivo del campo (verde/rosso)</td>
                    <td>
                      <code>&lt;Form.Control isInvalid /&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Form.Text&gt;</code>
                    </td>
                    <td>Testo di aiuto sotto il campo</td>
                    <td>
                      <code>
                        &lt;Form.Text muted&gt;Non condividiamo la tua
                        email&lt;/Form.Text&gt;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&lt;Form.Label&gt;</code>
                    </td>
                    <td>Etichetta del campo</td>
                    <td>
                      <code>&lt;Form.Label&gt;Email&lt;/Form.Label&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>feedback</code>
                    </td>
                    <td>Messaggio di errore o conferma</td>
                    <td>
                      <code>
                        &lt;Form.Control.Feedback type="invalid"&gt;Campo
                        obbligatorio&lt;/Form.Control.Feedback&gt;
                      </code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-4">🧪 Form & Validazione – consigli pratici</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧪 Form Bootstrap: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>🧱 Struttura base:</strong>
                      <br />
                      Usa <code>&lt;Form.Group&gt;</code> per ogni campo, con{" "}
                      <code>Form.Label</code> e <code>Form.Control</code>{" "}
                      dentro.
                    </li>

                    <li className="mt-3">
                      <strong>✅ Validazione visiva:</strong>
                      <br />
                      <code>isValid</code> = bordo verde, <code>isInvalid</code>{" "}
                      = bordo rosso
                      <br />→ Aggiungi <code>Form.Control.Feedback</code> per
                      messaggi personalizzati
                    </li>

                    <li className="mt-3">
                      <strong>📣 Feedback chiaro:</strong>
                      <br />
                      Usa <code>type="invalid"</code> o{" "}
                      <code>type="valid"</code> per mostrare messaggi sotto il
                      campo
                    </li>

                    <li className="mt-3">
                      <strong>🔒 Accessibilità:</strong>
                      <br />
                      Usa <code>controlId</code> per collegare label e input
                      <br />→ Migliora la navigazione con screen reader
                    </li>

                    <li className="mt-3">
                      <strong>🧠 Gestione stato in React:</strong>
                      <br />
                      Usa <code>useState</code> per controllare il valore e la
                      validazione dei campi
                      <br />→ Puoi mostrare <code>isInvalid</code> solo se il
                      campo è vuoto o errato
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🧱 Layout alternativi: griglie dinamiche e flessibili
              </h2>

              <Table
                striped
                bordered
                hover
                responsive
                variant="dark"
                className="mt-4"
              >
                <thead>
                  <tr>
                    <th>Classe / Componente</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>container-fluid</code>
                    </td>
                    <td>Contenitore a tutta larghezza</td>
                    <td>
                      <code>&lt;Container fluid&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>row-cols-*</code>
                    </td>
                    <td>Numero automatico di colonne per riga</td>
                    <td>
                      <code>row row-cols-2</code> → 2 colonne per riga
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>row-cols-md-*</code>
                    </td>
                    <td>Numero di colonne a partire da breakpoint</td>
                    <td>
                      <code>row row-cols-md-3</code> → 3 colonne su tablet
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>g-*</code>
                    </td>
                    <td>Spaziatura tra colonne (gutters)</td>
                    <td>
                      <code>g-4</code> → spazio medio
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>col-auto</code>
                    </td>
                    <td>Colonna che si adatta al contenuto</td>
                    <td>
                      <code>&lt;Col auto&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>row-cols-auto</code>
                    </td>
                    <td>Numero di colonne basato sul contenuto</td>
                    <td>
                      <code>row row-cols-auto</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>row-cols-lg-*</code>
                    </td>
                    <td>Layout responsive su schermi grandi</td>
                    <td>
                      <code>row row-cols-lg-4</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-4">🧩 Layout alternativi – consigli pratici</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧩 Layout dinamici: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        📦 Usa <code>container-fluid</code> per sezioni a tutta
                        larghezza:
                      </strong>
                      <br />
                      Perfetto per header, gallery, footer o hero section.
                    </li>

                    <li className="mt-3">
                      <strong>
                        🔢 <code>row-cols-*</code> semplifica la griglia:
                      </strong>
                      <br />
                      Non serve specificare ogni <code>col-*</code>, Bootstrap
                      calcola tutto.
                    </li>

                    <li className="mt-3">
                      <strong>📱 Layout responsive automatico:</strong>
                      <br />
                      <code>row-cols-md-3</code> → 3 colonne su tablet e oltre
                      <br />→ Si adatta senza media query
                    </li>

                    <li className="mt-3">
                      <strong>🧲 Colonne che si adattano al contenuto:</strong>
                      <br />
                      Usa <code>col-auto</code> per bottoni, icone o elementi
                      piccoli
                    </li>

                    <li className="mt-3">
                      <strong>🎯 Spaziatura tra colonne:</strong>
                      <br />
                      <code>g-3</code>, <code>g-4</code> → controlla il “gutter”
                      senza usare padding o margin
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🎬 Animazioni e transizioni Bootstrap</h2>

              <Table
                striped
                bordered
                hover
                responsive
                variant="dark"
                className="mt-4"
              >
                <thead>
                  <tr>
                    <th>Classe / Componente</th>
                    <th>Effetto</th>
                    <th>Uso comune</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>fade</code>
                    </td>
                    <td>Transizione di opacità (fade-in / fade-out)</td>
                    <td>
                      <code>&lt;Modal className="fade"&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>show</code>
                    </td>
                    <td>
                      Stato visibile (usato con <code>fade</code> o{" "}
                      <code>collapse</code>)
                    </td>
                    <td>
                      <code>&lt;Alert className="fade show"&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>collapse</code>
                    </td>
                    <td>
                      Nasconde o mostra contenuto con transizione verticale
                    </td>
                    <td>
                      <code>&lt;Accordion className="collapse"&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>transition</code> (CSS)
                    </td>
                    <td>Transizione fluida tra stati</td>
                    <td>
                      <code>
                        style=&#123;{`transition: "all 0.3s ease"`}&#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>animation</code> (custom)
                    </td>
                    <td>
                      Animazioni personalizzate con <code>@keyframes</code>
                    </td>
                    <td>
                      <code>className="animate-bounce"</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>modal-backdrop fade show</code>
                    </td>
                    <td>Effetto sfondo modale</td>
                    <td>
                      <em>Generato automaticamente da Bootstrap</em>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-4">
                🎞️ Animazioni Bootstrap – consigli pratici
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🎞️ Animazioni e transizioni: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        🎬 <code>fade</code> + <code>show</code>:
                      </strong>
                      <br />
                      Usati insieme per creare un effetto di apparizione
                      graduale
                      <br />→ <code>fade</code> = transizione, <code>show</code>{" "}
                      = visibilità
                    </li>

                    <li className="mt-3">
                      <strong>
                        📦 <code>collapse</code>:
                      </strong>
                      <br />
                      Perfetto per contenuti nascosti che si espandono (es.
                      accordion, sidebar)
                      <br />→ Bootstrap gestisce l’altezza in automatico
                    </li>

                    <li className="mt-3">
                      <strong>
                        🧠 Usa <code>transition</code> per effetti
                        personalizzati:
                      </strong>
                      <br />
                      Puoi aggiungere{" "}
                      <code>
                        style=&#123;&#123; transition: "all 0.3s ease"
                        &#125;&#125;
                      </code>{" "}
                      a qualsiasi elemento
                    </li>

                    <li className="mt-3">
                      <strong>🪄 Vuoi animazioni più avanzate?</strong>
                      <br />
                      Puoi usare <code>@keyframes</code> in CSS e abbinarli a
                      classi custom
                      <br />→ Es. <code>.animate-bounce</code>,{" "}
                      <code>.fade-in</code>
                    </li>

                    <li className="mt-3">
                      <strong>🧯 Ricorda:</strong>
                      <br />
                      Le animazioni Bootstrap sono{" "}
                      <strong>transizioni visive</strong>, non gestiscono lo
                      stato.
                      <br />→ Usa React per controllare <code>show</code>,{" "}
                      <code>collapse</code>, ecc.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧿 Bootstrap Icons: leggere e versatili</h2>

              <Table
                striped
                bordered
                hover
                responsive
                variant="dark"
                className="mt-4"
              >
                <thead>
                  <tr>
                    <th>Icona</th>
                    <th>Classe</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>❤️</td>
                    <td>
                      <code>bi bi-heart</code>
                    </td>
                    <td>Icona cuore</td>
                    <td>
                      <code>&lt;i className="bi bi-heart"&gt;&lt;/i&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>🔍</td>
                    <td>
                      <code>bi bi-search</code>
                    </td>
                    <td>Icona lente d’ingrandimento</td>
                    <td>
                      <code>&lt;i className="bi bi-search"&gt;&lt;/i&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>📁</td>
                    <td>
                      <code>bi bi-folder</code>
                    </td>
                    <td>Icona cartella</td>
                    <td>
                      <code>&lt;i className="bi bi-folder"&gt;&lt;/i&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>✏️</td>
                    <td>
                      <code>bi bi-pencil</code>
                    </td>
                    <td>Icona modifica</td>
                    <td>
                      <code>&lt;i className="bi bi-pencil"&gt;&lt;/i&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>🗑️</td>
                    <td>
                      <code>bi bi-trash</code>
                    </td>
                    <td>Icona cestino</td>
                    <td>
                      <code>&lt;i className="bi bi-trash"&gt;&lt;/i&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>⚙️</td>
                    <td>
                      <code>bi bi-gear</code>
                    </td>
                    <td>Icona impostazioni</td>
                    <td>
                      <code>&lt;i className="bi bi-gear"&gt;&lt;/i&gt;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧿 Bootstrap Icons: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>📦 Come usarle:</strong>
                      <br />
                      Aggiungi l’icona con{" "}
                      <code>
                        &lt;i className="bi bi-nome-icon"&gt;&lt;/i&gt;
                      </code>
                      → Le icone sono vettoriali, leggere e scalabili
                    </li>

                    <li className="mt-3">
                      <strong>🎨 Personalizzazione:</strong>
                      <br />
                      Puoi stilizzarle con <code>text-danger</code>,{" "}
                      <code>fs-4</code>, <code>me-2</code>→ Es.{" "}
                      <code>className="bi bi-trash text-danger fs-5"</code>
                    </li>

                    <li className="mt-3">
                      <strong>📥 Come includerle:</strong>
                      <br />
                      Assicurati di aver importato Bootstrap Icons nel tuo
                      progetto → Puoi usare CDN: <br />
                      <code>
                        &lt;link
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
                        rel="stylesheet"&gt;
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>🔍 Trova l’icona giusta:</strong>
                      <br />
                      Vai su{" "}
                      <a
                        href="https://icons.getbootstrap.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        icons.getbootstrap.com
                      </a>
                      → Cerca per nome o categoria
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

export default Bootstrap
