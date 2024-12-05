import "./styles.css";
import { averageAge, averageNumberOfHobbies, maxAmountOfHobbies, oldestPerson, youngestPerson } from "./func/user-functions";
import {
	averageMonsterAge,
	averageNumberOfTentacles,
	getAllNoWingedMonster,
	numberOfMonstersWithWings,
	prettyPrintMonster,
} from "./func/monster";
import { commonColor, numberOfColors } from "./func/dog";
import printSum from "./func/printSum";
import { allUsers } from "./func/userData";
import dogs from "./func/dogData";
import monsters from "./func/monsterData";

printSum(1, 2);
printSum(5, 12);

console.log(`Vi har ${allUsers.length} stycken användare.`);
console.log(`Medelåldern på alla användare är ${averageAge(allUsers)}`);
console.log(
	`Medelantalet hobbies per användare är ${averageNumberOfHobbies(allUsers)}`
);
console.log(
	`Den personen med flest hobbies har ${maxAmountOfHobbies(allUsers)} stycken hobbies.`
);
console.log(
	`Den äldsta personen är ${oldestPerson(allUsers)} och den yngsta är ${youngestPerson(allUsers)}.`
);

console.log(`Vi har ${dogs.length} stycken hundar.`);
console.log(`Hundarna har ${numberOfColors(dogs)} antal unika färger.`);
console.log(
	`Den vanligaste färgen bland alla hundar är: ${commonColor(dogs)}.`
);
// vi vill ha en pretty print som skriver ut alla färger som hundarna har och hur många hundar det finns av varje färg

console.log(`Vi har ${monsters.length} stycken monster.`);
console.log(`Medelåldern på alla monster är ${averageMonsterAge(monsters)}`);
console.log(
	`Medelantalet tentakler för alla monster är ${averageNumberOfTentacles(
		monsters
	)}`
);

// loopa igenom alla monster och skriv ut dem med prettyPrintMonster
prettyPrintMonster(monsters[0]);

console.log(
	`Antalet monster som har vingar är ${numberOfMonstersWithWings(monsters)}`
);

const noWingedMonster = getAllNoWingedMonster(monsters);
console.log(noWingedMonster);
