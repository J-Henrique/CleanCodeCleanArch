import Coupon from "../src/Coupon";

test("Deve criar um cupom", function() {
    const coupon = new Coupon("VALE20", 20);
    expect(coupon.calculateDiscount(1000)).toBe(200);
});

test("Não deve aplicar cupom de desconto expirado", function() {
    const coupon = new Coupon("VALE20", 20, new Date("2021-03-01T10:00:00"));
    const isExpired = coupon.isExpired(new Date("2022-03-01T10:00:00"));
    expect(isExpired).toBeTruthy();
});