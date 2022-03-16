import React from "react";
import Navegacion from "./navegacion/Navegacion.js";

export function ClubCiencias() {
    return (
        <body>
            <Navegacion />
            <div id="clubciencias">
                <div className='section1'>
                    <div className="row">
                        <div className="twelve columns main-col">
                            <div className="row">
                                <div className="columns texto2" align="center">
                                    <h1>CLUB DE CIENCIAS</h1>
                                    <br />
                                    <h5>GUÍA DE ACTIVIDADES E IMPLEMENTACIÓN DEL CLUB DE CIENCIAS.</h5>
                                    <br />
                                    <iframe src="https://docs.google.com/viewer?srcid=15hKQIpcpleykDnRzRbFiKkfyx0aHl42g&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title="PDF" width="450px" height="579px"></iframe>
                                    <br />
                                    <br />
                                    <a className="Boton3" href="https://drive.google.com/file/d/1uxRf-u5lhfS5RTHnxVQWWncsbz7KQU_V/view" target="_blank" rel="noopener noreferrer">VER DOCUMENTO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}