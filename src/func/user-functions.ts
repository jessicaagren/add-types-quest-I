import User from "./user";

export const averageAge = (a: User[]) => {
	let allAges = 0;
	a.forEach((user) => {
		allAges += user.age;
	});
	return allAges / a.length;
};

export const averageNumberOfHobbies = (a: User[]) => {
	let allHobbies = 0;
	a.forEach((user) => {
		allHobbies += user.hobby.length;
	});
	return allHobbies / a.length;
};

export const maxAmountOfHobbies = (a: User[]) => {
	let maxHobbies = 0;
	a.forEach((user) => {
		if (user.hobby.length > maxHobbies) {
			maxHobbies = user.hobby.length
		}		
	});
	return maxHobbies;
}

export const oldestPerson = (a: User[]) => {
	let age = 0;
	a.forEach((user) => {
		if (user.age > age) {
			age = user.age
		}		
	});
	return age;
}

export const youngestPerson = (a: User[]) => {
	let age = Infinity;
	a.forEach((user) => {
		if (user.age < age) {
			age = user.age
		}		
	});
	return age;
}