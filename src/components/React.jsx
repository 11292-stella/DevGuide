import { Col, Container, Row, Card, Table } from "react-bootstrap"
import "../styles/react.css"

const React = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <h1>⚛️ Guida a React</h1>
              <p>
                React è una libreria JavaScript per costruire interfacce utente.
                In questa guida esploriamo i concetti fondamentali: componenti,
                props, stato, eventi, hook e rendering.
              </p>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    ⚛️ React: da dove si comincia
                  </Card.Title>

                  <p className="text-start">
                    <strong>🧠 Cos’è:</strong>
                    <br />
                    Libreria JavaScript per costruire interfacce utente
                    dinamiche e modulari.
                    <br />→ Basata su componenti, stato e rendering reattivo.
                  </p>

                  <p className="mt-3 text-start">
                    <strong>📦 Componenti:</strong>
                    <br />
                    Ogni parte dell’interfaccia è un componente → funzione che
                    restituisce JSX.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`function Titolo() {
  return <h1>Ciao Stella</h1>;
}`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🧬 JSX:</strong>
                    <br />
                    Sintassi simile all’HTML dentro JavaScript → più leggibile e
                    potente.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`const messaggio = <div className="box">Benvenuta</div>;`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📥 Props:</strong>
                    <br />
                    Dati passati ai componenti → come parametri di una funzione.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`function Saluto(props) {
  return <h2>Ciao {props.nome}</h2>;
}

// Uso:
<Saluto nome="Stella" />`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>
                      🔁 Stato (<code>useState</code>):
                    </strong>
                    <br />
                    Dati che cambiano nel tempo → React aggiorna il DOM in
                    automatico.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`import { useState } from "react";

function Contatore() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hai cliccato {count} volte</p>
      <button onClick={() => setCount(count + 1)}>Clicca</button>
    </div>
  );
}`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>⚡ Reattività:</strong>
                    <br />
                    Quando lo stato cambia, React ricalcola e aggiorna solo ciò
                    che serve.
                    <br />→ Niente ricariche, solo aggiornamenti intelligenti.
                  </p>
                </Card.Body>
              </Card>

              <h2 className="mt-5">🧩 Componenti & JSX: la base di React</h2>

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
                      <code>Componente funzione</code>
                    </td>
                    <td>Funzione che restituisce JSX</td>
                    <td>
                      <code>
                        function Titolo() &#123; return
                        &lt;h1&gt;Ciao&lt;/h1&gt;; &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Componente classe</code>
                    </td>
                    <td>
                      Vecchio stile, usa <code>render()</code>
                    </td>
                    <td>
                      <code>
                        class Titolo extends React.Component &#123; render()
                        &#123; return &lt;h1&gt;Ciao&lt;/h1&gt;; &#125; &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>JSX</code>
                    </td>
                    <td>HTML dentro JavaScript</td>
                    <td>
                      <code>&lt;div className="box"&gt;Testo&lt;/div&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Props</code>
                    </td>
                    <td>Dati passati al componente</td>
                    <td>
                      <code>&lt;Saluto nome="Stella" /&gt;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Uso delle props</code>
                    </td>
                    <td>Accesso tramite parametro</td>
                    <td>
                      <code>
                        function Saluto(props) &#123; return &lt;p&gt;Ciao
                        &#123;props.nome&#125;&lt;/p&gt;; &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Fragment</code>
                    </td>
                    <td>Contenitore invisibile</td>
                    <td>
                      <code>
                        &lt;&gt;&lt;h1&gt;Titolo&lt;/h1&gt;&lt;p&gt;Testo&lt;/p&gt;&lt;/&gt;
                      </code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">🧩 Componenti & JSX – consigli + esempi</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧩 Componenti & JSX: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>⚛️ Componente funzione:</strong>
                      <br />
                      👉{" "}
                      <code>
                        function Titolo() &#123; return
                        &lt;h1&gt;Ciao&lt;/h1&gt;; &#125;
                      </code>
                      <br />→ È lo standard moderno, più semplice e compatibile
                      con gli hook.
                    </li>

                    <li className="mt-3">
                      <strong>📦 Props come parametri:</strong>
                      <br />
                      👉{" "}
                      <code>
                        function Saluto(props) &#123; return &lt;p&gt;Ciao
                        &#123;props.nome&#125;&lt;/p&gt;; &#125;
                      </code>
                      <br />→ Puoi anche usare destrutturazione:{" "}
                      <code>function Saluto(&#123; nome &#125;)</code>
                    </li>

                    <li className="mt-3">
                      <strong>🧬 JSX = HTML + JS:</strong>
                      <br />
                      👉{" "}
                      <code>
                        &lt;div className="box"&gt;&#123;2 + 2&#125;&lt;/div&gt;
                      </code>
                      <br />→ Puoi usare espressioni JS dentro{" "}
                      <code>&#123;&#125;</code>
                    </li>

                    <li className="mt-3">
                      <strong>🧩 Fragment:</strong>
                      <br />
                      👉{" "}
                      <code>
                        &lt;&gt;&lt;h1&gt;Titolo&lt;/h1&gt;&lt;p&gt;Testo&lt;/p&gt;&lt;/&gt;
                      </code>
                      <br />→ Utile per restituire più elementi senza un{" "}
                      <code>&lt;div&gt;</code> extra
                    </li>

                    <li className="mt-3">
                      <strong>🧯 Attenzione:</strong>
                      <br />
                      JSX accetta solo un elemento padre → usa{" "}
                      <code>&lt;&gt;</code> o un <code>&lt;div&gt;</code> per
                      racchiudere tutto.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                ⚛️ Componente a funzione vs classe – esempi a confronto
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    ⚛️ Componente a funzione vs classe
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>🧩 Componente a funzione:</strong>
                      <br />
                      ✅ Sintassi moderna, compatibile con gli hook
                      <br />
                      👉 Esempio:
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {`function Saluto(props) {
  return <h2>Ciao {props.nome}!</h2>;
}

// Uso:
<Saluto nome="Stella" />`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>🏛️ Componente a classe:</strong>
                      <br />
                      🧓 Sintassi più verbosa, usa <code>this.props</code>
                      <br />
                      👉 Esempio:
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {`class Saluto extends React.Component {
  render() {
    return <h2>Ciao {this.props.nome}!</h2>;
  }
}

// Uso:
<Saluto nome="Stella" />`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>📌 Differenze chiave:</strong>
                      <br />- Le **funzioni** sono più concise e supportano gli
                      **hook** come <code>useState</code>
                      <br />- Le **classi** usano <code>this</code> e hanno
                      metodi come <code>render()</code>
                      <br />- Oggi si preferiscono i **functional component**
                      per semplicità e performance
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">📦 Props in React – guida completa</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📦 Props: passare dati ai componenti
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>🧠 Cos’è una prop:</strong>
                      <br />
                      Una <code>prop</code> è un dato che viene passato a un
                      componente come parametro. → È **sola andata**: dal
                      genitore al figlio.
                    </li>

                    <li className="mt-3">
                      <strong>📥 Come si passa:</strong>
                      <br />
                      👉 <code>&lt;Saluto nome="Stella" età={30} /&gt;</code>
                      <br />→ `nome` e `età` sono props.
                    </li>

                    <li className="mt-3">
                      <strong>📤 Come si usa:</strong>
                      <br />
                      👉{" "}
                      <code>
                        function Saluto(props) &#123; return &lt;p&gt;Ciao
                        &#123;props.nome&#125;&lt;/p&gt;; &#125;
                      </code>
                      <br />→ Puoi anche usare destrutturazione:{" "}
                      <code>function Saluto(&#123; nome &#125;)</code>
                    </li>

                    <li className="mt-3">
                      <strong>🔒 Le props sono **immutabili**:</strong>
                      <br />
                      Non puoi modificarle dentro il componente → servono solo
                      per leggere.
                    </li>

                    <li className="mt-3">
                      <strong>🧩 Props possono essere qualsiasi tipo:</strong>
                      <br />
                      Stringhe, numeri, booleani, array, oggetti, funzioni,
                      persino componenti.
                    </li>

                    <li className="mt-3">
                      <strong>🧯 Attenzione:</strong>
                      <br />
                      Se dimentichi una prop, React non dà errore ma il valore
                      sarà <code>undefined</code>.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">📦 Props – passaggio di dati e funzioni</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📦 Props: esempi pratici
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>👤 Passaggio di dati:</strong>
                      <br />
                      👉 Componente che riceve <code>nome</code> e{" "}
                      <code>età</code> come props:
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {`function Saluto({ nome, età }) {
  return (
    <>
      <h2>Ciao {nome}!</h2>
      <p>Hai {età} anni.</p>
    </>
  );
}

// Uso nel componente genitore:
<Saluto nome="Stella" età={30} />`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>🔁 Passaggio di funzione:</strong>
                      <br />
                      👉 Componente che riceve una funzione come prop e la
                      esegue al click:
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {`function Bottone({ onClick }) {
  return <button onClick={onClick}>Clicca</button>;
}

function App() {
  const saluta = () => alert("Ciao Stella!");
  return <Bottone onClick={saluta} />;
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>📌 Ricorda:</strong>
                      <br />
                      - Le props sono **sola lettura**
                      <br />
                      - Puoi passare **qualsiasi tipo di dato**: stringhe,
                      numeri, oggetti, funzioni
                      <br />- Puoi usare **destrutturazione** per leggibilità:{" "}
                      <code>function Componente(&#123; prop &#125;)</code>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🔁 useState – gestire lo stato nei componenti
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔁 useState: lo stato in React
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>🧠 Cos’è:</strong>
                      <br />
                      <code>useState</code> è un hook che ti permette di creare
                      e aggiornare lo stato locale di un componente.
                      <br />
                      👉 <code>const [count, setCount] = useState(0);</code>
                    </li>

                    <li className="mt-3">
                      <strong>📥 Stato iniziale:</strong>
                      <br />
                      Il valore tra parentesi è quello iniziale → può essere
                      stringa, numero, array, oggetto, booleano…
                    </li>

                    <li className="mt-3">
                      <strong>🔁 Aggiornare lo stato:</strong>
                      <br />
                      Usa la funzione <code>setCount</code> per aggiornare →
                      React ricalcola e aggiorna il DOM.
                      <br />
                      👉 <code>setCount(count + 1);</code>
                    </li>

                    <li className="mt-3">
                      <strong>🧯 Attenzione:</strong>
                      <br />
                      Lo stato è **asincrono** → non leggere subito il nuovo
                      valore dopo `setCount`, usa `useEffect` se serve.
                    </li>

                    <li className="mt-3">
                      <strong>🧪 Esempio completo:</strong>
                      <br />
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {`import React, { useState } from "react";

function Contatore() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Hai cliccato {count} volte</h2>
      <button onClick={() => setCount(count + 1)}>Clicca</button>
    </>
  );
}

// Uso:
<Contatore />`}
                      </pre>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🖱️ Eventi in React – onClick, onChange, onSubmit
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🖱️ Eventi in React: esempi pratici
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        🖱️ <code>onClick</code> – click su un bottone:
                      </strong>
                      <br />
                      👉 Esegue una funzione quando l’utente clicca
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`function Bottone() {
  const saluta = () => alert("Ciao Stella!");
  return <button onClick={saluta}>Clicca</button>;
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>
                        ⌨️ <code>onChange</code> – input dinamico:
                      </strong>
                      <br />
                      👉 Rileva ogni modifica in un campo di testo
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`function InputNome() {
  const [nome, setNome] = useState("");

  return (
    <>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <p>Hai scritto: {nome}</p>
    </>
  );
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>
                        📨 <code>onSubmit</code> – invio form:
                      </strong>
                      <br />
                      👉 Gestisce l’invio evitando il refresh della pagina
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`function FormEmail() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email inviata: " + email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Invia</button>
    </form>
  );
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>📌 Ricorda:</strong>
                      <br />- Gli eventi React sono <code>camelCase</code>
                      <br />- Le funzioni vanno passate{" "}
                      <strong>senza parentesi</strong>
                      <br />- Usa <code>e.preventDefault()</code> per bloccare
                      il comportamento di default nei form
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🧠 useEffect – gestire effetti collaterali
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧠 useEffect: effetti collaterali in React
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>🔍 Cos’è:</strong>
                      <br />
                      <code>useEffect</code> è un hook che ti permette di
                      eseguire codice dopo il rendering del componente.
                      <br />
                      👉 È perfetto per fetch, timer, logging, manipolazioni
                      esterne.
                    </li>

                    <li className="mt-3">
                      <strong>📦 Sintassi base:</strong>
                      <br />
                      👉{" "}
                      <code>
                        useEffect(() =&gt; &#123; ... &#125;, [dipendenze]);
                      </code>
                      <br />
                      - Se l’array è vuoto → effetto eseguito solo al primo
                      render
                      <br />- Se contiene variabili → effetto eseguito quando
                      cambiano
                    </li>

                    <li className="mt-3">
                      <strong>🧪 Esempio: fetch dati da API</strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { useEffect, useState } from "react";

function Utente() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => setNome(data.name));
  }, []);

  return <h2>Benvenuto {nome}</h2>;
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>⏳ Esempio: timer automatico</strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { useEffect, useState } from "react";

function Timer() {
  const [secondi, setSecondi] = useState(0);

  useEffect(() => {
    const intervallo = setInterval(() => {
      setSecondi(s => s + 1);
    }, 1000);

    return () => clearInterval(intervallo); // pulizia
  }, []);

  return <p>Tempo trascorso: {secondi}s</p>;
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>📌 Ricorda:</strong>
                      <br />- Puoi avere più <code>useEffect</code> nello stesso
                      componente
                      <br />- Usa <code>
                        return () =&gt; &#123;&#125;
                      </code> per <strong>pulire</strong> timer, listener, ecc.
                      <br />- Se dimentichi le dipendenze, l’effetto potrebbe
                      eseguire troppo spesso
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧮 Tabella dei Metodi HTTP</h2>
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
                    <th>Metodo</th>
                    <th>Descrizione breve</th>
                    <th>Quando si usa nel front-end</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GET</td>
                    <td>Recupera dati da una risorsa</td>
                    <td>Per leggere dati da un’API (es. lista utenti)</td>
                  </tr>
                  <tr>
                    <td>POST</td>
                    <td>Invia dati per creare una nuova risorsa</td>
                    <td>Per inviare form, registrazioni, commenti</td>
                  </tr>
                  <tr>
                    <td>PUT</td>
                    <td>Aggiorna completamente una risorsa esistente</td>
                    <td>Per modificare un oggetto intero (es. profilo)</td>
                  </tr>
                  <tr>
                    <td>PATCH</td>
                    <td>Aggiorna parzialmente una risorsa</td>
                    <td>Per modifiche mirate (es. solo email)</td>
                  </tr>
                  <tr>
                    <td>DELETE</td>
                    <td>Elimina una risorsa</td>
                    <td>Per cancellare un elemento (es. un post)</td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">✉️ Metodi HTTP con fetch in React</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title>✉️ Metodi HTTP con fetch</Card.Title>

                  <p className="text-start">
                    <strong>📦 GET – leggere dati</strong>
                    <br />
                    Recupera dati da un’API.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📝 POST – creare risorsa</strong>
                    <br />
                    Invia dati per creare un nuovo post.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Nuovo post",
    body: "Contenuto del post",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log(data));`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔄 PUT – aggiornare completamente</strong>
                    <br />
                    Sovrascrive un post esistente.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Post aggiornato",
    body: "Nuovo contenuto",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log(data));`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🧩 PATCH – aggiornare parzialmente</strong>
                    <br />
                    Modifica solo una parte del post.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Titolo modificato"
  })
})
  .then(res => res.json())
  .then(data => console.log(data));`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🗑️ DELETE – eliminare</strong>
                    <br />
                    Cancella un post.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(() => console.log("Post eliminato"));`}
                  </pre>
                </Card.Body>
              </Card>

              <h2 className="mt-5">💻 Mini-progetto React – tutto in azione</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title>
                    💻 Mini-progetto React: tutto ciò che hai appreso
                  </Card.Title>

                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`import { useState, useEffect } from "react";

function MiniApp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [utenteAPI, setUtenteAPI] = useState(null);

  // Effetto per caricare dati da API al primo render
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => setUtenteAPI(data));
  }, []);

  // Funzione per invio form
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Ciao \${nome}, email inviata: \${email}\`);
  };

  // Funzione per saluto
  const saluta = () => {
    alert("Ciao " + nome + "!");
  };

  return (
    <>
      <h2>Benvenuta {nome || "ospite"}!</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Il tuo nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="La tua email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Invia</button>
      </form>

      <button onClick={saluta}>Salutami</button>

      {utenteAPI && (
        <p className="mt-3">
          ✅ Dati da API: <strong>{utenteAPI.name}</strong> – {utenteAPI.email}
        </p>
      )}
    </>
  );
}`}
                  </pre>

                  <p className="mt-3 text-start">
                    ✅ Questo progetto usa: <strong>useState</strong>,{" "}
                    <strong>onChange</strong>, <strong>onClick</strong>,{" "}
                    <strong>onSubmit</strong>, <strong>useEffect</strong>, e{" "}
                    <strong>fetch</strong> da API.
                  </p>
                </Card.Body>
              </Card>

              <h2 className="mt-5">🗂️ Redux – gestione dello stato globale</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title>
                    🗂️ Redux: gestire lo stato globale in React
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>📦 Cos’è Redux:</strong>
                      <br />
                      Libreria per gestire lo stato **globale** dell’app in modo
                      **centralizzato**.
                      <br />
                      👉 Utile quando molti componenti devono condividere o
                      modificare gli stessi dati.
                    </li>

                    <li className="mt-3">
                      <strong>🧠 Principi chiave:</strong>
                      <br />
                      - Lo stato è un **oggetto unico** chiamato “store”
                      <br />
                      - Si modifica solo tramite **azioni** (action)
                      <br />- Le azioni vengono gestite da **funzioni pure**
                      chiamate “reducer”
                    </li>

                    <li className="mt-3">
                      <strong>🔁 Flusso base:</strong>
                      <br />
                      <ol>
                        <li>
                          ✅ Il componente invia un’<code>action</code>
                        </li>
                        <li>
                          🧠 Il <code>reducer</code> riceve l’azione e aggiorna
                          lo <code>store</code>
                        </li>
                        <li>
                          📤 I componenti leggono lo stato aggiornato tramite{" "}
                          <code>useSelector</code>
                        </li>
                      </ol>
                    </li>

                    <li className="mt-3">
                      <strong>🧪 Esempio base:</strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const contatoreSlice = createSlice({
  name: "contatore",
  initialState: { valore: 0 },
  reducers: {
    incrementa: (state) => { state.valore += 1 },
    decrementa: (state) => { state.valore -= 1 }
  }
});

