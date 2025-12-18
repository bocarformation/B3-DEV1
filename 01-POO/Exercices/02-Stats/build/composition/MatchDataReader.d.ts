import type { MatchData } from "../MatchData.js";
import type { CsvFileReader } from "./CsvFileReader.js";
export declare class MatchDataReader {
    private readonly source;
    matches: MatchData[];
    constructor(source: CsvFileReader);
    load(): void;
}
//# sourceMappingURL=MatchDataReader.d.ts.map