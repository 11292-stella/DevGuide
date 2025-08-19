import { Col, Container, Row, Table, Card } from "react-bootstrap"
import "../styles/java.css"

const Java = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <h1>☕ Java</h1>
              <p>
                Java è una delle fondamenta più solide per lo sviluppo backend,
                Android, e persino desktop.
              </p>

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
                    <th>Tipo</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>int</code>
                    </td>
                    <td>Numero intero</td>
                    <td>
                      <code>int numero = 10;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>double</code>
                    </td>
                    <td>Numero decimale ad alta precisione</td>
                    <td>
                      <code>double prezzo = 19.99;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>char</code>
                    </td>
                    <td>Singolo carattere Unicode</td>
                    <td>
                      <code>char iniziale = 'S';</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>boolean</code>
                    </td>
                    <td>Valore logico: vero o falso</td>
                    <td>
                      <code>boolean attiva = true;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>long</code>
                    </td>
                    <td>
                      Intero lungo (usa <code>L</code> alla fine)
                    </td>
                    <td>
                      <code>long id = 123456789L;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>float</code>
                    </td>
                    <td>
                      Numero decimale meno preciso (usa <code>f</code>)
                    </td>
                    <td>
                      <code>float peso = 5.5f;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>byte</code>
                    </td>
                    <td>Piccolo intero (da -128 a 127)</td>
                    <td>
                      <code>byte valore = 127;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>short</code>
                    </td>
                    <td>Intero breve (da -32.768 a 32.767)</td>
                    <td>
                      <code>short età = 25;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">
                Tipi di dato primitivi in Java – Esempi pratici
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧮 Tipi di dato primitivi in Java
                  </Card.Title>

                  {/* Interi */}
                  <p className="text-start mt-3">
                    <strong>🔢 Interi</strong>
                    <br />
                    <code>int</code> → intero standard
                    <br />
                    <code>long</code> → intero lungo, usa <code>L</code> finale
                    <br />
                    <code>short</code> → intero breve
                    <br />
                    <code>byte</code> → piccolo intero (da -128 a 127)
                  </p>

                  {/* Esempi interi */}
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`int numero = 42;
long id = 123456789L;
short età = 25;
byte valore = 127;`}
                  </pre>

                  {/* Decimali */}
                  <p className="text-start mt-4">
                    <strong>💰 Decimali</strong>
                    <br />
                    <code>double</code> → decimale ad alta precisione
                    <br />
                    <code>float</code> → decimale meno preciso, usa{" "}
                    <code>f</code> finale
                  </p>

                  {/* Esempi decimali */}
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`double prezzo = 19.99;
float peso = 5.5f;`}
                  </pre>

                  {/* Caratteri e logica */}
                  <p className="text-start mt-4">
                    <strong>🔤 Caratteri e logica</strong>
                    <br />
                    <code>char</code> → singolo carattere Unicode
                    <br />
                    <code>boolean</code> → vero o falso
                  </p>

                  {/* Esempi caratteri e boolean */}
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`char iniziale = 'S';
boolean attiva = true;`}
                  </pre>

                  {/* Note finali */}
                  <p className="text-start mt-4">
                    <strong>📌 Note utili</strong>
                    <br />I tipi primitivi non possono essere <code>null</code>
                    <br />
                    Sono <strong>case-sensitive</strong> e non hanno metodi
                    associati
                    <br />
                    Usali per ottimizzare memoria e performance
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">Tipi Complessi</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧠 Tipi di dato complessi in Java
                  </Card.Title>

                  {/* String */}
                  <p className="text-start mt-3">
                    <strong>
                      🔤 <code>String</code>
                    </strong>
                    <br />
                    Tipo complesso per gestire testo. È una classe, non un tipo
                    primitivo.
                    <br />
                    Supporta metodi come <code>.length()</code>,{" "}
                    <code>.toUpperCase()</code>, <code>.contains()</code>
                  </p>

                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`String nome = "Stella";
System.out.println(nome.toUpperCase()); // STELLA`}
                  </pre>

                  {/* Array */}
                  <p className="text-start mt-4">
                    <strong>
                      📦 <code>Array</code>
                    </strong>
                    <br />
                    Struttura fissa per contenere più elementi dello stesso
                    tipo.
                    <br />
                    La dimensione è definita alla creazione e non può cambiare.
                  </p>

                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`int[] voti = {8, 7, 9};
System.out.println(voti[0]); // 8`}
                  </pre>

                  {/* ArrayList */}
                  <p className="text-start mt-4">
                    <strong>
                      📚 <code>ArrayList</code>
                    </strong>
                    <br />
                    Collezione dinamica che può crescere o ridursi. Fa parte di{" "}
                    <code>java.util</code>
                    <br />
                    Supporta metodi come <code>.add()</code>,{" "}
                    <code>.remove()</code>, <code>.size()</code>
                  </p>

                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`import java.util.ArrayList;

ArrayList<String> nomi = new ArrayList<>();
nomi.add("Stella");
nomi.add("Luna");
System.out.println(nomi.size()); // 2`}
                  </pre>

                  {/* HashMap */}
                  <p className="text-start mt-4">
                    <strong>
                      🗂️ <code>HashMap</code>
                    </strong>
                    <br />
                    Mappa che associa chiavi a valori. Fa parte di{" "}
                    <code>java.util</code>
                    <br />
                    Utile per accedere rapidamente a dati tramite una chiave.
                  </p>

                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`import java.util.HashMap;

HashMap<String, Integer> punteggi = new HashMap<>();
punteggi.put("Stella", 10);
System.out.println(punteggi.get("Stella")); // 10`}
                  </pre>

                  {/* Note finali */}
                  <p className="text-start mt-4">
                    <strong>📌 Note utili</strong>
                    <br />
                    I tipi complessi sono oggetti, quindi hanno metodi e
                    proprietà
                    <br />
                    Devono essere importati se non fanno parte del package{" "}
                    <code>java.lang</code>
                    <br />
                    Usali per gestire strutture dati più flessibili e potenti
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🔗 Operatori logici in Java </h2>
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
                    <th>Operatore</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>&amp;&amp;</code>
                    </td>
                    <td>
                      AND logico – vero se entrambe le condizioni sono vere
                    </td>
                    <td>
                      <code>(x &gt; 5 &amp;&amp; y &lt; 10)</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>||</code>
                    </td>
                    <td>OR logico – vero se almeno una condizione è vera</td>
                    <td>
                      <code>(x &gt; 5 || y &lt; 10)</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>!</code>
                    </td>
                    <td>NOT logico – inverte il valore booleano</td>
                    <td>
                      <code>!(x &gt; 5)</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>==</code>
                    </td>
                    <td>Uguale – confronta due valori</td>
                    <td>
                      <code>x == y</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>!=</code>
                    </td>
                    <td>Diverso – vero se i valori sono diversi</td>
                    <td>
                      <code>x != y</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>&amp;</code>
                    </td>
                    <td>AND bitwise – confronta bit per bit</td>
                    <td>
                      <code>x &amp; y</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>|</code>
                    </td>
                    <td>OR bitwise – confronta bit per bit</td>
                    <td>
                      <code>x | y</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>^</code>
                    </td>
                    <td>XOR bitwise – vero se i bit sono diversi</td>
                    <td>
                      <code>x ^ y</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-5">🔗 Utilizzo degli operatori logici</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔗 Operatori logici in Java – Esempi pratici
                  </Card.Title>

                  {/* AND logico */}
                  <p className="text-start mt-3">
                    <strong>
                      ✅ <code>&&</code> – AND logico
                    </strong>
                    <br />
                    Restituisce <code>true</code> solo se entrambe le condizioni
                    sono vere.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`int età = 20;
boolean isStudent = true;

if (età > 18 && isStudent) {
  System.out.println("Accesso consentito");
}`}
                  </pre>

                  {/* OR logico */}
                  <p className="text-start mt-4">
                    <strong>
                      🔀 <code>||</code> – OR logico
                    </strong>
                    <br />
                    Restituisce <code>true</code> se almeno una condizione è
                    vera.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`boolean haInvito = false;
boolean èVIP = true;

if (haInvito || èVIP) {
  System.out.println("Entra alla festa");
}`}
                  </pre>

                  {/* NOT logico */}
                  <p className="text-start mt-4">
                    <strong>
                      🚫 <code>!</code> – NOT logico
                    </strong>
                    <br />
                    Inverte il valore booleano.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`boolean acceso = false;

if (!acceso) {
  System.out.println("Accendi il dispositivo");
}`}
                  </pre>

                  {/* Uguale e diverso */}
                  <p className="text-start mt-4">
                    <strong>
                      🔍 <code>==</code> / <code>!=</code> – confronto
                    </strong>
                    <br />
                    <code>==</code> verifica uguaglianza, <code>!=</code>{" "}
                    verifica disuguaglianza.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`int a = 5;
int b = 7;

if (a != b) {
  System.out.println("I valori sono diversi");
}`}
                  </pre>

                  {/* Note finali */}
                  <p className="text-start mt-4">
                    <strong>📌 Note utili</strong>
                    <br />
                    Gli operatori logici sono fondamentali per il controllo del
                    flusso
                    <br />
                    Possono essere combinati per creare condizioni complesse
                    <br />
                    Gli operatori bitwise (<code>&</code>, <code>|</code>,{" "}
                    <code>^</code>) agiscono sui singoli bit
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🔄 Cicli in Java – for, while, do-while, for-each
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔄 Java – Cicli e Iterazioni
                  </Card.Title>

                  {/* For */}
                  <p className="mt-3">
                    <strong>
                      🔁 <code>for</code>
                    </strong>
                    <br />
                    Usato quando sai quante volte vuoi ripetere qualcosa.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`for (int i = 0; i < 5; i++) {
  System.out.println("Iterazione: " + i);
}`}
                  </pre>

                  {/* While */}
                  <p className="mt-4">
                    <strong>
                      🔄 <code>while</code>
                    </strong>
                    <br />
                    Esegue il ciclo finché la condizione è vera. Controlla prima
                    di entrare.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`int i = 0;
while (i < 5) {
  System.out.println("Valore: " + i);
  i++;
}`}
                  </pre>

                  {/* Do-While */}
                  <p className="mt-4">
                    <strong>
                      🔂 <code>do-while</code>
                    </strong>
                    <br />
                    Simile a <code>while</code>, ma esegue almeno una volta
                    prima di controllare.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`int i = 0;
do {
  System.out.println("Eseguito almeno una volta: " + i);
  i++;
} while (i < 5);`}
                  </pre>

                  {/* For-Each */}
                  <p className="mt-4">
                    <strong>
                      📦 <code>for-each</code>
                    </strong>
                    <br />
                    Usato per scorrere array o collezioni in modo semplice.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`String[] nomi = {"Stella", "Luna", "Sole"};

for (String nome : nomi) {
  System.out.println("Ciao " + nome);
}`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    <strong>📌 In sintesi</strong>
                    <br />- <code>for</code>: iterazioni con contatore
                    <br />- <code>while</code>: condizione controllata prima
                    <br />- <code>do-while</code>: esegue almeno una volta
                    <br />- <code>for-each</code>: comodo per array e liste
                  </p>
                </Card.Body>
              </Card>

              <h2 className="mt-5"> 🧠 Cos’è una classe in Java?</h2>
              <p>
                {" "}
                In Java, una classe è un modello (template) che descrive le
                proprietà (variabili) e i comportamenti (metodi) di un oggetto.
                È il cuore della programmazione orientata agli oggetti (OOP).
              </p>
              <h3>📦 Una classe definisce:</h3>
              <ul>
                <li>
                  Attributi → variabili che descrivono lo stato dell’oggetto
                </li>
                <li>Metodi → funzioni che descrivono il comportamento</li>
                <li>Costruttori → metodo speciale per creare oggetti</li>
                <li>
                  Modificatori di accesso → controllano la visibilità (public,
                  private, ecc.)
                </li>
              </ul>
              <h2 className="mt-4">Struttura base di una classe Java</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🏗️ Struttura di una classe Java
                  </Card.Title>

                  {/* Definizione della classe */}
                  <p className="text-start mt-3">
                    <strong>📘 Definizione</strong>
                    <br />
                    Una classe si dichiara con <code>class</code> e può
                    contenere attributi, metodi e costruttori.
                  </p>

                  {/* Esempio completo */}
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Persona {
  // Attributi
  String nome;
  int età;

  // Costruttore
  public Persona(String nome, int età) {
    this.nome = nome;
    this.età = età;
  }

  // Metodo
  public void saluta() {
    System.out.println("Ciao, sono " + nome + " e ho " + età + " anni.");
  }
}`}
                  </pre>

                  {/* Istanza */}
                  <p className="text-start mt-4">
                    <strong>🧪 Creazione di un oggetto</strong>
                    <br />
                    Per usare una classe, si crea un'istanza (oggetto) con{" "}
                    <code>new</code>.
                  </p>

                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`Persona stella = new Persona("Stella", 30);