export const { incrementa, decrementa } = contatoreSlice.actions;

export const store = configureStore({
  reducer: { contatore: contatoreSlice.reducer }
});`}
                      </pre>
                    </li>

                    <li className="mt-3">
                      <strong>📥 Uso nel componente:</strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { useSelector, useDispatch } from "react-redux";
import { incrementa, decrementa } from "./store";

function Contatore() {
  const valore = useSelector(state => state.contatore.valore);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Valore: {valore}</h2>
      <button onClick={() => dispatch(incrementa())}>+</button>
      <button onClick={() => dispatch(decrementa())}>-</button>
    </>
  );
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>📌 Ricorda:</strong>
                      <br />- Usa <code>Provider</code> per collegare Redux
                      all’app
                      <br />
                      - Redux è utile quando lo stato è **condiviso tra molti
                      componenti**
                      <br />- Per progetti piccoli, <code>useState</code> può
                      bastare
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🗂️ Redux classico – azioni, dispatch e switch
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title>
                    🗂️ Redux classico: azioni, dispatch e switch
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        📤 Azioni – file <code>actions.js</code>
                      </strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`export const INCREMENTA = "INCREMENTA";
export const DECREMENTA = "DECREMENTA";

export const incrementa = () => ({ type: INCREMENTA });
export const decrementa = () => ({ type: DECREMENTA });`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>
                        🧠 Reducer – file <code>reducer.js</code>
                      </strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { INCREMENTA, DECREMENTA } from "./actions";

const initialState = { valore: 0 };

export function contatoreReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENTA:
      return { ...state, valore: state.valore + 1 };
    case DECREMENTA:
      return { ...state, valore: state.valore - 1 };
    default:
      return state;
  }
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>
                        🧩 Store – file <code>store.js</code>
                      </strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { createStore } from "redux";
import { contatoreReducer } from "./reducer";

export const store = createStore(contatoreReducer);`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>
                        📥 Uso nel componente – file <code>App.jsx</code>
                      </strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { useSelector, useDispatch } from "react-redux";
