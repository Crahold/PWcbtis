import React from "react";
import Navegacion from "./navegacion/Navegacion.js";

export function NormasTecnicas() {
    return (
        <body>
            <Navegacion />
            <div id="normastecnicas">
                <div className='section1'>
                    <div className="row">
                        <div className="twelve columns main-col">
                            <div className="row">
                                <div className="columns texto2" align="center">
                                    <h1>NORMAS TÉCNICAS Y ADMINISTRATIVAS PARA LAS AIDET 2020</h1>
                                    <br />
                                    <h5>NORMAS TÉCNICAS Y ADMINISTRATIVAS PARA LAS ACADEMIAS DE 
                                        INVESTIGACIÓN Y DESARROLLO TECNOLÓGICO 2020.
                                    </h5>
                                    <br />
                                    <iframe src="https://docs.google.com/viewer?srcid=10FuiIINGXfKg8x8c7qYLqMZuLgJrLfvp&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title="PDF" width="450px" height="579px"></iframe>
                                    <br />
                                    <br />
                                    <a className="Boton3" href="https://drive.google.com/file/d/1qXz7vQDnGsXNyqxu-IXGr2VIf3bNKnCy/view" target="_blank" rel="noopener noreferrer">VER DOCUMENTO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}