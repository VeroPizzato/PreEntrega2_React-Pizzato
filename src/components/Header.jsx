import AirJordan from "../img/air-jordan.svg";
import LogoNike from "../img/logo-nike.svg";
import Navbar from "./Navbar"
import CartWidget from "./CartWidget"

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-body-secondary p-3">
                <div className="col-md-6">
                    <a href="#"><img src={AirJordan} alt={"Air Jordan"} width={24} /></a>
                </div>
                <div className="col-md-6 text-end">
                    <a href={"#"} className="text-dark text-decoration-none">Buscar Tienda</a> | <a href={"#"} className="text-dark text-decoration-none">Ayuda</a>
                </div>                
            </div>
            <div className="row p-3">
                <div className="col-md-4">
                    <a href={"#"}><img src={LogoNike} alt={"Nike Argentina"} width={60} /></a>
                </div>
                <div className="col-md-4 text-center">
                    <Navbar />
                </div>
                <div className="col-md-4 text-end">
                    <CartWidget />
                </div>
            </div>
        </div>

    )
}

export default Header;