const Navbar = () => {
    return (
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
    )
}

export default Navbar;
