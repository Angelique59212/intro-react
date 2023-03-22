import './ProductList.css';
import {ProductStockStatus} from "../ProductStockStatus/ProductStockStatus";
import {Color} from "../../Classes/Color";

export const ProductList = () => {
    const products = [
        {id: 1, name: 'Ecran', price: 85.32, stock: 20},
        {id: 2, name: 'Pc Portable', price: 542.54, stock: 10},
        {id: 3, name: 'Disque SSD', price: 150.41, stock: 52},
        {id: 4, name: 'Biscuits', price: 2.45, stock: 0},
        {id: 5, name: 'Smartphone', price: 324.00, stock: 0},
    ];

    const noStockColor = new Color(Color.noStock);
    const inStockColor = new Color(Color.inStock);


    let test = "Pas grand chose par ici";
    if (products.length >= 5) {
        test = 'Ho, il y a bcp de produits';
    }

    return (
        <>
            <ul className= 'products-list'>
                {products.map(product =>
                    <li key ={product.id} className= {'product' + (product.stock === 0 && 'out-of-stock')}>
                        {product.name} <ProductStockStatus stock={product.stock} colors={{noStock: noStockColor, inStock: inStockColor}} />
                    </li>
                )}
            </ul>

            {/*<ul>*/}
            {/*    {products.map((product, index) => <li key={index}>{product}</li>)}*/}
            {/*</ul>*/}
            <p>{ test}</p>
        </>
    )
}