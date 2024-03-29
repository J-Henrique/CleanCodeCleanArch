import ItemRepositoryDatabase from "../../src/infra/repository/database/ItemRepositoryDatabase";
import PgPromiseConnectionAdapter from "../../src/infra/database/PgPromiseConnectionAdapter";

test.skip("Deve retornar items do banco de dados", async function(){
    const connection = new PgPromiseConnectionAdapter();
    const itemRepository = new ItemRepositoryDatabase(connection);
    const items = itemRepository.list();
    expect(items).toHaveLength(3);
    await connection.close();
});