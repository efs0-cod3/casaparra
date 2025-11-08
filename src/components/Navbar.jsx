import { Link, useLocation, useNavigate } from "react-router-dom";
import casaParraInfo from "../assets/casaParraInfo.json";
import { useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(pathname);
  const navigate = useNavigate();

  const toTheStart = () => {
    navigate("/");
    setIsActive("/inicio")
  };

  return (
    <nav className="navbar_container">
      <img
        className="logo"
        src="/Logo.png"
        alt="Logo Casa Parra"
        onClick={() => toTheStart()}
      />

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li onClick={() => setIsActive("/inicio")}>
          <Link
            to="/"
            className={
              isActive === "/inicio" || isActive === "/" ? "active" : ""
            }
            onClick={() => setOpen(false)}
          >
            Inicio
          </Link>
        </li>
        <li onClick={() => setIsActive("/productos")}>
          <Link
            to="/productos"
            className={isActive === "/productos" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Productos
          </Link>
        </li>
        <li onClick={() => setIsActive("/contacto")}>
          <Link
            to="/contacto"
            className={isActive == "/contacto" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>
        </li>
        <a
          className="phone_button"
          href={`tel:${casaParraInfo.empresa.contacto.telefono}`}
        >
          📞 Llama ya!
        </a>
      </ul>
    </nav>
  );
}
