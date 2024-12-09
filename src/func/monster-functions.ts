//utöka så alla egenskaper för monstret skrivs ut

import Monster from "./monster";

export const prettyPrintMonster = (m: Monster[]) => {
	m.forEach(monster => {
		console.log(`Monster: ${monster.name}`);
	});
};

export const averageMonsterAge = (m: Monster[]): number => {
	let allAges = 0;
	m.forEach(monster => {
		allAges += monster.age;
	});
	return Math.floor(allAges / m.length);
};

export const averageNumberOfTentacles = (m: Monster[]) => {
	let allTentacles = 0;
	m.forEach(monster => {
		allTentacles += monster.tentacles;
	});
	return Math.floor(allTentacles / m.length);
};

export const numberOfMonstersWithWings = (m: Monster[]): number => {
	let monstersWithWings = 0;

	m.forEach(monster => {
		if (monster.hasWings) {monstersWithWings++};
	})
	return monstersWithWings;
};

export const getAllNoWingedMonster = (m: Monster[]): void => {
	console.log("De monster som inte har vingar är:");
	m.forEach(monster => {
		if (!monster.hasWings){
			console.log(monster);
		}
	});
	// return [];
};
