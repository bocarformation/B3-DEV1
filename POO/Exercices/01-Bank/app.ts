import { Bank } from "./Bank";
import { Client } from "./Client";

const BNP = new Bank("BNP Paribas");

const sam = new Client("Sam", "SOLO", "Paris", 1500,200);



BNP.addClient(sam);

console.log( BNP.requestCreditCard(sam))


sam.account.deposit(800);
sam.account.withdraw(700);

console.log(sam);
console.log(BNP);

