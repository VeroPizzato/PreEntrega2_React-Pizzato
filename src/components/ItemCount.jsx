import { useEffect, useState } from 'react';
import '../styles/ItemCount.css'

const ItemCount = ({stock}) => {
    const [itemsStock, setItemsStock]  = useState(stock);
    const [cant, setCant] = useState(0);

    function onAdd() {
        if (cant <= itemsStock){
            setItemsStock(itemsStock - cant);
            setCant(0); // reinicio el contador
        }
    }
    
    const onIncrease = () => {
        if (cant < itemsStock){
            setCant(cant + 1);
        }       
    }

    const onDecrease = () => {
        if (cant > 0){
            setCant(cant - 1)
        }       
    }

    useEffect(() => {
        setItemsStock(stock);
    }, [stock]);

    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light mx-3" onClick={onDecrease}>-</button>
                        <button type="button" className="btn btn-light">{cant}</button>
                        <button type="button" className="btn btn-light mx-3" onClick={onIncrease}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-secondary" onClick={() => onAdd()}>Agregar al carrito</button>
                </div>
            </div>
        </div>        
    )
}

export default ItemCount;