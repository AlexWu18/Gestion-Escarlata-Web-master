import { Link } from "react-router-dom";
import "./ServicesSDS.css";
import ServicesSData from "./ServicesSData.js";
import card1 from "../assents/DonarSangre.jpg"
import card2 from "../assents/PintadeSangre.jpg"
import card3 from "../assents/GoogleMaps.jpg"

function ServicesData() {
    return (
        <div className="circle">
            <h1>Servicios disponibles</h1>
            <p1>Nos enfocamos en ofrecerte la mejor clase de servicio</p1>
            <div className="circlecard">
                <ServicesSData
                    image={card1}
                    heading="Donar pinta de Sangre"
                    text={
                        <>
                            Como usuario registrado, tienes la posibilidad de agendar una cita para donar pintas de sangre de la manera más rapida y segura.  
                            <Link to="/citas">Pulsar aquí</Link>
                        </>
                    }
                />
                
                <ServicesSData
                    image={card2}
                    heading="Solicitar pinta de Sangre"
                    text={
                        <>
                            Si necesitas pintas de sangre, no dudes en solicitarla, nosotros somos tu opción #1.  
                            <Link to="/compras"> Pulsar aquí</Link>
                        </>
                    }
                />

                <ServicesSData
                    image={card3}
                    heading="Vizualizar los bancos más cercanos"
                    text={
                        <>
                            Unica plataforma que te permite vizualisar los bancos de sangre más cercanos a tu ubicación.  
                            <Link to="/maps"> Pulsar aquí</Link>
                        </>
                    }
                />
                
            </div>
        </div>
    )
}

export default ServicesData;
