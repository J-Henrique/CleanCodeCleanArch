import OrderCode from "../../src/domain/entity/OrderCode"

test("Deve gerar um código de pedido", function() {
    const code = new OrderCode(new Date("2022-03-01T10:00:00"), 1);
    expect(code.value).toBe("202200000001");
});