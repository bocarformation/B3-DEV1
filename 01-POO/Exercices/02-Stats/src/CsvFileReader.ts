import fs from "fs";
import { DateConverter } from "./utils.js";
import { MatchResult } from "./MatchResult.js";
import type { MatchData } from "./MatchData.js";

export class CsvFileReader {
    private readonly filename: string;
    public data: MatchData[] = [];

    constructor(filename: string) {
        this.filename = filename;
    }

    read(): void {
        this.data = fs.readFileSync(this.filename, { encoding: "UTF-8" })
            .split("\n")
            .map((line: string) => line.split(","))
            .map((line) => ([
                DateConverter.convertToDate(line[0]),
                line[1],
                line[2],
                parseInt(line[3]),
                parseInt(line[4]),
                line[5] as MatchResult,
                line[6]
            ]))
    }
}

// .map(line => {
//     return [
//         //
//     ]
// })

// // ou

// .map(line => ([...]))