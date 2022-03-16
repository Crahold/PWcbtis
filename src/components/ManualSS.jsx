import React from "react";
import Navegacion from "./navegacion/Navegacion.js";

export function ManualSS() {
    return (
        <body>
            <Navegacion />
            <div id="manuales">
                <div className='section1'>
                    <div className="row">
                        <div className="twelve columns main-col">
                            <div className="row">
                                <div className="columns documento">
                                    <iframe src="https://docs.google.com/viewer?srcid=1jyS0nDhUoO6iQbUlbCYf0PCu1VSD0Vi8&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title="PDF" width="450px" height="310px"></iframe>
                                </div>
                                <div className="columns texto">
                                    <h1>MANUAL SERVICIO SOCIAL</h1>
                                    <h5>MANUAL DE PROCEDIMIENTOS PARA LA PRESTACIÓN DEL SERVICIO SOCIAL PARA LOS PLANTELES CETis Y
                                        CBTis, ASI COMO PARA LAS INSTITUCIONES INCORPORADAS A LA SECRETARIA DE EDUCACION PÚBLICA (SEP).</h5>
                                    <br />
                                    <a className="Boton3" href="https://drive.google.com/file/d/1aWF9DFdnY9qDFiWaGQp1wiutujhUmEmG/view" target="_blank" rel="noopener noreferrer">VER EL MANUAL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}