// A NE PAS FAIRE
// class PaymentService {
//     processPayment(method: string) {
//         if (method === "creditCard") console.log("Processing payment with credit card")
//         else if (method === "bankTransfer") console.log("Processing payment with bank transfer")
//         else if (method === "paypal") console.log("Processing payment with paypal")
//         else throw new Error("Unsupported payment method")

//     }
// }

// AVEC OCP

interface PaymentMethod {
    process(): void;
}

class CreditCardPayment implements PaymentMethod {
    process() {
        console.log("Processing payment with credit card")
    }
}

class BankTransferPayment implements PaymentMethod {
    process() {
        console.log("Processing payment with bank transfer")
    }
}

class PaypalPayment implements PaymentMethod {
    process() {
        console.log("Processing payment with Paypal")
    }
}

// Nouveau moyen de paiement

class BitcoinPayment implements PaymentMethod {
process(): void {
    console.log("Processing payment with BTC");
}
}

class PaymentService {
    constructor(private paymentMethod: PaymentMethod) { }

    processPayment() {
        this.paymentMethod.process()
    }
}

const btcPayment =new BitcoinPayment();
const paymentServiceBTC= new PaymentService(btcPayment);
paymentServiceBTC.processPayment();