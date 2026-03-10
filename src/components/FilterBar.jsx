import {useNavigate, useSearchParams} from "react-router";

export default function FilterBar({filters}) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleFilterChange = (filterKey, value) => {
        const next = new URLSearchParams(searchParams);
        if (!value || value === "all") {
            next.delete(filterKey);
        } else {
            next.set(filterKey, value);
        }
        setSearchParams(next)
    };

    return (
      <div className="filter-bar">
        <select
          value={searchParams.get("sort") || "all"}
          onChange={(e) => handleFilterChange("sort", e.target.value)}
        >
          <option value="sortering">Sortering</option>
          <option value="titel">Alfabetisk</option>
          <option value="pris-up">Pris stigende</option>
          <option value="pris-down">Pris faldende</option>
        </select>

        <select
          value={searchParams.get("inStock") || "all"}
          onChange={(e) => handleFilterChange("inStock", e.target.value)}
        >
            <option value="all">Lagerstatus</option>
            <option value="true">På lager</option>
            <option value="false">Ikke på lager</option>
        </select>

        <select
          value={searchParams.get("color") || "all"}
          onChange={(e) => handleFilterChange("color", e.target.value)}
        >
          <option value="all">Farve</option>
          <option value="sort">Sort</option>
          <option value="rød">Rød</option>
          <option value="blå">Blå</option>
          <option value="gul">Gul</option>
          <option value="grøn">Grøn</option>
        </select>

        <select
          value={searchParams.get("size") || "all"}
          onChange={(e) => handleFilterChange("size", e.target.value)}
        >
          <option value="all">Størrelse</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>

        <select
          value={searchParams.get("brand") || "all"}
          onChange={(e) => handleFilterChange("brand", e.target.value)}
        >
          <option value="all">Mærke</option>
          <option value="versace">Versace</option>
          <option value="hugoboss">Hugo Boss</option>
          <option value="vagabond">Vagabond</option>
          <option value="calvin-klein">Calvin Klein</option>
          <option value="filterlevis">FilterLevi's</option>
        </select>

        <select
          value={searchParams.get("price") || "all"}
          onChange={(e) => handleFilterChange("price", e.target.value)}
        >
          <option value="all">Pris</option>
          <option value=""></option>
        </select>

        {/* price(300-500, 500-800, 800-1000, 1000+) */}

        <select
          value={searchParams.get("condition") || "all"}
          onChange={(e) => handleFilterChange("condition", e.target.value)}
        >
          <option value="all">Stand</option>
          <option value="god">God</option>
          <option value="rigtig-god">Rigtig god</option>
          <option value="som-ny">Som ny</option>
        </select>

        <button onClick={() => navigate("/products")}>Nulstil</button>
      </div>
    );




}