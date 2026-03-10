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
          <option value="Mærke">Mærke</option>
          <option value="versace">Versace</option>
          <option value="hugoboss">Hugo Boss</option>
          <option value="vagabond">Vagabond</option>
          <option value="calvin-klein">Calvin Klein</option>
          <option value="filterlevis">FilterLevi's</option>
        </select>

        <select
          value={searchParams.get("size") || "all"}
          onChange={(e) => handleFilterChange("size", e.target.value)}
        >
            <option value="pris">Pris</option>
        </select>

        {/* prize(300-500, 500-800, 800-1000, 1000+), inStock, sort(a-å, pris stigende/faldende) */}

        <select
          value={searchParams.get("condition") || "all"}
          onChange={(e) => handleFilterChange("condition", e.target.value)}
        >
          <option value="stand">Stand</option>
          <option value="god">God</option>
          <option value="rigtig-god">Rigtig god</option>
          <option value="som-ny">Som ny</option>
        </select>

        <button onClick={() => navigate("/products")}>Nulstil</button>
      </div>
    );




}