import Dimension from "../../src/domain/entity/Dimension";
import Item from "../../src/domain/entity/Item";
import ItemRepositoryMemory from "../../src/infra/repository/memory/ItemRepositoryMemory";
import PlaceOrder from "../../src/application/PlaceOrder";
import OrderRepositoryMemory from "../../src/infra/repository/memory/OrderRepositoryMemory";
import CouponRepositoryMemory from "../../src/infra/repository/memory/CouponRepositoryMemory";
import Coupon from "../../src/domain/entity/Coupon";

test("Deve fazer um pedido", async function() {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory()
    itemRepository.save(new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10), 3));
	itemRepository.save(new Item(2, "Amplificador", 5000, new Dimension(50, 50, 50), 20));
	itemRepository.save(new Item(3, "Cabo", 30, new Dimension(10, 10, 10), 1));
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const input = {
        cpf: "935.411.347-80",
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 3 }
        ],
        date: new Date("2021-01-01T10:00:00")
    };
    const output = await placeOrder.execute(input);
    expect(output.total).toBe(6350);
});

test("Deve fazer um pedido e gerar o código do pedido", async function() {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory()
    itemRepository.save(new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10), 3));
	itemRepository.save(new Item(2, "Amplificador", 5000, new Dimension(50, 50, 50), 20));
	itemRepository.save(new Item(3, "Cabo", 30, new Dimension(10, 10, 10), 1));
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const input = {
        cpf: "935.411.347-80",
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 3 }
        ],
        date: new Date("2021-01-01T10:00:00")
    };
    const output = await placeOrder.execute(input);
    expect(output.code).toBe("202100000001" );
});

test("Deve fazer um pedido com desconto", async function() {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory()
    itemRepository.save(new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10), 3));
	itemRepository.save(new Item(2, "Amplificador", 5000, new Dimension(50, 50, 50), 20));
	itemRepository.save(new Item(3, "Cabo", 30, new Dimension(10, 10, 10), 1));
    couponRepository.save(new Coupon("VALE20", 20))
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const input = {
        cpf: "935.411.347-80",
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 3 }
        ],
        coupon: "VALE20"
    };
    const output = await placeOrder.execute(input);
    expect(output.total).toBe(5132);
});