stella.saluta();`}
                  </pre>

                  {/* Spiegazioni */}
                  <p className="text-start mt-4">
                    <strong>🔍 Dettagli</strong>
                    <br />
                    <code>this</code> → si riferisce all’istanza corrente
                    <br />
                    <code>public</code> → visibile ovunque
                    <br />
                    <code>private</code> → accessibile solo all’interno della
                    classe
                  </p>

                  <p className="text-start mt-3">
                    <strong>🧱 Buone pratiche</strong>
                    <br />
                    - Usa nomi chiari e camelCase
                    <br />- Incapsula i dati con <code>private</code> +
                    getter/setter
                    <br />- Ogni classe dovrebbe rappresentare un concetto
                    preciso
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-4">🔐Modificatori di accesso in Java</h2>
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
                    <th>Modificatore</th>
                    <th>Visibilità</th>
                    <th>Descrizione</th>
                    <th>Esempio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>public</code>
                    </td>
                    <td>Tutti i package</td>
                    <td>Accessibile ovunque</td>
                    <td>
                      <code>public int età;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>private</code>
                    </td>
                    <td>Solo nella classe</td>
                    <td>Nasconde i dati, utile per l’incapsulamento</td>
                    <td>
                      <code>private String nome;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>protected</code>
                    </td>
                    <td>Classe + sottoclassi + stesso package</td>
                    <td>Accessibile da ereditarietà o package</td>
                    <td>
                      <code>protected boolean attiva;</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <em>(default)</em>
                    </td>
                    <td>Solo stesso package</td>
                    <td>Accessibile solo da classi nello stesso package</td>
                    <td>
                      <code>int livello;</code>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h2 className="mt-4">
                🔐Modificatori di accesso – Esempi pratici
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔐 Modificatori di accesso in Java
                  </Card.Title>

                  {/* public */}
                  <p className="text-start mt-3">
                    <strong>
                      🌍 <code>public</code>
                    </strong>
                    <br />
                    Accessibile da qualsiasi classe, anche fuori dal package.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Persona {
  public String nome = "Stella";
}`}
                  </pre>

                  {/* private */}
                  <p className="text-start mt-4">
                    <strong>
                      🔒 <code>private</code>
                    </strong>
                    <br />
                    Accessibile solo all’interno della classe. Usato per
                    proteggere i dati.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Persona {
  private int età;

  public void setEtà(int nuovaEtà) {
    età = nuovaEtà;
  }

  public int getEtà() {
    return età;
  }
}`}
                  </pre>

                  {/* protected */}
                  <p className="text-start mt-4">
                    <strong>
                      🧬 <code>protected</code>
                    </strong>
                    <br />
                    Accessibile da sottoclassi e classi nello stesso package.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`class Persona {
  protected boolean attiva = true;
}

class Studente extends Persona {
  public void verifica() {
    if (attiva) {
      System.out.println("Studente attivo");
    }
  }
}`}
                  </pre>

                  {/* default */}
                  <p className="text-start mt-4">
                    <strong>
                      📦 <em>default</em> (nessun modificatore)
                    </strong>
                    <br />
                    Accessibile solo da classi nello stesso package.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`class Persona {
  int livello = 1; // default access
}`}
                  </pre>

                  {/* Note finali */}
                  <p className="text-start mt-4">
                    <strong>📌 Note utili</strong>
                    <br />- Usa <code>private</code> per proteggere i dati
                    <br />- Espone solo ciò che serve con <code>
                      public
                    </code>{" "}
                    getter/setter
                    <br />- <code>protected</code> è utile per ereditarietà
                    <br />- Il <em>default</em> è invisibile fuori dal package
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🧾Concetti fondamentali Java – Classe, Costruttori, Metodi &
                Override
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧬 Java – Concetti OOP Essenziali
                  </Card.Title>

                  {/* Costruttore */}
                  <p className="mt-3">
                    <strong>🏗️ Costruttore</strong>
                    <br />È un metodo speciale che viene chiamato
                    automaticamente quando si crea un oggetto. Serve per
                    inizializzare i valori.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Persona {
  String nome;

  // Costruttore
  public Persona(String nome) {
    this.nome = nome;
  }
}`}
                  </pre>

                  {/* Metodo */}
                  <p className="mt-4">
                    <strong>🔧 Metodo</strong>
                    <br />È una funzione definita dentro una classe. Può
                    eseguire azioni, calcoli, stampare, ecc.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public void saluta() {
  System.out.println("Ciao " + nome);
}`}
                  </pre>

                  {/* Getter & Setter */}
                  <p className="mt-4">
                    <strong>📥📤 Getter & Setter</strong>
                    <br />
                    Sono metodi per leggere (get) e modificare (set) i valori
                    privati di una classe. Usati per l’incapsulamento.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`private int età;

public int getEtà() {
  return età;
}

public void setEtà(int nuovaEtà) {
  età = nuovaEtà;
}`}
                  </pre>

                  {/* Override */}
                  <p className="mt-4">
                    <strong>🔁 Override</strong>
                    <br />
                    Permette di riscrivere un metodo ereditato da una
                    superclasse per personalizzarne il comportamento.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`@Override
public void saluta() {
  System.out.println("Ciao, sono una sottoclasse!");
}`}
                  </pre>

                  {/* toString */}
                  <p className="mt-4">
                    <strong>
                      📝 <code>toString()</code>
                    </strong>
                    <br />È un metodo speciale che restituisce una
                    rappresentazione testuale dell’oggetto. Utile per stamparlo.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`@Override
