import { Col, Container, Row, Card } from "react-bootstrap"
import "../styles/springboot.css"

const SpringBoot = function () {
  return (
    <>
      <div className="page-background d-flex flex-column min-vh-100">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center text-light">
              <h1>🚀 Spring Boot</h1>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🚀 Introduzione a Spring Boot
                  </Card.Title>

                  <p className="mt-3">
                    Spring Boot è un framework Java che semplifica la creazione
                    di applicazioni web e REST. Ti permette di partire subito
                    senza dover configurare manualmente tutto.
                  </p>

                  <p className="mt-4">
                    <strong>📦 Dipendenze principali</strong>
                  </p>
                  <ul>
                    <li>
                      <code>spring-boot-starter-web</code> → per creare API REST
                    </li>
                    <li>
                      <code>spring-boot-starter-data-jpa</code> → per accedere
                      al database
                    </li>
                    <li>
                      <code>spring-boot-starter-security</code> → per
                      autenticazione e autorizzazione
                    </li>
                    <li>
                      <code>spring-boot-devtools</code> → per ricaricamento
                      automatico
                    </li>
                  </ul>

                  <p className="mt-4">
                    <strong>🧠 Vantaggi</strong>
                  </p>
                  <ul>
                    <li>Configurazione automatica</li>
                    <li>Server embedded (Tomcat)</li>
                    <li>Dipendenze gestite con Maven o Gradle</li>
                    <li>
                      Supporto per REST, JPA, sicurezza, test e molto altro
                    </li>
                  </ul>

                  <p className="mt-4">
                    Spring Boot è il cuore moderno dello sviluppo Java: potente,
                    elegante e pronto all’uso. Perfetto per creare microservizi,
                    API e applicazioni complete ⚙️🔥
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">⚙️ primi passi </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🚀 Installare Spring Boot – Guida Rapida
                  </Card.Title>

                  <p className="mt-3">
                    Spring Boot è un framework Java moderno per creare
                    applicazioni web, REST e microservizi. Ti permette di
                    partire subito con un progetto già configurato. Ecco come
                    fare!
                  </p>

                  {/* Step 1 – Generazione progetto */}
                  <p className="mt-4">
                    <strong>🛠️ 1. Genera il progetto</strong>
                  </p>
                  <p>
                    Vai al sito ufficiale:
                    <a
                      href="https://start.spring.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://start.spring.io
                    </a>
                  </p>
                  <ul>
                    <li>
                      <strong>Project:</strong> Maven
                    </li>
                    <li>
                      <strong>Language:</strong> Java
                    </li>
                    <li>
                      <strong>Spring Boot:</strong> versione stabile (es. 3.x)
                    </li>
                    <li>
                      <strong>Packaging:</strong> Jar
                    </li>
                    <li>
                      <strong>Java:</strong> 17 o superiore
                    </li>
                  </ul>

                  {/* Step 2 – Dipendenze consigliate */}
                  <p className="mt-4">
                    <strong>📦 2. Aggiungi le dipendenze</strong>
                  </p>
                  <ul>
                    <li>
                      <code>Spring Web</code> → per creare API REST
                    </li>
                    <li>
                      <code>Spring Data JPA</code> → per accedere al database
                    </li>
                    <li>
                      <code>H2 Database</code> → per test locale (opzionale)
                    </li>
                    <li>
                      <code>Spring Boot DevTools</code> → per ricaricamento
                      automatico
                    </li>
                    <li>
                      <code>Lombok</code> → per ridurre il boilerplate
                      (getter/setter)
                    </li>
                  </ul>

                  {/* Step 3 – Importa nel tuo IDE */}
                  <p className="mt-4">
                    <strong>🧩 3. Importa nel tuo IDE</strong>
                  </p>
                  <p>
                    Apri il progetto in IntelliJ, Eclipse o VS Code. Assicurati
                    che Maven scarichi tutte le dipendenze (può volerci qualche
                    secondo).
                  </p>

                  {/* Step 4 – File pom.xml */}
                  <p className="mt-4">
                    <strong>
                      📄 4. Esempio di <code>pom.xml</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {String.raw`<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
  </dependency>
  <dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
  </dependency>
  <dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
  </dependency>
</dependencies>`}
                  </pre>

                  {/* Step 5 – Avvio */}
                  <p className="mt-4">
                    <strong>🚀 5. Avvia l'applicazione</strong>
                  </p>
                  <p>
                    Esegui la classe con <code>@SpringBootApplication</code>.
                    Spring Boot avvierà automaticamente un server Tomcat su{" "}
                    <code>localhost:8080</code>.
                  </p>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Con questi passaggi hai un'app Spring Boot pronta per creare
                    API, gestire dati e costruire microservizi. È il punto di
                    partenza perfetto per ogni progetto Java moderno ⚙️☕
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🌻application.properties</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🗄️ Collegare Spring Boot a PostgreSQL con{" "}
                    <code>application.properties</code>
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    Il file <code>application.properties</code> è il cuore della
                    configurazione in Spring Boot. Qui definisci come la tua app
                    si connette al database, quali credenziali usare e come
                    gestire le entità JPA.
                  </p>

                  {/* Configurazione base */}
                  <p className="mt-4">
                    <strong>🔧 1. Configurazione per PostgreSQL</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`# URL del database
spring.datasource.url=jdbc:postgresql://localhost:5432/nome_database

# Credenziali
spring.datasource.username=tuo_username
spring.datasource.password=la_tua_password

# Driver JDBC
spring.datasource.driver-class-name=org.postgresql.Driver

# Dialetto Hibernate per PostgreSQL
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

# Strategia di creazione schema
spring.jpa.hibernate.ddl-auto=update

# Mostra le query SQL in console
spring.jpa.show-sql=true`}
                  </pre>

                  {/* Spiegazione */}
                  <p className="mt-4">
                    <strong>📘 2. Cosa significano queste proprietà?</strong>
                  </p>
                  <ul>
                    <li>
                      <code>spring.datasource.url</code>: indica dove si trova
                      il database PostgreSQL
                    </li>
                    <li>
                      <code>spring.datasource.username/password</code>:
                      credenziali di accesso
                    </li>
                    <li>
                      <code>driver-class-name</code>: specifica il driver JDBC
                      da usare
                    </li>
                    <li>
                      <code>hibernate.dialect</code>: dice a Hibernate come
                      tradurre le query SQL per PostgreSQL
                    </li>
                    <li>
                      <code>ddl-auto</code>: gestisce la creazione/aggiornamento
                      dello schema (es. <code>update</code>, <code>create</code>
                      , <code>none</code>)
                    </li>
                    <li>
                      <code>show-sql</code>: utile per debug, mostra le query
                      eseguite
                    </li>
                  </ul>

                  {/* Dipendenza Maven */}
                  <p className="mt-4">
                    <strong>
                      📦 3. Aggiungi la dipendenza PostgreSQL nel{" "}
                      <code>pom.xml</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-2 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<dependency>
  <groupId>org.postgresql</groupId>
  <artifactId>postgresql</artifactId>
  <version>42.7.3</version>
</dependency>`}
                  </pre>

                  {/* Note finali */}
                  <p className="mt-4">
                    Una volta configurato tutto, Spring Boot si occuperà di
                    aprire la connessione, gestire le entità e sincronizzare lo
                    schema. Assicurati che PostgreSQL sia attivo e che il
                    database esista già, oppure usa <code>ddl-auto=create</code>{" "}
                    per farlo creare automaticamente.
                  </p>

                  <p className="mt-3">
                    Con questa configurazione sei pronta per iniziare a salvare,
                    leggere e gestire dati in PostgreSQL con Spring Boot 💾✨
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">⚙️ promemoria dipendenze da scaricare </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📦 Dipendenze Maven – Progetto Personal Trainer
                  </Card.Title>

                  {/* Spring Boot Core */}
                  <p className="mt-3">
                    <strong>🚀 Spring Boot Starter</strong>
                  </p>
                  <ul>
                    <li>
                      <code>spring-boot-starter-web</code> – API REST e
                      controller
                    </li>
                    <li>
                      <code>spring-boot-starter-data-jpa</code> – accesso al
                      database con JPA
                    </li>
                    <li>
                      <code>spring-boot-starter-security</code> – autenticazione
                      e autorizzazione
                    </li>
                    <li>
                      <code>spring-boot-starter-validation</code> – validazione
                      dei dati
                    </li>
                    <li>
                      <code>spring-boot-starter-mail</code> – invio email
                    </li>
                  </ul>

                  {/* Test e Dev */}
                  <p className="mt-4">
                    <strong>🧪 Test & Dev</strong>
                  </p>
                  <ul>
                    <li>
                      <code>spring-boot-starter-test</code> – testing unitario e
                      integrato
                    </li>
                    <li>
                      <code>spring-security-test</code> – test per sicurezza
                    </li>
                    <li>
                      <code>spring-boot-devtools</code> – ricaricamento
                      automatico in sviluppo
                    </li>
                  </ul>

                  {/* Database */}
                  <p className="mt-4">
                    <strong>🗄️ Database</strong>
                  </p>
                  <ul>
                    <li>
                      <code>postgresql</code> – driver JDBC per PostgreSQL
                    </li>
                  </ul>

                  {/* JWT – JSON Web Token */}
                  <p className="mt-4">
                    <strong>🔐 Autenticazione JWT</strong>
                  </p>
                  <ul>
                    <li>
                      <code>jjwt-api</code> – API per creare e leggere JWT
                    </li>
                    <li>
                      <code>jjwt-impl</code> – implementazione runtime
                    </li>
                    <li>
                      <code>jjwt-jackson</code> – supporto per serializzazione
                      JSON
                    </li>
                  </ul>

                  {/* Utility */}
                  <p className="mt-4">
                    <strong>🛠️ Utility</strong>
                  </p>
                  <ul>
                    <li>
                      <code>lombok</code> – riduce il boilerplate
                      (getter/setter)
                    </li>
                    <li>
                      <code>cloudinary-http44</code> – gestione immagini su
                      Cloudinary
                    </li>
                  </ul>

                  {/* Plugin Maven */}
                  <p className="mt-4">
                    <strong>⚙️ Plugin Maven</strong>
                  </p>
                  <ul>
                    <li>
                      <code>maven-compiler-plugin</code> – configurazione
                      compilatore Java
                    </li>
                    <li>
                      <code>spring-boot-maven-plugin</code> – build e packaging
                      Spring Boot
                    </li>
                  </ul>

                  <p className="mt-4">
                    Queste dipendenze ti permettono di costruire un'app
                    completa: sicura, con accesso al database, gestione
                    immagini, email, JWT e test. Se vuoi, posso creare una card
                    che spiega come usare JWT per autenticare gli utenti 🔑
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">
                🌼struttura ideale di un progetto Spring Boot
              </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧭 Struttura di un Progetto Spring Boot – Suddivisione in
                    Pacchetti
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    Un progetto Spring Boot ben strutturato segue una
                    suddivisione logica in pacchetti. Ogni cartella ha un ruolo
                    preciso e aiuta a separare le responsabilità (principio
                    SRP).
                  </p>

                  {/* Elenco pacchetti */}
                  <p className="mt-4">
                    <strong>📁 Suddivisione consigliata</strong>
                  </p>
                  <ul>
                    <li>
                      <code>controller</code> – gestisce le richieste HTTP e
                      definisce gli endpoint
                    </li>
                    <li>
                      <code>dto</code> – oggetti di trasferimento dati tra
                      client e server
                    </li>
                    <li>
                      <code>model</code> – entità JPA che rappresentano le
                      tabelle del database
                    </li>
                    <li>
                      <code>repository</code> – interfacce per accedere ai dati
                      (CRUD)
                    </li>
                    <li>
                      <code>service</code> – logica di business e orchestrazione
                      tra repository e controller
                    </li>
                    <li>
                      <code>security</code> – configurazione di Spring Security,
                      JWT, filtri, ecc.
                    </li>
                    <li>
                      <code>exception</code> – gestione degli errori
                      personalizzati e globali
                    </li>
                    <li>
                      <code>enumeration</code> – definizione di enum (es. ruoli,
                      stati, categorie)
                    </li>
                    <li>
                      <code>config</code> (opzionale) – configurazioni generiche
                      (es. CORS, Swagger, Mail)
                    </li>
                  </ul>

                  {/* Vantaggi */}
                  <p className="mt-4">
                    <strong>🎯 Vantaggi di questa struttura</strong>
                  </p>
                  <ul>
                    <li>✔️ Separazione chiara delle responsabilità</li>
                    <li>✔️ Facilita il testing e il refactoring</li>
                    <li>
                      ✔️ Scalabilità: puoi aggiungere nuove funzionalità senza
                      confusione
                    </li>
                    <li>
                      ✔️ Collaborazione: ogni sviluppatore può lavorare su un
                      modulo specifico
                    </li>
                  </ul>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Questa struttura è il punto di partenza perfetto per
                    costruire un'app solida e professionale. Ora possiamo
                    entrare nel dettaglio di ogni pacchetto, partendo ad esempio
                    da <code>model</code> e <code>repository</code>, oppure da{" "}
                    <code>controller</code> e <code>dto</code>.
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🌙 Entità - model</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧬 Entità JPA – Cartella <code>model</code>
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    Le entità sono classi Java che rappresentano le tabelle del
                    database. Ogni istanza corrisponde a una riga, e ogni campo
                    a una colonna. Si annotano con <code>@Entity</code> e si
                    usano insieme a JPA per gestire i dati.
                  </p>

                  {/* Annotazioni principali */}
                  <p className="mt-4">
                    <strong>📌 Annotazioni fondamentali</strong>
                  </p>
                  <ul>
                    <li>
                      <code>@Entity</code> – indica che la classe è un'entità
                      JPA
                    </li>
                    <li>
                      <code>@Table(name = "nome_tabella")</code> – (opzionale)
                      specifica il nome della tabella
                    </li>
                    <li>
                      <code>@Id</code> – identifica la chiave primaria
                    </li>
                    <li>
                      <code>@GeneratedValue</code> – genera automaticamente l'ID
                    </li>
                    <li>
                      <code>@Column</code> – personalizza il nome e le proprietà
                      della colonna
                    </li>
                  </ul>

                  {/* Lombok */}
                  <p className="mt-4">
                    <strong>✨ Lombok – per evitare boilerplate</strong>
                  </p>
                  <ul>
                    <li>
                      <code>@Data</code> – genera automaticamente getter,
                      setter, <code>toString()</code>, <code>equals()</code>,{" "}
                      <code>hashCode()</code>
                    </li>
                    <li>
                      <code>@NoArgsConstructor</code> – costruttore vuoto
                    </li>
                    <li>
                      <code>@AllArgsConstructor</code> – costruttore con tutti i
                      campi
                    </li>
                    <li>
                      <code>@Builder</code> – crea oggetti con pattern fluido
                    </li>
                  </ul>

                  {/* Esempio di entità */}
                  <p className="mt-4">
                    <strong>
                      📄 Esempio: <code>Utente.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`package com.example.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "utenti")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Utente {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String nome;

  @Column(nullable = false, unique = true)
  private String email;

  @Column(nullable = false)
  private String password;

  @Column
  private String ruolo;
}`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Grazie a Lombok, eviti di scrivere manualmente getter,
                    setter e costruttori. L'entità è pronta per essere salvata,
                    letta e gestita tramite JPA e i repository.
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🌟DTO (Data Transfer Object)</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📤 DTO – Data Transfer Object
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    I DTO sono classi che rappresentano i dati da inviare o
                    ricevere tramite API. Servono per evitare di esporre
                    direttamente le entità del database e per modellare le
                    richieste e risposte in modo preciso.
                  </p>

                  {/* Vantaggi */}
                  <p className="mt-4">
                    <strong>🎯 Perché usare i DTO?</strong>
                  </p>
                  <ul>
                    <li>
                      ✔️ Protezione: non esponi campi sensibili (es. password)
                    </li>
                    <li>
                      ✔️ Controllo: puoi personalizzare i dati in base al
                      contesto
                    </li>
                    <li>
                      ✔️ Validazione: puoi usare annotazioni per controllare i
                      dati in ingresso
                    </li>
                    <li>
                      ✔️ Separazione: mantieni entità e logica di presentazione
                      ben distinte
                    </li>
                  </ul>

                  {/* Annotazioni utili */}
                  <p className="mt-4">
                    <strong>📌 Annotazioni utili</strong>
                  </p>
                  <ul>
                    <li>
                      <code>@NotBlank</code>, <code>@Email</code>,{" "}
                      <code>@Size</code> – per validare i campi
                    </li>
                    <li>
                      <code>@Data</code>, <code>@NoArgsConstructor</code>,{" "}
                      <code>@AllArgsConstructor</code> – Lombok per evitare
                      boilerplate
                    </li>
                  </ul>

                  {/* Esempio DTO */}
                  <p className="mt-4">
                    <strong>
                      📄 Esempio: <code>UtenteDTO.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`package com.example.dto;

