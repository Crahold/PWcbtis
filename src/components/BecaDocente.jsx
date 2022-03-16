import React from "react";
import Navegacion from "./navegacion/Navegacion.js";

export function BecaDocente() {
    return (
        <body>
            <Navegacion />
            <div id="becadocente">
                <div className='section1'>
                    <div className="row">
                        <div className="twelve columns main-col">
                            <div className="row">
                                <div className="columns texto" align="justify">
                                    <h1>BECA PROFESIONALIZACIÓN DOCENTE</h1>
                                    <p>A profesores/as que imparten clases en el Bachillerato Tecnológico en el
                                        sistema escolarizado (excepto Director/a de plantel), aﬁnes al campo profesional
                                        industrial, en planteles de la Unidad de Educación Media Superior Tecnológica
                                        Industrial y de Servicios (UEMSTIS) y del Colegio de Estudios Cientíﬁcos y
                                        Tecnológicos (CECyTE) y que hayan sido aceptados para realizar estudios de tiempo
                                        completo en el Diplomado denominado “Transversalidad de la Ciencia, Tecnología,
                                        Ingeniería, Arte y Matemáticas (STEAM) en la Educación Media Superior”, el cual
                                        será impartido por el Centro Nacional de Actualización Docente (CNAD), adscrito
                                        a la UEMSTIS, a partir del 01 de septiembre al 31 de octubre de 2020, con el
                                        objetivo de mejorar, fortalecer y complementar su Beca para la Profesionalización
                                        Docente formación profesional, a solicitar la BECA PARA LA PROFESIONALIZACIÓN
                                        DOCENTE.
                                        Revisa la convocatoria a continuación
                                    </p>
                                    <div align="center">
                                        <a className="Boton3" href="https://drive.google.com/file/d/1XtWi0WnMYOlvmKULnyuBsxMEmyB655uQ/view" title="PDF" target="_blank" rel="noopener noreferrer">VISUALIZA LA CONVOCATORIA</a>
                                    </div>
                                </div>
                                <div className="columns documents" align="center">
                                    <iframe src="https://docs.google.com/viewer?srcid=1vlT4CKAi4-qEkIkNw_-980uSf61AEnla&pid=explorer&efh=false&a=v&chrome=false&embedded=true" title="PDF" width="450px" height="655px"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}