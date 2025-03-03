class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

module.exports = BankAccount;