import lombok.*;
import jakarta.validation.constraints.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UtenteDTO {

  @NotBlank(message = "Il nome è obbligatorio")
  private String nome;

  @Email(message = "Email non valida")
  @NotBlank(message = "L'email è obbligatoria")
  private String email;

  @Size(min = 6, message = "La password deve avere almeno 6 caratteri")
  private String password;
}`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    I DTO ti permettono di ricevere input validati e restituire
                    solo ciò che serve. Puoi anche creare DTO diversi per
                    registrazione, login, aggiornamento profilo, ecc.
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🚨 Exception</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🚨 Gestione Errori – Cartella <code>exception</code>
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    In Spring Boot, è buona pratica gestire gli errori in modo
                    centralizzato. Creiamo eccezioni personalizzate per casi
                    specifici e un handler globale per intercettarle e
                    restituire risposte chiare al client.
                  </p>

                  {/* Eccezioni personalizzate */}
                  <p className="mt-4">
                    <strong>⚠️ Eccezioni personalizzate</strong>
                  </p>
                  <ul>
                    <li>
                      <code>NotFoundException</code> – risorsa non trovata
                    </li>
                    <li>
                      <code>UnauthorizedException</code> – accesso negato
                    </li>
                    <li>
                      <code>ValidationException</code> – errore di validazione
                    </li>
                  </ul>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`package com.example.exception;

