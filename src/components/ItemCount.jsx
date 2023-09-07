import { useState } from 'react';
import '../styles/ItemCount.css'

const ItemCount = ({stock}) => {
    const [itemsStock, setItemsStock]  = useState(stock);
    const [cont, setCount] = useState(0);

    function agregarAlCarrito() {
        if (cont <= itemsStock){
            setItemsStock(itemsStock - cont);
        }
    }
    
    const onIncrease = () => {
        if (cont < itemsStock){
            setCount(cont + 1);
        }       
    }

    const onDecrease = () => {
        if (cont > 0){
            setCount(cont - 1)
        }       
    }

    return (
        <div className="container">
            <div className="contador">
                <button id = "btnAgregar" onClick={onIncrease}>+</button>
                <label id="cont-value">{cont}</label>
                <button id = "btnSacar" onClick={onDecrease}>-</button>
            </div>
            <button id="agregarAlCarrito" onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;