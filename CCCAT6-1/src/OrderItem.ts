export default class OrderItem {
    
    constructor(readonly itemId: number, readonly price: number, readonly quantity: number) {
        this.itemId = itemId;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal() {
        return this.price * this.quantity
    }
}