import { incrementa, decrementa } from "./actions";

function App() {
  const valore = useSelector(state => state.valore);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Valore: {valore}</h2>
      <button onClick={() => dispatch(incrementa())}>+</button>
      <button onClick={() => dispatch(decrementa())}>-</button>
    </>
  );
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>📌 Ricorda:</strong>
                      <br />- Usa <code>Provider</code> in <code>index.js</code>{" "}
                      per collegare Redux all’app
                      <br />- Con questo approccio puoi facilmente estendere il
                      reducer con altri <code>case</code>
                      <br />- È perfetto per capire il flusso Redux prima di
                      passare a Redux Toolkit
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🧩 combineReducers – unire più reducer in Redux
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title>
                    🧩 combineReducers: gestire più slice di stato
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>🔍 Cos’è:</strong>
                      <br />
                      Funzione di Redux che permette di **combinare più
                      reducer** in uno solo.
                      <br />
                      👉 Ogni reducer gestisce una parte specifica dello stato
                      globale.
                    </li>

                    <li className="mt-3">
                      <strong>📦 Esempio: due reducer separati</strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`// contatoreReducer.js
export function contatoreReducer(state = { valore: 0 }, action) {
  switch (action.type) {
    case "INCREMENTA":
      return { valore: state.valore + 1 };
    default:
      return state;
  }
}

// utenteReducer.js
export function utenteReducer(state = { nome: "" }, action) {
  switch (action.type) {
    case "SET_NOME":
      return { nome: action.payload };
    default:
      return state;
  }
}`}
                      </pre>
                    </li>

                    <li className="mt-3">
                      <strong>
                        🧩 Uso di <code>combineReducers</code>
                      </strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { createStore, combineReducers } from "redux";
