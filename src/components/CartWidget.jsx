import Carrito from "../img/carrito.png"

const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-ligth position-relative">
                    <img src={Carrito} alt="Logo de carrito de compras" width="32" />
                    <span id="cantidadProdu" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
            </button>
        </div>
    )
}

export default CartWidget;