import React from "react";
import Navegacion from "./navegacion/Navegacion.js";

export function GOEP2021() {
    return (
        <body>
            <Navegacion />
            <div id="goep">
                <div className='section1'>
                    <div className="row">
                        <div className="twelve columns main-col">
                            <div className="row">
                                <div className="columns texto2" align="center">
                                    <h1>GUÍA DE OPERACIÓN Y EVALUACIÓN PROTOTIPOS 2021</h1>
                                    <br />
                                    <h5>GUÍA DE OPERACIÓN Y EVALUACIÓN CONCURSO NACIONAL DE PROTOTIPOS 2021 (MODALIDAD VIRTUAL)</h5>
                                    <br />
                                    <iframe src="https://docs.google.com/viewer?srcid=1ePMoo-upLZuJDioHkMiYEMEo_8kWaChB&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title="PDF" width="450px" height="575px"></iframe>
                                    <br />
                                    <br />
                                    <a className="Boton3" href="https://drive.google.com/file/d/1mvKfjj-ttVb_OPLt9t-K2POxiuMeqq9l/view" target="_blank" rel="noopener noreferrer">DESCARGA LA GUÍA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}