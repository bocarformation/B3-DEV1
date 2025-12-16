import fs from "fs";
const matches = fs.readFileSync("./src/football.csv", { encoding: "utf-8" })
    .split("\n")
    .map((line) => line.split(","));
console.log(matches);
let manUnitedWins = 0;
matches.forEach((match) => {
    if (match[1] === "Man United" && match[5] === "H") {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === "A") {
        manUnitedWins++;
    }
});
console.log(`Man United won ${manUnitedWins} games`);
//# sourceMappingURL=index.js.map