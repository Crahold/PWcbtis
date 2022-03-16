import React from "react";

const Carousel = () =>{

    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <header id="home" style={{ background: 'url(./images/Vinculacion.jpg) no-repeat top center' }}>
                        <div className="row banner">
                            <div className="banner-text">
                                <h1>CBTIS 106</h1>
                                <h3>CENTRO DE BACHILLERATO TECNOLÓGICO INDUSTRIAL Y DE SERVICIOS No. 106 "Esteban Baca Calderón"</h3>
                                <hr />
                                <ul className="social">
                                </ul>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="carousel-item">
                    <header id="home" style={{ background: 'url(./images/Conocimiento.jpg) no-repeat top center' }}>
                        <div className="row banner">
                            <div className="banner-text">
                                <h1>OLIMPIADA DEL CONOCIMIENTO.</h1>
                                <h3>INFORMACIÓN DEL EVENTO</h3>
                                <hr />
                                <ul className="social">
                                </ul>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="carousel-item">
                    <header id="home" style={{ background: 'url(./images/semanaNac.jpeg) no-repeat top center' }}>
                        <div className="row banner">
                            <div className="banner-text">
                                <h1>SEMANA NACIONAL DE CÍENCIA Y TECNOLOGÍA</h1>
                                <h3>INFORMACIÓN DEL EVENTO</h3>
                                <hr />
                                <ul className="social">
                                </ul>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span aria-hidden="true"><i id="caruselinicio" className="fas fa-angle-left"></i></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span aria-hidden="true"><i id="caruselinicio" className="fas fa-angle-right"></i></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel