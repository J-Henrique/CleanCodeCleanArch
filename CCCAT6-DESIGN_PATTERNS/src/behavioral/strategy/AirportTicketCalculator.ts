import Period from "./Period";
import TickerCalculator from "./TickerCalculator";

export default class AirportTicketCalculator implements TickerCalculator {
    
    calculate(period: Period): number {
        return 30;
    }
}