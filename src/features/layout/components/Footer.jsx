import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #020617, #020617, #0f172a)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        marginTop: "60px",
        padding: "30px 0"
      }}
    >
      <div className="container">

        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center"
          style={{ gap: "20px" }}
        >

          {/* IZQUIERDA */}
          <div style={{ color: "#94a3b8", fontSize: "14px", textAlign: "center" }}>
            © 2026 ·{" "}
            <span style={{ color: "#4ade80", fontWeight: "bold", fontSize: "15px" }}>
              Carrito de Compras
            </span>
            <br />
            <span style={{ fontSize: "12px", color: "#64748b" }}>
              Interfaz moderna con React + Bootstrap
            </span>
          </div>

          {/* CENTRO */}
          <div className="d-flex gap-3">

            <a
              href="#"
              style={{
                color: "#38bdf8",
                textDecoration: "none",
                padding: "10px 14px",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                background: "rgba(255,255,255,0.05)",
                fontSize: "14px"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#0ea5e9";
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <i className="bi bi-info-circle-fill me-1"></i>
              Ayuda
            </a>

            <a
              href="#"
              style={{
                color: "#facc15",
                textDecoration: "none",
                padding: "10px 14px",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                background: "rgba(255,255,255,0.05)",
                fontSize: "14px"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#eab308";
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "#facc15";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <i className="bi bi-shield-check me-1"></i>
              Políticas
            </a>

          </div>

          {/* DERECHA */}
          <div style={{
            color: "#64748b",
            fontSize: "12px",
            textAlign: "center"
          }}>
            Hecho con{" "}
            <span style={{ color: "#4ade80", fontWeight: "bold" }}>
              💚 React
            </span>
            <br />
            <span style={{ fontSize: "11px" }}>
              UI moderna y responsiva
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};