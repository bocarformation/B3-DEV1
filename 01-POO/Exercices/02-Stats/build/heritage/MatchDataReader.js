import { DateConverter } from "../utils.js";
import { CsvFileReader } from "./CsvFileReader.js";
export class MatchDataReader extends CsvFileReader {
    mapRow(line) {
        return [
            DateConverter.convertToDate(line[0]),
            line[1],
            line[2],
            parseInt(line[3]),
            parseInt(line[4]),
            line[5],
            line[6]
        ];
    }
}
//# sourceMappingURL=MatchDataReader.js.map