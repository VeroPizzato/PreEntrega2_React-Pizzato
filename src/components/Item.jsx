import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return ( 
        // col-md-3: 4 columnas   
        <div className="col-md-3 my-2">   
            <div className="card">                
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body">
                    <h2 className="card-text text-center">{item.nombre}</h2>
                    <h5 className="text-center">${item.precio}</h5>
                </div>                
                <Link to={"/item/" + item.id} className="btn btn-secondary text-decoration-none text-center">
                    Ver detalle
                </Link>
            </div>        
        </div>            
    )
}

export default Item;