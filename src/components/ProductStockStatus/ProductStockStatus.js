import './ProductStockStatus.css';

export const ProductStockStatus = function ({ stock, colors}) {
    const style = stock > 0 ? {color: colors.inStock.getStockColor()}:{color: colors.noStock.getStockColor()};
    // let stock = props.stock;
    // stock = stock +1;

    return (
        <span style={style}>({stock})</span>
    )
}