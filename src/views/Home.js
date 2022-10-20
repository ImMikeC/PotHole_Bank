import React from "react";
import Showcase from "../components/Showcase";
import { FaCamera, FaCarCrash, FaCheck, FaMapMarkedAlt } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
    document.body.style.backgroundColor = "#1E4A5F";
    return (
        <div className="home">
            <div className="row">
                <div className="col-md-6 showcase">
                    <Showcase />
                </div>
                <div className="col-md-6 homeinterest">
                    <div className="row">
                        <div className="col-md-3 homecard">
                            <FaCamera/>
                            <h2>Reporta baches</h2>
                            <p>
                                Sube tus fotos y la ubicaión de los baches que deseas que se reparen.
                            </p>
                        </div>
                        <div className="col-md-3 homecard">
                            <FaCarCrash/>
                            <h2>Evitando accidentes</h2>
                            <p>
                                Es muy importante el estado de las calles para evitar accidentes de transito.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 homecard">
                            <FaCheck />
                            <h2>Reparacion municipal</h2>
                            <p>
                                Entregamos herramientas para hacer mas fácil el trabajo municipal para reparar las calles.
                            </p>
                        </div>
                        <div className="col-md-3 homecard">
                            <FaMapMarkedAlt/>
                            <h2>Mapa personalizado</h2>
                            <p>
                                Puedes revisar todos los reportes y filtrarlos en nuestro mapa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
