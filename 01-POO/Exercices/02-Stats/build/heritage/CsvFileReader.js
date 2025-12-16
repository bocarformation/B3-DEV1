import fs from "fs";
export class CsvFileReader {
    filename;
    data = [];
    constructor(filename) {
        this.filename = filename;
    }
    read() {
        this.data = fs.readFileSync(this.filename, { encoding: "UTF-8" })
            .split("\n")
            .map((line) => line.split(","))
            .map(this.mapRow); // map fait appel à la callback mapRow
    }
}
// .map(line => {
//     return [
//         //
//     ]
// })
// // ou
// .map(line => ([...]))
//# sourceMappingURL=CsvFileReader.js.map