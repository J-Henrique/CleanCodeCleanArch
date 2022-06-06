import TicketCalculatorFactory from "../TicketCalculatorFactory";
import Period from "./Period";
import TickerCalculator from "./TickerCalculator";

export default class ParkingLot {
    parkedCars: ParkedCar[];
    ticketCalculator: TickerCalculator;

    constructor(readonly capacity: number, readonly location: string = "beach") {
        const calculator = TicketCalculatorFactory.create(location);
        if(!calculator) throw new Error("Cannot create a calculator based on invalid location");
        this.ticketCalculator = calculator;
        this.parkedCars = [];
    }

    getEmptySpaces() {
        return this.capacity - this.parkedCars.length;
    }

    getParkedCard(plate: string) {
        const parkedCar = this.parkedCars.find(car => car.plate === plate);
        if(!parkedCar) throw new Error("Car not found");
        return parkedCar;
    }

    checkin(plate: string, checkinDate: Date) {
        this.parkedCars.push({ plate, checkinDate });
    }

    checkout(plate: string) {
        const parkedCar = this.getParkedCard(plate);
        this.parkedCars.splice(this.parkedCars.indexOf(parkedCar), 1);
    }

    calculateTicket(plate: string, checkoutDate: Date) {
        const parkedCar = this.getParkedCard(plate);
        const period = new Period(parkedCar.checkinDate, checkoutDate);
        const price = this.ticketCalculator.calculate(period);
        return {
            price
        }
    }
}

type ParkedCar = { plate: string, checkinDate: Date };