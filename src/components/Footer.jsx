import casaParraInfo from "../assets/casaParraInfo.json";
import {
  FaCalendarAlt,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_info">
        <div className="logo_container">
          <img
            src="src/assets/logo-white.png"
            alt="logo blanco"
            className="logo_blanco"
          />
        </div>
        <div className="footer_contactos">
          <h2>Contactos</h2>
          <div className="footer_item">
            <FaPhone className="footer_icon" />
            <p>
              <a href="tel:+18096169947" title="Llamar a Casa Parra">
                {casaParraInfo.empresa.contacto.telefono}
              </a>
            </p>
          </div>
          <div className="footer_item">
            <FaWhatsapp className="footer_icon" />
            <p>
              <a
                href="https://wa.me/18295970135?text=Hola%20Casa%20Parra,%20quisiera%20informacion%20sobre..."
                title="Contactanos por whatsapp"
                target="_blank"
              >
                {casaParraInfo.empresa.contacto.whatsapp}
              </a>
            </p>
          </div>
          <div className="footer_item">
            <FaEnvelope className="footer_icon" />
            <p>
              <a
                href="mailto:casaparra81@gmail.com?subject=Consulta%20desde%20la%20web&body=Hola%20Casa%20Parra,%20quisiera%20más%20información%20sobre..."
                title="Envianos un correo"
                target="_blank"
              >
                {casaParraInfo.empresa.contacto.email}
              </a>
            </p>
          </div>
          <div className="footer_item">
            <FaMapMarkerAlt className="footer_icon" />
            <p>
              <a
                href="https://www.google.com/maps/place/Casa+parra/@18.5063407,-69.8884705,17z/data=!4m14!1m7!3m6!1s0x8eaf8922a2682cb1:0xf5fc4ba4e902e5b7!2sCasa+parra!8m2!3d18.5063407!4d-69.8858956!16s%2Fg%2F11t0pjfl1f!3m5!1s0x8eaf8922a2682cb1:0xf5fc4ba4e902e5b7!8m2!3d18.5063407!4d-69.8858956!16s%2Fg%2F11t0pjfl1f!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D"
                title="Encuentranos en el mapa"
                target="_blank"
              >
                {casaParraInfo.empresa.contacto.direccion}
              </a>
            </p>
          </div>
        </div>
        <div className="footer_horario">
          <h2>Horario</h2>
          <div className="footer_item">
            <FaCalendarAlt className="footer_icon" />
            <p>{casaParraInfo.empresa.horario.dias}</p>
          </div>
          <div className="footer_item">
            <FaClock className="footer_icon" />
            <p>{casaParraInfo.empresa.horario.horas}</p>
          </div>
        </div>
      </div>

      <p className="copy">
        © {new Date().getFullYear()} {casaParraInfo.empresa.nombre} | Santo
        Domingo, RD
      </p>
    </footer>
  );
}
