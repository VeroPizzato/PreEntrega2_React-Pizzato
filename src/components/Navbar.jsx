import CartWidget from "./CartWidget"
import LogoNike from "../img/logo-nike.png";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={LogoNike} alt="Logo Nike" width="100" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active typo-menu" aria-current="page" href="#">Hombre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link typo-menu" href="#">Mujer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link typo-menu" href="#">Niños</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link typo-menu" href="#">Accesorios</a>
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
