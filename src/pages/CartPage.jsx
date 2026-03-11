import { useState, useEffect } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = () => {
      const savedCart = localStorage.getItem("cart");
      console.log("Loading cart from localStorage:", savedCart);
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    };

    // Load cart immediately
    loadCart();

    // Listen for storage changes
    window.addEventListener("storage", loadCart);
    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("storage", loadCart);
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  };

  return (
    <main className="cart-page">
      <h1>Min Kurv</h1>
      <p>Antal produkter: {cartItems.length}</p>
      {cartItems.length === 0 ? (
        <p>Din kurv er tom</p>
      ) : (
        <section className="cart-items">
          {cartItems.map((item) => (
            <article key={item.id} className="cart-item">
              <img
                src={`${import.meta.env.BASE_URL}${item.image}`}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h2>{item.title}</h2>
                <p className="cart-item-brand">{item.brand}</p>
                <p className="cart-item-price">DKK {item.price}</p>

                <div className="quantity-control">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <p>Mængde: {item.quantity}</p>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  Fjern fra kurv
                </button>
              </div>
            </article>
          ))}

          <section className="cart-summary">
            <h3>Ordresummary</h3>
            <p className="cart-total">
              Total: DKK{" "}
              {cartItems
                .reduce((sum, item) => sum + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            <button className="checkout-button">Gå til kasse</button>
          </section>
        </section>
      )}
    </main>
  );
}
