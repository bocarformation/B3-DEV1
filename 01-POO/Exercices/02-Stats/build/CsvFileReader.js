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
            .map((line) => line.split(","));
    }
}
//# sourceMappingURL=CsvFileReader.js.map