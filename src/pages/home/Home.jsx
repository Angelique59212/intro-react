import "./Home.css";
import { productsList } from "../../data";

import { Header } from "../../components/Header/Header";
import { ProductList } from "../../components/ProductList/ProductList";
import { Cart } from "../../components/Cart/Cart";
import { Categories } from "../../components/Categories/Categories";
import { useEffect, useState } from "react";

export const Home = function () {
  const [products, setProducts] = useState(productsList);
  const [isProductUpdated, setIsProductUpdated] = useState(false);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    document.title = "Home";
  }, []);

  if (isProductUpdated) {
    setProducts(products);
    setIsProductUpdated(false);
  }

  return (
    <>
      <Header title="Welcome!" />
      <div className="app">
        <Cart products={products} setIsProductUpdated={setIsProductUpdated} />
        <div className="app-main">
          <Categories setCategory={setCategory} />
          <ProductList
            category={category}
            products={products}
            setIsProductUpdated={setIsProductUpdated}
          />
        </div>
      </div>
    </>
  );
};
