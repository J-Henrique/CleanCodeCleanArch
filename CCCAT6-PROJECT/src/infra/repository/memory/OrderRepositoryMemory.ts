import Order from "../../../domain/entity/Order";
import OrderRepository from "../../../domain/repository/OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {
    order: Order[];
    
    constructor() {
        this.order = [];
    }

    async save(order: Order): Promise<void> {
        this.order.push(order);
    }
}