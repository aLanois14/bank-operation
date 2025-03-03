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

  describe("Dépôt d'argent", function () {
    test("On dépose 10", function () {
      //GIVEN
      const account = new BankAccount(100);
      //WHEN
      account.deposit(10);
      //THEN
      expect(account.getBalance()).toBe(110);
    });
  });
});
