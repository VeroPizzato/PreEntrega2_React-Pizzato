import { useState } from 'react';

const ItemCount = ({stock}) => {
    const [itemsStock, setItemsStock]  = useState(stock);
    const [cont, setCount] = useState(0);

    function agregarAlCarrito(cont) {
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
                <button onClick={onIncrease}>+</button>
                <label >{cont}</label>
                <button onClick={onDecrease}>-</button>
            </div>
            <button id="agregarAlCarrito" onClick={() => agregarAlCarrito(cont)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;