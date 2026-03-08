import { useState } from "react";
import reactRouterLogo from "../assets/example.svg";
import hipHopVideo from "../assets/hero3.mp4";
import CategoryCarrusel from "../components/CategoryCarrusel";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Nyheder");

  return (
    <>
      <section className="category-carousel">
        <CategoryCarrusel
          categories={[
            "Sko",
            "Jakker",
            "Tasker",
            "Langeærmede",
            "Smykker",
            "Bukser",
            "T-shirts og toppe",
            "Nederdele og Shorts",
            "Kjoler",
          ]}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </section>

      <header>
        <video width="100%" autoPlay muted loop>
          <source src={hipHopVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
      <section className="text-carousel">
        <div className="text-moving">
          <span className="text-item">Join #Storys og bekæmp tøjspild</span>
          <span className="text-item">Join #Storys og bekæmp tøjspild</span>
          <span className="text-item">Join #Storys og bekæmp tøjspild</span>
          <span className="text-item">Join #Storys og bekæmp tøjspild</span>
          <span className="text-item">Join #Storys og bekæmp tøjspild</span>
          <span className="text-item">Join #Storys og bekæmp tøjspild</span>
          <span className="text-item">Join #Storys og bekæmp tøjspild</span>
          <span className="text-item">Join #Storys og bekæmp tøjspild</span>
        </div>
      </section>
    </>
  );
}
