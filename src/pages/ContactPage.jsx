export default function ContactPage() {
  return (
    <>
      <header>
        <h1>Contact</h1>
      </header>
      <main className="contact-container">
        <p>Har du spørgsmål til projektet? Kontakt os her:</p>

        <section className="contact-card">
          <p>
            <strong>Email:</strong> team@example.com
          </p>
          <p>
            <strong>Telefon:</strong> +45 12 34 56 78
          </p>
          <p>
            <strong>Åbningstid:</strong> Man-Fre 09:00-16:00
          </p>
          <a className="contact-button" href="mailto:team@example.com">
            Skriv til os
          </a>
        </section>
      </main>
    </>
  );
}
