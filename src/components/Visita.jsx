import React from "react";
import { Link } from "react-router-dom";

function Visita() {
  return (
    <section className="cta">
      <p> 
      Vistia nuestro catalogo de productos.
      </p>
        <Link to="/productos" className="cta_link">
          Productos
        </Link>
    </section>
  );
}

export default Visita;
