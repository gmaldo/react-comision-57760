import React from 'react'
import './ProductNotFound.css'; // Importa los estilos específicos

function ProductNotFound() {
    return (
        <div className="product-not-found text-center">
            <span className="icon">&#9888;</span>
            <h1>Producto No Encontrado</h1>
            <p>Lo sentimos, el producto que buscas no está disponible.</p>
        </div>
    );
}

export default ProductNotFound;