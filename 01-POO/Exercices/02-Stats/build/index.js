import { MatchResult } from "./MatchResult.js";
import { MatchDataReader } from "./heritage/MatchDataReader.js";
const reader = new MatchDataReader("./src/football.csv");
reader.read();
const matches = reader.data;
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