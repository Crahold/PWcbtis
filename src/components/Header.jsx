import Carousel from "./carousel/Carousel.js";
import Navegacion from "./navegacion/Navegacion.js";

export function Header() {
    return (
        <header>
            <Navegacion />
            <Carousel />
        </header>
    );
}