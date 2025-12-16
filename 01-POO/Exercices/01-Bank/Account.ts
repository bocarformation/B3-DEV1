import { Utils } from "./utils";

export class Account {
    public number: string;
    public balance: number;
    constructor(balance: number = 0) {

        this.number = Utils.getRandomInt(1000000, 99999999).toString();
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        this.balance -= amount;
    }

    getBalance(): string {
        return `Balance: ${this.balance}`
    }

}

// new Account()