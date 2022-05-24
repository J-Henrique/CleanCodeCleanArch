import Coupon from "../../src/domain/entity/Coupon";
import OrderCoupon from "../../src/domain/entity/OrderCoupon";

test("Deve criar um cupom", function() {
    const orderCoupon = new OrderCoupon("VALE20", 20);
    expect(orderCoupon.calculateDiscount(1000)).toBe(200);
});