import CartWidget from "./CartWidget"
import LogoNike from "../img/logo-nike.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={LogoNike} alt="Logo Nike" width="100" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active typo-menu" aria-current="page" to="/category/hombre">Hombre</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link typo-menu" to="/category/mujer">Mujer</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link typo-menu" to="/category/niños">Niños</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link typo-menu" to="/category/accesorios">Accesorios</Link>
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
