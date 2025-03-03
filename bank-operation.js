describe("BankOperation", function () {
  describe("On regarde le solde du compte", function () {
    it("Le solde est de 0", function () {
      var bankOperation = new BankOperation();
      expect(bankOperation.getBalance()).toBe(0);
    });
  });

  describe("On dépose de l'argent", function () {});

  describe("On retire de l'argent", function () {});
});
