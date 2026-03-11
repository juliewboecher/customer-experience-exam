export default function ServicesPage() {
  return (
    <>
      <header>
        <h1>Information om retningslinjer </h1>
      </header>
      <main className="services-grid">
        <article className="service-card">
          <h3>Levering</h3>
          <p>Information om leveringstjenester.</p>
        </article>
        <article className="service-card">
          <h3>Retunering</h3>
          <p>Information om returordninger.</p>
        </article>
        <article className="service-card">
          <h3>Refundering</h3>
          <p>Information om refundering.</p>
        </article>
      </main>
    </>
  );
}
