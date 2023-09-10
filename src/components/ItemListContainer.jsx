import {  useEffect, useState } from "react";
import ItemList from "./ItemList";
import productos from "../json/productos.json"
import { useParams } from "react-router-dom";

const asyncMock= (nombre) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (nombre === undefined){
            resolve(productos);
        } else {
            const productosFiltrados = productos.filter(
                producto => producto.categoria === nombre
            );
            resolve(productosFiltrados);
        }
      }, 2000);
    });
};

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {nombreCategoria} = useParams();

    useEffect(() => {     
        asyncMock(nombreCategoria).then((data) => setItems(data));
    }, [nombreCategoria]);

    return (
        <div className="container my-5">
            <div className="row my-2">         
                 <ItemList items={items} />
            </div>
        </div>
    );            
}

export default ItemListContainer; 