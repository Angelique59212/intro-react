import "./Product.css";

export const Product = function ({ product, setIsProductUpdated }) {
  function handleMinusClick(e) {
    if (product.cart > 0) {
      product.cart -= 1;
      setIsProductUpdated(true);
    }
  }

  function handlePlusClick(e) {
    if (product.cart < product.stock) {
      product.cart += 1;
      setIsProductUpdated(true);
    }
  }

  return (
    <div className="product">
      <div className="product-image">
        <img src={require(`../../assets/img/${product.image}`)} alt="" />
      </div>

      <div className="product-content">
        <p className="product-name">{product.name}</p>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <div className="quantity-selector">
            <button onClick={handleMinusClick}>-</button>
            <div>{product.cart}</div>
            <button onClick={handlePlusClick}>+</button>
          </div>
          <span className="product-price">${product.price}</span>
        </div>
      </div>
    </div>
  );
};
