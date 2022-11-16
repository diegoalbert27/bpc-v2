import { FaSignOutAlt, FaBook } from "react-icons/fa"

export function Navbar() {
    return (
        <nav className="navbar navbar-light bg-white shadow align-left mb-4">
            <div className="container">
                <h1 className="navbar-brand mt-1 px-3">
                    "Agustín Codazzi"
                </h1>
                <ul className="navbar-nav px-3">
                    <li className="navbar-item">
                        <a className="text-dark outline-0" href="/logout"><span><FaSignOutAlt /></span> Cerrar sesión</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
