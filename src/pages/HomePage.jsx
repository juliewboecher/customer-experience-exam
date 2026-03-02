import reactRouterLogo from "../assets/example.svg";

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Home</h1>
        <p className="home-intro">Welcome to our React Router project.</p>
      </header>
      <main>
        <section className="home-features">
          <article className="feature-card">
            <h3>Routing</h3>
            <p>Navigate between pages with React Router.</p>
          </article>
          <article className="feature-card">
            <h3>Components</h3>
            <p>Build reusable UI components for each page.</p>
          </article>
          <article className="feature-card">
            <h3>Deployment</h3>
            <p>Deploy automatically to GitHub Pages.</p>
          </article>
        </section>

        <article>
          <h2>Displaying images in React</h2>

          <h3>1. Import from src/assets</h3>
          <img src={reactRouterLogo} alt="Example SVG" className="img-small" />

          <h3>2. Public folder</h3>
          <img
            src="logo.webp"
            alt="Favicon from public folder"
            className="img-small"
          />

          <h3>3. External URL</h3>
          <img
            src="https://picsum.photos/200"
            alt="Random external image"
            className="img-medium"
          />
        </article>
      </main>
    </>
  );
}