public String toString() {
  return "Persona: " + nome;
}`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    <strong>📌 In sintesi</strong>
                    <br />- Il <strong>costruttore</strong> crea e inizializza
                    <br />- I <strong>metodi</strong> fanno cose
                    <br />- I <strong>getter/setter</strong> proteggono i dati
                    <br />- L’<strong>override</strong> personalizza l’eredità
                    <br />- <code>toString()</code> rende l’oggetto leggibile
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🚀Punto di partenza, ereditarietà e comunicazione tra classi in
                Java
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🚀 Java – Da <code>main</code> all’Ereditarietà
                  </Card.Title>

                  {/* Punto di partenza */}
                  <p className="mt-3">
                    <strong>
                      🎯 Punto di partenza: <code>main()</code>
                    </strong>
                    <br />
                    In Java, il programma parte dal metodo <code>main</code>. È
                    il cuore dell’esecuzione.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Avvio {
  public static void main(String[] args) {
    Persona p = new Persona("Stella");
    p.saluta();
  }
}`}
                  </pre>

                  {/* Ereditarietà */}
                  <p className="mt-4">
                    <strong>🧬 Ereditarietà</strong>
                    <br />
                    Una classe può <em>estendere</em> un’altra per ereditarne
                    attributi e metodi. La classe base è detta{" "}
                    <strong>superclasse</strong>, quella derivata è la{" "}
                    <strong>sottoclasse</strong>.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`// Superclasse
public class Persona {
  String nome;

  public Persona(String nome) {
    this.nome = nome;
  }

  public void saluta() {
    System.out.println("Ciao, sono " + nome);
  }
}

// Sottoclasse
public class Studente extends Persona {
  int matricola;

  public Studente(String nome, int matricola) {
    super(nome); // chiama il costruttore della superclasse
    this.matricola = matricola;
  }

  @Override
  public void saluta() {
    System.out.println("Studente " + nome + ", matricola " + matricola);
  }
}`}
                  </pre>

                  {/* Comunicazione tra classi */}
                  <p className="mt-4">
                    <strong>📡 Comunicazione tra classi</strong>
                    <br />
                    Le classi comunicano creando oggetti e chiamando metodi.
                    Puoi passare oggetti come parametri.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Registro {
  public void stampaSaluto(Persona p) {
    p.saluta(); // chiama il metodo della classe passata
  }
}

// Nel main:
Registro r = new Registro();
Studente s = new Studente("Stella", 123);
r.stampaSaluto(s); // stampa: Studente Stella, matricola 123`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    <strong>📌 In sintesi</strong>
                    <br />- Il metodo <code>main()</code> è il punto di partenza
                    <br />- Le classi possono <code>estendere</code> altre
                    classi
                    <br />- <code>super()</code> richiama il costruttore della
                    superclasse
                    <br />- <code>@Override</code> permette di personalizzare i
                    metodi ereditati
                    <br />- Le classi comunicano creando oggetti e usando metodi
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🔁Polimorfismo, Interfacce, Classi Astratte & Enum in Java
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧠 Java – Concetti OOP Avanzati
                  </Card.Title>

                  {/* Polimorfismo */}
                  <p className="mt-3">
                    <strong>🔁 Polimorfismo</strong>
                    <br />
                    Significa "molte forme". In Java, puoi usare un oggetto di
                    una sottoclasse come se fosse della superclasse. Il
                    comportamento dipende dalla classe reale dell’oggetto.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`Persona p = new Studente("Stella", 123);
p.saluta(); // chiama il metodo override di Studente`}
                  </pre>

                  {/* Interfacce */}
                  <p className="mt-4">
                    <strong>🧩 Interfacce</strong>
                    <br />
                    Un’interfaccia è un contratto: definisce metodi che una
                    classe deve implementare. Una classe può implementare più
                    interfacce.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`interface Salutabile {
  void saluta();
}

class Persona implements Salutabile {
  public void saluta() {
    System.out.println("Ciao!");
  }
}`}
                  </pre>

                  {/* Classi astratte */}
                  <p className="mt-4">
                    <strong>🧠 Classi astratte</strong>
                    <br />
                    Non possono essere istanziate direttamente. Servono come
                    base per altre classi. Possono avere metodi concreti e
                    astratti.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`abstract class Animale {
  abstract void verso();

  public void dormi() {
    System.out.println("Zzz...");
  }
}

class Cane extends Animale {
  public void verso() {
    System.out.println("Bau!");
  }
}`}
                  </pre>

                  {/* Enum */}
                  <p className="mt-4">
                    <strong>🟪 Enum (Enumerazioni)</strong>
                    <br />
                    Sono tipi speciali che rappresentano un insieme fisso di
                    costanti. Usati per ruoli, stati, categorie… e sì, si
                    scrivono in MAIUSCOLO!
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public enum Ruolo {
  ADMIN,
  UTENTE,
  MODERATORE
}

Ruolo r = Ruolo.ADMIN;
System.out.println(r); // stampa: ADMIN`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    <strong>📌 In sintesi</strong>
                    <br />- Il <strong>polimorfismo</strong> permette
                    comportamenti dinamici
                    <br />- Le <strong>interfacce</strong> definiscono obblighi
                    <br />- Le <strong>classi astratte</strong> sono basi
                    incomplete
                    <br />- Gli <strong>enum</strong> rappresentano costanti
                    leggibili e sicure
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🧾 Mini-Progetto Java – Sistema Utenti con OOP Completa
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    💻 Mini-Progetto Java – Sistema Utenti
                  </Card.Title>

                  {/* Enum */}
                  <p className="mt-3">
                    <strong>🟪 Enum – Ruoli utente</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public enum Ruolo {
  ADMIN,
  UTENTE
}`}
                  </pre>

                  {/* Interfaccia */}
                  <p className="mt-4">
                    <strong>🧩 Interfaccia – Salutabile</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public interface Salutabile {
  void saluta();
}`}
                  </pre>

                  {/* Classe astratta */}
                  <p className="mt-4">
                    <strong>🧠 Classe astratta – Persona</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public abstract class Persona implements Salutabile {
  protected String nome;
  protected Ruolo ruolo;

  public Persona(String nome, Ruolo ruolo) {
    this.nome = nome;
    this.ruolo = ruolo;
  }

  public abstract void saluta();

  public String getNome() {
    return nome;
  }

  public Ruolo getRuolo() {
    return ruolo;
  }

  @Override
  public String toString() {
    return ruolo + ": " + nome;
  }
}`}
                  </pre>

                  {/* Sottoclasse Utente */}
                  <p className="mt-4">
                    <strong>👤 Sottoclasse – Utente</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Utente extends Persona {
  public Utente(String nome) {
    super(nome, Ruolo.UTENTE);
  }

  @Override
  public void saluta() {
    System.out.println("Ciao " + nome + ", benvenuto nel sistema!");
  }
}`}
                  </pre>

                  {/* Sottoclasse Admin */}
                  <p className="mt-4">
                    <strong>🛡️ Sottoclasse – Admin</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Admin extends Persona {
  public Admin(String nome) {
    super(nome, Ruolo.ADMIN);
  }

  @Override
  public void saluta() {
    System.out.println("👑 Admin " + nome + " ha effettuato l'accesso.");
  }
}`}
                  </pre>

                  {/* Classe Registro – Comunicazione */}
                  <p className="mt-4">
                    <strong>📋 Classe – Registro</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Registro {
  public void accogli(Persona p) {
    p.saluta(); // polimorfismo: chiama il metodo giusto
    System.out.println("Registrato: " + p.toString());
  }
}`}
                  </pre>

                  {/* Main */}
                  <p className="mt-4">
                    <strong>
                      🚀 Punto di partenza – <code>main()</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Avvio {
  public static void main(String[] args) {
    Registro registro = new Registro();

    Persona u1 = new Utente("Stella");
    Persona a1 = new Admin("Luna");

    registro.accogli(u1);
    registro.accogli(a1);
  }
}`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    <strong>📌 Cosa hai usato</strong>
                    <br />✅ <code>main()</code> come punto di partenza
                    <br />✅ <code>enum</code> per ruoli
                    <br />✅ <code>interface</code> per comportamento
                    <br />✅ <code>abstract class</code> come base
                    <br />✅ <code>override</code> per saluti personalizzati
                    <br />✅ <code>polimorfismo</code> per gestire tutto con una
                    sola firma
                    <br />✅ <code>toString()</code> per stampa leggibile
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                ☀️ Collezioni Java – ArrayList, HashMap, Set e altro
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📦 Java – Collezioni e Strutture Dati
                  </Card.Title>

                  {/* ArrayList */}
                  <p className="mt-3">
                    <strong>
                      📋 <code>ArrayList</code>
                    </strong>
                    <br />
                    Lista dinamica che può crescere. Puoi aggiungere, rimuovere,
                    accedere per indice.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`import java.util.ArrayList;

ArrayList<String> nomi = new ArrayList<>();
nomi.add("Stella");
nomi.add("Luna");

System.out.println(nomi.get(0)); // Stella
nomi.remove("Luna");`}
                  </pre>

                  {/* HashMap */}
                  <p className="mt-4">
                    <strong>
                      🔑 <code>HashMap</code>
                    </strong>
                    <br />
                    Mappa che associa una chiave a un valore. Perfetta per
                    dizionari, rubriche, configurazioni.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`import java.util.HashMap;

HashMap<String, Integer> punteggi = new HashMap<>();
punteggi.put("Stella", 100);
punteggi.put("Luna", 80);

