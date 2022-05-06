export default class Item {

    constructor(readonly id: number, readonly description: string, readonly price: number) {
        this.id = id;
        this.description = description;
        this.price = price;
    }
}