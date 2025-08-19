import { Col, Container, Row, Card, Table } from "react-bootstrap"
import "../styles/css.css"

const Css = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <h1>CSS: cose da ricordare</h1>
              <p>
                Per usare il foglio CSS è importante ricordarsi di importarlo
                prima! <br />
                Dopodiché, grazie ai vari selettori, possiamo iniziare a dare
                vita alla nostra pagina.
              </p>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🎯 Selettori CSS
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <code>.nome</code> — selettore di classe, può essere
                      riutilizzato
                    </li>
                    <li>
                      <code>#nome</code> — selettore ID, deve essere unico nella
                      pagina
                    </li>
                    <li>
                      <code>style="..."</code> — stile inline, ha priorità più
                      alta ma è meno consigliato
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🎨 Proprietà utili con i selettori
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>background-color:</strong> cambia il colore dello
                      sfondo
                    </li>
                    <li>
                      <strong>color:</strong> cambia il colore del testo
                    </li>
                    <li>
                      <strong>font-size:</strong> imposta la dimensione del
                      testo
                    </li>
                    <li>
                      <strong>padding / margin:</strong> gestisce lo spazio
                      interno ed esterno
                    </li>
                    <li>
                      <strong>border: 2px solid </strong> aggiunge bordi agli
                      elementi
                    </li>
                    <li>
                      <strong>text-align:</strong> allinea il testo (es.{" "}
                      <code>center</code>, <code>left</code>)
                    </li>
                    <li>
                      <strong>display:</strong> cambia il comportamento
                      dell’elemento (es. <code>block</code>, <code>flex</code>)
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🎨 Background – proprietà da ricordare</h2>

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
                    <th>Proprietà</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>background-color</td>
                    <td>Colore di sfondo</td>
                    <td>
                      <code>background-color: #f0f0f0;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>background-image</td>
                    <td>Inserisce un'immagine</td>
                    <td>
                      <code>background-image: url('img.jpg');</code>
                    </td>
                  </tr>
                  <tr>
                    <td>background-size</td>
                    <td>Dimensione immagine</td>
                    <td>
                      <code>background-size: cover;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>background-repeat</td>
                    <td>Ripetizione immagine</td>
                    <td>
                      <code>background-repeat: no-repeat;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>background-position</td>
                    <td>Posizione immagine</td>
                    <td>
                      <code>background-position: center top;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>background-attachment</td>
                    <td>Fissa lo sfondo</td>
                    <td>
                      <code>background-attachment: fixed;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>image-rendering</td>
                    <td>Qualità immagine</td>
                    <td>
                      <code>image-rendering: crisp-edges;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <h2 className="mt-4">🌈 Colori e effetti visivi</h2>

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
                    <th>Proprietà</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>color</td>
                    <td>Colore del testo</td>
                    <td>
                      <code>color: #333;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>background-color</td>
                    <td>Sfondo dell’elemento</td>
                    <td>
                      <code>background-color: #fff;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>background: linear-gradient()</td>
                    <td>Sfondo sfumato</td>
                    <td>
                      <code>
                        background: linear-gradient(to right, #ff0000, #000);
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>background-blend-mode</td>
                    <td>Fusione tra immagine e colore</td>
                    <td>
                      <code>background-blend-mode: multiply;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>opacity</td>
                    <td>Trasparenza</td>
                    <td>
                      <code>opacity: 0.5;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>filter</td>
                    <td>Effetti visivi</td>
                    <td>
                      <code>filter: brightness(0.8) contrast(1.2);</code>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <h2 className="mt-4"> ✍️ Font-size e font </h2>
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
                    <th>Proprietà</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>font-size:</td>
                    <td>dimensione testo</td>
                    <td>
                      <code>font-size: larger;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>font-style:</td>
                    <td>stile di scrittura</td>
                    <td>
                      <code>font-style: oblique;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>font-family:</td>
                    <td>font utilizzato</td>
                    <td>
                      <code>font-family: "Fraunces", serif;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>font-weight</td>
                    <td>Spessore del testo</td>
                    <td>
                      <code>font-weight: 700;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>line-height</td>
                    <td>Altezza della linea</td>
                    <td>
                      <code>line-height: 1.5;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>letter-spacing</td>
                    <td>Spaziatura tra lettere</td>
                    <td>
                      <code>letter-spacing: 0.05em;</code>
                    </td>
                  </tr>

                  <tr>
                    <td>text-transform</td>
                    <td>Trasformazione del testo</td>
                    <td>
                      <code>text-transform: uppercase;</code>
                    </td>
                  </tr>

                  <tr>
                    <td>text-decoration</td>
                    <td>Decorazioni (sottolineature, ecc.)</td>
                    <td>
                      <code>text-decoration: none;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <h2 className="mt-4">🧠 Font: cose utili da ricordare </h2>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔤 Font-size: unità di misura
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>px</strong> → unità fissa (es.{" "}
                      <code>font-size: 16px;</code>)
                    </li>
                    <li>
                      <strong>em</strong> → relativa al font del genitore (es.{" "}
                      <code>font-size: 1.2em;</code>)
                    </li>
                    <li>
                      <strong>rem</strong> → relativa al font root (
                      <code>&lt;html&gt;</code>)
                    </li>
                    <li>
                      <strong>vw</strong> → relativa alla larghezza dello
                      schermo (es. <code>font-size: 5vw;</code>)
                    </li>
                  </ul>
                  <p className="mt-3">
                    💡 <strong>Consiglio:</strong> usa <code>rem</code> per
                    layout responsive e consistenti.
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">📐 Padding, Margin, Border</h2>

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
                    <th>Proprietà</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>padding</td>
                    <td>Spazio interno all’elemento</td>
                    <td>
                      <code>padding-top: 12px;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>margin</td>
                    <td>Spazio esterno tra elementi</td>
                    <td>
                      <code>margin-bottom: 20px;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>border-radius</td>
                    <td>Arrotonda gli angoli</td>
                    <td>
                      <code>border-radius: 30px;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>border</td>
                    <td>Spessore, stile e colore del bordo</td>
                    <td>
                      <code>border: 1px solid #fbf7f7;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-4">🧠 Note pratiche da ricordare</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📌 Note utili: shorthand e bordi
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>Shorthand padding:</strong> <br />
                      <code>padding: 10px 20px;</code> → top/bottom 10px,
                      left/right 20px
                    </li>
                    <li>
                      <strong>Shorthand margin:</strong> <br />
                      <code>margin: 0 auto;</code> → utile per centrare blocchi
                      orizzontalmente
                    </li>
                    <li>
                      <strong>Border personalizzato:</strong> <br />
                      <code>border: 2px dashed red;</code> → bordo tratteggiato
                      rosso <br />
                      <code>border: none;</code> → rimuove completamente il
                      bordo
                    </li>
                    <li>
                      <strong>Border-radius per cerchi:</strong> <br />
                      <code>border-radius: 50%;</code> → su un quadrato crea un
                      cerchio perfetto
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">📍 Positioning in CSS</h2>

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
                    <th>Valore</th>
                    <th>Descrizione</th>
                    <th>Comportamento</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>static</code>
                    </td>
                    <td>Valore predefinito</td>
                    <td>L’elemento segue il normale flusso del documento</td>
                    <td>
                      <code>position: static;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>relative</code>
                    </td>
                    <td>Posizionamento relativo a sé stesso</td>
                    <td>
                      Può essere spostato con <code>top</code>,{" "}
                      <code>left</code>, ecc.
                    </td>
                    <td>
                      <code>position: relative; top: 10px;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>absolute</code>
                    </td>
                    <td>Posizionamento assoluto</td>
                    <td>
                      Si muove rispetto al primo genitore con{" "}
                      <code>position: relative</code>
                    </td>
                    <td>
                      <code>position: absolute; right: 0;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>fixed</code>
                    </td>
                    <td>Fisso rispetto alla finestra</td>
                    <td>Rimane visibile anche durante lo scroll</td>
                    <td>
                      <code>position: fixed; bottom: 0;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>sticky</code>
                    </td>
                    <td>Combinazione tra relative e fixed</td>
                    <td>
                      Si comporta come relative finché non raggiunge una soglia,
                      poi resta fisso
                    </td>
                    <td>
                      <code>position: sticky; top: 0;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt.4">
                💡 CSS position – guida visiva ai comportamenti
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📍 CSS Position – Tipi e comportamenti
                  </Card.Title>

                  <p className="text-start">
                    <strong>🔹 static</strong>
                    <br />
                    <em>Valore predefinito</em>
                    <br />
                    L’elemento segue il normale flusso del documento.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`position: static;`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔸 relative</strong>
                    <br />
                    <em>Posizionamento relativo a sé stesso</em>
                    <br />
                    Può essere spostato con <code>top</code>, <code>left</code>,
                    ecc.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`position: relative;
top: 10px;`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔺 absolute</strong>
                    <br />
                    <em>Posizionamento assoluto</em>
                    <br />
                    Si muove rispetto al primo genitore con{" "}
                    <code>position: relative</code>.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`position: absolute;
right: 0;`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📌 fixed</strong>
                    <br />
                    <em>Fisso rispetto alla finestra</em>
                    <br />
                    Rimane visibile anche durante lo scroll.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`position: fixed;
bottom: 0;`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🧷 sticky</strong>
                    <br />
                    <em>Combinazione tra relative e fixed</em>
                    <br />
                    Si comporta come <code>relative</code> finché non raggiunge
                    una soglia, poi resta fisso.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`position: sticky;
top: 0;`}
                  </pre>
                </Card.Body>
              </Card>

              <h2 className="mt-4">💡 Consigli da ricordare</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📍 Position: consigli da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>relative:</strong> base per spostare un elemento
                      con <code>top</code>, <code>left</code>, ecc.
                    </li>
                    <li>
                      <strong>absolute:</strong> si muove rispetto al primo
                      genitore con <code>position: relative</code>
                    </li>
                    <li>
                      <strong>fixed:</strong> resta visibile anche durante lo
                      scroll (es. header o footer fissi)
                    </li>
                    <li>
                      <strong>sticky:</strong> si comporta come{" "}
                      <code>relative</code> finché non raggiunge una soglia, poi
                      resta fisso
                    </li>
                    <li>
                      <strong>z-index:</strong> funziona solo se l’elemento ha{" "}
                      <code>position</code> diversa da <code>static</code>
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <h2 className="mt-5">
                🧸 Flexbox: come mettere in ordine gli elementi
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
                    <th>Proprietà</th>
                    <th>Che cosa fa</th>
                    <th>Come lo diresti a una bambina</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>display: flex;</code>
                    </td>
                    <td>Attiva la modalità Flexbox</td>
                    <td>"Ora puoi mettere i tuoi oggetti in fila come vuoi"</td>
                    <td>
                      <code>display: flex;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>flex-direction</code>
                    </td>
                    <td>Decide se gli oggetti vanno in riga o in colonna</td>
                    <td>
                      "Vuoi metterli uno accanto all’altro o uno sopra l’altro?"
                    </td>
                    <td>
                      <code>flex-direction: row;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>justify-content</code>
                    </td>
                    <td>Allinea gli oggetti lungo la riga</td>
                    <td>
                      "Vuoi che stiano tutti a sinistra, al centro o con spazio
                      tra loro?"
                    </td>
                    <td>
                      <code>justify-content: center;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>align-items</code>
                    </td>
                    <td>Allinea gli oggetti in verticale</td>
                    <td>
                      "Vuoi che stiano tutti in alto, in mezzo o in basso?"
                    </td>
                    <td>
                      <code>align-items: flex-start;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>gap</code>
                    </td>
                    <td>Spazio tra gli oggetti</td>
                    <td>"Lascia un po’ di spazio tra i tuoi giocattoli"</td>
                    <td>
                      <code>gap: 20px;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>flex-wrap</code>
                    </td>
                    <td>Permette agli oggetti di andare a capo</td>
                    <td>
                      "Se non c’è più spazio, puoi iniziare una nuova riga"
                    </td>
                    <td>
                      <code>flex-wrap: wrap;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">🧸 Flexbox – layout potente e flessibile</h2>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧱 Flexbox – Guida alle proprietà principali
                  </Card.Title>

                  <p className="text-start">
                    <strong>🔹 display: flex;</strong>
                    <br />
                    <em>Attiva la modalità Flexbox</em>
                    <br />
                    “Ora puoi mettere i tuoi oggetti in fila come vuoi”
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`display: flex;`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔸 flex-direction</strong>
                    <br />
                    <em>Decide se gli oggetti vanno in riga o in colonna</em>
                    <br />
                    “Vuoi metterli uno accanto all’altro o uno sopra l’altro?”
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`flex-direction: row;`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔺 justify-content</strong>
                    <br />
                    <em>Allinea gli oggetti lungo la riga</em>
                    <br />
                    “Vuoi che stiano tutti a sinistra, al centro o con spazio
                    tra loro?”
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`justify-content: center;`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📍 align-items</strong>
                    <br />
                    <em>Allinea gli oggetti in verticale</em>
                    <br />
                    “Vuoi che stiano tutti in alto, in mezzo o in basso?”
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`align-items: flex-start;`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🧩 gap</strong>
                    <br />
                    <em>Spazio tra gli oggetti</em>
                    <br />
                    “Lascia un po’ di spazio tra i tuoi giocattoli”
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`gap: 20px;`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔁 flex-wrap</strong>
                    <br />
                    <em>Permette agli oggetti di andare a capo</em>
                    <br />
                    “Se non c’è più spazio, puoi iniziare una nuova riga”
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`flex-wrap: wrap;`}
                  </pre>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    💡 Flexbox: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        🔲 Centrare tutto (orizzontale + verticale):
                      </strong>
                      <br />
                      <code>
                        display: flex;
                        <br />
                        justify-content: center;
                        <br />
                        align-items: center;
                      </code>
                    </li>
                    <li className="mt-3">
                      <strong>📦 Griglia semplice con Flexbox:</strong>
                      <br />
                      <code>
                        display: flex;
                        <br />
                        flex-wrap: wrap;
                        <br />
                        gap: 20px;
                      </code>
                      <br />
                      Ogni elemento figlio può avere:
                      <br />
                      <code>flex: 1 1 200px;</code> → cresce, si restringe, base
                      200px
                    </li>
                    <li className="mt-3">
                      <strong>📐 Allineare solo in orizzontale:</strong>
                      <br />
                      <code>justify-content: space-between;</code> → spazio tra
                      gli elementi
                    </li>
                    <li className="mt-3">
                      <strong>📍 Allineare solo in verticale:</strong>
                      <br />
                      <code>align-items: flex-start;</code> → tutti in alto
                    </li>
                    <li className="mt-3">
                      <strong>🧩 Distribuire lo spazio:</strong>
                      <br />
                      <code>gap: 10px;</code> → spazio tra gli elementi senza
                      usare margin
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🎭 Effetti CSS: interazioni e animazioni</h2>

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
                    <th>Proprietà / Selettore</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>:hover</code>
                    </td>
                    <td>Applica uno stile quando il mouse passa sopra</td>
                    <td>
                      <code>
                        button:hover &#123; background-color: red; &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>transform</code>
                    </td>
                    <td>Modifica forma, posizione o rotazione</td>
                    <td>
                      <code>transform: scale(1.2);</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>transition</code>
                    </td>
                    <td>Rende fluido il cambiamento di stile</td>
                    <td>
                      <code>transition: all 0.3s ease;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>opacity</code>
                    </td>
                    <td>Controlla la trasparenza</td>
                    <td>
                      <code>opacity: 0.5;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>box-shadow</code>
                    </td>
                    <td>Aggiunge un’ombra intorno all’elemento</td>
                    <td>
                      <code>box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>filter</code>
                    </td>
                    <td>Applica effetti visivi (blur, invert, brightness…)</td>
                    <td>
                      <code>filter: brightness(1.2);</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>cursor</code>
                    </td>
                    <td>Cambia il cursore quando si passa sopra</td>
                    <td>
                      <code>cursor: pointer;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>:active</code>
                    </td>
                    <td>Stile quando l’elemento è cliccato</td>
                    <td>
                      <code>
                        button:active &#123; transform: scale(0.95); &#125;
                      </code>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    💡 Effetti CSS: consigli pratici
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        🎯 Bottone animato al passaggio del mouse:
                      </strong>
                      <br />
                      <code>
                        button &#123;
                        <br />
                        &nbsp;&nbsp;transition: all 0.3s ease;
                        <br />
                        &#125;
                        <br />
                        button:hover &#123;
                        <br />
                        &nbsp;&nbsp;background-color: #ff4081;
                        <br />
                        &nbsp;&nbsp;transform: scale(1.05);
                        <br />
                        &#125;
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>👻 Far apparire un elemento al passaggio:</strong>
                      <br />
                      <code>
                        .box &#123;
                        <br />
                        &nbsp;&nbsp;opacity: 0;
                        <br />
                        &nbsp;&nbsp;transition: opacity 0.5s;
                        <br />
                        &#125;
                        <br />
                        .box:hover &#123;
                        <br />
                        &nbsp;&nbsp;opacity: 1;
                        <br />
                        &#125;
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>🪄 Effetto ombra al passaggio:</strong>
                      <br />
                      <code>
                        .card:hover &#123;
                        <br />
                        &nbsp;&nbsp;box-shadow: 0 8px 16px rgba(0,0,0,0.4);
                        <br />
                        &#125;
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>🎬 Effetto “clic” con :active:</strong>
                      <br />
                      <code>
                        button:active &#123;
                        <br />
                        &nbsp;&nbsp;transform: scale(0.95);
                        <br />
                        &#125;
                      </code>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🎞️ Keyframes: come creare animazioni in CSS
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
                    <th>Elemento</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>@keyframes</code>
                    </td>
                    <td>Definisce i passaggi dell’animazione</td>
                    <td>
                      <code>
                        @keyframes fadeIn &#123;
                        <br />
                        &nbsp;&nbsp;0% &#123; opacity: 0; &#125;
                        <br />
                        &nbsp;&nbsp;100% &#123; opacity: 1; &#125;
                        <br />
                        &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>animation-name</code>
                    </td>
                    <td>Collega l’elemento ai keyframes</td>
                    <td>
                      <code>animation-name: fadeIn;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>animation-duration</code>
                    </td>
                    <td>Durata dell’animazione</td>
                    <td>
                      <code>animation-duration: 2s;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>animation-delay</code>
                    </td>
                    <td>Ritardo prima dell’inizio</td>
                    <td>
                      <code>animation-delay: 1s;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>animation-iteration-count</code>
                    </td>
                    <td>Quante volte si ripete</td>
                    <td>
                      <code>animation-iteration-count: infinite;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>animation-direction</code>
                    </td>
                    <td>Direzione dell’animazione</td>
                    <td>
                      <code>animation-direction: alternate;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>animation-timing-function</code>
                    </td>
                    <td>Velocità dell’animazione</td>
                    <td>
                      <code>animation-timing-function: ease-in-out;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>animation-fill-mode</code>
                    </td>
                    <td>Stato dell’elemento prima/dopo l’animazione</td>
                    <td>
                      <code>animation-fill-mode: forwards;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🎞️ Keyframes: consigli pratici
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>✨ Far apparire un elemento (fade-in):</strong>
                      <br />
                      <code>
                        @keyframes fadeIn &#123;
                        <br />
                        &nbsp;&nbsp;0% &#123; opacity: 0; &#125;
                        <br />
                        &nbsp;&nbsp;100% &#123; opacity: 1; &#125;
                        <br />
                        &#125;
                        <br />
                        <br />
                        .elemento &#123;
                        <br />
                        &nbsp;&nbsp;animation: fadeIn 1s ease forwards;
                        <br />
                        &#125;
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>🪩 Effetto rimbalzo (bounce):</strong>
                      <br />
                      <code>
                        @keyframes bounce &#123;
                        <br />
                        &nbsp;&nbsp;0%, 100% &#123; transform: translateY(0);
                        &#125;
                        <br />
                        &nbsp;&nbsp;50% &#123; transform: translateY(-20px);
                        &#125;
                        <br />
                        &#125;
                        <br />
                        <br />
                        .box &#123;
                        <br />
                        &nbsp;&nbsp;animation: bounce 0.6s ease infinite;
                        <br />
                        &#125;
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>🎯 Rotazione continua:</strong>
                      <br />
                      <code>
                        @keyframes spin &#123;
                        <br />
                        &nbsp;&nbsp;from &#123; transform: rotate(0deg); &#125;
                        <br />
                        &nbsp;&nbsp;to &#123; transform: rotate(360deg); &#125;
                        <br />
                        &#125;
                        <br />
                        <br />
                        .loader &#123;
                        <br />
                        &nbsp;&nbsp;animation: spin 2s linear infinite;
                        <br />
                        &#125;
                      </code>
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

export default Css
