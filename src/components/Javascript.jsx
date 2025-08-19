import { Col, Container, Row, Card, Table } from "react-bootstrap"
import "../styles/javascript.css"
const Javascript = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <h1>JavaScript: guida completa</h1>
              <p>
                JavaScript è il linguaggio che rende il web interattivo. In
                questa guida ripercorriamo tutto: dalle basi fino alle fasi più
                critiche, con esempi, tabelle e consigli pratici.
              </p>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🚀 JavaScript: da dove si comincia
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>🧠 Cos’è:</strong>
                      <br />
                      Linguaggio di programmazione usato per rendere il web
                      interattivo. → È eseguito dal browser (client-side), ma
                      può anche girare su server (Node.js).
                    </li>

                    <li className="mt-3">
                      <strong>📦 Cosa può fare:</strong>
                      <br />
                      Manipolare il DOM, gestire eventi, validare form, creare
                      animazioni, comunicare con API, gestire logica e dati.
                    </li>

                    <li className="mt-3">
                      <strong>🧮 Sintassi base:</strong>
                      <br />
                      Simile a C/Java, ma molto flessibile. → Usa{" "}
                      <code>let</code>, <code>const</code>,{" "}
                      <code>function</code>, <code>if</code>, <code>for</code>,
                      ecc.
                    </li>

                    <li className="mt-3">
                      <strong>🔄 Tipi di dato:</strong>
                      <br />
                      <code>String</code>, <code>Number</code>,{" "}
                      <code>Boolean</code>, <code>Array</code>,{" "}
                      <code>Object</code>, <code>null</code>,{" "}
                      <code>undefined</code>
                    </li>

                    <li className="mt-3">
                      <strong>⚡ Come si scrive:</strong>
                      <br />
                      Puoi inserirlo in una pagina HTML con{" "}
                      <code>&lt;script&gt;</code> oppure usarlo in file{" "}
                      <code>.js</code> separati.
                    </li>

                    <li className="mt-3">
                      <strong>🧯 Attenzione:</strong>
                      <br />
                      JavaScript è asincrono, dinamico e permissivo → può essere
                      potente ma anche imprevedibile se non gestito bene.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">📦 Variabili e tipi di dato</h2>

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
                      <code>var</code>
                    </td>
                    <td>
                      Dichiarazione vecchia, ha scope globale o di funzione
                    </td>
                    <td>
                      <code>var nome = "Stella";</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>let</code>
                    </td>
                    <td>
                      Variabile con scope di blocco, può essere riassegnata
                    </td>
                    <td>
                      <code>let età = 25;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>const</code>
                    </td>
                    <td>
                      Costante con scope di blocco, non può essere riassegnata
                    </td>
                    <td>
                      <code>const PI = 3.14;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>String</code>
                    </td>
                    <td>Testo racchiuso tra virgolette</td>
                    <td>
                      <code>"Ciao mondo"</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Number</code>
                    </td>
                    <td>Numeri interi o decimali</td>
                    <td>
                      <code>42</code>, <code>3.14</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Boolean</code>
                    </td>
                    <td>Valore logico: vero o falso</td>
                    <td>
                      <code>true</code>, <code>false</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>null</code>
                    </td>
                    <td>Valore intenzionalmente vuoto</td>
                    <td>
                      <code>let x = null;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>undefined</code>
                    </td>
                    <td>Variabile dichiarata ma non inizializzata</td>
                    <td>
                      <code>let y;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>typeof</code>
                    </td>
                    <td>Restituisce il tipo di dato</td>
                    <td>
                      <code>typeof "ciao" // string</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>parseInt / parseFloat</code>
                    </td>
                    <td>Conversione da stringa a numero</td>
                    <td>
                      <code>parseInt("42")</code>,{" "}
                      <code>parseFloat("3.14")</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>String()</code>
                    </td>
                    <td>Conversione da numero a stringa</td>
                    <td>
                      <code>String(100)</code> → <code>"100"</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">
                📦 Variabili & Tipi – consigli da tenere a mente
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📦 Variabili & Tipi: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        🔐 Usa <code>const</code> quando puoi:
                      </strong>
                      <br />
                      Se il valore non deve cambiare, usa <code>const</code> → è
                      più sicuro e leggibile.
                    </li>

                    <li className="mt-3">
                      <strong>
                        🔄 Usa <code>let</code> per variabili che cambiano:
                      </strong>
                      <br />
                      Perfetto per contatori, input dinamici, loop.
                    </li>

                    <li className="mt-3">
                      <strong>
                        ⚠️ Evita <code>var</code>:
                      </strong>
                      <br />
                      Ha scope strano e può causare bug → è considerato
                      obsoleto.
                    </li>

                    <li className="mt-3">
                      <strong>
                        🧪 Controlla il tipo con <code>typeof</code>:
                      </strong>
                      <br />
                      Utile per debug e validazioni → <code>typeof x</code>{" "}
                      restituisce il tipo.
                    </li>

                    <li className="mt-3">
                      <strong>🔁 Conversioni sicure:</strong>
                      <br />
                      Usa <code>parseInt</code>, <code>parseFloat</code>,{" "}
                      <code>String()</code> per convertire i dati senza
                      sorprese.
                    </li>

                    <li className="mt-3">
                      <strong>
                        🧯 Attenzione a <code>null</code> vs{" "}
                        <code>undefined</code>:
                      </strong>
                      <br />
                      <code>null</code> = assenza intenzionale,{" "}
                      <code>undefined</code> = variabile non inizializzata.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🔁 Controllo del flusso: logica e condizioni
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
                    <th>Istruzione</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>if</code>
                    </td>
                    <td>Controlla se una condizione è vera</td>
                    <td>
                      <code>
                        if (x &gt; 10) &#123; console.log("Grande"); &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>else</code>
                    </td>
                    <td>Blocco alternativo se la condizione è falsa</td>
                    <td>
                      <code>else &#123; console.log("Piccolo"); &#125;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>else if</code>
                    </td>
                    <td>Controlla condizioni multiple</td>
                    <td>
                      <code>else if (x === 10) &#123; ... &#125;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>switch</code>
                    </td>
                    <td>Controlla più casi con una sola variabile</td>
                    <td>
                      <code>
                        switch (giorno) &#123;
                        <br />
                        &nbsp;&nbsp;case "Lunedì": ...
                        <br />
                        &nbsp;&nbsp;break;
                        <br />
                        &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>for</code>
                    </td>
                    <td>Loop con contatore</td>
                    <td>
                      <code>
                        for (let i = 0; i &lt; 5; i++) &#123; ... &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>while</code>
                    </td>
                    <td>Loop finché la condizione è vera</td>
                    <td>
                      <code>while (x &lt; 10) &#123; x++; &#125;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>do...while</code>
                    </td>
                    <td>Esegue almeno una volta, poi controlla</td>
                    <td>
                      <code>do &#123; x++; &#125; while (x &lt; 10);</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>break</code>
                    </td>
                    <td>Interrompe un loop o uno switch</td>
                    <td>
                      <code>if (x === 5) break;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>continue</code>
                    </td>
                    <td>Salta alla prossima iterazione</td>
                    <td>
                      <code>if (x % 2 === 0) continue;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">
                🔁 Controllo del flusso – consigli pratici
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔁 Controllo del flusso: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        🧠 Usa <code>if</code> per condizioni semplici:
                      </strong>
                      <br />
                      Perfetto per controlli diretti →{" "}
                      <code>if (x &gt; 10)</code>
                    </li>

                    <li className="mt-3">
                      <strong>
                        🔀 <code>switch</code> è utile per molti casi:
                      </strong>
                      <br />
                      Più leggibile di tanti <code>else if</code> → ideale per
                      menu, giorni, opzioni
                    </li>

                    <li className="mt-3">
                      <strong>
                        🔁 <code>for</code> per loop con contatore:
                      </strong>
                      <br />
                      Usa <code>for</code> quando sai quante volte iterare
                    </li>

                    <li className="mt-3">
                      <strong>
                        ♻️ <code>while</code> per condizioni dinamiche:
                      </strong>
                      <br />
                      Perfetto quando non sai quante volte iterare
                    </li>

                    <li className="mt-3">
                      <strong>
                        🧯 Attenzione a <code>break</code> e{" "}
                        <code>continue</code>:
                      </strong>
                      <br />
                      Usali con criterio per evitare loop infiniti o salti
                      imprevisti
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">Esempi</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔁 Controllo del flusso: logica e condizioni
                  </Card.Title>

                  <p className="text-start">
                    <strong>📌 if / else / else if:</strong>
                    <br />
                    Permettono di eseguire blocchi di codice in base a
                    condizioni.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`const x = 10;

if (x > 10) {
  console.log("Grande");
} else if (x === 10) {
  console.log("Esatto");
} else {
  console.log("Piccolo");
}`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🎯 switch:</strong>
                    <br />
                    Utile per gestire più casi con una sola variabile.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`const giorno = "Lunedì";

switch (giorno) {
  case "Lunedì":
    console.log("Inizio settimana");
    break;
  case "Venerdì":
    console.log("Quasi weekend");
    break;
  default:
    console.log("Altro giorno");
}`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔁 for:</strong>
                    <br />
                    Loop con contatore.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`for (let i = 0; i < 5; i++) {
  console.log("Iterazione", i);
}`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔄 while:</strong>
                    <br />
                    Esegue finché la condizione è vera.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`let x = 0;

while (x < 3) {
  console.log("x è", x);
  x++;
}`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔂 do...while:</strong>
                    <br />
                    Esegue almeno una volta, poi controlla.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`let y = 0;

do {
  console.log("y è", y);
  y++;
} while (y < 3);`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>⛔ break:</strong>
                    <br />
                    Interrompe un loop o uno switch.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>➡️ continue:</strong>
                    <br />
                    Salta alla prossima iterazione.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) continue;
  console.log("Numero dispari:", i);
}`}
                  </pre>
                </Card.Body>
              </Card>

              <h2 className="mt-5">📦 Array & Oggetti: gestire i dati</h2>

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
                    <th>Elemento / Metodo</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>Array</code>
                    </td>
                    <td>Lista ordinata di elementi</td>
                    <td>
                      <code>let colori = ["rosso", "blu", "verde"];</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Object</code>
                    </td>
                    <td>Struttura con coppie chiave-valore</td>
                    <td>
                      <code>
                        let persona = &#123; nome: "Stella", età: 30 &#125;;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>push()</code>
                    </td>
                    <td>Aggiunge un elemento alla fine di un array</td>
                    <td>
                      <code>colori.push("giallo");</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>pop()</code>
                    </td>
                    <td>Rimuove l’ultimo elemento</td>
                    <td>
                      <code>colori.pop();</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>map()</code>
                    </td>
                    <td>
                      Trasforma ogni elemento e restituisce un nuovo array
                    </td>
                    <td>
                      <code>colori.map(c =&gt; c.toUpperCase());</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>filter()</code>
                    </td>
                    <td>
                      Restituisce solo gli elementi che soddisfano una
                      condizione
                    </td>
                    <td>
                      <code>colori.filter(c =&gt; c !== "blu");</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>for...of</code>
                    </td>
                    <td>Itera sugli elementi di un array</td>
                    <td>
                      <code>
                        for (let c of colori) &#123; console.log(c); &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>for...in</code>
                    </td>
                    <td>Itera sulle chiavi di un oggetto</td>
                    <td>
                      <code>
                        for (let chiave in persona) &#123; console.log(chiave);
                        &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>spread (...)</code>
                    </td>
                    <td>Espande un array o oggetto</td>
                    <td>
                      <code>let copia = [...colori];</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>rest (...)</code>
                    </td>
                    <td>Raccoglie valori in un array</td>
                    <td>
                      <code>
                        function somma(...numeri) &#123; return
                        numeri.reduce(...); &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>destructuring</code>
                    </td>
                    <td>Estrae valori da array o oggetti</td>
                    <td>
                      <code>let [a, b] = colori;</code> /{" "}
                      <code>let &#123; nome &#125; = persona;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">
                Array, Oggetti e Metodi JavaScript – esempi pratici
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧩 Array, Oggetti e Metodi JavaScript
                  </Card.Title>

                  <p className="text-start">
                    <strong>📦 Array:</strong>
                    <br />
                    Lista ordinata di elementi.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`let colori = ["rosso", "blu", "verde"];`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🧠 Object:</strong>
                    <br />
                    Struttura con coppie chiave-valore.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`let persona = { nome: "Stella", età: 30 };`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>➕ push():</strong>
                    <br />
                    Aggiunge un elemento alla fine di un array.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`colori.push("giallo"); // ["rosso", "blu", "verde", "giallo"]`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>➖ pop():</strong>
                    <br />
                    Rimuove l’ultimo elemento.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`colori.pop(); // ["rosso", "blu"]`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔁 map():</strong>
                    <br />
                    Trasforma ogni elemento e restituisce un nuovo array.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`const maiuscoli = colori.map(c => c.toUpperCase());
// ["ROSSO", "BLU", "VERDE"]`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔍 filter():</strong>
                    <br />
                    Restituisce solo gli elementi che soddisfano una condizione.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`const senzaBlu = colori.filter(c => c !== "blu");
// ["rosso", "verde"]`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔄 for...of:</strong>
                    <br />
                    Itera sugli elementi di un array.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`for (let c of colori) {
  console.log(c);
}`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔑 for...in:</strong>
                    <br />
                    Itera sulle chiavi di un oggetto.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`for (let chiave in persona) {
  console.log(chiave); // "nome", "età"
}`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📤 spread (...):</strong>
                    <br />
                    Espande un array o oggetto.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`let copia = [...colori]; // ["rosso", "blu", "verde"]`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📥 rest (...):</strong>
                    <br />
                    Raccoglie valori in un array.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`function somma(...numeri) {
  return numeri.reduce((acc, n) => acc + n, 0);
}

somma(1, 2, 3); // 6`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🧪 destructuring:</strong>
                    <br />
                    Estrae valori da array o oggetti.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`let [a, b] = colori; // a = "rosso", b = "blu"
let { nome } = persona; // nome = "Stella"`}
                  </pre>
                </Card.Body>
              </Card>

              <h2 className="mt-5">📦 Array & Oggetti – consigli pratici</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📦 Array & Oggetti: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        🧠 Usa <code>map()</code> per trasformare:
                      </strong>
                      <br />
                      Perfetto per generare nuovi array senza modificare
                      l’originale.
                    </li>

                    <li className="mt-3">
                      <strong>
                        🔍 <code>filter()</code> per selezionare:
                      </strong>
                      <br />
                      Utile per rimuovere elementi o trovare quelli che ti
                      servono.
                    </li>

                    <li className="mt-3">
                      <strong>
                        📦 <code>spread</code> per copiare:
                      </strong>
                      <br />
                      Evita modifiche involontarie → <code>
                        [...array]
                      </code>{" "}
                      crea una copia.
                    </li>

                    <li className="mt-3">
                      <strong>
                        🧩 <code>destructuring</code> per leggibilità:
                      </strong>
                      <br />
                      Estrai solo ciò che ti serve →{" "}
                      <code>let &#123; nome &#125; = persona;</code>
                    </li>

                    <li className="mt-3">
                      <strong>
                        ♻️ <code>for...of</code> vs <code>for...in</code>:
                      </strong>
                      <br />
                      <code>for...of</code> per array, <code>for...in</code> per
                      oggetti.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🧪 Funzioni avanzate: controllo, sintassi e magia
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
                    <th>Concetto</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>function</code>
                    </td>
                    <td>Dichiarazione classica</td>
                    <td>
                      <code>
                        function saluta() &#123; console.log("Ciao"); &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>arrow function</code>
                    </td>
                    <td>
                      Sintassi compatta, non ha <code>this</code>
                    </td>
                    <td>
                      <code>const saluta = () =&gt; console.log("Ciao");</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>callback</code>
                    </td>
                    <td>Funzione passata come argomento</td>
                    <td>
                      <code>
                        setTimeout(() =&gt; console.log("Boom"), 1000);
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>scope</code>
                    </td>
                    <td>Contesto in cui una variabile è visibile</td>
                    <td>
                      <code>
                        let x = 10; function test() &#123; console.log(x);
                        &#125;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>closure</code>
                    </td>
                    <td>Funzione che “ricorda” il contesto esterno</td>
                    <td>
                      <code>
                        function esterno() &#123; let x = 5; return () =&gt; x;
                        &#125;
                      </code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">
                Esempi Funzioni JavaScript + DOM & Eventi
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    ⚙️ Funzioni e DOM in JavaScript
                  </Card.Title>

                  <p className="text-start">
                    <strong>📦 Dichiarazione classica:</strong>
                    <br />
                    Funzione tradizionale.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`function saluta() {
  console.log("Ciao");
}`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>⚡ Arrow function:</strong>
                    <br />
                    Sintassi compatta, non ha il proprio <code>this</code>.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`const saluta = () => console.log("Ciao");`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🔁 Callback:</strong>
                    <br />
                    Funzione passata come argomento, eseguita “dopo”.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`setTimeout(() => console.log("Boom!"), 1000);`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>📦 Scope:</strong>
                    <br />
                    Le variabili vivono solo nel blocco in cui sono dichiarate.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`let x = 10;

function mostraX() {
  let x = 20;
  console.log(x); // 20
}

console.log(x); // 10`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🧠 Closure:</strong>
                    <br />
                    Una funzione interna “ricorda” le variabili esterne.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`function creaContatore() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const incrementa = creaContatore();
console.log(incrementa()); // 1
console.log(incrementa()); // 2`}
                  </pre>

                  <p className="mt-3 text-start">
                    <strong>🧯 Attenzione:</strong>
                    <br />
                    Le arrow function non vanno usate come metodi di oggetti se
                    ti serve <code>this</code>.
                  </p>

                  <hr className="bg-light" />

                  <p className="text-start">
                    <strong>🖱️ DOM & Eventi – interagire con la pagina</strong>
                  </p>

                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`// Seleziona elementi
const titolo = document.querySelector("#titolo");
const btn = document.getElementById("btn");

// Modifica contenuto
titolo.textContent = "Ciao Stella!";

// Aggiunge classe CSS
const box = document.querySelector(".box");
box.classList.add("attivo");

// Assegna evento
btn.addEventListener("click", () => {
  console.log("Hai cliccato!");
});

// Riferimento all’elemento cliccato
btn.addEventListener("click", (event) => {
  console.log(event.target);
});

// Blocca invio form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form bloccato");
});`}
                  </pre>
                </Card.Body>
              </Card>

              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧪 Funzioni avanzate: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>⚡ Arrow function:</strong>
                      <br />
                      Sintassi compatta, non ha il proprio <code>this</code>.
                      <br />
                      👉{" "}
                      <code>const saluta = () =&gt; console.log("Ciao");</code>
                    </li>

                    <li className="mt-3">
                      <strong>🔁 Callback:</strong>
                      <br />
                      Funzione passata come argomento, eseguita “dopo”.
                      <br />
                      👉{" "}
                      <code>
                        setTimeout(() =&gt; console.log("Boom!"), 1000);
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>📦 Scope:</strong>
                      <br />
                      Le variabili vivono solo nel blocco in cui sono
                      dichiarate.
                      <br />
                      👉
                      <code>
                        let x = 10;
                        <br />
                        function mostraX() &#123; let x = 20; console.log(x);
                        &#125;
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>🧠 Closure:</strong>
                      <br />
                      Una funzione interna “ricorda” le variabili esterne.
                      <br />
                      👉
                      <code>
                        function creaContatore() &#123;
                        <br />
                        &nbsp;&nbsp;let count = 0;
                        <br />
                        &nbsp;&nbsp;return function() &#123; count++; return
                        count; &#125;;
                        <br />
                        &#125;
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>🧯 Attenzione:</strong>
                      <br />
                      Le arrow function non vanno usate come metodi di oggetti
                      se ti serve <code>this</code>.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🖱️ DOM & Eventi: interagire con la pagina
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
                    <th>Metodo / Evento</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>document.querySelector()</code>
                    </td>
                    <td>
                      Seleziona il primo elemento che corrisponde al selettore
                    </td>
                    <td>
                      <code>document.querySelector("#titolo")</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>document.getElementById()</code>
                    </td>
                    <td>Seleziona un elemento tramite ID</td>
                    <td>
                      <code>document.getElementById("btn")</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>element.textContent</code>
                    </td>
                    <td>Modifica il testo di un elemento</td>
                    <td>
                      <code>titolo.textContent = "Ciao Stella!"</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>element.classList.add()</code>
                    </td>
                    <td>Aggiunge una classe CSS</td>
                    <td>
                      <code>box.classList.add("attivo")</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>addEventListener()</code>
                    </td>
                    <td>Assegna un evento a un elemento</td>
                    <td>
                      <code>btn.addEventListener("click", funzione)</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>event.target</code>
                    </td>
                    <td>Riferimento all’elemento che ha generato l’evento</td>
                    <td>
                      <code>console.log(event.target)</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>preventDefault()</code>
                    </td>
                    <td>
                      Blocca il comportamento predefinito (es. invio form)
                    </td>
                    <td>
                      <code>
                        form.addEventListener("submit", e =&gt;
                        e.preventDefault())
                      </code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">🖱️ DOM & Eventi – consigli + esempi</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🖱️ DOM & Eventi: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        🔍 Seleziona elementi con <code>querySelector</code>:
                      </strong>
                      <br />
                      👉{" "}
                      <code>const titolo = document.querySelector("h1");</code>
                    </li>

                    <li className="mt-3">
                      <strong>📝 Modifica contenuto o stile:</strong>
                      <br />
                      👉 <code>titolo.textContent = "Benvenuta Stella!";</code>
                      <br />
                      👉 <code>titolo.classList.add("evidenziato");</code>
                    </li>

                    <li className="mt-3">
                      <strong>
                        🖱️ Gestisci eventi con <code>addEventListener</code>:
                      </strong>
                      <br />
                      👉{" "}
                      <code>
                        btn.addEventListener("click", () =&gt;
                        alert("Cliccato!"));
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>🧯 Blocca azioni predefinite:</strong>
                      <br />
                      👉{" "}
                      <code>
                        form.addEventListener("submit", e =&gt;
                        e.preventDefault());
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>
                        📦 Usa <code>event.target</code> per sapere chi ha
                        generato l’evento:
                      </strong>
                      <br />
                      👉 <code>console.log(event.target.textContent);</code>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧪 Funzione completa con DOM & logica JS</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧪 Funzione completa: DOM + logica JS
                  </Card.Title>
                  <pre className="text-start text-light bg-black p-3 rounded">
                    {`// 🌟 Variabili e closure
function creaContatore() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}

const contatore = creaContatore(); // closure attiva

// 🌟 Selezione DOM
const titolo = document.querySelector("#titolo");
const btn = document.querySelector("#btn");

// 🌟 Funzione callback
function aggiornaTitolo() {
  const numero = contatore(); // ogni click incrementa
  titolo.textContent = "Hai cliccato " + numero + " volte!";
  titolo.classList.add("attivo");
}

// 🌟 Evento con arrow function
btn.addEventListener("click", () => {
  aggiornaTitolo(); // callback
});
`}
                  </pre>
                  <p className="mt-3 text-center">
                    ✅ Questo esempio usa <strong>closure</strong> per contare,{" "}
                    <strong>arrow function</strong> per l’evento,
                    <strong>callback</strong> per modularità, e{" "}
                    <strong>DOM</strong> per interazione visiva.
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                ⚡ Async & Promise: gestire il tempo e le API
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
                    <th>Concetto</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>setTimeout()</code>
                    </td>
                    <td>Esegue una funzione dopo un tempo</td>
                    <td>
                      <code>
                        setTimeout(() =&gt; console.log("Boom!"), 1000);
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Promise</code>
                    </td>
                    <td>Oggetto che rappresenta un’operazione futura</td>
                    <td>
                      <code>new Promise((resolve, reject) =&gt; ...)</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.then()</code>
                    </td>
                    <td>Gestisce il risultato di una Promise</td>
                    <td>
                      <code>fetch(...).then(res =&gt; res.json())</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.catch()</code>
                    </td>
                    <td>Gestisce gli errori di una Promise</td>
                    <td>
                      <code>
                        fetch(...).catch(err =&gt; console.error(err))
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>async</code>
                    </td>
                    <td>Funzione che restituisce una Promise</td>
                    <td>
                      <code>async function carica() &#123; ... &#125;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>await</code>
                    </td>
                    <td>Aspetta il risultato di una Promise</td>
                    <td>
                      <code>const dati = await fetch(...)</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>try...catch</code>
                    </td>
                    <td>
                      Gestisce errori in blocchi <code>async</code>
                    </td>
                    <td>
                      <code>
                        try &#123; await fetch(...) &#125; catch(err) &#123; ...
                        &#125;
                      </code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">⚡ Async & Promise – consigli + esempi</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    ⚡ Async & Promise: trucchi da ricordare
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        ⏳ <code>setTimeout</code> per ritardi:
                      </strong>
                      <br />
                      👉{" "}
                      <code>
                        setTimeout(() =&gt; console.log("Pronto!"), 2000);
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>
                        📦 <code>Promise</code> per operazioni future:
                      </strong>
                      <br />
                      👉{" "}
                      <code>
                        new Promise((resolve, reject) =&gt; resolve("OK"));
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>
                        🔁 <code>async/await</code> semplifica il codice:
                      </strong>
                      <br />
                      👉 <code>const res = await fetch(url);</code>
                    </li>

                    <li className="mt-3">
                      <strong>
                        🧯 Usa <code>try...catch</code> per gestire errori:
                      </strong>
                      <br />
                      👉{" "}
                      <code>
                        try &#123; await fetch(...) &#125; catch(e) &#123;
                        console.error(e); &#125;
                      </code>
                    </li>

                    <li className="mt-3">
                      <strong>
                        🔍 <code>.then()</code> e <code>.catch()</code> sono
                        ancora utili:
                      </strong>
                      <br />
                      👉 <code>fetch(...).then(...).catch(...);</code> → stile
                      classico
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <h2 className="mt-5">⚡ Async & Fetch – esempi completi</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    ⚡ Async & Fetch: esempi pratici
                  </Card.Title>
                  <ul className="text-start mb-0">
                    <li>
                      <strong>
                        📦 Con <code>fetch().then()</code>:
                      </strong>
                      <br />
                      <pre className="bg-black text-light p-2 rounded">
                        {`const titolo = document.getElementById("titolo");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  titolo.textContent = "Caricamento...";
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(data => {
      titolo.textContent = "Benvenuto " + data.name;
    })
    .catch(err => {
      titolo.textContent = "Errore!";
      console.error(err);
    });
});`}
                      </pre>
                    </li>

                    <li className="mt-4">
                      <strong>
                        ⚡ Con <code>async/await</code>:
                      </strong>
                      <br />
                      <pre className="bg-black text-light p-2 rounded">
                        {`const titolo = document.getElementById("titolo");
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  try {
    titolo.textContent = "Caricamento...";
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    titolo.textContent = "Benvenuto " + data.name;
  } catch (err) {
    titolo.textContent = "Errore!";
    console.error(err);
  }
});`}
                      </pre>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
              <h2 className="mt-5">💻 Mini-progetto JS – tutto in azione</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    💻 Mini-progetto: tutto ciò che hai imparato
                  </Card.Title>
                  <pre
                    className="text-start text-light bg-black p-3 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {`// 🔁 Closure per contatore
function creaContatore() {
  let count = 0;
  return () => ++count;
}
const contatore = creaContatore();

// 🔍 Selezione DOM
const titolo = document.getElementById("titolo");
const btn = document.getElementById("btn");

// ⚡ Funzione async con fetch
async function caricaUtente() {
  try {
    titolo.textContent = "Caricamento...";
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    return data.name;
  } catch (err) {
    console.error("Errore nel fetch:", err);
    return "Errore!";
  }
}

// 🖱️ Evento con arrow function + callback
btn.addEventListener("click", async () => {
  const nome = await caricaUtente(); // async/await
  const clic = contatore();          // closure
  titolo.textContent = \`Ciao \${nome}, hai cliccato \${clic} volte!\`;
  titolo.classList.add("attivo");
});`}
                  </pre>
                  <p className="mt-3 text-center">
                    ✅ Questo progetto usa: <strong>closure</strong>,{" "}
                    <strong>async/await</strong>, <strong>fetch</strong>,{" "}
                    <strong>DOM</strong>, <strong>eventi</strong>,{" "}
                    <strong>arrow function</strong> e{" "}
                    <strong>gestione errori</strong>.
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
export default Javascript
