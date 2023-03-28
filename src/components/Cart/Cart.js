import './Cart.css';
import {Product} from "../Product/Product";
import {CartItem} from '../CartItem/cartItem';

export const Cart = () => {
    const products = [
        {product: new Product(1, 'Produit1'), quantity: 2},
        {product: new Product(2, 'Produit4'), quantity: 4},
        {product: new Product(3, 'Produit3'), quantity: 4},
    ];
    function handleCartFooterButtonClick() {
        console.log('Le bouton vider le panier a été cliqué');
    }

    return(
        <div className='cart'>
            <div className="cart-header">
                <h2>Vos articles</h2>
            </div>
            <div className="cart-content">
                {products.map(product =>
                    <CartItem key={product.product.id} product={product.product} quantity={product.quantity}/>
                )}
            </div>
            <div className="cart-footer">
                <button onClick={handleCartFooterButtonClick}>Vider le panier</button>
            </div>
        </div>
    )
}