import { Container, Row, Col } from "react-bootstrap"
import "../styles/home.css"

const Home = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <h1>📘 DevGuide – guida per non dimenticare</h1>
              <p className="mt-5 testo">
                Benvenuti in <strong>DevGuide</strong>, <br /> una raccolta il
                più possibile dettagliata per ricordare tutto quello che,
                puntualmente, dimentico. <br /> <br /> È il mio archivio
                personale di appunti, esempi e concetti sparsi, <br /> pensato
                per quando la memoria fa cilecca e Google non ha più pazienza.{" "}
                <br /> <br />
                Se anche tu ti ritrovi a cercare <br /> "come si fa quella cosa
                in React" <br /> per la centesima volta... sei nel posto giusto
                😅
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default Home
