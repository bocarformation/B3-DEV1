import { Account } from "./Account";

export class Client {

    public account: Account
    constructor(
        public firstname: string,
        public lastname: string,
        public city: string,
        public salary: number,
        public initialDeposit:number = 0
    ) {
         this.account = new Account(initialDeposit)
}
}


//new Client("Bob", "Sag", "Londres", 5000);

