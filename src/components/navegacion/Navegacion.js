import React from "react";

const Navegacion = () =>{

    return(
        <nav id="nav-wrap" className="NInicio">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
                <li><a href="http://www.dgeti.sep.gob.mx/"><p className="imgDGETI"></p></a></li>

                <li id="back" className="current"><a href="/inicio">Inicio</a></li>
                <li id="back"><a href="/jornada">Galería Videos <i class="icono fas fa-caret-down"></i></a>
                    <ul>
                        <li><a id="back" href="/jornada">JORNADA DE ORIENTACIÓN VOCACIONAL DGETI</a></li>
                        <li><a id="back" href="/semananacional">SEMANA NACIONAL DE CIENCIA Y TECNOLOGÍA DGETI</a></li>
                    </ul>
                </li>
                <li id="back"><a href="/webinarinfo">Publicaciones <i class="icono fas fa-caret-down"></i></a>
                    <ul>
                        <li><a id="back" href="/webinarinfo">WEBINAR FINANZAS PERSONALES</a></li>
                        <li><a id="back" href="/congresoinvesdocente">CONGRESO INVESTIGACIÓN DOCENTE</a></li>
                        <li><a id="back" href="/jamexico">JA MÉXICO</a></li>
                        <li><a id="back" href="/becadocente">BECA PROFESIONALIZACIÓN DOCENTE</a></li>
                        <li><a id="back" href="/diplomadosteam">DIPLOMADO STEAM EMS CNAD</a></li>
                    </ul>
                </li>
                <li id="back"><a href="/congresoinvesdocente">Convocatorias 2020 <i class="icono fas fa-caret-down"></i></a>
                    <ul>
                        <li><a id="back" href="/congresoinvesdocente">CONGRESO INVESTIGACIÓN DOCENTE</a></li>
                        <li><a id="back" href="/diplomadosteam">DIPLOMADO STEAM EMS CNAD</a></li>
                        <li><a id="back" href="/becadocente">BECA PROFESIONALIZACIÓN DOCENTE</a></li>
                    </ul>
                </li>
                <li id="back"><a href="/goee2021">Documentos <i class="icono fas fa-caret-down"></i></a>
                    <ul>
                        <li><a id="back" href="/goee2021">Guías 2021 <i class="icono fas fa-caret-right"></i></a>
                            <ul className="left">
                                <li><a id="back" href="/goee2021">GUÍA DE OPERACIÓN Y EVALUACIÓN EMPRENDEDORES 2021</a></li>
                                <li><a id="back" href="/goep2021">GUÍA DE OPERACIÓN Y EVALUACIÓN PROTOTIPOS 2021</a></li>
                            </ul>
                        </li>
                        <li><a id="back" href="/lineamientocomite">Lineamientos <i class="icono fas fa-caret-right"></i></a>
                            <ul className="left">
                                <li><a id="back" href="/lineamientocomite">LINEAMIENTOS COMITÉ CONSULTIVO</a></li>
                                <li><a id="back" href="/lineamientopracticas">LINEAMIENTOS PRÁCTICAS PROFESIONALES</a></li>
                            </ul>
                        </li>
                        <li><a id="back" href="/manualinduccion">Manuales <i class="icono fas fa-caret-right"></i></a>
                            <ul className="left">
                                <li><a id="back" href="/manualinduccion">MANUAL DE INDUCCIÓN</a></li>
                                <li><a id="back" href="/manualfunciones">MANUAL DE FUNCIONES</a></li>
                                <li><a id="back" href="/manualss">MANUAL SERVICIO SOCIAL</a></li>
                            </ul>
                        </li>
                        <li><a id="back" href="/informacioncarreras">¡YA ES HORA!INFORMACIÓN DE LAS CARRERAS E INSTITUCIONES DE EDUCACIÓN SUPERIOR PARA EL CICLO ESCOLAR 2021-2022!</a></li>
                        <li><a id="back" href="/normastecnicas">DOCS. AIDET <i class="icono fas fa-caret-right"></i></a>
                            <ul className="left">
                                <li><a id="back" href="/normastecnicas">NORMAS TÉCNICAS Y ADMINISTRATIVAS PARA LAS AIDET 2020</a></li>
                                <li><a id="back" href="/clubciencias">CLUB DE CIENCIAS</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li id="back"><a href="/directorio">Más <i class="icono fas fa-caret-down"></i></a>
                    <ul>
                        <li><a id="back" href="/directorio">Directorio</a></li>
                        <li><a id="back" href="/#">Enlace <i class="icono fas fa-caret-right"></i></a>
                            <ul className="left">
                                <li><a id="back" href="http://educacionmediasuperior.sep.gob.mx/" target="_blank" rel="noopener noreferrer">SEMS</a></li>
                                <li><a id="back" href="http://uemstis.sep.gob.mx/" target="_blank" rel="noopener noreferrer">UEMSTIS</a></li>
                                <li><a id="back" href="http://cnad.edu.mx/" target="_blank" rel="noopener noreferrer">CNAD</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li><a className='FaceBook' href="https://www.facebook.com/CBTIS106/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
            </ul>

        </nav>
    )
}

export default Navegacion