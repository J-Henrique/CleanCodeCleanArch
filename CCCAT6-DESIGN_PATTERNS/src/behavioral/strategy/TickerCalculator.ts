import Period from "./Period";

export default interface TickerCalculator {
    calculate(period: Period): number;
}