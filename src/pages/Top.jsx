import casaParraInfo from "../assets/casaParraInfo.json";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

function Top(props) {
  return (
    <section className="contact_info">
      <div className={`contact_info_item_container animate__animated animate__fadeInLeft animate__delay-${0.4}s`}>
        <FaEnvelope />
        <p className={`contact_info_item `}>
          <a
            href="https://www.google.com/maps/place/Casa+parra/@18.5063407,-69.8884705,17z/data=!4m14!1m7!3m6!1s0x8eaf8922a2682cb1:0xf5fc4ba4e902e5b7!2sCasa+parra!8m2!3d18.5063407!4d-69.8858956!16s%2Fg%2F11t0pjfl1f!3m5!1s0x8eaf8922a2682cb1:0xf5fc4ba4e902e5b7!8m2!3d18.5063407!4d-69.8858956!16s%2Fg%2F11t0pjfl1f!5m1!1e1?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D"
            title="Encuentranos en el mapa"
            target="_blank"
          >
            {casaParraInfo.empresa.contacto.email}
          </a>
        </p>
      </div>
      <div className={`contact_info_item_container animate__animated animate__fadeInLeft animate__delay-${0.8}s`}>
        <FaWhatsapp />
        <p className="contact_info_item">
          <a  href="https://wa.me/18295970135?text=Hola%20Casa%20Parra,%20quisiera%20informacion%20sobre..."
          title="Contactanos por whatsapp"
          target="_blank">{casaParraInfo.empresa.contacto.whatsapp}</a>
        </p>
      </div>
      <div className={`contact_info_item_container animate__animated animate__fadeInLeft animate__delay-${1.2}s`}>
        <FaPhone />
        <p className="contact_info_item">
          <a href="tel:+18096169947" title="Llamar a Casa Parra">{casaParraInfo.empresa.contacto.telefono}</a>
        </p>
      </div>
    </section>
  );
}

export default Top;
