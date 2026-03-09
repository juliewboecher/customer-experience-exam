import {useState} from "react";
import "../styles.css"


export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email){
      console.log("E-mail tilmeldt", email);
      setEmail("Tilmeldt med success!");
    }
  }; 


  return (
    <footer>
      {/* Bar med benefits */}
      <div className="footer-benefits">
        <div className="benefit1">
          <img src="/bil.svg" alt="fragtbil med grøn energi mærke" />
          Grøn fragt og 14 dages retur
        </div>
        <div className="benefit2">
          <img
            src="/authenticity.svg"
            alt="mærke der viser brandet har autenticitet"
          />
          Altid autentificeret og trygt at handle
        </div>
        <div className="benefit3">
          <img src="/ur.svg" alt="et ur mærke" />
          Kun ét af hvert produkt på lager
        </div>
      </div>
      
      {/* Den almene footer del */}
      <div className="footer-content">
        {/* Nyhedsbrev */}
        <div className="nyhedsbrev">
          <h2>Tilmeld dig vores nyhedsbrev</h2>
          <form onSubmit={handleSubmit} className="nyhedsbrev-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Indtast din e-mail"
              required
            />
            <button type="submit">Tilmeld</button>
          </form>
          <ul>
            <li>
              Story Hangers sælger vintage, designer tøj og har base i Danmark.
              Hos os kan du altid shoppe med god samvittighed og være sikker på
              at alt er ægte.
            </li>
            <li>info@storyhangers.com</li>
            <li>tlf. 30 14 50 92</li>
            <li>CVR: DKXXXXXXXX</li>
            <li>Vejnavn 42</li>
            <li>8000, Aarhus C</li>
          </ul>
        </div>
        {/* Retningslinjer */}
        <div className="retningslinjer">
          <h2>Retningslinjer</h2>
          <ul>
            <li>Søg</li>
            <li>Returnering</li>
            <li>Gavekort</li>
            <li>Handelsbetingelser</li>
            <li>Cookie politik</li>
            <li>Refunderings politik</li>
            <li>Privat politik</li>
            <li>Sitemap</li>
            <li>Åbne jobstillinger</li>
          </ul>
        </div>
        {/* Om Story Hangers */}
        <div className="omos">
          <h2>Om Story Hangers</h2>
          <ul>
            <li>Hvem er vi?</li>
            <li>Om founders Cecilie, Freja & Julie</li>
            <li>Samarbejd med os</li>
            <li>Story Hangers bekæmper madspild</li>
            <li>Upcycling og repair</li>
          </ul>
        </div>
      </div>
      {/* Branding sektion */}
      <div className="logo-footer">
        <img src="/logo-footer.svg" alt="stort story hangers logo" />
      </div>
    </footer>
  );
}
