import casaParraInfo from "../assets/casaParraInfo.json";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
export default function Contacto() {
  return (
    <section className="contact_section">
      <div className="contact_card animate__animated animate__fadeIn">
        <img
          src="src/assets/Logo.png"
          alt="Contacto Casa Parra"
          className="contacto_img"
        />

        <div className="contacto_info">
          <div>
            <h2>Contáctanos</h2>
          </div>
          <p>
            Estamos listos para atenderte de <br />
            <strong>{casaParraInfo.empresa.horario.dias}</strong> de{" "}
            <strong>{casaParraInfo.empresa.horario.horas}</strong>
          </p>

          <ul>
            <li>
              <p className="contacto_card_icon">
                <FaPhone />
              </p>
              <p>
                <a href="tel:+18096169947" title="Llamar a Casa Parra">
                  {casaParraInfo.empresa.contacto.telefono}
                </a>
              </p>
            </li>
            <li>
              <p className="contacto_card_icon">
                <FaWhatsapp />
              </p>

              <p>
                <a
                  href="https://wa.me/18295970135?text=Hola%20Casa%20Parra,%20quisiera%20informacion%20sobre..."
                  title="Contactanos por whatsapp"
                  target="_blank"
                >
                  {casaParraInfo.empresa.contacto.whatsapp}
                </a>
              </p>
            </li>
            <li>
              <p className="contacto_card_icon">
                <FaEnvelope />
              </p>
              <p>
                <a
                  href="mailto:casaparra81@gmail.com?subject=Consulta%20desde%20la%20web&body=Hola%20Casa%20Parra,%20quisiera%20más%20información%20sobre..."
                  title="Envianos un correo"
                  target="_blank"
                >
                  {casaParraInfo.empresa.contacto.email}
                </a>
              </p>
            </li>
            <li>
              <p className="contacto_card_icon">
                <FaMapMarkerAlt />
              </p>
              <p>
                <a
                  href="https://www.google.com/maps/place/Casa+parra/@18.5063407,-69.8884705,17z/data=!4m14!1m7!3m6!1s0x8eaf8922a2682cb1:0xf5fc4ba4e902e5b7!2sCasa+parra!8m2!3d18.5063407!4d-69.8858956!16s%2Fg%2F11t0pjfl1f!3m5!1s0x8eaf8922a2682cb1:0xf5fc4ba4e902e5b7!8m2!3d18.5063407!4d-69.8858956!16s%2Fg%2F11t0pjfl1f!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D"
                  title="Encuentranos en el mapa"
                  target="_blank"
                >
                  {casaParraInfo.empresa.contacto.direccion}
                </a>
              </p>
            </li>
            <li className="delivery">
              <p className="delivery_p">Servicio a domicilio disponible</p>
              <MdDeliveryDining className="delivery_icon" />
            </li>
          </ul>

          <a
            href="https://wa.me/18295970135?text=Hola%20Casa%20Parra,%20quisiera%20informacion%20sobre..."
            title="Contactanos por whatsapp"
            target="_blank"
            className="contact_btn"
          >
            Escríbenos ahora
          </a>
        </div>
      </div>
    </section>
  );
}
