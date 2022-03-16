import React from "react";
import Navegacion from "./navegacion/Navegacion.js";

export function ManualInduccion() {
    return (
        <body>
            <Navegacion />
            <div id="manuales">
                <div className='section1'>
                    <div className="row">
                        <div className="twelve columns main-col">
                            <div className="row">
                                <div className="columns documento">
                                    <iframe src="https://docs.google.com/viewer?srcid=1rgnxaNYAbRlCrkM2CN1e1vjoz5hNnh1W&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title="PDF" width="450px" height="300px"></iframe>
                                </div>
                                <div className="columns texto">
                                    <h1>MANUAL DE INDUCCIÓN</h1>
                                    <h5>AL DEPARTAMENTO DE VINCULACIÓN CON EL SECTOR PRODUCTIVO DE LOS CETIS Y CBTIS</h5>
                                    <br />
                                    <a className="Boton3" href="https://drive.google.com/file/d/16rjNSGXbjyiw9n7hl43sDQdX4XYsbROx/view" target="_blank" rel="noopener noreferrer">VER EL MANUAL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}