const {
	entityTable,
	enumTable,
	enumReference
} = require("../utils/migration_utils");

const schemaName = "public";

exports.up = async function(knex) {
	const mood_enum = [
		{ id: 1, type: "AFRAID" },
		{ id: 2, type: "AGGRAVATED" },
		{ id: 3, type: "ANGRY" },
		{ id: 4, type: "ANXIOUS" },
		{ id: 5, type: "ASHAMED" },
		{ id: 6, type: "ASSERTIVE" },
		{ id: 7, type: "BRAVE" },
		{ id: 8, type: "CALM" },
		{ id: 9, type: "CAUTIOUS" },
		{ id: 10, type: "CHEERFUL" },
		{ id: 11, type: "COMFORTED" },
		{ id: 12, type: "CONTENTED" },
		{ id: 13, type: "CURIOUS" },
		{ id: 14, type: "DEPRESSED" },
		{ id: 15, type: "EMBARRASSED" },
		{ id: 16, type: "ENERGIZED" },
		{ id: 17, type: "ENVIOUS" },
		{ id: 18, type: "EXCITED" },
		{ id: 19, type: "FURIOUS" },
		{ id: 20, type: "GUILTY" },
		{ id: 21, type: "GRUMPY" },
		{ id: 22, type: "HAPPY" },
		{ id: 23, type: "HOPEFUL" },
		{ id: 24, type: "HUMILIATED" },
		{ id: 25, type: "HURT" },
		{ id: 26, type: "INDIFFERENT" },
		{ id: 27, type: "INSECURE" },
		{ id: 28, type: "IRRITATED" },
		{ id: 29, type: "LONELY" },
		{ id: 30, type: "LOVED" },
		{ id: 31, type: "MAD" },
		{ id: 32, type: "OPTIMISTIC" },
		{ id: 33, type: "OVERWHELMED" },
		{ id: 34, type: "PANICKED" },
		{ id: 35, type: "PEACEFUL" },
		{ id: 36, type: "POSITIVE" },
		{ id: 37, type: "PROUD" },
		{ id: 38, type: "RESTLESS" },
		{ id: 39, type: "REGRETFUL" },
		{ id: 40, type: "RELIEVED" },
		{ id: 41, type: "SAD" },
		{ id: 42, type: "SELFCONFIDENT" },
		{ id: 43, type: "SHAMEFUL" },
		{ id: 44, type: "SKEPTICAL" },
		{ id: 45, type: "WORRIED" }
	];
	await knex.schema.withSchema(schemaName).createTable("mood_enum", enumTable);
	await knex
		.withSchema(schemaName)
		.into("mood_enum")
		.insert(mood_enum);

	const habit_enum = [
		{ id: 1, type: "EXERCISE" },
		{ id: 2, type: "SLEEP" },
		{ id: 3, type: "SOCIAL_INTERACTION" },
		{ id: 4, type: "ALONE_TIME" },
		{ id: 5, type: "TIME_OUTSIDE" },
		{ id: 6, type: "HYDRATION" },
		{ id: 7, type: "LEISURE_ACTIVITIES" }
	];
	await knex.schema.withSchema(schemaName).createTable("habit_enum", enumTable);
	await knex
		.withSchema(schemaName)
		.into("habit_enum")
		.insert(habit_enum);

	await knex.schema.withSchema(schemaName).createTable("users", table => {
		entityTable(table);
		table.string("name").notNullable();
		table.string("email").notNullable();
		table.string("password").notNullable();
	});

	await knex.schema.withSchema(schemaName).createTable("moods", table => {
		entityTable(table);
		enumReference(table, "mood_enum_id", `${schemaName}.mood_enum`);
		table.string("type").notNullable();
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

exports.down = async function(knex) {
	const tables = ["skills", "habits", "users", "moods", "mood_enum"];

	for (let table of tables) {
		knex.schema.raw(`DROP TABLE ${table}`);
	}
};
