import Period from "./Period";
import TickerCalculator from "./TickerCalculator";

export default class BeachTicketCalculator implements TickerCalculator {
    
    calculate(period: Period): number {
        const pricePerHour = 10;
        return period.getDiffInHours() * pricePerHour;
    }
}