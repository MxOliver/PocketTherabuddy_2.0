module.exports = {
	name: "pocketTherabuddy",
	type: "postgres",
	host: "localhost",
	port: 5432,
	database: "therabuddy_db",
	username: "olivercoley",
	entities: ["./src/models/**/*.entity.ts"],
	migrations: ["seeds/*.ts"],
	cli: {
		migrationsDir: "seeds"
	}
};
