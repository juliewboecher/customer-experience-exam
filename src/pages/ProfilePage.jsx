import { useState } from "react";

export default function ProfilePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      setUserName(email.split("@")[0]);
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <main className="profile-page">
      <h1>Min Profil</h1>

      {!isLoggedIn ? (
        <section className="login-section">
          <h2>Log ind på din konto</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Din email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Adgangskode</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Din adgangskode"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Log ind
            </button>
          </form>
        </section>
      ) : (
        <section className="profile-info">
          <h2>Velkommen, {userName}!</h2>
          <p>Du er nu logget ind.</p>
          <button onClick={handleLogout} className="logout-button">
            Log ud
          </button>
        </section>
      )}
    </main>
  );
}