System.out.println(punteggi.get("Stella")); // 100`}
                  </pre>

                  {/* Set */}
                  <p className="mt-4">
                    <strong>
                      🧮 <code>Set</code>
                    </strong>
                    <br />
                    Collezione che non permette duplicati. Utile per insiemi
                    unici.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`import java.util.HashSet;

HashSet<String> ruoli = new HashSet<>();
ruoli.add("ADMIN");
ruoli.add("UTENTE");
ruoli.add("ADMIN"); // ignorato, già presente

System.out.println(ruoli.size()); // 2`}
                  </pre>

                  {/* Iterazione */}
                  <p className="mt-4">
                    <strong>🔄 Iterare su collezioni</strong>
                    <br />
                    Puoi usare <code>for-each</code> per scorrere qualsiasi
                    collezione.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`for (String nome : nomi) {
  System.out.println("Ciao " + nome);
}

for (String chiave : punteggi.keySet()) {
  System.out.println(chiave + ": " + punteggi.get(chiave));
}`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    <strong>📌 In sintesi</strong>
                    <br />- <code>ArrayList</code>: lista ordinata e dinamica
                    <br />- <code>HashMap</code>: coppie chiave-valore
                    <br />- <code>Set</code>: elementi unici, no duplicati
                    <br />- Tutte si trovano nel package <code>java.util</code>
                    <br />- Puoi iterarle con <code>for-each</code> o{" "}
                    <code>iterator</code>
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🧠 Java – LinkedList & TreeMap con esempi pratici
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🌳 Java – LinkedList & TreeMap
                  </Card.Title>

                  {/* LinkedList */}
                  <p className="mt-3">
                    <strong>
                      🔗 <code>LinkedList</code>
                    </strong>
                    <br />
                    Lista dinamica che permette inserimenti e rimozioni
                    efficienti. Può essere usata come lista, coda o stack.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`import java.util.LinkedList;

LinkedList<String> nomi = new LinkedList<>();
nomi.add("Stella");
nomi.addFirst("Luna");
nomi.addLast("Sole");

System.out.println(nomi); // [Luna, Stella, Sole]

nomi.removeFirst(); // rimuove Luna
System.out.println(nomi); // [Stella, Sole]`}
                  </pre>

                  {/* TreeMap */}
                  <p className="mt-4">
                    <strong>
                      🌲 <code>TreeMap</code>
                    </strong>
                    <br />
                    Mappa ordinata per chiavi. Le chiavi vengono automaticamente
                    ordinate (alfabeticamente o numericamente).
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`import java.util.TreeMap;

TreeMap<String, Integer> punteggi = new TreeMap<>();
punteggi.put("Luna", 80);
punteggi.put("Stella", 100);
punteggi.put("Sole", 90);

System.out.println(punteggi);
// {Luna=80, Sole=90, Stella=100} → ordinato per chiave`}
                  </pre>

                  {/* Confronto */}
                  <p className="mt-4">
                    <strong>📊 Confronto rapido</strong>
                  </p>
                  <ul>
                    <li>
                      <code>LinkedList</code> → ottima per inserimenti/rimozioni
                      frequenti
                    </li>
                    <li>
                      <code>TreeMap</code> → ottima per mantenere ordine tra le
                      chiavi
                    </li>
                    <li>
                      Entrambe fanno parte di <code>java.util</code>
                    </li>
                  </ul>

                  {/* Conclusione */}
                  <p className="mt-4">
                    <strong>📌 In sintesi</strong>
                    <br />- Usa <code>LinkedList</code> se ti serve flessibilità
                    nella posizione
                    <br />- Usa <code>TreeMap</code> se vuoi una mappa ordinata
                    <br />- Entrambe supportano metodi come <code>
                      add
                    </code>, <code>remove</code>, <code>get</code>,{" "}
                    <code>keySet</code>
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🧯Java – Gestione delle Eccezioni (try, catch, finally, throw)
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🚨 Java – Eccezioni & Gestione degli Errori
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    Le eccezioni sono eventi che interrompono il normale flusso
                    del programma. Java ti permette di gestirle con blocchi{" "}
                    <code>try</code>, <code>catch</code>, <code>finally</code> e{" "}
                    <code>throw</code>.
                  </p>

                  {/* Struttura base */}
                  <p className="mt-4">
                    <strong>📐 Struttura base</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`try {
    // codice che può generare un'eccezione
} catch (ExceptionTipo e) {
    // codice per gestire l'errore
} finally {
    // codice che viene sempre eseguito
}`}
                  </pre>

                  {/* Esempio pratico */}
                  <p className="mt-4">
                    <strong>🧪 Esempio: divisione con controllo</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Divisione {
    public static void main(String[] args) {
        try {
            int a = 10;
            int b = 0;
            int risultato = a / b; // genera ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Errore: divisione per zero!");
        } finally {
            System.out.println("Operazione conclusa.");
        }
    }
}`}
                  </pre>

                  {/* throw */}
                  <p className="mt-4">
                    <strong>
                      🎯 <code>throw</code> – Lanciare un'eccezione
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public void setEtà(int età) {
    if (età < 0) {
        throw new IllegalArgumentException("Età non può essere negativa");
    }
    this.età = età;
}`}
                  </pre>

                  {/* Tipi comuni */}
                  <p className="mt-4">
                    <strong>📚 Tipi di eccezioni comuni</strong>
                  </p>
                  <ul>
                    <li>
                      <code>ArithmeticException</code> → divisione per zero
                    </li>
                    <li>
                      <code>NullPointerException</code> → oggetto nullo
                    </li>
                    <li>
                      <code>ArrayIndexOutOfBoundsException</code> → indice non
                      valido
                    </li>
                    <li>
                      <code>IllegalArgumentException</code> → argomento non
                      valido
                    </li>
                    <li>
                      <code>IOException</code> → errore di input/output
                    </li>
                  </ul>

                  {/* Consigli */}
                  <p className="mt-4">
                    <strong>💡 Consigli utili</strong>
                  </p>
                  <ul>
                    <li>
                      Usa <code>try-catch</code> per evitare crash improvvisi
                    </li>
                    <li>
                      Il blocco <code>finally</code> è perfetto per chiudere
                      file o connessioni
                    </li>
                    <li>
                      Puoi creare eccezioni personalizzate estendendo{" "}
                      <code>Exception</code>
                    </li>
                  </ul>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Le eccezioni ti aiutano a scrivere codice più robusto e
                    sicuro. Gestirle bene è segno di maturità da sviluppatore 🔐
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧭Java – Eccezioni Checked vs Unchecked</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    ⚖️ Java – Checked vs Unchecked Exceptions
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    In Java, le eccezioni si dividono in due categorie
                    principali:
                    <strong> Checked </strong> (verificate) e{" "}
                    <strong> Unchecked </strong> (non verificate).
                  </p>

                  {/* Checked Exceptions */}
                  <p className="mt-4">
                    <strong>✅ Checked Exceptions</strong>
                  </p>
                  <ul>
                    <li>Controllate dal compilatore</li>
                    <li>
                      Devono essere gestite con <code>try-catch</code> o
                      dichiarate con <code>throws</code>
                    </li>
                    <li>Tipiche in operazioni I/O, file, database</li>
                  </ul>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class LetturaFile {
    public static void main(String[] args) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
            System.out.println(reader.readLine());
            reader.close();
        } catch (IOException e) {
            System.out.println("Errore nella lettura del file!");
        }
    }
}`}
                  </pre>

                  {/* Unchecked Exceptions */}
                  <p className="mt-4">
                    <strong>❌ Unchecked Exceptions</strong>
                  </p>
                  <ul>
                    <li>Non obbligatorie da gestire</li>
                    <li>
                      Derivano da <code>RuntimeException</code>
                    </li>
                    <li>Tipiche in errori di logica o programmazione</li>
                  </ul>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Divisione {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;
        int risultato = a / b; // ArithmeticException (unchecked)
        System.out.println(risultato);
    }
}`}
                  </pre>

                  {/* Confronto */}
                  <p className="mt-4">
                    <strong>📊 Confronto rapido</strong>
                  </p>
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr>
                        <th>Tipo</th>
                        <th>Obbligo di gestione</th>
                        <th>Classe base</th>
                        <th>Esempi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Checked</td>
                        <td>Sì</td>
                        <td>
                          <code>Exception</code>
                        </td>
                        <td>
                          <code>IOException</code>, <code>SQLException</code>
                        </td>
                      </tr>
                      <tr>
                        <td>Unchecked</td>
                        <td>No</td>
                        <td>
                          <code>RuntimeException</code>
                        </td>
                        <td>
                          <code>NullPointerException</code>,{" "}
                          <code>ArithmeticException</code>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Consigli */}
                  <p className="mt-4">
                    <strong>💡 Consigli utili</strong>
                  </p>
                  <ul>
                    <li>
                      Usa <strong>checked</strong> per errori esterni (file,
                      rete, DB)
                    </li>
                    <li>
                      Usa <strong>unchecked</strong> per errori di logica
                      interna
                    </li>
                    <li>
                      Non ignorare mai le eccezioni: gestirle bene = codice
                      solido
                    </li>
                  </ul>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Capire la differenza tra checked e unchecked ti aiuta a
                    scrivere codice più sicuro e mantenibile. Le eccezioni non
                    sono nemici: sono alleati per evitare bug silenziosi 🛡️
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🚀Java – Guida Completa agli Stream</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🌊 Java – Stream API: Tutto Quello Che Devi Sapere
                  </Card.Title>

                  {/* Cos'è uno Stream */}
                  <p className="mt-3">
                    Uno <strong>Stream</strong> è una sequenza di elementi che
                    supporta operazioni funzionali come <code>map</code>,{" "}
                    <code>filter</code>, <code>reduce</code>, ecc. Non modifica
                    la collezione originale, ma restituisce un nuovo flusso di
                    dati.
                  </p>

                  {/* Come si crea */}
                  <p className="mt-4">
                    <strong>🔧 Come si crea uno Stream</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`List<String> nomi = List.of("Luna", "Stella", "Sole");
Stream<String> stream = nomi.stream();`}
                  </pre>

                  {/* Metodi principali */}
                  <p className="mt-4">
                    <strong>🧪 Metodi principali</strong>
                  </p>
                  <ul>
                    <li>
                      <code>filter()</code> → filtra gli elementi
                    </li>
                    <li>
                      <code>map()</code> → trasforma ogni elemento
                    </li>
                    <li>
                      <code>sorted()</code> → ordina gli elementi
                    </li>
                    <li>
                      <code>collect()</code> → raccoglie il risultato in una
                      collezione
                    </li>
                    <li>
                      <code>forEach()</code> → esegue un'azione su ogni elemento
                    </li>
                    <li>
                      <code>count()</code> → conta gli elementi
                    </li>
                    <li>
                      <code>findFirst()</code> → restituisce il primo elemento
                    </li>
                    <li>
                      <code>anyMatch()</code> → verifica se almeno uno soddisfa
                      una condizione
                    </li>
                  </ul>

                  {/* Esempio pratico */}
                  <p className="mt-4">
                    <strong>🌟 Esempio: nomi con più di 4 lettere</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`List<String> nomi = List.of("Luna", "Stella", "Sole");

List<String> filtrati = nomi.stream()
    .filter(n -> n.length() > 4)
    .map(String::toUpperCase)
    .sorted()
    .collect(Collectors.toList());

System.out.println(filtrati); // [STELLA]`}
                  </pre>

                  {/* Stream vs for */}
                  <p className="mt-4">
                    <strong>⚔️ Stream vs For</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>For</strong> → più verboso, imperativo
                    </li>
                    <li>
                      <strong>Stream</strong> → più conciso, dichiarativo
                    </li>
                    <li>Stream è ideale per trasformazioni complesse</li>
                  </ul>

                  {/* Tipi di Stream */}
                  <p className="mt-4">
                    <strong>🧬 Tipi di Stream</strong>
                  </p>
                  <ul>
                    <li>
                      <code>Stream&lt;T&gt;</code> → generico
                    </li>
                    <li>
                      <code>IntStream</code>, <code>LongStream</code>,{" "}
                      <code>DoubleStream</code> → per primitive
                    </li>
                    <li>
                      <code>parallelStream()</code> → esecuzione parallela
                    </li>
                  </ul>

                  {/* Errori comuni */}
                  <p className="mt-4">
                    <strong>🚫 Errori comuni</strong>
                  </p>
                  <ul>
                    <li>
                      Usare <code>stream()</code> su collezioni vuote →
                      attenzione a <code>findFirst()</code>
                    </li>
                    <li>
                      Riutilizzare uno stream → non è possibile, va ricreato
                    </li>
                    <li>
                      Dimenticare <code>collect()</code> → non ottieni il
                      risultato
                    </li>
                  </ul>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Gli Stream rendono il codice più leggibile, potente e
                    funzionale. Una volta che li padroneggi, non torni più
                    indietro 💫
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧠 Java Stream – I Metodi Più Usati</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    💼 Java Stream – I Metodi Essenziali da Usare a Lavoro
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    Quando lavori con dati in Java, la{" "}
                    <strong>Stream API</strong> è il tuo alleato. Ecco i metodi
                    più usati in assoluto in ambienti professionali.
                  </p>

                  {/* MAP */}
                  <p className="mt-4">
                    <strong>
                      🔄 <code>map()</code> – Trasforma ogni elemento
                    </strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                    }}
                  >
                    {String.raw`List<String> nomi = List.of("luna", "sole", "stella");

List<String> maiuscoli = nomi.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());

System.out.println(maiuscoli); // [LUNA, SOLE, STELLA]`}
                  </div>

                  {/* FILTER */}
                  <p className="mt-4">
                    <strong>
                      🚦 <code>filter()</code> – Seleziona solo ciò che ti serve
                    </strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                    }}
                  >
                    {String.raw`List<Integer> numeri = List.of(1, 2, 3, 4, 5);

List<Integer> pari = numeri.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

System.out.println(pari); // [2, 4]`}
                  </div>

                  {/* COLLECT */}
                  <p className="mt-4">
                    <strong>
                      📦 <code>collect()</code> – Raccoglie il risultato
                    </strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                    }}
                  >
                    {String.raw`List<String> parole = List.of("ciao", "mondo");

String frase = parole.stream()
    .collect(Collectors.joining(" "));

System.out.println(frase); // "ciao mondo"`}
                  </div>

                  {/* FOREACH */}
                  <p className="mt-4">
                    <strong>
                      🔁 <code>forEach()</code> – Esegui un’azione su ogni
                      elemento
                    </strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                    }}
                  >
                    {String.raw`List<String> nomi = List.of("Luna", "Sole");

nomi.stream()
    .forEach(n -> System.out.println("Ciao " + n));`}
                  </div>

                  {/* SORTED */}
                  <p className="mt-4">
                    <strong>
                      📊 <code>sorted()</code> – Ordina gli elementi
                    </strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                    }}
                  >
                    {String.raw`List<String> nomi = List.of("Stella", "Luna", "Sole");

List<String> ordinati = nomi.stream()
    .sorted()
    .collect(Collectors.toList());

System.out.println(ordinati); // [Luna, Sole, Stella]`}
                  </div>

                  {/* DISTINCT */}
                  <p className="mt-4">
                    <strong>
                      🧹 <code>distinct()</code> – Rimuove i duplicati
                    </strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                    }}
                  >
                    {String.raw`List<String> nomi = List.of("Luna", "Sole", "Luna");

List<String> unici = nomi.stream()
    .distinct()
    .collect(Collectors.toList());

System.out.println(unici); // [Luna, Sole]`}
                  </div>

                  {/* COUNT */}
                  <p className="mt-4">
                    <strong>
                      🔢 <code>count()</code> – Conta gli elementi
                    </strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                    }}
                  >
                    {String.raw`long quanti = List.of("Luna", "Sole", "Stella").stream()
    .filter(n -> n.length() > 4)
    .count();

System.out.println(quanti); // 1`}
                  </div>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Questi metodi sono usati ogni giorno in backend, data
                    processing, microservizi e API. Se li padroneggi, sei già un
                    passo avanti nel mondo del lavoro 🚀
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">⚡️Java – Espressioni Lambda</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    ⚡️ Java – Espressioni Lambda
                  </Card.Title>

                  <p className="mt-3">
                    Le <strong>lambda</strong> sono funzioni anonime introdotte
                    in Java 8. Rendono il codice più conciso, leggibile e
                    funzionale. Sono fondamentali quando si lavora con{" "}
                    <code>Stream</code> e <code>functional interfaces</code>.
                  </p>

                  <p className="mt-4">
                    <strong>🧬 Sintassi base</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    (parametri) -&gt; (corpo)
                  </div>
                  <ul>
                    <li>
                      <code>(x) -&gt; x * x</code> → ritorno implicito
                    </li>
                    <li>
                      <code>(a, b) -&gt; a + b</code> → più parametri
                    </li>
                    <li>
                      <code>() -&gt; System.out.println("Ciao!")</code> → nessun
                      parametro
                    </li>
                  </ul>

                  <p className="mt-4">
                    <strong>🚀 Runnable</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Runnable r = () -&gt; System.out.println("Task eseguito!");
                    r.run();
                  </div>

                  <p className="mt-4">
                    <strong>📊 Comparator</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    List&lt;String&gt; nomi = List.of("Luna", "Sole", "Stella");
                    nomi.sort((a, b) -&gt; a.compareToIgnoreCase(b));
                  </div>

                  <p className="mt-4">
                    <strong>🔍 Predicate</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Predicate&lt;String&gt; isNotEmpty = s -&gt; !s.isEmpty();
                    System.out.println(isNotEmpty.test("Ciao")); // true
                  </div>

                  <p className="mt-4">
                    <strong>🔧 Function</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Function&lt;Integer, String&gt; intToStr = i -&gt; "Numero:
                    " + i; System.out.println(intToStr.apply(5)); // Numero: 5
                  </div>

                  <p className="mt-4">
                    <strong>📦 Consumer</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Consumer&lt;String&gt; stampa = s -&gt;
                    System.out.println("Hai scritto: " + s); stampa.accept("Ciao
                    Stella!");
                  </div>

                  <p className="mt-4">
                    <strong>🌊 Stream + Lambda</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    List&lt;Integer&gt; numeri = List.of(1, 2, 3, 4, 5);
                    numeri.stream() .filter(n -&gt; n % 2 == 0) .map(n -&gt; n *
                    10) .forEach(n -&gt; System.out.println("Valore: " + n));
                  </div>

                  <p className="mt-4">
                    Le lambda sono essenziali nello sviluppo moderno in Java. Se
                    lavori con API, microservizi o data processing, le userai
                    ogni giorno. Più le usi, più il tuo codice diventa elegante
                    e potente 💪
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                💼 Mini Progetto Java con Stream e Lambda
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🛍️ Mini-Progetto Java – Prodotti & Stream
                  </Card.Title>

                  {/* Classe Prodotto */}
                  <p className="mt-3">
                    <strong>📦 Classe – Prodotto</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Prodotto {
  private String nome;
  private double prezzo;

  public Prodotto(String nome, double prezzo) {
    this.nome = nome;
    this.prezzo = prezzo;
  }

  public String getNome() {
    return nome;
  }

  public double getPrezzo() {
    return prezzo;
  }

  @Override
  public String toString() {
    return nome + " - €" + prezzo;
  }
}`}
                  </pre>

                  {/* Main con Stream */}
                  <p className="mt-4">
                    <strong>
                      🚀 Punto di partenza – <code>main()</code> con Stream
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`public class Catalogo {
  public static void main(String[] args) {
    List<Prodotto> prodotti = List.of(
      new Prodotto("Penna", 2.5),
      new Prodotto("Notebook", 25.0),
      new Prodotto("Zaino", 45.0),
      new Prodotto("Matita", 1.0),
      new Prodotto("Mouse", 19.9)
    );

    prodotti.stream()
      .filter(p -> p.getPrezzo() > 20)
      .sorted(Comparator.comparingDouble(Prodotto::getPrezzo))
      .forEach(System.out::println);
  }
}`}
                  </pre>

                  {/* Output */}
                  <p className="mt-4">
                    <strong>📤 Output atteso</strong>
                  </p>
                  <pre
                    className="bg-black text-success p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem", fontStyle: "italic" }}
                  >
                    {String.raw`Notebook - €25.0
Zaino - €45.0`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    <strong>📌 Cosa hai usato</strong>
                    <br />✅ <code>Stream</code> per elaborare la lista
                    <br />✅ <code>filter()</code> per selezionare i prodotti
                    <br />✅ <code>sorted()</code> per ordinarli
                    <br />✅ <code>forEach()</code> per stamparli
                    <br />✅ <code>Comparator</code> con{" "}
                    <code>method reference</code>
                    <br />✅ <code>toString()</code> per output leggibile
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">💼 Stream avanzati</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🌪️ Java – Stream Avanzati
                  </Card.Title>

                  <p className="mt-3">
                    Gli <strong>Stream</strong> in Java permettono di elaborare
                    collezioni in modo funzionale e fluido. Le operazioni
                    avanzate come <code>mapToDouble</code>, <code>flatMap</code>
                    , <code>peek</code> e <code>distinct</code>
                    offrono grande potenza per analisi, trasformazioni e
                    ottimizzazioni.
                  </p>

                  <p className="mt-4">
                    <strong>📐 mapToDouble</strong> – Trasforma in uno stream di
                    double
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`List<String> prezzi = List.of("10.5", "20.0", "7.25");
double somma = prezzi.stream()
  .mapToDouble(Double::parseDouble)
  .sum();
System.out.println("Totale: " + somma); // Totale: 37.75`}
                  </div>

                  <p className="mt-4">
                    <strong>🧩 flatMap</strong> – Appiattisce stream di stream
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`List<List<String>> gruppi = List.of(
  List.of("A", "B"),
  List.of("C", "D")
);
gruppi.stream()
  .flatMap(List::stream)
  .forEach(System.out::println); // A B C D`}
                  </div>

                  <p className="mt-4">
                    <strong>🔍 distinct</strong> – Rimuove duplicati
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`List<String> nomi = List.of("Luna", "Sole", "Luna", "Stella");
nomi.stream()
  .distinct()
  .forEach(System.out::println); // Luna Sole Stella`}
                  </div>

                  <p className="mt-4">
                    <strong>🕵️ peek</strong> – Debug intermedio
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`List<Integer> numeri = List.of(1, 2, 3);
numeri.stream()
  .peek(n -> System.out.println("Prima: " + n))
  .map(n -> n * 2)
  .peek(n -> System.out.println("Dopo: " + n))
  .forEach(n -> {});`}
                  </div>

                  <p className="mt-4">
                    <strong>📊 summaryStatistics</strong> – Statistiche
                    aggregate
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`IntSummaryStatistics stats = IntStream.of(5, 10, 15)
  .summaryStatistics();
System.out.println("Media: " + stats.getAverage()); // Media: 10.0`}
                  </div>

                  <p className="mt-4">
                    <strong>🧠 filter + collect</strong> – Raccolta condizionata
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`List<String> parole = List.of("sole", "luna", "stella");
List<String> filtrate = parole.stream()
  .filter(p -> p.length() > 4)
  .collect(Collectors.toList());
System.out.println(filtrate); // [luna, stella]`}
                  </div>

                  <p className="mt-4">
                    Gli Stream avanzati ti permettono di scrivere codice potente
                    e pulito. Usali per trasformare, analizzare e ottimizzare i
                    tuoi dati come un vero Jedi del Java ⚔️☕
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧱 Java – Maven</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧱 Java – Maven Essentials
                  </Card.Title>

                  <p className="mt-3">
                    <strong>Maven</strong> è uno strumento di build e gestione
                    dei progetti Java. Automatizza il download delle librerie,
                    la compilazione, i test e la creazione dei pacchetti. Tutto
                    è configurato tramite un file chiamato <code>pom.xml</code>.
                  </p>

                  <p className="mt-4">
                    <strong>
                      📦 Cos'è il <code>pom.xml</code>
                    </strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.stella</groupId>
  <artifactId>mia-app</artifactId>
  <version>1.0.0</version>
