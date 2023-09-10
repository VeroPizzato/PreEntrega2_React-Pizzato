import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return (      
        // col-md-5:2 columnas
        <div className="container my-4">            
            <div className="row align-items-center align-self-center">                
                <div className="col-md-5 offset-md-1">                    
                    <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <h3>${item.precio}</h3>                    
                    <ItemCount stock={item.stock}  />                                      
                </div>
            </div>
        </div>
    )        
}

export default ItemDetail;
