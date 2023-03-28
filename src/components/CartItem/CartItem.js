import './CartItem.css';
import trash from './../../assets/img/trash.svg';

export const CartItem = function ({product}) {
    return(
        <div className='cart-item'>
            <img src={trash} alt="Supprimer"/>

            <div className='cart-item-product'>
                <p>{product.name}</p>
                <p>({product.cart})</p>
            </div>
        </div>
    )
}