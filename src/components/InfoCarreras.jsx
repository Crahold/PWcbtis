import React from "react";
import Navegacion from "./navegacion/Navegacion.js";

export function InfoCarreras() {
    return (
        <body>
            <Navegacion />
            <div id="infocarreras">
                <div className='section1'>
                    <div className="row">
                        <div className="twelve columns main-col">
                            <div className="row">
                                <div className="columns documento">
                                    <iframe src="https://docs.google.com/viewer?srcid=10jyS9aE_7eACIDX5Iv-JIsmu2tfuVhFq&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title="PDF" width="450px" height="595px"></iframe>
                                </div>
                                <div className="columns texto">
                                    <h1>¡YA ES HORA! INFORMACIÓN DE LAS CARRERAS E INSTITUCIONES DE EDUCACIÓN SUPERIOR PARA EL CICLO ESCOLAR 2021-2022.</h1>
                                    <p>Comisión Estatal para la Planeación de la Educación Superior en el Estado de Oaxaca (COEPES) 
                                        Conoce las instituciones de educación superior y las carreras que ofrecen, así como las instituciones 
                                        de nivel superior en el estado de Oaxaca para los egresados del bachillerato y la documentación 
                                        necesaria para realizar los trámites de admisión. En el presente folleto encontrarás números telefónicos, 
                                        páginas de internet, facebook y el domicilio de cada institución educativa, las que podrás consultar de 
                                        manera directa</p>
                                    <a className="Boton3" href="https://drive.google.com/file/d/1AmBCxD-k_W-aqBDubtwyEZzEhBBulV5c/view" target="_blank" rel="noopener noreferrer">VER DOCUMENTO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}