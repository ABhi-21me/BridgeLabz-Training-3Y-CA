class BankAccount {
  #balance;

  constructor(balance = 0) {
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount(1000);

account.deposit(500);
console.log("Balance after deposit:", account.getBalance());

try {
  account.withdraw(2000);
} catch (err) {
  console.log("Transaction error:", err.message);
}

console.log("Final balance:", account.getBalance());
