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
          <img src="./public/bil.svg" alt="fragtbil med grøn energi mærke" />
          Grøn fragt og 14 dages retur
        </div>
        <div className="benefit2">
          <img src="./public/authenticity.svg" alt="mærke der viser brandet har autenticitet"/>
          Altid autentificeret og trygt at handle
        </div>
        <div className="benefit3">
          <img src="./public/ur.svg" alt="et ur mærke" />
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
          <p>
            Story Hangers sælger vintage, designer tøj og har base i Danmark. Ho
            os kan du altid shoppe med god samvittighed og være sikker på at alt
            er ægte.
          </p>
        </div>
        {/* Retningslinjer */}
        <div className="retningslinjer">
          <h2>Retningslinjer</h2>
          <p>Søg</p>
        </div>
        {/* Om Story Hangers */}
        <div className="omos">
          <h2>Om Story Hangers</h2>
          <p>Hvem er vi?</p>
        </div>
      </div>
      {/* Branding sektion */}
      <div className="logo-footer">
        <img src="./public/logo-footer.svg" alt="stort story hangers logo"/>
      </div>
    </footer>
  );
}
