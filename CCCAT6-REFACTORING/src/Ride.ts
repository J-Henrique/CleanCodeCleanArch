import Segment from "./Segment";

export default class Ride {
    OVERNIGHT_FARE = 3.90;
    SUNDAY_FARE = 2.90;
    OVERNIGHT_SUNDAY_FARE = 5;
    NORMAL_FARE = 2.1;
    OVERNIGHT_START = 22;
    OVERNIGHT_END = 6;
    MIN_FARE = 10;

    segments: Segment[];

    constructor() {
        this.segments = [];
    }

    addSegment(distance: number, date: Date) {
        this.segments.push(new Segment(distance, date));
    }

    finish() {
        let fare = 0;
         
        return fare;
    }

    isOvernight (date: Date) {
	    return date.getHours() >= this.OVERNIGHT_START || date.getHours() <= this. OVERNIGHT_END;
    }

    isSunday (date: Date) {
        return date.getDay() === 0;
    }

    isValidDistance (distance: number) {
        return distance != null && distance != undefined && typeof distance === "number" && distance > 0;
    }

    isValidDate (date: Date) {
        return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date";
    }

    export function calculateRide (segments) {
        let fare = 0;
        for (segment of segments) {
            if (segment.distance != null && segment.distance != undefined && typeof segment.distance === "number" && segment.distance > 0) {
                if (segment.date != null && segment.date != undefined && segment.date instanceof Date && segment.date.toString() !== "Invalid Date") {
        
                    // overnight
                
                    if (segment.date.getHours() >= OVERNIGHT_START || segment.date.getHours() <= OVERNIGHT_END) {
                
                        // not sunday
                        if (segment.date.getDay() !== 0) {
                            
                            fare += segment.distance * OVERNIGHT_FARE;
                        // sunday
                        } else {
                            fare += segment.distance * OVERNIGHT_SUNDAY_FARE;
        
                        }
                    } else {
                        // sunday
                        if (segment.date.getDay() === 0) {
                
                            fare += segment.distance * SUNDAY_FARE;
                
                        } else {
                            fare += segment.distance * NORMAL_FARE;
                
                        }
                    }
                } else {
                    // console.log(d);
                    return -2;
                }
            } else {
                // console.log(distance);
        
                return -1;
            }
            
        }
        if (fare < MIN_FARE) {
            return MIN_FARE;
        } else {
            return fare;
        }
    }
}