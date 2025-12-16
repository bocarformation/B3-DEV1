// interface OrderOperations {
//     placeOrder(): void;
//     cancelOrder(): void;
//     trackOrder(): void,
//     returnOrder(): void
// }

// class OnlineOrder implements OrderOperations {
//     placeOrder(): void {
//         console.log("Placing online order");
//     }
//     cancelOrder(): void {
//         console.log("Canceling online order");
//     }
//     trackOrder(): void {
//         console.log("Tracking online order");
//     }
//     returnOrder() {
//         console.log("Returning online order");
//     }
// }

// class StoreeOrder implements OrderOperations {
//     placeOrder(): void {
//         console.log("Placing store order");
//     }
//     cancelOrder(): void {
//         console.log("Canceling store order");
//     }
//     trackOrder(): void {
//         // Inutile pour les commandes en magasin
//         throw new Error("Tracking not supported for store orders");
//     }
//     returnOrder() {
//         console.log("Returning store order");
//     }
// }

// Bon exemple de l'ISP

interface PlaceOrder {
    placeOrder(): void;
}

interface CancelOrder {
    cancelOrder(): void;
}

interface TrackOrder {
    trackOrder(): void;
}

interface ReturnOrder {
    returnOrder(): void;
}

class OnlineOrder implements PlaceOrder, CancelOrder, TrackOrder, ReturnOrder {
    placeOrder(): void {
        console.log("Placing online order");
    }
    cancelOrder(): void {
        console.log("Canceling online order");
    }
    trackOrder(): void {
        console.log("Tracking online order");
    }
    returnOrder() {
        console.log("Returning online order");
    }
}

class StoreOrder implements PlaceOrder, CancelOrder, ReturnOrder {
    placeOrder(): void {
        console.log("Placing store order");
    }
    cancelOrder(): void {
        console.log("Canceling store order");
    }
    trackOrder(): void {
        console.log("Tracking store order");
    }
    returnOrder() {
        console.log("Returning store order");
    }
}