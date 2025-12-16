import fs from "fs";

export class CsvFileReader {
    private readonly filename: string;
    public data: string[][] = [];

    constructor(filename: string) {
        this.filename = filename;
    }

    read(): void {
        this.data = fs.readFileSync(this.filename, {encoding: "UTF-8"})
                        .split("\n")
                        .map((line: string)=> line.split(","));
    }
}