import MvvCards from "../components/Mvv";
import casaParraInfo from "../assets/casaParraInfo.json"
import Visita from "../components/Visita";
export default function Home() {

  return (
   <>
     <section className="hero_section">
      <h2 className="welcome">{casaParraInfo.empresa.nombre}</h2>
      <p className="quienes_somos">
        {casaParraInfo.empresa.descripcion}
      </p>
    </section>
    <MvvCards />
    <Visita />
   </>
  );
}