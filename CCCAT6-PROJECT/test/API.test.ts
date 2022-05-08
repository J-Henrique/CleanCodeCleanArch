import axios from "axios";

test("Deve retornar resultados de /items", async function() {
    const response = await axios({
        url: "http://localhost:3000/items",
        method: "get"
    })
    const items = response.data;
    expect(items).toHaveLength(3);
});