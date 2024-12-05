import User from "./user";

export const averageAge = (a: User[]) => {
	let allAges = 0;
	a.forEach((u) => {
		allAges += u.age;
	});
	return allAges / a.length;
};

export const averageNumberOfHobbies = (a: User[]) => {
	let AllHobbies = 0;
	a.forEach((u) => {
		AllHobbies += u.hobby.length;
	});
	return AllHobbies / a.length;
};

export const maxAmountOfHobbies = (a: User[]) => {
	let maxHobbies = 0;
	a.forEach((u) => {
		if (u.hobby.length > maxHobbies) {
			maxHobbies = u.hobby.length
		}		
	});
	return maxHobbies;
}

export const oldestPerson = (a: User[]) => {
	let age = 0;
	a.forEach((u) => {
		if (u.age > age) {
			age = u.age
		}		
	});
	return age;
}

export const youngestPerson = (a: User[]) => {
	let age = Infinity;
	a.forEach((u) => {
		if (u.age < age) {
			age = u.age
		}		
	});
	return age;
}