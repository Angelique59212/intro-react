export class Color
{
    static inStock = 'green';
    static noStock = 'red';

    /**
     * @param color
     * @returns {*}
     */
    constructor(color) {
        if ( [Color.inStock, Color.noStock].includes(color)) {
            this.choosenColor = color;
        } else {
            this.choosenColor = 'black';
        }
    }


    /**
     * Return the chosen color
     */
    getStockColor() {
        return this.choosenColor;
    }
}