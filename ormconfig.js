module.exports = [
	{
		name: "pocketTherabuddy",
		type: "postgres",
		host: "localhost",
		port: 5432,
		database: "therabuddy_db",
		username: "postgres",
		entities: ["./src/models/**/*.entity.ts"]
	}
];
