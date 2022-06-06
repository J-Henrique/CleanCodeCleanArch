import AirportTicketCalculator from "./strategy/AirportTicketCalculator";
import BeachTicketCalculator from "./strategy/BeachTicketCalculator";
import ShoppingTicketCalculator from "./strategy/ShoppingTicketCalculator";

export default class TicketCalculatorFactory {

    static create(location: string) {
        if(location === "beach") {
            return new BeachTicketCalculator();
        }
        if(location === "shopping") {
            return new ShoppingTicketCalculator();
        }
        if(location === "airport") {
            return new AirportTicketCalculator();
        }
    }
}