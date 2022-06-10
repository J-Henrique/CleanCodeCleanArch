import Account from "../../../src/behavioral/command/Account";
import CreditCommand from "../../../src/behavioral/command/CreditCommand";
import DebitCommand from "../../../src/behavioral/command/DebitCommand";

test("Deve criar uma conta", function() {
    const account = new Account("00897786");
    const balance = account.getBalance();
    expect(balance).toBe(0);
});

// test("Deve creditar uma conta", function() {
//     const account = new Account("00897786");
//     account.credit(100);
//     const balance = account.getBalance();
//     expect(balance).toBe(100);
// });

// test("Deve debitar uma conta", function() {
//     const account = new Account("00897786");
//     account.credit(100);
//     account.debit(50);
//     const balance = account.getBalance();
//     expect(balance).toBe(50);
// });

test("Deve creditar uma conta", function() {
    const account = new Account("00897786");
    const creditCommand = new CreditCommand(account, 100);
    creditCommand.execute();
    const balance = account.getBalance();
    expect(balance).toBe(100);
});

test("Deve debitar uma conta", function() {
    const account = new Account("00897786");
    const creditCommand = new CreditCommand(account, 100);
    const debitCommand = new DebitCommand(account, 50);
    creditCommand.execute();
    debitCommand.execute();
    const balance = account.getBalance();
    expect(balance).toBe(50);
});