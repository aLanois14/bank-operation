class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;
