import { Col, Container, Row, Card, Table } from "react-bootstrap"
import "../styles/html.css"

const Html = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <h1>HTML: cose da ricordare</h1>

              {/* Card con lista */}
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    HTML: 5 cose da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>Struttura base:</strong>{" "}
                      <code>&lt;!DOCTYPE html&gt;</code>,{" "}
                      <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>,{" "}
                      <code>&lt;body&gt;</code>
                    </li>
                    <li>
                      <strong>Tag semantici:</strong>{" "}
                      <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
                      <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>,{" "}
                      <code>&lt;footer&gt;</code>
                    </li>
                    <li>
                      <strong>Attributi importanti:</strong> <code>class</code>,{" "}
                      <code>id</code>, <code>alt</code>, <code>href</code>,{" "}
                      <code>src</code>
                    </li>
                    <li>
                      <strong>Form:</strong> <code>&lt;form&gt;</code>,{" "}
                      <code>&lt;input&gt;</code>, <code>&lt;label&gt;</code>,{" "}
                      <code>&lt;textarea&gt;</code>, <code>&lt;button&gt;</code>
                    </li>
                    <li>
                      <strong>Accessibilità:</strong> usa <code>alt</code>,{" "}
                      <code>&lt;label&gt;</code>, e struttura chiara
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              {/* Sezione esempi */}
              <h2 className="mt-4">Tag semantici</h2>
              <p className="text-start">
                <code>&lt;header&gt;</code> = navbar, titoli, intro <br />
                <code>&lt;main&gt;</code> = contenuto principale <br />
                <code>&lt;section&gt;</code> = sezioni tematiche <br />
                <code>&lt;aside&gt;</code> = sidebar, info extra <br />
                <code>&lt;footer&gt;</code> = conclusione pagina
              </p>

              {/* Sezione attributi */}
              <h3 className="mt-4">Attributi importanti</h3>

              {/* Tabella responsive */}
              <Table
                striped
                bordered
                hover
                responsive
                variant="dark"
                className="mt-2"
              >
                <thead>
                  <tr>
                    <th>Attributo</th>
                    <th>Scopo</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>class</td>
                    <td>Stilizzazione CSS</td>
                    <td>Multiplo</td>
                  </tr>
                  <tr>
                    <td>id</td>
                    <td>Identificatore unico</td>
                    <td>Una sola volta</td>
                  </tr>
                  <tr>
                    <td>alt</td>
                    <td>Accessibilità immagine</td>
                    <td>Obbligatorio</td>
                  </tr>
                  <tr>
                    <td>href</td>
                    <td>Destinazione link</td>
                    <td>Interno/esterno</td>
                  </tr>
                  <tr>
                    <td>src</td>
                    <td>Fonte media</td>
                    <td>Immagini, video</td>
                  </tr>
                </tbody>
              </Table>

              {/* Sezione interattiva */}
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    Extra: Dettagli HTML
                  </Card.Title>
                  <details className="text-start">
                    <summary className="mb-2">
                      Cos'è il tag &lt;details&gt;?
                    </summary>
                    <p>
                      Permette di mostrare o nascondere contenuti. Utile per
                      FAQ, info aggiuntive o sezioni interattive.
                    </p>
                  </details>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Html
