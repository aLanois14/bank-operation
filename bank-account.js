class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
    this.transactions = [];
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Le montant du dépôt doit être positif");
    this.balance += amount;
    this.transactions.push({
      type: "dépôt",
      amount,
      balance: this.balance,
      date: new Date(),
    });
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("Le retrait ne doit pas être négatif");
    if (amount > this.balance)
      throw new Error(
        "Vous ne pouvez pas retirer plus que le solde de votre compte"
      );
    this.balance -= amount;
    this.transactions.push({
      type: "retrait",
      amount,
      balance: this.balance,
      date: new Date(),
    });
  }

  getTransactions() {
    return this.transactions;
  }
}

module.exports = BankAccount;
