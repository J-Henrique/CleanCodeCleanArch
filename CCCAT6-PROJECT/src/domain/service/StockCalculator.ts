import StockEntry from "../entity/StockEntry";

export default class StockCalculator {
    
    static calculate(entries: StockEntry[]) {
        return entries.reduce((total: number, entry: StockEntry) => {
            if (entry.operation === "in") total += entry.quantity;
            if (entry.operation === "out") total -= entry.quantity;
            return total;
        }, 0);
    }
}