export default function PromoCard({ promo }) {
  if (!promo) return null;

  return (
    <article className="promo-card">
      <section className="promo-card-info">
        <h2 className="promo-title">{promo.title}</h2>
        <p className="promo-description">{promo.description}</p>
      </section>

      <img
        src={`${import.meta.env.BASE_URL}${promo.image}`}
        className="promo-card-image"
        alt={promo.title}
      />

      <footer className="promo-card-meta">
        <button className="promo-card-button">
          <p className="promo-card-button-text">Shop Nu</p>
        </button>
      </footer>
    </article>
  );
}
