exports.up = async function(knex) {
	await knex.schema.raw(`create schema ${schemaName}`);

	await knex.schema.createTable("users", table => {
		table.string("name").notNullable();
		table.string("email").notNullable();
		table.string("password").notNullable();
		table
			.uuid("id")
			.notNullable()
			.primary();
	});

	await knex.schema.createTable("moods", table => {
		table.string("name").notNullable();
		table
			.uuid("id")
			.notNullable()
			.primary();
		table.integer("intensity").notNullable();
		table
			.uuid("user_id")
			.notNullable()
			.references("id")
			.inTable("users");
		table.index("user_id");
	});

	await knex.schema.createTable("habits", table => {
		table.string("name").notNullable();
		table
			.uuid("id")
			.notNullable()
			.primary();
		table.integer("duration").notNullable();
		table
			.uuid("user_id")
			.notNullable()
			.references("id")
			.inTable("users");
		table.index("user_id");
	});

	await knex.schema.createTable("skills", table => {
		table.string("name").notNullable();
		table
			.uuid("id")
			.notNullable()
			.primary();
		table
			.uuid("user_id")
			.notNullable()
			.references("id")
			.inTable("users");
		table.index("user_id");
	});
};

exports.down = async function(knex) {};
