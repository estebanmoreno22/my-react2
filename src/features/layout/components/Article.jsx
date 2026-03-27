import React from 'react';

export const Article = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #0f172a)",
        padding: "40px"
      }}
    >
      <div
        className="container"
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "30px",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "#fff"
        }}
      >
        <h1 style={{ color: "#4ade80", fontWeight: "bold" }}>
          📄 Artículos
        </h1>

        <p style={{ color: "#94a3b8", marginTop: "10px" }}>
          Aquí puedes mostrar información, noticias o contenido relacionado con tu aplicación.
        </p>

        <hr style={{ borderColor: "#1e293b" }} />

        <p style={{ color: "#cbd5f5" }}>
          Este es un espacio listo para que agregues artículos dinámicos más adelante.
        </p>
      </div>
    </div>
  );
};