</project>`}
                  </div>
                  <p className="mt-2">
                    Questo file descrive il progetto, le dipendenze e le
                    configurazioni. È il cuore di Maven 💓
                  </p>

                  <p className="mt-4">
                    <strong>📚 Aggiungere una dipendenza</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <version>3.1.0</version>
  </dependency>
</dependencies>`}
                  </div>
                  <p className="mt-2">
                    Maven scarica automaticamente la libreria da internet e la
                    include nel progetto. Addio copia-incolla manuale! 🚀
                  </p>

                  <p className="mt-4">
                    <strong>⚙️ Comandi base</strong>
                  </p>
                  <ul>
                    <li>
                      <code>mvn compile</code> → Compila il codice
                    </li>
                    <li>
                      <code>mvn test</code> → Esegue i test
                    </li>
                    <li>
                      <code>mvn package</code> → Crea il file <code>.jar</code>{" "}
                      o <code>.war</code>
                    </li>
                    <li>
                      <code>mvn clean</code> → Pulisce i file generati
                    </li>
                  </ul>

                  <p className="mt-4">
                    <strong>🧪 Esempio: struttura progetto Maven</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`mia-app/
├── pom.xml
└── src/
    ├── main/
    │   └── java/
    │       └── com/stella/App.java
    └── test/
        └── java/
            └── com/stella/AppTest.java`}
                  </div>

                  <p className="mt-4">
                    Maven ti aiuta a concentrarti sul codice, lasciando a lui la
                    gestione delle dipendenze e dei build. È come avere un
                    assistente personale per il tuo progetto Java 🛠️✨
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">📚I Database Relazionali</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🗄️ Introduzione ai Database Relazionali
                  </Card.Title>

                  <p className="mt-3">
                    I <strong>Database Relazionali</strong> (RDBMS) sono sistemi
                    che memorizzano i dati in tabelle collegate tra loro tramite
                    relazioni. Ogni tabella è composta da righe (<em>record</em>
                    ) e colonne (<em>campi</em>).
                  </p>

                  <p className="mt-4">
                    <strong>
                      📊 Esempio di tabella: <code>Clienti</code>
                    </strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`+----+----------+-------------------+
| ID | Nome     | Email             |
+----+----------+-------------------+
| 1  | Stella   | stella@email.com  |
| 2  | Marco    | marco@email.com   |
+----+----------+-------------------+`}
                  </div>

                  <p className="mt-4">
                    <strong>🔗 Relazioni tra tabelle</strong>
                    Le tabelle possono essere collegate tramite chiavi:
                  </p>
                  <ul>
                    <li>
                      <strong>Chiave primaria</strong> → identifica univocamente
                      ogni riga
                    </li>
                    <li>
                      <strong>Chiave esterna</strong> → collega una tabella a
                      un'altra
                    </li>
                  </ul>

                  <p className="mt-4">
                    <strong>
                      🧠 Esempio: tabella <code>Ordini</code> collegata a{" "}
                      <code>Clienti</code>
                    </strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`+----+ ID_Cliente | Prodotto     |
| 1  | 1          | Laptop       |
| 2  | 2          | Smartphone   |`}
                  </div>
                  <p className="mt-2">
                    Qui <code>ID_Cliente</code> è una chiave esterna che si
                    riferisce alla tabella <code>Clienti</code>.
                  </p>

                  <p className="mt-4">
                    <strong>🧪 SQL – Linguaggio per interrogare i dati</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`SELECT Nome, Prodotto
FROM Clienti
JOIN Ordini ON Clienti.ID = Ordini.ID_Cliente;`}
                  </div>
                  <p className="mt-2">
                    Questo comando mostra quali clienti hanno ordinato quali
                    prodotti. Il <code>JOIN</code> unisce le tabelle in base
                    alla relazione.
                  </p>

                  <p className="mt-4">
                    <strong>🛠️ I database relazionali più usati</strong>
                  </p>
                  <ul>
                    <li>🔹 MySQL</li>
                    <li>🔹 PostgreSQL</li>
                    <li>🔹 Oracle</li>
                    <li>🔹 Microsoft SQL Server</li>
                  </ul>

                  <p className="mt-4">
                    I database relazionali sono fondamentali per gestire dati
                    strutturati in modo sicuro, coerente e scalabile. Se stai
                    creando un'app, è probabile che ci sia un RDBMS dietro le
                    quinte 💾✨
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">proprietà fondamentali delle colonne</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧩 SQL – Proprietà delle Tabelle
                  </Card.Title>

                  <p className="mt-3">
                    Quando crei una tabella in un database relazionale, puoi
                    definire regole che garantiscono la qualità e la coerenza
                    dei dati. Ecco le più importanti:
                  </p>

                  <p className="mt-4">
                    <strong>📌 NOT NULL</strong> – Il campo non può essere vuoto
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`CREATE TABLE Utenti (
  ID INT,
  Nome VARCHAR(50) NOT NULL
);`}
                  </div>
                  <p className="mt-2">
                    Se provi a inserire un utente senza <code>Nome</code>, il
                    database darà errore. Utile per campi obbligatori come
                    email, password, ecc.
                  </p>

                  <p className="mt-4">
                    <strong>🔐 UNIQUE</strong> – Valori non ripetibili
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`CREATE TABLE Utenti (
  Email VARCHAR(100) UNIQUE
);`}
                  </div>
                  <p className="mt-2">
                    Nessun utente può avere la stessa email di un altro.
                    Perfetto per identificatori come username o codice fiscale.
                  </p>

                  <p className="mt-4">
                    <strong>🆔 PRIMARY KEY</strong> – Identificatore univoco
                    della riga
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`CREATE TABLE Utenti (
  ID INT PRIMARY KEY,
  Nome VARCHAR(50)
);`}
                  </div>
                  <p className="mt-2">
                    Ogni riga deve avere un <code>ID</code> unico e non nullo. È
                    la colonna che distingue ogni record.
                  </p>

                  <p className="mt-4">
                    <strong>🔗 FOREIGN KEY</strong> – Collega due tabelle
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`CREATE TABLE Ordini (
  ID INT PRIMARY KEY,
  ID_Utente INT,
  FOREIGN KEY (ID_Utente) REFERENCES Utenti(ID)
);`}
                  </div>
                  <p className="mt-2">
                    <code>ID_Utente</code> deve corrispondere a un{" "}
                    <code>ID</code> esistente nella tabella <code>Utenti</code>.
                    Questo crea una relazione tra le tabelle.
                  </p>

                  <p className="mt-4">
                    <strong>🧱 Altre proprietà utili</strong>
                  </p>
                  <ul>
                    <li>
                      <code>AUTO_INCREMENT</code> → genera ID automatici
                    </li>
                    <li>
                      <code>DEFAULT</code> → assegna un valore predefinito
                    </li>
                    <li>
                      <code>CHECK</code> → impone una condizione (es. età &gt;
                      18)
                    </li>
                  </ul>

                  <p className="mt-4">
                    <strong>📐 Esempio completo</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`CREATE TABLE Utenti (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(50) NOT NULL,
  Email VARCHAR(100) UNIQUE,
  Età INT CHECK (Età >= 18),
  Iscrizione DATE DEFAULT CURRENT_DATE
);`}
                  </div>

                  <p className="mt-4">
                    Queste regole rendono il tuo database più sicuro, coerente e
                    facile da interrogare. È come dare una struttura solida ai
                    tuoi dati 🏗️📊
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🐘PostgreSQL - pgAdmin</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🐘 PostgreSQL + pgAdmin – Guida Rapida
                  </Card.Title>

                  <p className="mt-3">
                    <strong>PostgreSQL</strong> è un potente database
                    relazionale open-source.
                    <strong>pgAdmin</strong> è l’interfaccia grafica ufficiale
                    per gestirlo facilmente. Insieme sono perfetti per
                    sviluppatori, analisti e app Java/Spring.
                  </p>

                  <p className="mt-4">
                    <strong>⬇️ Installazione</strong>
                  </p>
                  <ul>
                    <li>
                      Vai su <code>https://www.postgresql.org/download/</code>
                    </li>
                    <li>
                      Scarica il pacchetto per il tuo sistema operativo
                      (Windows, macOS, Linux)
                    </li>
                    <li>
                      Durante l’installazione, seleziona anche{" "}
                      <strong>pgAdmin</strong>
                    </li>
                    <li>
                      Imposta una password per l’utente <code>postgres</code>{" "}
                      (superuser)
                    </li>
                  </ul>

                  <p className="mt-4">
                    <strong>🚀 Avvio di pgAdmin</strong>
                  </p>
                  <ul>
                    <li>Apri pgAdmin dal menu Start o dal launcher</li>
                    <li>
                      Inserisci la password impostata per <code>postgres</code>
                    </li>
                    <li>
                      Connettiti al server locale → <code>localhost:5432</code>
                    </li>
                  </ul>

                  <p className="mt-4">
                    <strong>📁 Creare un database</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`1. Clic destro su "Databases" → Create → Database  
2. Dai un nome (es. "stella_db")  
3. Salva → Il database è pronto!`}
                  </div>

                  <p className="mt-4">
                    <strong>🧱 Creare una tabella</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`CREATE TABLE Clienti (
  ID SERIAL PRIMARY KEY,
  Nome VARCHAR(50) NOT NULL,
  Email VARCHAR(100) UNIQUE
);`}
                  </div>
                  <p className="mt-2">
                    Puoi eseguire questo script nella sezione{" "}
                    <strong>Query Tool</strong> di pgAdmin.
                  </p>

                  <p className="mt-4">
                    <strong>🔍 Visualizzare i dati</strong>
                  </p>
                  <ul>
                    <li>Espandi il database → Schemas → Tables → Clienti</li>
                    <li>Clic destro → View/Edit Data → All Rows</li>
                    <li>Puoi modificare i dati direttamente da lì!</li>
                  </ul>

                  <p className="mt-4">
                    <strong>📤 Esportare e importare</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Backup</strong>: clic destro sul database → Backup
                      → formato <code>.sql</code>
                    </li>
                    <li>
                      <strong>Restore</strong>: clic destro → Restore →
                      seleziona file
                    </li>
                  </ul>

                  <p className="mt-4">
                    <strong>🧠 Comandi utili in SQL</strong>
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`SELECT * FROM Clienti;
INSERT INTO Clienti (Nome, Email) VALUES ('Stella', 'stella@email.com');
UPDATE Clienti SET Nome = 'Stellina' WHERE ID = 1;
DELETE FROM Clienti WHERE ID = 2;`}
                  </div>

                  <p className="mt-4">
                    PostgreSQL + pgAdmin ti danno il pieno controllo sui tuoi
                    dati. È come avere un laboratorio dati personale, elegante e
                    potente 💾🧪
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧠istruzioni SQL più usate e utili</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧠 SQL – Comandi Fondamentali
                  </Card.Title>

                  <p className="mt-3">
                    Il linguaggio <strong>SQL</strong> (Structured Query
                    Language) è usato per gestire e interrogare database
                    relazionali. Ecco i comandi più utili e frequenti, con
                    esempi chiari.
                  </p>

                  <p className="mt-4">
                    <strong>📁 CREATE TABLE</strong> – Crea una nuova tabella
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`CREATE TABLE Clienti (
  ID SERIAL PRIMARY KEY,
  Nome VARCHAR(50) NOT NULL,
  Email VARCHAR(100) UNIQUE
);`}
                  </div>

                  <p className="mt-4">
                    <strong>📥 INSERT INTO</strong> – Inserisce dati
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`INSERT INTO Clienti (Nome, Email)
VALUES ('Stella', 'stella@email.com');`}
                  </div>

                  <p className="mt-4">
                    <strong>🔍 SELECT</strong> – Interroga i dati
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`SELECT * FROM Clienti;
SELECT Nome FROM Clienti WHERE ID = 1;`}
                  </div>

                  <p className="mt-4">
                    <strong>✏️ UPDATE</strong> – Modifica i dati
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`UPDATE Clienti
SET Nome = 'Stellina'
WHERE ID = 1;`}
                  </div>

                  <p className="mt-4">
                    <strong>🗑️ DELETE</strong> – Elimina dati
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`DELETE FROM Clienti WHERE ID = 2;`}
                  </div>

                  <p className="mt-4">
                    <strong>🔗 JOIN</strong> – Unisce tabelle correlate
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`SELECT Clienti.Nome, Ordini.Prodotto
FROM Clienti
JOIN Ordini ON Clienti.ID = Ordini.ID_Cliente;`}
                  </div>

                  <p className="mt-4">
                    <strong>📊 COUNT, AVG, MAX, MIN</strong> – Funzioni
                    aggregate
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`SELECT COUNT(*) FROM Clienti;
SELECT AVG(Prezzo) FROM Ordini;`}
                  </div>

                  <p className="mt-4">
                    <strong>📦 ORDER BY & LIMIT</strong> – Ordinamento e limiti
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`SELECT * FROM Ordini
ORDER BY Prezzo DESC
LIMIT 5;`}
                  </div>

                  <p className="mt-4">
                    <strong>🧹 DROP & TRUNCATE</strong> – Rimozione strutture
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`DROP TABLE Clienti;
TRUNCATE TABLE Ordini;`}
                  </div>

                  <p className="mt-4">
                    Con questi comandi hai il controllo completo sul tuo
                    database. SQL è come una bacchetta magica per i dati:
                    preciso, potente e universale ✨📊
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧃operazioni CRUD</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔄 CRUD – Le 4 Operazioni Fondamentali
                  </Card.Title>

                  <p className="mt-3">
                    <strong>CRUD</strong> è l'acronimo di{" "}
                    <em>Create, Read, Update, Delete</em>. Sono le 4 operazioni
                    fondamentali per gestire i dati in un database o tramite API
                    REST. Ogni applicazione che lavora con dati usa CRUD ogni
                    giorno!
                  </p>

                  <p className="mt-4">
                    <strong>🆕 C – CREATE</strong> → Inserisce nuovi dati
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`INSERT INTO Clienti (Nome, Email)
VALUES ('Stella', 'stella@email.com');`}
                  </div>
                  <p className="mt-2">
                    In SQL si usa <code>INSERT</code>. In REST si usa{" "}
                    <strong>POST</strong> → <code>POST /clienti</code>
                  </p>

                  <p className="mt-4">
                    <strong>📖 R – READ</strong> → Legge i dati esistenti
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`SELECT * FROM Clienti;
SELECT Nome FROM Clienti WHERE ID = 1;`}
                  </div>
                  <p className="mt-2">
                    In SQL si usa <code>SELECT</code>. In REST si usa{" "}
                    <strong>GET</strong> → <code>GET /clienti</code>
                  </p>

                  <p className="mt-4">
                    <strong>✏️ U – UPDATE</strong> → Modifica dati esistenti
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`UPDATE Clienti
SET Nome = 'Stellina'
WHERE ID = 1;`}
                  </div>
                  <p className="mt-2">
                    In SQL si usa <code>UPDATE</code>. In REST si usa{" "}
                    <strong>PUT</strong> o <strong>PATCH</strong> →{" "}
                    <code>PUT /clienti/1</code>
                  </p>

                  <p className="mt-4">
                    <strong>🗑️ D – DELETE</strong> → Elimina dati
                  </p>
                  <div
                    style={{
                      background: "#111",
                      padding: "1rem",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {String.raw`DELETE FROM Clienti WHERE ID = 1;`}
                  </div>
                  <p className="mt-2">
                    In SQL si usa <code>DELETE</code>. In REST si usa{" "}
                    <strong>DELETE</strong> → <code>DELETE /clienti/1</code>
                  </p>

                  <p className="mt-4">
                    <strong>📦 CRUD + Interfacce</strong>
                  </p>
                  <ul>
                    <li>🗂️ Database → SQL (PostgreSQL, MySQL, ecc.)</li>
                    <li>🌐 API → REST (Spring Boot, Express, ecc.)</li>
                    <li>🖥️ Frontend → Form, bottoni, dashboard</li>
                  </ul>

                  <p className="mt-4">
                    Le operazioni CRUD sono il cuore di ogni sistema che
                    gestisce dati. Se sai fare CRUD, sai costruire il motore di
                    qualsiasi app 💪🧠
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                ☕JPA (Java Persistence API) e Hibernate.{" "}
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧬 Java – Entità JPA con Annotazioni
                  </Card.Title>

                  <p className="mt-3">
                    In Java, puoi creare una tabella direttamente nel codice
                    usando le annotazioni di <strong>JPA</strong>. Le classi
                    annotate come <code>@Entity</code> rappresentano le tabelle
                    del database. Hibernate (o un altro ORM) si occupa di
                    tradurre tutto in SQL!
                  </p>

                  <p className="mt-4">
                    <strong>
                      📦 Esempio: classe <code>Cliente</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Entity
@Table(name = "clienti")
public class Cliente {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String nome;

  @Column(unique = true)
  private String email;

  @Column(name = "data_iscrizione")
  private LocalDate iscrizione;

  // Getters e Setters
}`}
                  </pre>

                  <p className="mt-2">
                    Questa classe crea una tabella <code>clienti</code> con
                    colonne <code>id</code>, <code>nome</code>,{" "}
                    <code>email</code> e <code>data_iscrizione</code>.
                  </p>

                  <p className="mt-4">
                    <strong>🔑 Annotazioni principali</strong>
                  </p>
                  <ul>
                    <li>
                      <code>@Entity</code> → indica che la classe è una tabella
                    </li>
                    <li>
                      <code>@Table</code> → specifica il nome della tabella
                    </li>
                    <li>
                      <code>@Id</code> → chiave primaria
                    </li>
                    <li>
                      <code>@GeneratedValue</code> → genera ID automatici
                    </li>
                    <li>
                      <code>@Column</code> → personalizza la colonna (nome,
                      vincoli, ecc.)
                    </li>
                  </ul>

                  <p className="mt-4">
                    <strong>🧠 Altre annotazioni utili</strong>
                  </p>
                  <ul>
                    <li>
                      <code>@ManyToOne</code>, <code>@OneToMany</code> →
                      relazioni tra entità
                    </li>
                    <li>
                      <code>@JoinColumn</code> → definisce la chiave esterna
                    </li>
                    <li>
                      <code>@Enumerated</code> → per tipi enum
                    </li>
                    <li>
                      <code>@Transient</code> → campo ignorato dal database
                    </li>
                  </ul>

                  <p className="mt-4">
                    <strong>🚀 Repository + Spring Data</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`public interface ClienteRepository extends JpaRepository<Cliente, Long> {
  List<Cliente> findByNome(String nome);
}`}
                  </pre>

                  <p className="mt-2">
                    Con <code>JpaRepository</code> hai già tutti i metodi CRUD
                    pronti: <code>save</code>, <code>findAll</code>,{" "}
                    <code>deleteById</code>, ecc.
                  </p>

                  <p className="mt-4">
                    Con JPA puoi modellare il tuo database direttamente in Java,
                    mantenendo il codice pulito, tipizzato e facile da
                    mantenere. È come dare vita alle tabelle con oggetti
                    intelligenti 🧠📊
                  </p>
                </Card.Body>
              </Card>

              <h2 className="mt-5">🧠relazioni tra entità in Java</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔗 Relazioni tra Entità in JPA
                  </Card.Title>

                  <p className="mt-3">
                    Le relazioni in JPA collegano le entità Java come fossero
                    tabelle in un database relazionale. Servono per modellare il
                    mondo reale: utenti con profili, ordini con prodotti,
                    studenti con corsi.
                  </p>

                  {/* OneToOne */}
                  <p className="mt-4">
                    <strong>👤 @OneToOne</strong> – Uno a uno
                  </p>
                  <p>
                    Una entità è collegata a una sola altra entità. Esempio:
                    ogni <code>Utente</code> ha un solo <code>Profilo</code>.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`@Entity
public class Profilo {
  @Id
  private Long id;

  @OneToOne
  @JoinColumn(name = "utente_id")
  private Utente utente;
}`}
                  </pre>

                  {/* OneToMany */}
                  <p className="mt-4">
                    <strong>📦 @OneToMany</strong> – Uno a molti
                  </p>
                  <p>
                    Una entità è collegata a molte altre. Esempio: un{" "}
                    <code>Utente</code> ha molti <code>Ordini</code>.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`@Entity
public class Utente {
  @Id
  private Long id;

  @OneToMany(mappedBy = "utente")
  private List<Ordine> ordini;
}`}
                  </pre>

                  {/* ManyToOne */}
                  <p className="mt-4">
                    <strong>📥 @ManyToOne</strong> – Molti a uno
                  </p>
                  <p>
                    Molte entità sono collegate a una sola. Esempio: molti{" "}
                    <code>Ordini</code> appartengono allo stesso{" "}
                    <code>Utente</code>.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`@Entity
public class Ordine {
  @Id
  private Long id;

  @ManyToOne
  @JoinColumn(name = "utente_id")
  private Utente utente;
}`}
                  </pre>

                  {/* ManyToMany */}
                  <p className="mt-4">
                    <strong>🔄 @ManyToMany</strong> – Molti a molti
                  </p>
                  <p>
                    Molte entità sono collegate a molte altre. Esempio: uno{" "}
                    <code>Studente</code> può seguire più <code>Corsi</code>, e
                    ogni <code>Corso</code> può avere più studenti.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`@Entity
public class Studente {
  @Id
  private Long id;

  @ManyToMany
  @JoinTable(
    name = "studente_corso",
    joinColumns = @JoinColumn(name = "studente_id"),
    inverseJoinColumns = @JoinColumn(name = "corso_id")
  )
  private List<Corso> corsi;
}`}
                  </pre>

                  {/* Note */}
                  <p className="mt-4">
                    <strong>📌 Note utili</strong>
                  </p>
                  <ul>
                    <li>
                      <code>mappedBy</code> indica il lato passivo della
                      relazione
                    </li>
                    <li>
                      <code>cascade</code> gestisce operazioni propagate (es.{" "}
                      <code>CascadeType.ALL</code>)
                    </li>
                    <li>
                      <code>fetch</code> controlla il caricamento (es.{" "}
                      <code>FetchType.LAZY</code>)
                    </li>
                  </ul>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Le relazioni ti permettono di navigare tra oggetti come
                    fossero connessi nel mondo reale. Una volta capite,
                    diventano intuitive e potenti ✨
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">💫 query in JPA</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔍 JPA – Query e Ricerca Dati
                  </Card.Title>

                  <p className="mt-3">
                    In JPA puoi eseguire query per cercare, filtrare o ordinare
                    i dati nel database. Puoi usare <strong>JPQL</strong> (Java
                    Persistence Query Language), <strong>native query</strong>{" "}
                    SQL, oppure i metodi automatici di <code>Spring Data</code>.
                  </p>

                  {/* Query con JPQL */}
                  <p className="mt-4">
                    <strong>🧠 JPQL – Query orientate agli oggetti</strong>
                  </p>
                  <p>
                    JPQL usa i nomi delle classi e dei campi Java, non quelli
                    delle tabelle SQL. Esempio: cerca tutti i clienti con nome
                    "Marco".
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Query("SELECT c FROM Cliente c WHERE c.nome = :nome")
List<Cliente> trovaPerNome(@Param("nome") String nome);`}
                  </pre>

                  {/* Native Query */}
                  <p className="mt-4">
                    <strong>🧬 Native Query – SQL puro</strong>
                  </p>
                  <p>
                    Se vuoi usare direttamente SQL, puoi farlo con{" "}
                    <code>@Query</code> e <code>nativeQuery = true</code>.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Query(value = "SELECT * FROM clienti WHERE email LIKE %:email%", nativeQuery = true)
List<Cliente> cercaPerEmail(@Param("email") String email);`}
                  </pre>

                  {/* Query derivata da nome metodo */}
                  <p className="mt-4">
                    <strong>⚡ Query automatica – Spring Data</strong>
                  </p>
                  <p>
                    Spring Data genera query automaticamente in base al nome del
                    metodo. Esempio: trova tutti i clienti iscritti dopo una
                    certa data.
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`List<Cliente> findByIscrizioneAfter(LocalDate data);`}
                  </pre>

                  {/* Ordinamento e combinazioni */}
                  <p className="mt-4">
                    <strong>📊 Ordinamento e combinazioni</strong>
                  </p>
                  <p>Puoi combinare più condizioni e ordinare i risultati.</p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`List<Cliente> findByNomeAndEmailOrderByIscrizioneDesc(String nome, String email);`}
                  </pre>

                  {/* Note */}
                  <p className="mt-4">
                    <strong>📌 Note utili</strong>
                  </p>
                  <ul>
                    <li>
                      <code>@Query</code> ti permette di scrivere JPQL o SQL
                    </li>
                    <li>
                      <code>@Param</code> collega i parametri della query
                    </li>
                    <li>
                      I metodi <code>findBy</code>, <code>countBy</code>,{" "}
                      <code>deleteBy</code> sono generati automaticamente
                    </li>
                    <li>
                      Puoi usare <code>Pageable</code> per la paginazione
                    </li>
                  </ul>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Le query in JPA ti permettono di interrogare il database in
                    modo elegante e tipizzato. Che tu scriva JPQL, SQL o usi i
                    metodi automatici, hai sempre il pieno controllo sui dati
                    🔍📦
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
export default Java
