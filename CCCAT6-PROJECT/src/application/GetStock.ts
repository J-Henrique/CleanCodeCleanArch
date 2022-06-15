import RepositoryFactory from "../domain/factory/RepositoryFactory";
import StockEntryRepository from "../domain/repository/StockEntryRepository";
import StockCalculator from "../domain/service/StockCalculator";

export default class GetStock {
    repository: StockEntryRepository;

    constructor(readonly repositoryFactory: RepositoryFactory) {
        this.repository = repositoryFactory.createStockEntryRepository();
    }

    async execute(idItem: number): Promise<Output> {
        const entries = await this.repository.getStockEntries(idItem);
        const total = StockCalculator.calculate(entries);
        return {
            total
        }
    }
}

type Output = {
    total: number
}