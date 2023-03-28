import './App.css';

import {Header} from "../Header/Header";
import {ProductList} from "../ProductList/ProductList";
import {Cart} from "../Cart/Cart";
import {Categories} from "../Categories/Categories";
import {useState} from "react";

function App() {
    const productsList = [
        {id: 1, cart:0, name: 'Ecran',description: 'une description', price: 85.32, stock: 20, image: 'image1.png'},
        {id: 2,cart:0, name: 'Pc Portable',description: 'une description', price: 542.54, stock: 10, image: 'image2.png'},
        {id: 3,cart:0, name: 'Disque SSD',description: 'une description', price: 150.41, stock: 52, image: 'image3.png'},
        {id: 4,cart:0, name: 'Biscuits',description: 'une description', price: 2.45, stock: 0, image: 'image4.png'},
        {id: 5,cart:0, name: 'Smartphone',description: 'une description', price: 324.00, stock: 0, image: 'image5.png'},
    ];
    const [products, setProducts] = useState([...productsList]);
    const [isProductUpdated, setIsProductUpdated] = useState(false);

    if (isProductUpdated) {
        setProducts(products);
        setIsProductUpdated(false);
    }

    return (
        <>
            <Header title="Welcome!"/>
            <div className='app'>
                <Cart products={products} setIsProductUpdated={setIsProductUpdated}/>
                <div className='app-main'>
                    <Categories/>
                    <ProductList products={products} setIsProductUpdated={setIsProductUpdated}/>
                </div>
            </div>
        </>
  );
}

export default App;
