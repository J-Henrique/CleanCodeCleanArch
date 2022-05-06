export default class Coupon {
    
    constructor(readonly code: string, readonly percentage: number) {
        this.code = code;
        this.percentage = percentage;
    }

    calculateDiscount(total: number) {
        return (total * this.percentage) / 100
    }
}