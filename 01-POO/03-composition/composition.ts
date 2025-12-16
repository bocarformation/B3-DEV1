// Une classe qui contient d'autres classes comme attribut (relation "has-a");
// Sans composition
// class Car {
//     constructor(
//         public name: string,
//         public serieNumber: string,
//         public usine: string,
//         public country: string,
//         public brand: string,
//         public year: number,
//         public type: string,
//         public horsePower: number,
//         public kilometer:number,
//         public color: string,
//         public seat: number
//     ) {

//     }
// }


// Avec composition
class Identity {
    constructor(
        public name: string,
        public brand: string,
        public serieNumber: string,
        public usine: string,
        public country: string,
        public year: number
    ) { }

}


class Engine {
    constructor(
        public type: string,
        public horsePower: number,
        public kilometer: number

    ) { }
}

class Car {
    constructor(
        public identity: Identity,
        public engine: Engine
    ) { }
}

const R5Identity = new Identity("R5", "Renault", "R885-8455-V822", "Sochaux", "France", 2023);
const R5Engine = new Engine("Essence", 90, 500);
const R5 = new Car(R5Identity, R5Engine)

console.log(R5);
