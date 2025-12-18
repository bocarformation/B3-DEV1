import { DateConverter } from "../utils.js";
export class MatchDataReader {
    source;
    matches = [];
    constructor(source) {
        this.source = source;
    }
    load() {
        this.source.read();
        this.matches = this.source.data.map(line => {
            return [
                DateConverter.convertToDate(line[0]),
                line[1],
                line[2],
                parseInt(line[3]),
                parseInt(line[4]),
                line[5],
                line[6]
            ];
        });
    }
}
//# sourceMappingURL=MatchDataReader.js.map