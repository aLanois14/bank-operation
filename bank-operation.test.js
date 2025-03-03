const BankAccount = require("./bank-account");

describe("BankOperation", function () {
  test("On regarde le solde du compte", function () {
    //GIVEN
    const account = new BankAccount(100);
    //WHEN
    const balance = account.getBalance();
    //THEN
    expect(balance).toBe(100);
  });
});
