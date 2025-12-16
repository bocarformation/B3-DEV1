import fs from "fs";
import { MatchResult } from "./MatchResult.js";
const matches = fs.readFileSync("./src/football.csv", { encoding: "utf-8" })
    .split("\n")
    .map((line) => line.split(","));
// console.log(matches);
let manUnitedWins = 0;
matches.forEach((match) => {
    if (match[1] === "Man United" && match[5] === MatchResult.HOMEWIN) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AWAYWIN) {
        manUnitedWins++;
    }
});
console.log(`Man United won ${manUnitedWins} games`);
//# sourceMappingURL=index.js.map