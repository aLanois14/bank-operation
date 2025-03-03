class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(_amount) {
    return;
  }
}

module.exports = BankAccount;
