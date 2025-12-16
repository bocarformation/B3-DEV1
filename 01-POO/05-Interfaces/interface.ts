interface Forme {
    centre: Point;
    aire(): number;
    perimetre(): number;

}

class Point {
    constructor(public x: number, public y: number) { }
}


// Pour une interface on metimplements pour de l'héritage on met extends
class Cercle implements Forme {
    constructor(
        public centre: Point,
        public rayon: number
    ) { }

    aire(): number {
        return Math.PI * this.rayon ** 2;
    }

    perimetre(): number {
        return 2 * Math.PI * this.rayon;
    }

}

class Rectangle implements Forme {
    constructor(
        public centre: Point,
        public longueur: number,
        public largeur: number
    ) { }

    aire(): number {
        return this.longueur * this.largeur
    }

    perimetre(): number {
        return 2 * (this.longueur + this.largeur);
    }
}