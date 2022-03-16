import React from "react";
import Navegacion from "./navegacion/Navegacion.js";

export function ManualFunciones() {
    return (
        <body>
            <Navegacion />
            <div id="manuales">
                <div className='section1'>
                    <div className="row">
                        <div className="twelve columns main-col">
                            <div className="row">
                                <div className="columns documento">
                                    <iframe src="https://docs.google.com/viewer?srcid=1MSLB6p1H9UuxmtmOh121lMXcfQogTBNZ&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title="PDF" width="450px" height="300px"></iframe>
                                </div>
                                <div className="columns texto">
                                    <h1>MANUAL DE FUNCIONES</h1>
                                    <h5>DEL DEPARTAMENTO DE VINCULACIÓN CON EL SECTOR PRODUCTIVO DE LOS CETIS Y CBTIS</h5>
                                    <br />
                                    <a className="Boton3" href="https://drive.google.com/file/d/1HpFKNf3tQp0OJUXnYANuQLySwEF5ns36/view" target="_blank" rel="noopener noreferrer">VER EL MANUAL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}