import Order from "./Order";
import OrderRepository from "./OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
    order: Order[];
    
    constructor() {
        this.order = [];
    }

    async save(order: Order): Promise<void> {
        this.order.push(order);
    }
}