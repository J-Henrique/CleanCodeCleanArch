export default class Period {

    constructor(readonly start: Date, readonly end: Date) {

    }

    getDiffInHours() {
        const diff = (this.end.getTime() - this.start.getTime())/(1000*60*60);
        return diff;
    }
}