import { contatoreReducer } from "./contatoreReducer";
import { utenteReducer } from "./utenteReducer";

const rootReducer = combineReducers({
  contatore: contatoreReducer,
  utente: utenteReducer
});

export const store = createStore(rootReducer);`}
                      </pre>
                    </li>

                    <li className="mt-3">
                      <strong>📥 Accesso allo stato nel componente</strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { useSelector } from "react-redux";

function App() {
  const valore = useSelector(state => state.contatore.valore);
  const nome = useSelector(state => state.utente.nome);

  return (
    <>
      <h2>Valore: {valore}</h2>
      <h3>Utente: {nome}</h3>
    </>
  );
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>📌 Ricorda:</strong>
                      <br />- Ogni chiave in <code>combineReducers</code>{" "}
                      rappresenta una sezione dello stato
                      <br />
                      - I reducer devono essere **funzioni pure**
                      <br />- Puoi aggiungere nuovi slice facilmente senza
                      modificare il flusso principale
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧭 React Router – navigazione tra pagine</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title>
                    🧭 React Router: gestire la navigazione
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>🔍 Cos’è:</strong>
                      <br />
                      Libreria che permette di creare **percorsi URL** e
                      associare componenti a ogni pagina.
                      <br />
                      👉 Funziona senza ricaricare il browser → SPA fluida e
                      veloce.
                    </li>

                    <li className="mt-3">
                      <strong>📦 Installazione:</strong>
                      <br />
                      👉 <code>npm install react-router-dom</code>
                    </li>

                    <li className="mt-3">
                      <strong>🧪 Esempio base:</strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Pagina Home</h2>;
}

function Profilo() {
  return <h2>Benvenuta Stella!</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profilo">Profilo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profilo" element={<Profilo />} />
      </Routes>
    </BrowserRouter>
  );
}`}
                      </pre>
                    </li>

                    <li className="mt-3">
                      <strong>📌 Componenti chiave:</strong>
                      <br />- <code>BrowserRouter</code>: avvolge tutta l’app
                      <br />- <code>Routes</code>: contiene tutte le rotte
                      <br />- <code>Route</code>: definisce il percorso e il
                      componente
                      <br />- <code>Link</code>: crea collegamenti senza
                      ricaricare la pagina
                    </li>

                    <li className="mt-3">
                      <strong>🧭 Bonus: parametri dinamici</strong>
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`<Route path="/utente/:id" element={<Utente />} />

// Dentro Utente.jsx
import { useParams } from "react-router-dom";
const { id } = useParams();`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>📌 Ricorda:</strong>
                      <br />
                      - React Router gestisce la **navigazione client-side**
                      <br />- Puoi usare <code>useNavigate()</code> per navigare
                      via codice
                      <br />- I percorsi sono **case-sensitive** e devono essere
                      univoci
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🧭 React Router – useNavigate, useParams, useLocation
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title>🧭 React Router: hook fondamentali</Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        🚀 <code>useNavigate()</code> – navigazione via codice
                      </strong>
                      <br />
                      👉 Ti permette di cambiare pagina in risposta a un evento
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // dopo login, vai alla dashboard
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Accedi</button>;
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>
                        📦 <code>useParams()</code> – leggere parametri dinamici
                      </strong>
                      <br />
                      👉 Estrae i parametri dall’URL (es. ID, slug)
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { useParams } from "react-router-dom";

