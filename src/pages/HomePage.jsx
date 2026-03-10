import { useState } from "react";
import hipHopVideo from "../assets/hero3.mp4";
import CategoryCarrusel from "../components/CategoryCarrusel";
import StealTheStyle from "../components/StealTheStyle";

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
        <section className="steal-the-style">
          <StealTheStyle />
        </section>
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
