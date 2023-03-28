export const QuantitySelector = function ({start, product}) {
    function handleMinusClick(e) {
        e.preventDefault();
        console.log(e);
    }

    function handlePlusClick(e) {
        e.preventDefault();
        console.log(e);
    }

    return(
        <div className="quantity-selector">
            <button className="quantity-selector-minus" onClick={handleMinusClick}>-</button>
            <div className="quantity-selector-amount">{start}</div>
            <button className="quantity-selector-plus" onClick={handlePlusClick}>+</button>
        </div>
    )
}