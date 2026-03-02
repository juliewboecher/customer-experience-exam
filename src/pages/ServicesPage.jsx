export default function ServicesPage() {
  return (
    <>
      <header>
        <h1>Services</h1>
      </header>
      <main className="services-grid">
        <article className="service-card">
          <h3>Web Development</h3>
          <p>Custom websites and frontend solutions.</p>
        </article>
        <article className="service-card">
          <h3>UX/UI Design</h3>
          <p>Design of user-friendly digital interfaces.</p>
        </article>
        <article className="service-card">
          <h3>Consulting</h3>
          <p>Technical guidance and architecture support.</p>
        </article>
      </main>
    </>
  );
}