public class NotFoundException extends RuntimeException {
  public NotFoundException(String message) {
    super(message);
  }
}

public class UnauthorizedException extends RuntimeException {
  public UnauthorizedException(String message) {
    super(message);
  }
}

public class ValidationException extends RuntimeException {
  public ValidationException(String message) {
    super(message);
  }
}`}
                  </pre>

                  {/* Modello ApiError */}
                  <p className="mt-4">
                    <strong>
                      📄 Modello di risposta: <code>ApiError.java</code>
                    </strong>
                  </p>
                  <p>
                    Questo modello viene usato per restituire errori in formato
                    JSON, con dettagli utili.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`package com.example.exception;

import lombok.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApiError {
  private int status;
  private String error;
  private String message;
  private String path;
  private LocalDateTime timestamp;
}`}
                  </pre>

                  {/* Handler globale */}
                  <p className="mt-4">
                    <strong>
                      🛡️ Gestore globale: <code>CustomExceptionHandler</code>
                    </strong>
                  </p>
                  <p>
                    Annotato con <code>@RestControllerAdvice</code>, intercetta
                    tutte le eccezioni e restituisce un oggetto{" "}
                    <code>ApiError</code>.
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`package com.example.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@RestControllerAdvice
public class CustomExceptionHandler {

  @ExceptionHandler(NotFoundException.class)
  public ResponseEntity<ApiError> handleNotFound(NotFoundException ex, WebRequest request) {
    ApiError error = ApiError.builder()
      .status(HttpStatus.NOT_FOUND.value())
      .error("Not Found")
      .message(ex.getMessage())
      .path(request.getDescription(false).replace("uri=", ""))
      .timestamp(LocalDateTime.now())
      .build();
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
  }

