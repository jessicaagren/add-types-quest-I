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

export const numberOfMonstersWithWings = (m: Monster[]) => {
	return 0;
};

export const getAllNoWingedMonster = (m: Monster[]) => {
	return [];
};
