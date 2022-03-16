import React from "react";
import Navegacion from "./navegacion/Navegacion.js";

export function DiplomadoSteam() {
    return (
        <body>
            <Navegacion />
            <div id="diplomsteam">
                <div className='section1'>
                    <div className="row">
                        <div className="twelve columns main-col">
                            <div className="row">
                                <div className="columns documents" align="center">
                                    <iframe src="https://docs.google.com/viewer?srcid=15PoBZAmDVQH9EzHWpQUhGiML6bw6XnDq&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title="PDF" width="450px" height="590px"></iframe>
                                </div>
                                <div className="columns texto" align="justify">
                                    <h1>DIPLOMADO STEAM EMS CNAD</h1>
                                    <p>Convocatoria al Diplomado Transversalidad de la Ciencia, Tecnología, Ingeniería, 
                                        Arte y Matemáticas (STEAM) en la Educación Media Superior, el cual será impartido 
                                        por el Centro Nacional de Actualización Docente (CNAD), a partir del 01 de 
                                        septiembre al 31 de octubre de 2020, con el objetivo de mejorar, fortalecer y 
                                        complementar su Beca para la Profesionalización Docente.
                                        <br />
                                        Revisa la convocatoria a continuación, la guía de registro y los anexos.
                                    </p>
                                    <div className="EspBoton" align="center">
                                        <a className="Boton3" href="https://drive.google.com/file/d/1gw1CxiIrzBRH1tWbPxFUqq8EbGdnwJCK/view" target="_blank" rel="noopener noreferrer">VISUALIZA LA CONVOCATORIA</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}