  @ExceptionHandler(UnauthorizedException.class)
  public ResponseEntity<ApiError> handleUnauthorized(UnauthorizedException ex, WebRequest request) {
    ApiError error = ApiError.builder()
      .status(HttpStatus.UNAUTHORIZED.value())
      .error("Unauthorized")
      .message(ex.getMessage())
      .path(request.getDescription(false).replace("uri=", ""))
      .timestamp(LocalDateTime.now())
      .build();
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
  }

  @ExceptionHandler(ValidationException.class)
  public ResponseEntity<ApiError> handleValidation(ValidationException ex, WebRequest request) {
    ApiError error = ApiError.builder()
      .status(HttpStatus.BAD_REQUEST.value())
      .error("Validation Error")
      .message(ex.getMessage())
      .path(request.getDescription(false).replace("uri=", ""))
      .timestamp(LocalDateTime.now())
      .build();
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<ApiError> handleGeneric(Exception ex, WebRequest request) {
    ApiError error = ApiError.builder()
      .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
      .error("Internal Server Error")
      .message("Si è verificato un errore imprevisto")
      .path(request.getDescription(false).replace("uri=", ""))
      .timestamp(LocalDateTime.now())
      .build();
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
  }
}`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Con questa struttura, ogni errore viene gestito in modo
                    chiaro e coerente. Il client riceve un oggetto JSON con
                    tutte le informazioni utili per capire cosa è andato storto.
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🗂️Repository</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    📚 Repository – Cartella <code>repository</code>
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    In Spring Boot, il repository è l’interfaccia che collega la
                    tua applicazione al database. Grazie a Spring Data JPA, puoi
                    eseguire operazioni CRUD senza scrivere query SQL manuali.
                  </p>

                  {/* Interfaccia base */}
                  <p className="mt-4">
                    <strong>🧩 Interfaccia base</strong>
                  </p>
                  <p>
                    Estendiamo <code>JpaRepository</code> per ottenere metodi
                    già pronti come <code>findAll()</code>, <code>save()</code>,{" "}
                    <code>deleteById()</code>, ecc.
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`package com.example.repository;

import com.example.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
  // Metodi personalizzati qui sotto
}`}
                  </pre>

                  {/* Metodi personalizzati */}
                  <p className="mt-4">
                    <strong>🔍 Query personalizzate</strong>
                  </p>
                  <p>
                    Spring genera automaticamente query basate sul nome del
                    metodo. Ecco alcuni esempi utili:
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`List<Book> findByAuthor(String author);
List<Book> findByTitleContainingIgnoreCase(String keyword);
List<Book> findByPublishedYearGreaterThan(int year);`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Il repository è il cuore della persistenza. Con Spring Data
                    JPA, puoi scrivere meno codice e ottenere di più.
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🌌 Enumeration</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧭 Enumerazioni – Cartella <code>enumeration</code>
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    Gli <strong>Enum</strong> (enumerazioni) rappresentano un
                    insieme fisso di costanti. Sono utili per definire ruoli,
                    stati, categorie, tipi, ecc. Nella cartella{" "}
                    <code>enumeration</code> raccogliamo tutti gli enum usati
                    nei model.
                  </p>

                  {/* Esempio di enum */}
                  <p className="mt-4">
                    <strong>
                      📌 Esempio: <code>Role.java</code>
                    </strong>
                  </p>
                  <p>
                    Definiamo i ruoli utente in modo chiaro e centralizzato:
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`package com.example.enumeration;

