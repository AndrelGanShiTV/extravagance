import logo from '../../img/exlogo.png'
import './Nav.css'
function Nav() {

    return (
        <div className='nav'>
            <nav class="navbar navbar-expand-lg">
                <nav class="navbar">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="Logo" width="18%" class="d-inline-block align-text-center"/>
                        </a>
                    </div>
                </nav>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Inicio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item active dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Cuidado de la Piel</a></li>
                                    <li><a class="dropdown-item" href="#">Maquillaje</a></li>
                                    <li><a class="dropdown-item" href="#">Uñas</a></li>
                                    <li><a class="dropdown-item" href="#">Cabello</a></li>
                                    <li><a class="dropdown-item" href="#">Corporal</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Algo más...</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Asesorías</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Marcas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Promociones</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Ingresar</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Registrarse</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btnBuscar" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;