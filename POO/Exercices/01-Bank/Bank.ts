
import { Client } from "./Client";
import { CreditCard } from "./CreditCard";

export class Bank {
    private name: string;
    private clients: Client[];

    constructor(name: string) {
        this.name = name;
        this.clients = [];
    }

    addClient(client: Client): void {
        this.clients.push(client);
    }

    requestCreditCard(client: Client): CreditCard {
        return new CreditCard(client.account);
    }
}