public enum Role {
  ADMIN,
  USER,
  GUEST
}`}
                  </pre>

                  {/* Uso nei model */}
                  <p className="mt-4">
                    <strong>📦 Uso nei model</strong>
                  </p>
                  <p>
                    Gli enum si usano come tipo nei model. Per salvarli
                    correttamente nel database, usiamo{" "}
                    <code>@Enumerated(EnumType.STRING)</code>.
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String username;

  @Enumerated(EnumType.STRING)
  private Role role;
}`}
                  </pre>

                  {/* Annotazioni disponibili */}
                  <p className="mt-4">
                    <strong>🧪 Annotazioni disponibili</strong>
                  </p>
                  <ul>
                    <li>
                      <code>@Enumerated(EnumType.STRING)</code> – salva l’enum
                      come testo (es. <code>"ADMIN"</code>)
                    </li>
                    <li>
                      <code>@Enumerated(EnumType.ORDINAL)</code> – salva l’enum
                      come indice numerico (es. <code>0</code>, <code>1</code>)
                    </li>
                  </ul>
                  <p className="mt-2">
                    ⚠️ <em>Consigliato:</em> usare <code>EnumType.STRING</code>{" "}
                    per evitare problemi se l’ordine cambia.
                  </p>

                  {/* Validazione */}
                  <p className="mt-4">
                    <strong>✅ Validazione con DTO</strong>
                  </p>
                  <p>
                    Se usi gli enum nei DTO, assicurati che il valore ricevuto
                    sia valido. Spring lo fa automaticamente se il tipo è{" "}
                    <code>Role</code> e il valore non è tra quelli definiti.
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`public record UserRequestDTO(
  String username,
  Role role
) { }`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Gli enum rendono il codice più leggibile, sicuro e meno
                    soggetto a errori. La cartella <code>enumeration</code> è il
                    posto giusto per tenerli ordinati e riutilizzabili.
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">⚙️ Service</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    ⚙️ Service – Cartella <code>service</code> con{" "}
                    <code>@Autowired</code>
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    La cartella <code>service</code> contiene la logica
                    applicativa. Qui orchestriamo le operazioni tra repository,
                    DTO, validazioni e business logic. In questo esempio usiamo{" "}
                    <code>@Autowired</code> per iniettare le dipendenze.
                  </p>

                  {/* Ruolo del service */}
                  <p className="mt-4">
                    <strong>🧠 Ruolo del Service</strong>
                  </p>
                  <ul>
                    <li>Astrazione tra Controller e Repository</li>
                    <li>Contiene la logica di business</li>
                    <li>Gestisce validazioni, trasformazioni, eccezioni</li>
                    <li>Evita che il Controller diventi troppo complesso</li>
                  </ul>

                  {/* Esempio con Autowired */}
                  <p className="mt-4">
                    <strong>
                      📌 Esempio: <code>BookService.java</code> con{" "}
                      <code>@Autowired</code>
                    </strong>
                  </p>
                  <p>
                    In questo esempio, usiamo <code>@Autowired</code> per
                    iniettare il repository nel service.
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`package com.example.service;

import com.example.model.Book;
import com.example.repository.BookRepository;
import com.example.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

  private BookRepository bookRepository;

  @Autowired
  public BookService(BookRepository bookRepository) {
    this.bookRepository = bookRepository;
  }

  public List<Book> getAllBooks() {
    return bookRepository.findAll();
  }

  public Book getBookById(Long id) {
    return bookRepository.findById(id)
      .orElseThrow(() -> new NotFoundException("Libro non trovato con ID: " + id));
  }

  public Book createBook(Book book) {
    return bookRepository.save(book);
  }

  public Book updateBook(Long id, Book updatedBook) {
    Book existing = getBookById(id);
    existing.setTitle(updatedBook.getTitle());
    existing.setAuthor(updatedBook.getAuthor());
    existing.setPublishedYear(updatedBook.getPublishedYear());
    return bookRepository.save(existing);
  }

  public void deleteBook(Long id) {
    bookRepository.deleteById(id);
  }
}`}
                  </pre>

                  {/* Annotazioni */}
                  <p className="mt-4">
                    <strong>📎 Annotazioni usate</strong>
                  </p>
                  <ul>
                    <li>
                      <code>@Service</code> – indica che la classe è un
                      componente di servizio
                    </li>
                    <li>
                      <code>@Autowired</code> – inietta automaticamente il bean{" "}
                      <code>BookRepository</code>
                    </li>
                  </ul>

                  {/* Best practice */}
                  <p className="mt-4">
                    <strong>🧼 Best Practice</strong>
                  </p>
                  <ul>
                    <li>
                      Preferire il costruttore con <code>@Autowired</code>{" "}
                      rispetto al campo diretto
                    </li>
                    <li>
                      Usare <code>@RequiredArgsConstructor</code> con Lombok per
                      evitare boilerplate
                    </li>
                    <li>
                      Gestire eccezioni nel Service e usare l’handler globale
                    </li>
                    <li>Usare DTO per input/output e mappa nel Service</li>
                  </ul>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Il Service è il cuore operativo dell’applicazione. Con{" "}
                    <code>@Autowired</code> puoi iniettare le dipendenze in modo
                    semplice e modulare. La cartella <code>service</code>{" "}
                    mantiene il codice pulito e testabile.
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🐉Security</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🔐 Sicurezza – Cartella <code>security</code> con JWT
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    La cartella <code>security</code> contiene la configurazione
                    per autenticazione e autorizzazione. Usiamo{" "}
                    <strong>JWT</strong> per proteggere le API REST in modo
                    stateless. Qui troviamo:
                  </p>
                  <ul>
                    <li>
                      <code>SecurityConfig</code> – configurazione globale
                    </li>
                    <li>
                      <code>JwtFilter</code> – intercetta e valida il token
                    </li>
                    <li>
                      <code>JwtTool</code> – genera e decodifica i token
                    </li>
                    <li>
                      <code>UserDetails</code> – modello utente per Spring
                      Security
                    </li>
                  </ul>

                  {/* Modello User */}
                  <p className="mt-4">
                    <strong>
                      👤 Modello <code>User.java</code>
                    </strong>
                  </p>
                  <p>
                    Il modello utente implementa <code>UserDetails</code> per
                    integrarsi con Spring Security.
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String username;
  private String password;

  @Enumerated(EnumType.STRING)
  private Role role;

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of(new SimpleGrantedAuthority("ROLE_" + role.name()));
  }

  @Override public boolean isAccountNonExpired() { return true; }
  @Override public boolean isAccountNonLocked() { return true; }
  @Override public boolean isCredentialsNonExpired() { return true; }
  @Override public boolean isEnabled() { return true; }
}`}
                  </pre>

                  {/* JwtTool */}
                  <p className="mt-4">
                    <strong>
                      🔧 <code>JwtTool.java</code>
                    </strong>
                  </p>
                  <p>Classe utility per creare e validare i token JWT.</p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Component
public class JwtTool {

  @Value("\${jwt.secret}")
  private String secret;

  public String generateToken(UserDetails userDetails) {
    return Jwts.builder()
      .setSubject(userDetails.getUsername())
      .claim("authorities", userDetails.getAuthorities())
      .setIssuedAt(new Date())
      .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 1 giorno
      .signWith(SignatureAlgorithm.HS256, secret)
      .compact();
  }

  public String extractUsername(String token) {
    return Jwts.parser().setSigningKey(secret)
      .parseClaimsJws(token).getBody().getSubject();
  }

  public boolean validateToken(String token, UserDetails userDetails) {
    String username = extractUsername(token);
    return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
  }

  private boolean isTokenExpired(String token) {
    Date expiration = Jwts.parser().setSigningKey(secret)
      .parseClaimsJws(token).getBody().getExpiration();
    return expiration.before(new Date());
  }
}`}
                  </pre>

                  {/* JwtFilter */}
                  <p className="mt-4">
                    <strong>
                      🛡️ <code>JwtFilter.java</code>
                    </strong>
                  </p>
                  <p>
                    Filtro che intercetta ogni richiesta e verifica il token
                    JWT.
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Component
public class JwtFilter extends OncePerRequestFilter {

  @Autowired private JwtTool jwtTool;
  @Autowired private UserDetailsService userDetailsService;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

    final String authHeader = request.getHeader("Authorization");

