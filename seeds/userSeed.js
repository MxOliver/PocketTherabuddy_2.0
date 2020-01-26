const faker = require("faker");

export const UserSeed = [
	{
		id: `${faker.random.uuid()}`,
		name: `${faker.name.firstName()}`,
		email: `${faker.internet.email()}`,
		createDate: new Date().toISOString(),
		updateDate: new Date().toISOString(),
		password: `${faker.internet.password()}`
	},
	{
		id: "80f807c2-df64-404c-80c5-95d32d5e286a",
		name: "mockUser",
		email: `${faker.internet.email()}`,
		createDate: new Date().toISOString(),
		updateDate: new Date().toISOString(),
		password: `${faker.internet.password()}`
	},
	{
		id: `${faker.random.uuid()}`,
		name: `${faker.name.firstName()}`,
		email: `${faker.internet.email()}`,
		createDate: new Date().toISOString(),
		updateDate: new Date().toISOString(),
		password: `${faker.internet.password()}`
	}
];
