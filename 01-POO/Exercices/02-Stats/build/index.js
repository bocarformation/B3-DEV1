import { MatchResult } from "./MatchResult.js";
import { CsvFileReader } from "./composition/CsvFileReader.js";
import { MatchDataReader } from "./composition/MatchDataReader.js";
const source = new CsvFileReader("./src/football.csv");
const matchReader = new MatchDataReader(source);
matchReader.load();
const matches = matchReader.matches;
console.log(matches);
let manUnitedWins = 0;
matches.forEach(match => {
    if (match[1] === "Man United" && match[5] === MatchResult.HOMEWIN) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AWAYWIN) {
        manUnitedWins++;
    }
});
console.log(`Man United won ${manUnitedWins} games`);
//# sourceMappingURL=index.js.map