import type { MatchData } from "../MatchData.js";
import { CsvFileReader } from "./CsvFileReader.js";
export declare class MatchDataReader extends CsvFileReader<MatchData> {
    mapRow(line: string[]): MatchData;
}
//# sourceMappingURL=MatchDataReader.d.ts.map