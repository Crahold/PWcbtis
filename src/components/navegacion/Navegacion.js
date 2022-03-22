import React from "react";
import { Link } from "react-router-dom";

export const Navegacion = () =>{

    return(
        <nav id="nav-wrap" className="NInicio">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
                <li><a href="http://www.dgeti.sep.gob.mx/"><p className="imgDGETI"></p></a></li>

                <li id="back" className="current"><Link to="/inicio">Inicio</Link></li>
                <li id="back"><Link to="/jornada">Galería Videos <i class="icono fas fa-caret-down"></i></Link>
                    <ul>
                        <li><Link id="back" to="/jornada">JORNADA DE ORIENTACIÓN VOCACIONAL DGETI</Link></li>
                        <li><Link id="back" to="/semananacional">SEMANA NACIONAL DE CIENCIA Y TECNOLOGÍA DGETI</Link></li>
                    </ul>
                </li>
                <li id="back"><Link to="/webinarinfo">Publicaciones <i class="icono fas fa-caret-down"></i></Link>
                    <ul>
                        <li><Link id="back" to="/webinarinfo">WEBINAR FINANZAS PERSONALES</Link></li>
                        <li><Link id="back" to="/congresoinvesdocente">CONGRESO INVESTIGACIÓN DOCENTE</Link></li>
                        <li><Link id="back" to="/jamexico">JA MÉXICO</Link></li>
                        <li><Link id="back" to="/becadocente">BECA PROFESIONALIZACIÓN DOCENTE</Link></li>
                        <li><Link id="back" to="/diplomadosteam">DIPLOMADO STEAM EMS CNAD</Link></li>
                    </ul>
                </li>
                <li id="back"><Link to="/congresoinvesdocente">Convocatorias 2020 <i class="icono fas fa-caret-down"></i></Link>
                    <ul>
                        <li><Link id="back" to="/congresoinvesdocente">CONGRESO INVESTIGACIÓN DOCENTE</Link></li>
                        <li><Link id="back" to="/diplomadosteam">DIPLOMADO STEAM EMS CNAD</Link></li>
                        <li><Link id="back" to="/becadocente">BECA PROFESIONALIZACIÓN DOCENTE</Link></li>
                    </ul>
                </li>
                <li id="back"><Link to="/goee2021">Documentos <i class="icono fas fa-caret-down"></i></Link>
                    <ul>
                        <li><Link id="back" to="/goee2021">Guías 2021 <i class="icono fas fa-caret-right"></i></Link>
                            <ul className="left">
                                <li><Link id="back" to="/goee2021">GUÍA DE OPERACIÓN Y EVALUACIÓN EMPRENDEDORES 2021</Link></li>
                                <li><Link id="back" to="/goep2021">GUÍA DE OPERACIÓN Y EVALUACIÓN PROTOTIPOS 2021</Link></li>
                            </ul>
                        </li>
                        <li><Link id="back" to="/lineamientocomite">Lineamientos <i class="icono fas fa-caret-right"></i></Link>
                            <ul className="left">
                                <li><Link id="back" to="/lineamientocomite">LINEAMIENTOS COMITÉ CONSULTIVO</Link></li>
                                <li><Link id="back" to="/lineamientopracticas">LINEAMIENTOS PRÁCTICAS PROFESIONALES</Link></li>
                            </ul>
                        </li>
                        <li><Link id="back" to="/manualinduccion">Manuales <i class="icono fas fa-caret-right"></i></Link>
                            <ul className="left">
                                <li><Link id="back" to="/manualinduccion">MANUAL DE INDUCCIÓN</Link></li>
                                <li><Link id="back" to="/manualfunciones">MANUAL DE FUNCIONES</Link></li>
                                <li><Link id="back" to="/manualss">MANUAL SERVICIO SOCIAL</Link></li>
                            </ul>
                        </li>
                        <li><Link id="back" to="/informacioncarreras">¡YA ES HORA!INFORMACIÓN DE LAS CARRERAS E INSTITUCIONES DE EDUCACIÓN SUPERIOR PARA EL CICLO ESCOLAR 2021-2022!</Link></li>
                        <li><Link id="back" to="/normastecnicas">DOCS. AIDET <i class="icono fas fa-caret-right"></i></Link>
                            <ul className="left">
                                <li><Link id="back" to="/normastecnicas">NORMAS TÉCNICAS Y ADMINISTRATIVAS PARA LAS AIDET 2020</Link></li>
                                <li><Link id="back" to="/clubciencias">CLUB DE CIENCIAS</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li id="back"><Link to="/directorio">Más <i class="icono fas fa-caret-down"></i></Link>
                    <ul>
                        <li><Link id="back" to="/directorio">Directorio</Link></li>
                        <li><Link id="back" to="/#">Enlace <i class="icono fas fa-caret-right"></i></Link>
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