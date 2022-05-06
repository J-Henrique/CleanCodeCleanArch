import Connection from "./Connection";
import ItemsRepository from "./ItemsRepository";

export default class GetItems {
    connection: Connection;

    constructor(readonly repository: ItemsRepository) {
        this.connection = new Connection();
    }

    async execute(): Promise<OutPut[]> {
        const items = await this.repository.getItems();
        const output: OutPut[] = [];
        for(const item of items) {
            output.push({ description: item.description, price: parseFloat(item.price) });
        };
        return output;
    }

}

type OutPut = {
    description: string,
    price: number
}