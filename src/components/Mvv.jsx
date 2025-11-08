import mvv from "../assets/mvv";
import { FaEye } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { IoDiamondSharp } from "react-icons/io5";

const MvvCards = () => {
  return (

      <div className="mvv_container">
        {mvv.map((info,i) => {
          const Icon = info.src
          return (
            <div className={`mvv_card animate__animated animate__fadeIn`} key={i}>
            <Icon className="mvv_card_icon"/>
             <div>
               <h2 className="mvv_title">{info.titulo}</h2>
            <p className="mvv_desc">{info.descripcion}</p>
             </div>
            </div>
          );
        })}
      </div>
  );
};

export default MvvCards;




