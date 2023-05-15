import logo from '../../img/exlogo.png'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {

    return (
        <div className='nav'>
            <nav class="navbar navbar-expand-lg">
                <nav class="navbar">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">
                            <img src={logo} alt="Logo" width="18%" class="d-inline-block align-text-center"/>
                        </Link>
                    </div>
                </nav>
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Inicio</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item active dropdown">
                                <Link class="nav-link dropdown-toggle" to="/Categorias" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/CuidadoPiel">Cuidado de la Piel</Link></li>
                                    <li><Link class="dropdown-item" to="/Maquillaje">Maquillaje</Link></li>
                                    <li><Link class="dropdown-item" to="/Uñas">Uñas</Link></li>
                                    <li><Link class="dropdown-item" to="/Cabello">Cabello</Link></li>
                                    <li><Link class="dropdown-item" to="Corporal">Corporal</Link></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><Link class="dropdown-item" to="/">Algo más...</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Asesorias">Asesorías</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Marcas">Marcas</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Promociones">Promociones</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Ingresar">Ingresar</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/Registrarse">Registrarse</Link>
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