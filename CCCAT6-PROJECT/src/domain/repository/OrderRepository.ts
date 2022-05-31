import Order from "../entity/Order";
import OrderCode from "../entity/OrderCode";

export default interface OrderRepository {

    save(order: Order): Promise<void>;
    count(): Promise<number>;
    list(): Promise<Order[]>;
    get(code: string): Promise<Order>;
    clear(): Promise<void>;
}