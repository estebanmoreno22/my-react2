import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "rgba(2,6,23,0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "12px 0"
      }}
    >
      <div className="container-fluid">

        {/* LOGO */}
        <NavLink
          className="navbar-brand"
          to="/"
          style={{
            color: "#4ade80",
            fontWeight: "bold",
            fontSize: "20px",
            letterSpacing: "1px"
          }}
        >
          🛒 Taller React
        </NavLink>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{
            border: "1px solid #334155"
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* LINKS */}
          <ul className="navbar-nav me-auto">

            {[
              { to: "/", label: "Inicio" },
              { to: "/Article", label: "Artículos" },
              { to: "/Props", label: "Props" }
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.to}
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "#4ade80" : "#cbd5f5",
                    fontWeight: isActive ? "bold" : "normal",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    transition: "0.3s",
                    background: isActive ? "rgba(74,222,128,0.1)" : "transparent"
                  })}
                  onMouseEnter={e => {
                    if (!e.target.classList.contains("active")) {
                      e.target.style.background = "rgba(255,255,255,0.05)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!e.target.classList.contains("active")) {
                      e.target.style.background = "transparent";
                    }
                  }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

          </ul>

          {/* BUSCADOR */}
          <form className="d-flex" role="search" style={{ gap: "8px" }}>
            <input
              className="form-control"
              type="search"
              placeholder="Buscar productos..."
              style={{
                background: "#020617",
                border: "1px solid #334155",
                color: "#fff",
                borderRadius: "10px",
                padding: "8px 12px"
              }}
            />

            <button
              className="btn"
              type="submit"
              style={{
                background: "linear-gradient(90deg, #22c55e, #4ade80)",
                border: "none",
                color: "#000",
                borderRadius: "10px",
                padding: "8px 14px",
                fontWeight: "bold",
                transition: "0.3s"
              }}
              onMouseEnter={e => e.target.style.opacity = 0.8}
              onMouseLeave={e => e.target.style.opacity = 1}
            >
              <i className="bi bi-search"></i>
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
};