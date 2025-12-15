import { Account } from "./Account";

export class Client {

    public account: Account
    constructor(
        public firstname: string,
        public lastname: string,
        public city: string,
        public salary: number,
    ) {
         this.account = new Account()
}
}


//new Client("Bob", "Sag", "Londres", 5000);

