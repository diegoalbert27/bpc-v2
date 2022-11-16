import { Link } from "react-router-dom"
import { FaAngleRight, FaShoppingBasket, FaShoppingCart, FaStoreAlt, FaTruck, FaListAlt } from "react-icons/fa"

export function Sidebar() {
    const baseUrl = 'application'

    return (
        <nav className="position-absolute col-md-3 h-100 bg-white border">
            <div className="d-flex flex-column border-bottom">
                <div className="d-flex link-container p-3">
                    <span className="me-5 fs-5 text-secondary">
                        <FaAngleRight />
                    </span>
                    <a className="fs-5 text-secondary" data-bs-toggle="collapse" data-bs-target="#collapseRegistro" aria-expanded="false" role="button">
                        Registros
                    </a>
                </div>
                <div className="collapse text-center" id="collapseRegistro">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-6 text-secondary">Solicitante</li>
                        <li className="nav-item fs-6 text-secondary">Libro</li>
                    </ul>
                </div>
                <div className="d-flex link-container p-3">
                    <span className="me-5 fs-5 text-secondary">
                        <FaAngleRight />
                    </span>
                    <a className="fs-5 text-secondary" data-bs-toggle="collapse" data-bs-target="#collapseProcesos" aria-expanded="false" role="button">
                        Procesos
                    </a>
                </div>
                <div className="collapse text-center" id="collapseProcesos">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-6 text-secondary">Prestamo de libros</li>
                        <li className="nav-item fs-6 text-secondary">Devolucion de libros</li>
                    </ul>
                </div>
                <div className="d-flex link-container p-3">
                    <span className="me-5 fs-5 text-secondary">
                        <FaAngleRight />
                    </span>
                    <a className="fs-5 text-secondary" data-bs-toggle="collapse" data-bs-target="#collapseConsulta" aria-expanded="false" role="button">
                        Consultas
                    </a>
                </div>
                <div className="collapse text-center" id="collapseConsulta">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-6 text-secondary">Solicitantes</li>
                        <li className="nav-item fs-6 text-secondary">Libros</li>
                        <li className="nav-item fs-6 text-secondary">Prestamos</li>
                    </ul>
                </div>
                <div className="d-flex link-container p-3">
                    <span className="me-5 fs-5 text-secondary">
                        <FaAngleRight />
                    </span>
                    <a className="fs-5 text-secondary" data-bs-toggle="collapse" data-bs-target="#collapseConfiguracion" aria-expanded="false" role="button">
                        Configuracion
                    </a>
                </div>
                <div className="collapse text-center" id="collapseConfiguracion">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-6 text-secondary">Categorias</li>
                        <li className="nav-item fs-6 text-secondary">Usuarios</li>
                        <li className="nav-item fs-6 text-secondary">Perfil</li>
                        <li className="nav-item fs-6 text-secondary">Auditoria</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