function ProfiloUtente() {
  const { id } = useParams();
  return <h2>Profilo utente: {id}</h2>;
}

// Rotta:
<Route path="/utente/:id" element={<ProfiloUtente />} />`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>
                        📍 <code>useLocation()</code> – info sulla pagina
                        attuale
                      </strong>
                      <br />
                      👉 Ti dice dove ti trovi, utile per logging, redirect
                      condizionali, ecc.
                      <pre
                        className="bg-black text-light p-2 rounded"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {String.raw`import { useLocation } from "react-router-dom";

function InfoPagina() {
  const location = useLocation();
  return <p>Sei su: {location.pathname}</p>;
}`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>📌 Ricorda:</strong>
                      <br />- Questi hook funzionano solo **dentro componenti
                      figli di <code>BrowserRouter</code>**
                      <br />
                      - Puoi usarli insieme per creare **routing dinamico e
                      intelligente**
                      <br />- <code>useNavigate</code> è perfetto per redirect
                      dopo login, logout, invio form, ecc.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🧭 Mini-progetto React Router – SPA con 3 pagine
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title>
                    🧭 Mini-progetto React Router: SPA con navigazione
                  </Card.Title>
                  <p className="mb-3 text-start">
                    Questo progetto include:
                    <br />– Navigazione con <code>&lt;Link&gt;</code> e{" "}
                    <code>useNavigate()</code>
                    <br />– Parametri dinamici con <code>useParams()</code>
                    <br />– Informazioni sulla pagina con{" "}
                    <code>useLocation()</code>
                    <br />– 3 pagine: Home, Profilo, Dettaglio Utente
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  useLocation
} from "react-router-dom";

// Pagina Home
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Home</h2>
      <button onClick={() => navigate("/profilo")}>Vai al Profilo</button>
    </>
  );
}

// Pagina Profilo
function Profilo() {
  const location = useLocation();
  return (
    <>
      <h2>Profilo</h2>
      <p>Sei su: {location.pathname}</p>
      <Link to="/utente/42">Vai al dettaglio utente 42</Link>
    </>
  );
}

// Pagina con parametro dinamico
function Utente() {
  const { id } = useParams();
  return <h2>Dettaglio utente: {id}</h2>;
}

// App principale
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profilo">Profilo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profilo" element={<Profilo />} />
        <Route path="/utente/:id" element={<Utente />} />
      </Routes>
    </BrowserRouter>
  );
}`}
                  </pre>
                </Card.Body>
              </Card>
              <h2 className="mt-5">Esempio di nav</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧭 Navbar – Navigazione tra i componenti della tua app
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    La <strong>navbar</strong> è il cuore della navigazione
                    della tua app. Ti permette di accedere rapidamente ai
                    componenti come <code>Auth</code>, <code>Muscolo</code>,{" "}
                    <code>Cloudinary</code>, <code>Book</code>,{" "}
                    <code>Test</code> e altri. Puoi usare{" "}
                    <code>react-router-dom</code> per gestire i link e{" "}
                    <code>Bootstrap</code> per lo stile.
                  </p>

                  {/* Installazione */}
                  <p className="mt-4">
                    <strong>📦 Installazione pacchetti necessari</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`npm install react-router-dom bootstrap`}
                  </pre>

                  {/* Importazioni */}
                  <p className="mt-4">
                    <strong>📥 Importazioni nel file principale</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';`}
                  </pre>

                  {/* Navbar */}
                  <p className="mt-4">
                    <strong>
                      🧩 Esempio: <code>Navbar.js</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Riassunto App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/auth">Auth</Nav.Link>
            <Nav.Link as={Link} to="/muscolo">Muscolo</Nav.Link>
            <Nav.Link as={Link} to="/cloudinary">Cloudinary</Nav.Link>
            <Nav.Link as={Link} to="/book">Book</Nav.Link>
            <Nav.Link as={Link} to="/test">Test</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;`}
                  </pre>

                  {/* Routing */}
                  <p className="mt-4">
                    <strong>
                      🗺️ Routing nel file <code>App.js</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`import AppNavbar from './Navbar';
