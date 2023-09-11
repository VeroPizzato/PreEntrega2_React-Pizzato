import CartWidget from "./CartWidget"
import Logo from "../img/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo New Computers" width="200" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active typo-menu" aria-current="page" to="/category/notebook">Notebooks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link typo-menu" to="/category/gabinete">Gabinetes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link typo-menu" to="/category/monitor">Monitores</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link typo-menu" to="/category/componente">Componentes</Link>
                            </li>                                                      
                        </ul>
                    </div>
                    <div className="img-carrito">
                        <CartWidget />                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
