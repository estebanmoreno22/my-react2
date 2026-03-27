import React from "react";

export const Content = () => {

  const productos = [
    {
      id: 1,
      nombre: "Cámara Profesional",
      precio: 1500000,
      stock: 12,
      categoria: "Audio",
      imagen: "https://picsum.photos/id/250/1200/800"
    },
    {
      id: 2,
      nombre: "Nintendo Switch",
      precio: 1800000,
      stock: 5,
      categoria: "Computadores",
      imagen: "https://picsum.photos/id/180/1200/800"
    },
    {
      id: 3,
      nombre: "Colección de Figuras",
      precio: 300000,
      stock: 20,
      categoria: "Accesorios",
      imagen: "https://picsum.photos/id/1062/1200/800"
    }
  ];

  return (
    <main style={{
      background: "linear-gradient(135deg, #020617, #020617, #0f172a)",
      minHeight: "100vh",
      padding: "40px"
    }}>

      <div className="container-fluid">

        <div className="row g-4">

          {/* PRODUCTOS */}
          <div className="col-lg-8">

            <div style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(14px)",
              borderRadius: "20px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              marginBottom: "25px"
            }}>
              <h1 style={{
                color: "#4ade80",
                fontWeight: "bold",
                margin: 0,
                letterSpacing: "1px"
              }}>
                🛒 Catálogo de Productos
              </h1>
            </div>

            <div className="row">
              {productos.map((producto) => (
                <div key={producto.id} className="col-md-6 mb-4">

                  <div style={{
                    borderRadius: "18px",
                    overflow: "hidden",
                    background: "#0f172a",
                    border: "1px solid #1e293b",
                    transition: "all 0.3s ease",
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

                    <div style={{ position: "relative" }}>
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        style={{
                          width: "100%",
                          height: "220px",
                          objectFit: "cover"
                        }}
                        onError={(e) => e.target.src = "https://placehold.co/600x400"}
                      />

                      <span style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "#4ade80",
                        color: "#000",
                        padding: "6px 12px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "bold"
                      }}>
                        {producto.categoria}
                      </span>
                    </div>

                    <div style={{ padding: "16px" }}>
                      <h5 style={{ color: "#fff", marginBottom: "5px" }}>
                        {producto.nombre}
                      </h5>

                      <p style={{
                        margin: "6px 0",
                        color: "#4ade80",
                        fontWeight: "bold",
                        fontSize: "18px"
                      }}>
                        ${producto.precio.toLocaleString()}
                      </p>

                      <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>
                        Stock: {producto.stock}
                      </p>
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* FORMULARIO MEJORADO */}
          <div className="col-lg-4">

            <div style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(18px)",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
            }}>

              <h2 style={{
                color: "#4ade80",
                marginBottom: "25px",
                fontWeight: "bold",
                textAlign: "center"
              }}>
                ➕ Nuevo Producto
              </h2>

              {/* INPUTS */}
              <div className="mb-3">
                <label style={{ color: "#cbd5f5", fontSize: "14px" }}>Nombre</label>
                <input type="text" className="form-control bg-dark text-white border-0 mt-1"
                  style={{ borderRadius: "10px", padding: "10px" }} />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label style={{ color: "#cbd5f5", fontSize: "14px" }}>Precio</label>
                  <input type="number" className="form-control bg-dark text-white border-0 mt-1"
                    style={{ borderRadius: "10px" }} />
                </div>

                <div className="col-md-6 mb-3">
                  <label style={{ color: "#cbd5f5", fontSize: "14px" }}>Stock</label>
                  <input type="number" className="form-control bg-dark text-white border-0 mt-1"
                    style={{ borderRadius: "10px" }} />
                </div>
              </div>

              <div className="mb-3">
                <label style={{ color: "#cbd5f5", fontSize: "14px" }}>Categoría</label>
                <select className="form-select bg-dark text-white border-0 mt-1"
                  style={{ borderRadius: "10px" }}>
                  <option>Selecciona una categoría</option>
                  <option>Audio</option>
                  <option>Computadores</option>
                  <option>Accesorios</option>
                </select>
              </div>

              <div className="mb-3">
                <label style={{ color: "#cbd5f5", fontSize: "14px" }}>Imagen</label>
                <input type="file" className="form-control bg-dark text-white border-0 mt-1"
                  style={{ borderRadius: "10px" }} />
              </div>

              <div className="mb-3">
                <label style={{ color: "#cbd5f5", fontSize: "14px" }}>Descripción</label>
                <textarea className="form-control bg-dark text-white border-0 mt-1"
                  rows="3"
                  style={{ borderRadius: "10px" }}></textarea>
              </div>

              {/* BOTONES */}
              <div className="d-flex gap-2 mt-4">
                <button style={{
                  background: "linear-gradient(90deg, #22c55e, #4ade80)",
                  border: "none",
                  color: "#000",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  padding: "12px",
                  width: "100%",
                  transition: "0.3s"
                }}
                onMouseEnter={e => e.target.style.opacity = 0.8}
                onMouseLeave={e => e.target.style.opacity = 1}
                >
                  Agregar
                </button>

                <button style={{
                  background: "#020617",
                  border: "1px solid #334155",
                  color: "#fff",
                  borderRadius: "12px",
                  padding: "12px",
                  transition: "0.3s"
                }}
                onMouseEnter={e => e.target.style.background = "#1e293b"}
                onMouseLeave={e => e.target.style.background = "#020617"}
                >
                  Limpiar
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};