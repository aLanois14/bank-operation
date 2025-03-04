const BankAccount = require("./bank-account");

describe("BankOperation", function () {
  let account;

  beforeEach(() => {
    account = new BankAccount(100); // On initialise un compte avec 100€
  });

  test("On regarde le solde du compte", function () {
    //GIVEN
    //WHEN
    const balance = account.getBalance();
    //THEN
    expect(balance).toBe(100);
  });

  describe("Dépôt d'argent", function () {
    test("On dépose 10", function () {
      //GIVEN
      //WHEN
      account.deposit(10);
      //THEN
      expect(account.getBalance()).toBe(110);

      expect(BankAccount.transactions).toHaveLength(1);
    });

    test("On dépose -10€", function () {
      //GIVEN
      //WHEN
      const actionDepot = () => account.deposit(-10);
      //THEN
      expect(actionDepot).toThrow();
      expect(BankAccount.transactions).toHaveLength(1);
    });
  });

  describe("Retrait d'argent", function () {
    test("On retire 10", function () {
      //GIVEN
      //WHEN
      account.withdraw(10);
      //THEN
      expect(account.getBalance()).toBe(90);
      expect(BankAccount.transactions).toHaveLength(2);
    });

    test("On retire plus que le solde", function () {
      //GIVEN
      //WHEN
      const actionRetrait = () => account.withdraw(200);
      //THEN
      expect(actionRetrait).toThrow();
      expect(BankAccount.transactions).toHaveLength(2);
    });

    test("On retire un solde négatif", function () {
      //GIVEN
      //WHEN
      const actionRetrait = () => account.withdraw(-10);
      //THEN
      expect(actionRetrait).toThrow();
      expect(BankAccount.transactions).toHaveLength(2);
    });
  });
});
