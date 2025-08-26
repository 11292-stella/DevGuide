import { Container, Row, Col, Card } from "react-bootstrap"
import "../styles/esempipronti.css"

const Esempipronti = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <h1>Esempi Pronti</h1>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧩 Esempio pratico: struttura iniziale pagina
                  </Card.Title>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`<div className="page-background d-flex flex-column min-vh-100">
  <Container className="flex-grow-1 py-5">
    <Row className="justify-content-center">
      <Col md={8} lg={6} className="text-center text-light">
        <h1>Esempi Pronti</h1>
      </Col>
    </Row>
  </Container>
</div>`}
                  </pre>
                  <p className="mt-3 text-center">
                    ✅ Questo layout usa: <strong>Bootstrap Grid</strong>,{" "}
                    <strong>flexbox</strong>, <strong>min-vh-100</strong>,{" "}
                    <strong>Container</strong> e <strong>Col responsive</strong>
                    .
                  </p>
                </Card.Body>
              </Card>

              <h2>esempio path </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧭 React – Esempio di App con Routing
                  </Card.Title>

                  <p className="mt-3">
                    In React, per gestire la navigazione tra pagine si usa{" "}
                    <strong>React Router DOM</strong>. Ecco un esempio base con{" "}
                    <code>BrowserRouter</code>, <code>Routes</code> e{" "}
                    <code>Route</code>.
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`}
                  </pre>

                  <p className="mt-3 text-center">
                    ✅ Questo esempio usa: <strong>BrowserRouter</strong>,{" "}
                    <strong>Routes</strong>, <strong>Route</strong> e{" "}
                    <strong>path</strong> per gestire la navigazione.
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
export default Esempipronti
