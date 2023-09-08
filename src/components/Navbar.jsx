const Navbar = () => {
    return (
<<<<<<< HEAD
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link text-dark" activeclassname="text-danger" aria-current="page" to={"/destacados"}>Destacados</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" activeclassname="text-danger" to={"/category/hombre"}>Hombre</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" activeclassname="text-danger" to={"/category/mujer"}>Mujer</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" activeclassname="text-danger" to={"/category/niños"}>Niño/a</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" activeclassname="text-danger" to={"/category/niños"}>Accesorios</a>
            </li>
        </ul>
=======
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
>>>>>>> b57b877a533cb6ad989b1dae4fa9ff2d1bf0fa36
    )
}

export default Navbar;
