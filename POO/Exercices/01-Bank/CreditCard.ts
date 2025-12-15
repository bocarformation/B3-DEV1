import { Utils } from "./utils";

export class CreditCard {
    public cardNumber: string;
    public cvc: string;
    public expirationDate: string

    constructor() {
        this.cardNumber = this.generateCardNumber()
        this.cvc = this.generateCVC();
        this.expirationDate = this.generateExpirationDate();
    }

    private generateCardNumber(): string {
        // XXXX XXXX XXXX XXXX
        const cardNumber = Array.from({ length: 16 }, () => Utils.getRandomInt(0, 10)).join("");
        return cardNumber;
    }

    private generateCVC(): string {

        // [1,5,8].join("") => 158
        return Array.from({length: 3}, () => Utils.getRandomInt(0,10)).join("");
    }

    private generateExpirationDate(): string{
        const today = new Date();
        const expirationDate =new Date(today.getFullYear() + 5, today.getMonth()) //MM/AA
        return expirationDate.toLocaleDateString("fr-FR", {
            month: "2-digit",
            year: "2-digit"
        })
    }
}

// new CreditCard();