    if (authHeader != null && authHeader.startsWith("Bearer ")) {
      String token = authHeader.substring(7);
      String username = jwtTool.extractUsername(token);

      if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        if (jwtTool.validateToken(token, userDetails)) {
          UsernamePasswordAuthenticationToken authToken =
            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

          authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
          SecurityContextHolder.getContext().setAuthentication(authToken);
        }
      }
    }

    filterChain.doFilter(request, response);
  }
}`}
                  </pre>

                  {/* SecurityConfig */}
                  <p className="mt-4">
                    <strong>
                      🔐 <code>SecurityConfig.java</code>
                    </strong>
                  </p>
                  <p>
                    Configura le rotte protette, il filtro JWT e il
                    comportamento di sicurezza.
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

  private final JwtFilter jwtFilter;

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    return http
      .csrf(AbstractHttpConfigurer::disable)
      .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
      .authorizeHttpRequests(auth -> auth
        .requestMatchers("/auth/**").permitAll()
        .anyRequest().authenticated()
      )
      .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
      .build();
  }

  @Bean
  public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
    return config.getAuthenticationManager();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Con questa struttura, hai un sistema di autenticazione JWT
                    completo, sicuro e scalabile. Il token viene generato al
                    login, validato ad ogni richiesta, e le rotte sono protette
                    in modo stateless.
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">💪 Controller</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧭 Controller – Cartella <code>controller</code> con{" "}
                    <code>@PreAuthorize</code>
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    Il <strong>Controller</strong> espone le API REST e gestisce
                    le richieste HTTP. Con <code>@PreAuthorize</code> possiamo
                    proteggere endpoint in base al ruolo utente, sfruttando
                    l’integrazione con Spring Security e JWT.
                  </p>

                  {/* Annotazioni principali */}
                  <p className="mt-4">
                    <strong>📎 Annotazioni principali</strong>
                  </p>
                  <ul>
                    <li>
                      <code>@RestController</code> – classe che gestisce
                      richieste REST
                    </li>
                    <li>
                      <code>@RequestMapping</code> – path base del controller
                    </li>
                    <li>
                      <code>@PreAuthorize</code> – protezione basata su ruoli
                    </li>
                    <li>
                      <code>@Valid</code>, <code>@RequestBody</code>,{" "}
                      <code>@PathVariable</code> – gestione input
                    </li>
                  </ul>

                  {/* Esempio con PreAuthorize */}
                  <p className="mt-4">
                    <strong>
                      📌 Esempio: <code>BookController.java</code>
                    </strong>
                  </p>
                  <p>
                    In questo esempio, solo gli <code>ADMIN</code> possono
                    creare, aggiornare o eliminare libri. Gli <code>USER</code>{" "}
                    possono solo leggere.
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class BookController {

  private final BookService bookService;

  @GetMapping
  @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
  public List<Book> getAllBooks() {
    return bookService.getAllBooks();
  }

  @GetMapping("/{id}")
  @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
  public Book getBookById(@PathVariable Long id) {
    return bookService.getBookById(id);
  }

  @PostMapping
  @PreAuthorize("hasRole('ADMIN')")
  public Book createBook(@Valid @RequestBody BookRequestDTO dto) {
    Book book = new Book(dto.title(), dto.author(), dto.publishedYear());
    return bookService.createBook(book);
  }

  @PutMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public Book updateBook(@PathVariable Long id, @Valid @RequestBody BookRequestDTO dto) {
    Book updated = new Book(dto.title(), dto.author(), dto.publishedYear());
    return bookService.updateBook(id, updated);
  }

  @DeleteMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
    bookService.deleteBook(id);
    return ResponseEntity.noContent().build();
  }
}`}
                  </pre>

                  {/* Enum Role */}
                  <p className="mt-4">
                    <strong>
                      🔐 Enum: <code>Role.java</code>
                    </strong>
                  </p>
                  <p>
                    I ruoli usati da <code>@PreAuthorize</code> devono essere
                    definiti nel tuo enum:
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`public enum Role {
  ADMIN,
  USER
}`}
                  </pre>

                  {/* DTO di esempio */}
                  <p className="mt-4">
                    <strong>
                      📄 DTO: <code>BookRequestDTO.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`public record BookRequestDTO(
  @NotBlank String title,
  @NotBlank String author,
  @Min(1900) int publishedYear
) { }`}
                  </pre>

                  {/* Attivazione PreAuthorize */}
                  <p className="mt-4">
                    <strong>
                      ⚙️ Attivazione di <code>@PreAuthorize</code>
                    </strong>
                  </p>
                  <p>
                    Per usare <code>@PreAuthorize</code>, devi abilitare il
                    supporto in <code>SecurityConfig</code>:
                  </p>

                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@EnableMethodSecurity(prePostEnabled = true)`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Con <code>@PreAuthorize</code> puoi proteggere ogni metodo
                    in modo preciso e leggibile. I ruoli definiti nel JWT
                    vengono interpretati da Spring Security per autorizzare o
                    bloccare l’accesso.
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">✨Progetto Spring Boot completo </h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧩 Progetto completo – Spring Boot con JWT
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    Questo progetto Spring Boot implementa un sistema di
                    autenticazione con <strong>JWT</strong>, ruoli utente,
                    validazione, sicurezza e struttura modulare. È perfetto come
                    base per qualsiasi applicazione REST sicura.
                  </p>

                  {/* Struttura */}
                  <p className="mt-4">
                    <strong>📁 Struttura del progetto</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`src/
└── main/
    └── java/
        └── com/example/demo/
            ├── controller/
            ├── service/
            ├── repository/
            ├── model/
            ├── dto/
            ├── enumeration/
            ├── exception/
            └── security/`}
                  </pre>

                  {/* Entità */}
                  <p className="mt-4">
                    <strong>
                      🧱 Entità: <code>User.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User implements UserDetails {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String username;
  private String password;

  @Enumerated(EnumType.STRING)
  private Role role;

  @Override public Collection<? extends GrantedAuthority> getAuthorities() {
    return List.of(new SimpleGrantedAuthority("ROLE_" + role.name()));
  }

  @Override public boolean isAccountNonExpired() { return true; }
  @Override public boolean isAccountNonLocked() { return true; }
  @Override public boolean isCredentialsNonExpired() { return true; }
  @Override public boolean isEnabled() { return true; }
}`}
                  </pre>

                  {/* Enum */}
                  <p className="mt-4">
                    <strong>
                      🔐 Enum: <code>Role.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`public enum Role {
  ADMIN,
  USER
}`}
                  </pre>

                  {/* DTO */}
                  <p className="mt-4">
                    <strong>
                      📄 DTO: <code>UserLoginDTO.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`public record UserLoginDTO(
  @NotBlank String username,
  @NotBlank String password
) { }`}
                  </pre>

                  {/* Repository */}
                  <p className="mt-4">
                    <strong>
                      🗂️ Repository: <code>UserRepository.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);
}`}
                  </pre>

                  {/* Service */}
                  <p className="mt-4">
                    <strong>
                      ⚙️ Service: <code>UserService.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Service
@RequiredArgsConstructor
public class UserService {
  private final UserRepository userRepository;

  public Optional<User> findByUsername(String username) {
    return userRepository.findByUsername(username);
  }

  public User save(User user) {
    return userRepository.save(user);
  }
}`}
                  </pre>

                  {/* Controller */}
                  <p className="mt-4">
                    <strong>
                      🧭 Controller: <code>AuthController.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

  private final UserService userService;
  private final JwtTool jwtTool;
  private final PasswordEncoder passwordEncoder;

  @PostMapping("/login")
  public ResponseEntity<String> login(@Valid @RequestBody UserLoginDTO dto) {
    User user = userService.findByUsername(dto.username())
      .orElseThrow(() -> new RuntimeException("Utente non trovato"));

    if (!passwordEncoder.matches(dto.password(), user.getPassword())) {
      throw new RuntimeException("Password errata");
    }

    String token = jwtTool.generateToken(user);
    return ResponseEntity.ok(token);
  }
}`}
                  </pre>

                  {/* Security Config */}
                  <p className="mt-4">
                    <strong>
                      🔐 Sicurezza: <code>SecurityConfig.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

  private final JwtFilter jwtFilter;

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    return http
      .csrf(csrf -> csrf.disable())
      .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
      .authorizeHttpRequests(auth -> auth
        .requestMatchers("/auth/**").permitAll()
        .anyRequest().authenticated()
      )
      .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
      .build();
  }

  @Bean public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}`}
                  </pre>

                  {/* JWT Tool */}
                  <p className="mt-4">
                    <strong>
                      🛡️ JWT Tool: <code>JwtTool.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Component
