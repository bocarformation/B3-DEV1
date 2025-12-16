import type { MatchData } from "../MatchData.js";
import type { MatchResult } from "../MatchResult.js";
import { DateConverter } from "../utils.js";
import { CsvFileReader } from "./CsvFileReader.js";

export class MatchDataReader extends CsvFileReader<MatchData> {

    mapRow(line: string[]): MatchData {
        return [
            DateConverter.convertToDate(line[0]),
            line[1],
            line[2],
            parseInt(line[3]),
            parseInt(line[4]),
            line[5] as MatchResult,
            line[6]
        ]
    }
}