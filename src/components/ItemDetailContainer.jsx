import productos from "../json/productos.json"
import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {idItem} = useParams();  // el useParam me pasa idItem como string

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                let producto = productos.find(item => item.id === parseInt(idItem))  
                resolve(producto);
            }, 2000);
        });

        promesa.then(data => {
            setItem(data);
        }) 
    }, [idItem]);

    return (
        <>
            <ItemDetail producto={item} />
        </>
    )        
}

export default ItemDetailContainer;