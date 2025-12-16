// abstract class Forme {
//     constructor(public centre: Point) {

//     }

//     abstract aire(): number;

//     abstract perimetre(): number;


// }


// class Point {
//     constructor(public x: number, public y: number) { }
// }


// class Cercle extends Forme {
//     constructor(centre: Point, public rayon: number) {
//         super(centre);
//     }

//     aire(): number {
//         return Math.PI * this.rayon ** 2;
//     }

//     perimetre(): number {
//         return 2 * Math.PI * this.rayon;
//     }
// }

// class Rectangle extends Forme {
//     constructor(centre: Point, public longueur: number, public largeur: number) {
//         super(centre)
//     }

//     aire(): number {
//         return this.longueur * this.largeur
//     }

//     perimetre(): number {
//         return 2 * (this.longueur + this.largeur);
//     }
// }

// // AUCUN INTERET si aire et perimetre sont vides
// // const myForme = new Forme(new Point(0,0)); // ERREUR
// // console.log(myForme.aire());

// const point = new Point (2,5)
// const pointRect = new Point(-5,-3);
// const formes= [new Cercle(point, 5), new Rectangle(pointRect, 5,10)]


// formes.map(forme => {
//     console.log(forme.aire());
//     console.log(forme.perimetre());

// })

