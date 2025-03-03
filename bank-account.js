class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Le montant du dépôt doit être positif");
    this.balance += amount;
  }
}

module.exports = BankAccount;
