const {
	entityTable,
	enumTable,
	enumReference
} = require("../utils/migration_utils");

const schemaName = "public";

exports.up = async function(knex) {
	const mood_enum = [
		{ id: 1, name: "Afraid" },
		{ id: 2, name: "Aggravated" },
		{ id: 3, name: "Angry" },
		{ id: 4, name: "Anxious" },
		{ id: 5, name: "Ashamed" },
		{ id: 6, name: "Assertive" },
		{ id: 7, name: "Brave" },
		{ id: 8, name: "Calm" },
		{ id: 9, name: "Cautious" },
		{ id: 10, name: "Cheerful" },
		{ id: 11, name: "Comforted" },
		{ id: 12, name: "Contented" },
		{ id: 13, name: "Curious" },
		{ id: 14, name: "Depressed" },
		{ id: 15, name: "Embarrassed" },
		{ id: 16, name: "Energized" },
		{ id: 17, name: "Envious" },
		{ id: 18, name: "Excited" },
		{ id: 19, name: "Furious" },
		{ id: 20, name: "Guilty" },
		{ id: 21, name: "Grumpy" },
		{ id: 22, name: "Happy" },
		{ id: 23, name: "Hopeful" },
		{ id: 24, name: "Humiliated" },
		{ id: 25, name: "Hurt" },
		{ id: 26, name: "Indifferent" },
		{ id: 27, name: "Insecure" },
		{ id: 28, name: "Irritated" },
		{ id: 29, name: "Lonely" },
		{ id: 30, name: "Loved" },
		{ id: 31, name: "Mad" },
		{ id: 32, name: "Optimistic" },
		{ id: 33, name: "Overwhelmed" },
		{ id: 34, name: "Panicked" },
		{ id: 35, name: "Peaceful" },
		{ id: 36, name: "Positive" },
		{ id: 37, name: "Proud" },
		{ id: 38, name: "Restless" },
		{ id: 39, name: "Regretful" },
		{ id: 40, name: "Relieved" },
		{ id: 41, name: "Sad" },
		{ id: 42, name: "Self-confident" },
		{ id: 43, name: "Shameful" },
		{ id: 44, name: "Skeptical" },
		{ id: 45, name: "Worried" }
	];
	await knex.schema.withSchema(schemaName).createTable("mood_enum", enumTable);
	await knex
		.withSchema(schemaName)
		.into("mood_enum")
		.insert(mood_enum);

	await knex.schema.withSchema(schemaName).createTable("users", table => {
		entityTable(table);
		table.string("name").notNullable();
		table.string("email").notNullable();
		table.string("password").notNullable();
	});

	await knex.schema.withSchema(schemaName).createTable("moods", table => {
		entityTable(table);
		enumReference(table, "mood_enum_id", `${schemaName}.mood_enum`);
		table.string("name").notNullable();
		table.integer("intensity").notNullable();
		table
			.uuid("user_id")
			.notNullable()
			.references("id")
			.inTable("users");
		table.index("user_id");
	});

	await knex.schema.withSchema(schemaName).createTable("habits", table => {
		entityTable(table);
		table.string("name").notNullable();
		table.integer("duration").notNullable();
		table
			.uuid("user_id")
			.notNullable()
			.references("id")
			.inTable("users");
		table.index("user_id");
	});

	await knex.schema.withSchema(schemaName).createTable("skills", table => {
		entityTable(table);
		table.string("name").notNullable();
		table
			.uuid("user_id")
			.notNullable()
			.references("id")
			.inTable("users");
		table.index("user_id");
	});
};

exports.down = async function(knex) {};
