module.exports = {
	development: {
		client: "pg",
		connection: {
			host: "localhost",
			port: 5432,
			database: "therabuddy_db",
			username: "olivercoley"
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			directory: "migrations"
		}
	}
};
