export default class Account {
    private balance = 0;

    constructor(readonly number: string) {

    }

    getBalance() {
        return this.balance;
    }

    credit(amount: number) {
        this.balance += amount;
    }

    debit(amount: number) {
        this.balance -= amount;
    }
}