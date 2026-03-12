import { useLocation, Link } from "react-router";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const productTitle = searchParams.get("title");

  const breadcrumbMap = {
    products: "Produkter",
    favorites: "Favoritter",
    cart: "Kurv",
    account: "Konto",
    news: "Nyheder",
    delivery: "Levering",
    about: "Om os",
  };

  return (
    <div className="breadcrumb">
      <Link to="/">Hjem</Link>
      {pathnames.map((value, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast =
          index === pathnames.length - 1 &&
          !category &&
          !search &&
          !productTitle;
        const label = breadcrumbMap[value] || value;

        // Vis ikke ID når der er en productTitle
        if (productTitle && index === pathnames.length - 1) {
          return null;
        }

        return (
          <span key={routeTo}>
            <span className="breadcrumb-separator">/</span>
            {isLast ? <span>{label}</span> : <Link to={routeTo}>{label}</Link>}
          </span>
        );
      })}

      {category && (
        <span>
          <span className="breadcrumb-separator">/</span>
          <Link to={`/products?category=${category}`}>{category}</Link>
        </span>
      )}

      {search && (
        <span>
          <span className="breadcrumb-separator">/</span>
          <Link to={`/products?search=${search}`}>{search}</Link>
        </span>
      )}

      {productTitle && (
        <span>
          <span className="breadcrumb-separator">/</span>
          <span>{decodeURIComponent(productTitle)}</span>
        </span>
      )}
    </div>
  );
}
