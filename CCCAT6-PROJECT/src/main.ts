import express from "express";
import ItemRepositoryMemory from "./ItemRepositoryMemory";
import GetItems from "./GetItems";
import Item from "./Item";
import Dimension from "./Dimension";

const app = express();
app.get("/items", async function(req, res) {
    const itemRepository = new ItemRepositoryMemory();
    itemRepository.save(new Item(1, "Guitarra", 1000, new Dimension(100, 30, 10), 3));
	itemRepository.save(new Item(2, "Amplificador", 5000, new Dimension(50, 50, 50), 20));
	itemRepository.save(new Item(3, "Cabo", 30, new Dimension(10, 10, 10), 1));
    const getItems = new GetItems(itemRepository);
    const output = await getItems.execute()
    res.json(output);
});
app.listen(3000);