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

    test("On dépose -10€", function () {
      //GIVEN
      const account = new BankAccount(100);
      //WHEN
      const actionDepot = () => account.deposit(-10);
      //THEN
      expect(actionDepot).toThrow();
    });
  });

  describe("Retrait d'argent", function () {
    test("On retire 10", function () {
      //GIVEN
      const account = new BankAccount(100);
      //WHEN
      account.withdraw(10);
      //THEN
      expect(account.getBalance()).toBe(90);
    });

    test("On retire plus que le solde", function () {
      //GIVEN
      const account = new BankAccount(100);
      //WHEN
      const actionRetrait = () => account.withdraw(-200);
      //THEN
      expect(actionRetrait).toThrow();
    });
  });
});
