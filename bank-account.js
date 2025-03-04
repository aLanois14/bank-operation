class BankAccount {
  static transactions = [];
  constructor(balance = 0) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Le montant du dépôt doit être positif");
    this.balance += amount;
    BankAccount.transactions.push({
      type: "dépôt",
      amount,
      balance: this.balance,
    });
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("Le retrait ne doit pas être négatif");
    if (amount > this.balance)
      throw new Error(
        "Vous ne pouvez pas retirer plus que le solde de votre compte"
      );
    this.balance -= amount;
    BankAccount.transactions.push({
      type: "retrait",
      amount,
      balance: this.balance,
    });
  }

  getTransactions() {
    return;
  }
}

module.exports = BankAccount;