public class JwtTool {

  @Value("\${jwt.secret}")
  private String secretKey;

  public String generateToken(User user) {
    return Jwts.builder()
      .setSubject(user.getUsername())
      .claim("role", user.getRole().name())
      .setIssuedAt(new Date())
      .setExpiration(new Date(System.currentTimeMillis() + 86400000))
      .signWith(SignatureAlgorithm.HS256, secretKey)
      .compact();
  }

  public String extractUsername(String token) {
    return Jwts.parser().setSigningKey(secretKey)
      .parseClaimsJws(token).getBody().getSubject();
  }
}`}
                  </pre>

                  {/* JWT Filter */}
                  <p className="mt-4">
                    <strong>
                      🧱 Filtro JWT: <code>JwtFilter.java</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

  private final JwtTool jwtTool;
  private final UserDetailsService userDetailsService;

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

    final String authHeader = request.getHeader("Authorization");

    if (authHeader != null && authHeader.startsWith("Bearer ")) {
      String token = authHeader.substring(7);
      String username = jwtTool.extractUsername(token);

      if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        UsernamePasswordAuthenticationToken authToken =
          new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authToken);
      }
    }

    filterChain.doFilter(request, response);
  }
}`}
                  </pre>
                  {/* Properties */}
                  <p className="mt-4">
                    <strong>
                      ⚙️ Configurazione: <code>application.properties</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`# Database
spring.datasource.url=jdbc:mysql://localhost:3306/demo
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

# JWT
jwt.secret=supersegreto123

# JPA & Hibernate
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Server
server.port=8080`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Questo progetto è una base solida per qualsiasi applicazione
                    Spring Boot con autenticazione. Puoi espanderlo facilmente
                    con:
                  </p>
                  <ul>
                    <li>🔐 Registrazione utente e hashing password</li>
                    <li>📄 DTO per creazione e aggiornamento</li>
                    <li>🧾 Gestione eccezioni personalizzate</li>
                    <li>📚 Swagger per documentare le API</li>
                    <li>🧪 Test con JUnit e MockMvc</li>
                  </ul>
                  <p className="mt-3">
                    Se vuoi, posso creare una card separata per ciascuna di
                    queste funzionalità. Basta chiedere 💙
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🌟Cloudinary</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🖼️ Integrazione Cloudinary – Upload immagini in Spring Boot
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    <strong>Cloudinary</strong> è una piattaforma cloud per la
                    gestione di immagini e video. Con la sua API puoi caricare,
                    trasformare e accedere ai file in modo semplice e scalabile.
                    Perfetta per progetti Spring Boot che gestiscono contenuti
                    multimediali.
                  </p>

                  {/* Step 1: Dipendenza Maven */}
                  <p className="mt-4">
                    <strong>📦 1. Aggiungi la dipendenza Maven</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`<dependency>
  <groupId>com.cloudinary</groupId>
  <artifactId>cloudinary-http44</artifactId>
  <version>1.32.2</version>
</dependency>`}
                  </pre>

                  {/* Step 2: Configurazione Cloudinary */}
                  <p className="mt-4">
                    <strong>⚙️ 2. Configura Cloudinary nel tuo progetto</strong>
                  </p>
                  <p>
                    Crea una classe <code>CloudinaryConfig</code> per
                    inizializzare il client con le tue credenziali.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Configuration
public class CloudinaryConfig {

  @Value("\${cloudinary.cloud_name}")
  private String cloudName;

  @Value("\${cloudinary.api_key}")
  private String apiKey;

  @Value("\${cloudinary.api_secret}")
  private String apiSecret;

  @Bean
  public Cloudinary cloudinary() {
    Map<String, String> config = new HashMap<>();
    config.put("cloud_name", cloudName);
    config.put("api_key", apiKey);
    config.put("api_secret", apiSecret);
    return new Cloudinary(config);
  }
}`}
                  </pre>

                  {/* Step 3: application.properties */}
                  <p className="mt-4">
                    <strong>
                      🗂️ 3. Inserisci le credenziali in{" "}
                      <code>application.properties</code>
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`cloudinary.cloud_name=tuo-cloud-name
cloudinary.api_key=tuo-api-key
cloudinary.api_secret=tuo-api-secret`}
                  </pre>

                  {/* Step 4: Service per upload */}
                  <p className="mt-4">
                    <strong>🚀 4. Crea un service per caricare immagini</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Service
@RequiredArgsConstructor
public class ImageService {

  private final Cloudinary cloudinary;

  public String upload(MultipartFile file) throws IOException {
    Map uploadResult = cloudinary.uploader().upload(file.getBytes(), Map.of());
    return uploadResult.get("secure_url").toString();
  }
}`}
                  </pre>

                  {/* Step 5: Controller */}
                  <p className="mt-4">
                    <strong>🧭 5. Controller per gestire l’upload</strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@RestController
@RequestMapping("/api/images")
@RequiredArgsConstructor
public class ImageController {

  private final ImageService imageService;

