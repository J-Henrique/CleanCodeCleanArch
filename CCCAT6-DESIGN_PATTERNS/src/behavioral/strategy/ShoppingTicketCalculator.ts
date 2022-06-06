import Period from "./Period";
import TickerCalculator from "./TickerCalculator";

export default class ShoppingTicketCalculator implements TickerCalculator {
    
    calculate(period: Period): number {
        let price = 10;
        const pricePerHour = 10;
        const extraHours = period.getDiffInHours() - 3;
        if (extraHours > 0) {
            price += extraHours * pricePerHour;
        }
        return price; 
    }
}