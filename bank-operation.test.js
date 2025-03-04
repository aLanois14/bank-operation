const BankAccount = require("./bank-account");

describe("BankOperation", function () {
  let account;
  const mockDate = new Date("2024-03-04T12:00:00Z");

  beforeAll(() => {
    jest.spyOn(global.Date, "now").mockImplementation(() => mockDate.getTime());
    account = new BankAccount(100); // On initialise un compte avec 100€
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("On regarde le solde du compte", function () {
    //GIVEN : un compte avec un solde de 100€
    //WHEN
    const balance = account.getBalance();
    //THEN
    expect(balance).toBe(100);
  });

  describe("Dépôt d'argent", function () {
    test("On dépose 10", function () {
      //GIVEN un compte avec un solde de 100€
      //WHEN
      account.deposit(10);
      //THEN
      expect(account.getBalance()).toBe(110);

      expect(account.getTransactions()).toHaveLength(1);
    });

    test("On dépose -10€", function () {
      //GIVEN un compte avec un solde de 110€
      //WHEN
      const actionDepot = () => account.deposit(-10);
      //THEN
      expect(actionDepot).toThrow();
      expect(account.getTransactions()).toHaveLength(1);
    });
  });

  describe("Retrait d'argent", function () {
    test("On retire 10", function () {
      //GIVEN un compte avec un solde de 110€
      //WHEN
      account.withdraw(10);
      //THEN
      expect(account.getBalance()).toBe(100);
      expect(account.getTransactions()).toHaveLength(2);
    });

    test("On retire plus que le solde", function () {
      //GIVEN un compte avec un solde de 100€
      //WHEN
      const actionRetrait = () => account.withdraw(110);
      //THEN
      expect(actionRetrait).toThrow();
      expect(account.getTransactions()).toHaveLength(2);
    });

    test("On retire un solde négatif", function () {
      //GIVEN un compte avec un solde de 100€
      //WHEN
      const actionRetrait = () => account.withdraw(-10);
      //THEN
      expect(actionRetrait).toThrow();
      expect(account.getTransactions()).toHaveLength(2);
    });
  });
});