  @PostMapping("/upload")
  public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
    String imageUrl = imageService.upload(file);
    return ResponseEntity.ok(imageUrl);
  }
}`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Con questa integrazione puoi caricare immagini su Cloudinary
                    e ottenere l’URL pubblico da usare nel frontend o salvare
                    nel database. Puoi anche esplorare funzionalità avanzate
                    come:
                  </p>
                  <ul>
                    <li>
                      🔄 Trasformazioni dinamiche (resize, crop, watermark)
                    </li>
                    <li>📦 Gestione cartelle e tag</li>
                    <li>🧾 Upload da URL esterni</li>
                    <li>🧹 Eliminazione e aggiornamento immagini</li>
                  </ul>
                  <p className="mt-3">
                    Vuoi una card per le trasformazioni o per la cancellazione
                    immagini? Te la preparo subito 💙
                  </p>
                </Card.Body>
              </Card>
              <h2 className="mt-5">🧪 Test</h2>
              <Card bg="dark" text="light" className="mt-4 shadow">
                <Card.Body>
                  <Card.Title className="text-center">
                    🧪 Test – Cartella <code>test</code> con{" "}
                    <code>@ExtendWith(MockitoExtension.class)</code>
                  </Card.Title>

                  {/* Introduzione */}
                  <p className="mt-3">
                    I test unitari verificano il comportamento delle classi in
                    isolamento. Con <strong>Mockito</strong> possiamo simulare
                    il comportamento dei repository e testare la logica del{" "}
                    <code>Service</code> senza dipendere dal database.
                  </p>

                  {/* Annotazioni principali */}
                  <p className="mt-4">
                    <strong>📎 Annotazioni principali</strong>
                  </p>
                  <ul>
                    <li>
                      <code>@ExtendWith(MockitoExtension.class)</code> – abilita
                      Mockito nel test
                    </li>
                    <li>
                      <code>@Mock</code> – crea un mock del repository
                    </li>
                    <li>
                      <code>@InjectMocks</code> – inietta i mock nel service
                    </li>
                    <li>
                      <code>when(...).thenReturn(...)</code> – definisce il
                      comportamento simulato
                    </li>
                    <li>
                      <code>assertEquals</code>, <code>assertThrows</code>,{" "}
                      <code>verify</code> – verifiche sui risultati
                    </li>
                  </ul>

                  {/* Test: Salvataggio */}
                  <p className="mt-4">
                    <strong>
                      ✅ Test: <code>saveMuscolo()</code>
                    </strong>
                  </p>
                  <p>
                    Verifica che il service salvi correttamente un DTO
                    trasformandolo in entità.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Test
public void testSaveMuscoloConDto() {
  MuscoloDto muscoloDto = new MuscoloDto("Tricipite", "Muscolo braccio posteriore");
  Muscolo muscoloEntity = new Muscolo("Tricipite", "Muscolo braccio posteriore");

  when(muscoloRepository.save(any(Muscolo.class))).thenReturn(muscoloEntity);

  Muscolo result = muscoloService.saveMuscolo(muscoloDto);

  assertNotNull(result);
  assertEquals("Tricipite", result.getNome());
  assertEquals("Muscolo braccio posteriore", result.getDescrizione());
}`}
                  </pre>

                  {/* Test: GetMuscolo Success */}
                  <p className="mt-4">
                    <strong>
                      🔍 Test: <code>getMuscolo()</code> con ID valido
                    </strong>
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Test
public void testGetMuscoloSuccess() throws Exception {
  Muscolo muscolo = new Muscolo(1, "Bicipite", "Muscolo braccio");

  when(muscoloRepository.findById(1)).thenReturn(Optional.of(muscolo));

  Muscolo result = muscoloService.getMuscolo(1);

  assertNotNull(result);
  assertEquals("Bicipite", result.getNome());
}`}
                  </pre>

                  {/* Test: GetMuscolo Not Found */}
                  <p className="mt-4">
                    <strong>
                      🚫 Test: <code>getMuscolo()</code> con ID inesistente
                    </strong>
                  </p>
                  <p>
                    Verifica che venga lanciata un’eccezione se il muscolo non
                    esiste.
                  </p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Test
public void testGetMuscoloNotFound() {
  when(muscoloRepository.findById(2)).thenReturn(Optional.empty());

  Exception exception = assertThrows(Exception.class, () -> {
    muscoloService.getMuscolo(2);
  });

  assertTrue(exception.getMessage().contains("non trovato"));
}`}
                  </pre>

                  {/* Test: UpdateMuscolo */}
                  <p className="mt-4">
                    <strong>
                      ✏️ Test: <code>updateMuscolo()</code>
                    </strong>
                  </p>
                  <p>Verifica che il muscolo venga aggiornato correttamente.</p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Test
public void testUpdateMuscolo() throws Exception {
  Muscolo originale = new Muscolo(1, "Deltoide", "Spalla");
  MuscoloDto aggiornatoDto = new MuscoloDto("Deltoide Modificato", "Spalla aggiornata");
  Muscolo aggiornatoEntity = new Muscolo(1, "Deltoide Modificato", "Spalla aggiornata");

  when(muscoloRepository.findById(1)).thenReturn(Optional.of(originale));
  when(muscoloRepository.save(any(Muscolo.class))).thenReturn(aggiornatoEntity);

  Muscolo result = muscoloService.updateMuscolo(1, aggiornatoDto);

  assertNotNull(result);
  assertEquals("Deltoide Modificato", result.getNome());
  assertEquals("Spalla aggiornata", result.getDescrizione());
}`}
                  </pre>

                  {/* Test: DeleteMuscolo */}
                  <p className="mt-4">
                    <strong>
                      🗑️ Test: <code>deleteMuscolo()</code>
                    </strong>
                  </p>
                  <p>Verifica che il muscolo venga eliminato correttamente.</p>
                  <pre
                    className="bg-black text-light p-3 rounded text-start overflow-auto"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {String.raw`@Test
public void testDeleteMuscolo() throws Exception {
  Muscolo muscolo = new Muscolo(1, "Pettorale", "Torace");

  when(muscoloRepository.findById(1)).thenReturn(Optional.of(muscolo));

  assertDoesNotThrow(() -> muscoloService.deleteMuscolo(1));

  verify(muscoloRepository, times(1)).delete(muscolo);
}`}
                  </pre>

                  {/* Conclusione */}
                  <p className="mt-4">
                    Con questi test puoi verificare ogni metodo del tuo service
                    in isolamento. Puoi estendere la suite con test per
                    controller usando <code>MockMvc</code> o test di
                    integrazione con <code>@SpringBootTest</code>.
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

export default SpringBoot
