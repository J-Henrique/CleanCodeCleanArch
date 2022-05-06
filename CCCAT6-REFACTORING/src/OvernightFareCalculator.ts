import FareCalculator from "./FareCalculator";
import Segment from "./Segment";

export default class OvernightFareCalculator implements FareCalculator {
    calculate(segment: Segment): number {
        return segment.distance
    }
}