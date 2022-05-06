import GetItems from "../src/GetItems";
import ItemsRepositoryDatabase from "../src/ItemsRepositoryDatabase";
import ItemsRepository from "../src/ItemsRepository";
import ItemsRepositoryMemory from "../src/ItemsRepositoryMemory";
import sinon from "sinon";

test("Deve obter os items", async function() {
    const itemsRepository = new ItemsRepositoryDatabase();
    const getItems = new GetItems(itemsRepository);
    const items = await getItems.execute();
    expect(items).toHaveLength(3);
    expect(items[0].description).toBe("Guitarra");
    expect(items[0].price).toBe(1000); 
});

test("Deve obter os items com um fake repository", async function() {
    const itemsRepository = new ItemsRepositoryMemory();
    const getItems = new GetItems(itemsRepository);
    const items = await getItems.execute();
    expect(items).toHaveLength(3);
    expect(items[0].description).toBe("Guitarra");
    expect(items[0].price).toBe(1000); 
});

test("Deve obter os items com um stub", async function() {
    const itemsRepository = new ItemsRepositoryMemory();
    sinon.stub(itemsRepository, "getItems").returns(Promise.resolve([{ description: "Bola", price: 100 }]));
    const getItems = new GetItems(itemsRepository);
    const items = await getItems.execute();
    expect(items).toHaveLength(1);
    expect(items[0].description).toBe("Bola");
    expect(items[0].price).toBe(100);
    sinon.restore();
});

test("Deve obter os items com um spy", async function() {
    const itemsRepository = new ItemsRepositoryMemory();
    const spy = sinon.spy(itemsRepository, "getItems");
    const getItems = new GetItems(itemsRepository);
    const items = await getItems.execute();
    expect(items).toHaveLength(3);
    sinon.assert.calledOnce(spy);
    sinon.restore();
});

test("Deve obter os items com um mock", async function() {
    const itemsRepository = new ItemsRepositoryMemory();
    const getItems = new GetItems(itemsRepository);
    const mock = sinon.mock(itemsRepository);
    mock.expects("getItems").returns(Promise.resolve([{ description: "Bola", price: 100 }]));
    const items = await getItems.execute();
    expect(items).toHaveLength(1);
    expect(items[0].description).toBe("Bola");
    expect(items[0].price).toBe(100);
    mock.verify();
    sinon.restore();
});