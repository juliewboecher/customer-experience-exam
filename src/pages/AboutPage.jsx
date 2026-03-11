export default function AboutPage() {
  return (
    <>
      <header>
        <h1>About</h1>
        <div className="about-image-container">
          <img
            src={`${import.meta.env.BASE_URL}logo-footer.svg`}
            alt="stort story hangers logo"
          />
        </div>
      </header>
      <main className="about-container">
        <h2>A collection of saved stories</h2>
        <p>
          {" "}
          Vi er et team af dedikerede second-hand entusiaster, der brænder for
          bæredygtighed og mode.
        </p>

        <p>
          Vi tror på, at mode kan være bæredygtig og stilfuld på samme tid.
          Vores mission er at give nyt liv til brugte tøj og accessories, så de
          kan blive elsket igen.
        </p>

        <section>
          <h3>Vores værdier</h3>
          <ul>
            <li>Bæredygtighed</li>
            <li>Transparens</li>
            <li>Fællesskab</li>
          </ul>
        </section>
      </main>
    </>
  );
}
