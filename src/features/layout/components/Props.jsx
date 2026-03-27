import React from "react";

const Avatar = ({ nombre, imagen }) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        borderRadius: "20px",
        padding: "25px",
        border: "1px solid rgba(255,255,255,0.08)",
        width: "220px",
        transition: "0.3s",
        boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.7)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";
      }}
    >
      <img
        src={imagen}
        alt={nombre}
        className="rounded-circle mb-3"
        width="160"
        height="160"
        style={{
          objectFit: "cover",
          border: "3px solid #4ade80"
        }}
        onError={(e) => {
          e.target.src = "https://placehold.co/160x160";
        }}
      />

      <h5 style={{ color: "#fff", marginBottom: "5px" }}>{nombre}</h5>

      <span style={{ fontSize: "12px", color: "#94a3b8" }}>
        Usuario activo
      </span>
    </div>
  );
};

const Props = () => {
  return (
    <div
      className="container py-5 text-center"
      style={{
        background: "linear-gradient(135deg, #020617, #0f172a)",
        minHeight: "100vh",
        borderRadius: "20px"
      }}
    >
      <h1
        className="fw-bold mb-4"
        style={{ color: "#4ade80", letterSpacing: "1px" }}
      >
        Props en React
      </h1>

      <p
        className="lead mb-5"
        style={{ color: "#94a3b8", maxWidth: "700px", margin: "0 auto" }}
      >
        Este componente demuestra el uso de <strong>props</strong> en React.
        Cada Avatar recibe datos desde el componente padre, permitiendo
        reutilizar el mismo componente con diferente información.
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-4">

        <Avatar
          nombre="Megin"
          imagen="https://picsum.photos/id/1005/300/300"
        />

        <Avatar
          nombre="Petro"
          imagen="https://picsum.photos/id/1011/300/300"
        />

        <Avatar
          nombre="Speed"
          imagen="https://picsum.photos/id/1027/300/300"
        />

      </div>
    </div>
  );
};

export default Props;