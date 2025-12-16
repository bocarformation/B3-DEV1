import fs from "fs";
import type { MatchData } from "../MatchData.js";

export abstract class CsvFileReader<T> {
    private readonly filename: string;
    public data: T[] = [];

    constructor(filename: string) {
        this.filename = filename;
    }

    read(): void {
        this.data = fs.readFileSync(this.filename, { encoding: "UTF-8" })
            .split("\n")
            .map((line: string) => line.split(","))
            .map(this.mapRow) // map fait appel à la callback mapRow
    }

    abstract mapRow(row: string[]): T;

}
// .map(line => {
//     return [
//         //
//     ]
// })

// // ou

// .map(line => ([...]))