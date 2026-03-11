import StealTheStyle from "../components/StealTheStyle";

export default function ContactPage() {
  return (
    <>
      <header>
        <h1>Nyheder</h1>
      </header>
      <main className="contact-container">
        <p>Her kan du finde de seneste nyheder og styles.</p>

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
