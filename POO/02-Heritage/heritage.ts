//Une classe enfant (fille) qui hérite des proprités et méthodes d'une classe parente (is-a)

class User {
    constructor(public name: string) { }

    login() {
        console.log(`${this.name} est connecté !`);

    }

}

class Admin extends User {

    constructor(
        public name: string,
        public password: string
    ) {
        super(name)
    }
    getUsers() {
        console.log(`${this.name} est un utilisateur de notre site`);


    }
}

const myUser = new User("Bocar");

const myAdmin = new Admin("Sibli", "admin123");
myAdmin.login();
myAdmin.getUsers();


//Exemple lié aux attributs TypeScript
// class Fraction {
//     numerator: number;
//     denominator: number;

//     constructor(numerator: number, denominator: number) {
//         this.numerator = numerator;// 1
//         this.denominator = denominator; // 3
//     };
// }

// Notation plus récente et adapatée
class Fraction {

    constructor(private _numerator: number, private denominator: number) {

    }

    // Si j'utilise à la fois le getter et le setter autant mettre les propriétés en public
    get numerator(): number {

        return this._numerator;

    }

    set numerator(newNumerator: number) {
        if (!Number.isInteger(newNumerator)) {
            throw new Error("Le numérateur doit être un entier")
        }
        this._numerator = newNumerator
    }



    add(other: Fraction): Fraction {
        console.log("Benoit other: ", other);

        return new Fraction(
            this.numerator * other.denominator + other.numerator * this.denominator, this.denominator * other.denominator
        )
    }
}

const tiers = new Fraction(1, 3);
// const newCalcul = new Fraction(2,6);
tiers.numerator = 2;
// tiers.denominator = 6;
// Dans un style défensif, un objet ne peut pas être modifié (cf. Elegant Object de Yegor Bugayenko);
const deuxSixieme = new Fraction(2, 6);

// Sans les accesseurs et mutateurs
// console.log("Méthode setNumerator(): " + tiers.setNumerator(99));
// console.log("Méthode getNumerator(): " + tiers.getNumerator());
// console.log(tiers.numerator);

const quart = new Fraction(1, 4)
tiers.add(quart);
quart.add(tiers);

console.log(tiers.add(quart));
// console.log(tiers.denominator);