import AuthComponent from './components/AuthComponent';
import MuscoloComponent from './components/MuscoloComponent';
import CloudinaryComponent from './components/CloudinaryComponent';
import BookComponent from './components/BookComponent';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/auth" element={<AuthComponent />} />
        <Route path="/muscolo" element={<MuscoloComponent />} />
        <Route path="/cloudinary" element={<CloudinaryComponent />} />
        <Route path="/book" element={<BookComponent />} />
        <Route path="/test" element={<TestComponent />} />
      </Routes>
    </Router>
  );
}

export default App;`}
                  </pre>
                </Card.Body>
              </Card>

              <h2 className="mt-5">axios – richieste HTTP semplificate</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title>
                    🚀 Axios: semplificare le chiamate HTTP
                  </Card.Title>

                  <p className="text-start">
                    <strong>📦 Cos’è:</strong>
                    <br />
                    <code>axios</code> è una libreria per fare richieste HTTP in
                    modo semplice e leggibile.
                    <br />
                    👉 Supporta `GET`, `POST`, `PUT`, `PATCH`, `DELETE` e
                    gestisce automaticamente JSON e headers.
                  </p>

                  <p className="mt-3 text-start">
                    <strong>📦 Installazione:</strong>
                    <br />
                    <code>npm install axios</code> oppure{" "}
                    <code>yarn add axios</code>
                  </p>

                  <p className="mt-3 text-start">
                    <strong>📥 GET – leggere dati</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`import axios from "axios";

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}, []);`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📝 POST – creare risorsa</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`axios.post("https://jsonplaceholder.typicode.com/posts", {
  title: "Nuovo post",
  body: "Contenuto",
  userId: 1
})
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔄 PUT – aggiornare completamente</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`axios.put("https://jsonplaceholder.typicode.com/posts/1", {
  id: 1,
  title: "Post aggiornato",
  body: "Nuovo contenuto",
  userId: 1
})
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🧩 PATCH – aggiornare parzialmente</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
  title: "Titolo modificato"
})
  .then(res => console.log(res.data))
  .catch(err => console.error(err));`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🗑️ DELETE – eliminare</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem", whiteSpace: "pre-wrap" }}
                  >
                    {String.raw`axios.delete("https://jsonplaceholder.typicode.com/posts/1")
  .then(() => console.log("Post eliminato"))
  .catch(err => console.error(err));`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📌 Bonus:</strong>
                    <br />
                    – Puoi impostare un’istanza con `axios.create()`
                    <br />
                    – Gestisce timeout, token, interceptors e response globali
                    <br />– Perfetto per progetti React, Vue, Angular e Node
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

export default React
