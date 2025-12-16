import fs from "fs";
import { DateConverter } from "./utils.js";
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
            .map((line) => ([
            DateConverter.convertToDate(line[0]),
            line[1],
            line[2],
            parseInt(line[3]),
            parseInt(line[4]),
            line[5],
            line[6]
        ]));
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