import Connection from "../src/Connection";

test("Deve retornar dados do BD", async function() {
    const connection = new Connection();
    const items = await connection.query("select * from ccca.item ", []);
    expect(items).toHaveLength(3);
});