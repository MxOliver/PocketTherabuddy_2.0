/// Defines a standard enum table
function enumTable(table, idType) {
	table
		.specificType("id", idType || "smallint")
		.notNullable()
		.primary();
	table.string("name").notNullable();
	table.specificType("display_order", "smallint");
}
exports.enumTable = enumTable;

/// Defines a reference to an enum able
function enumReference(table, colEnum, tableEnum, required = false) {
	const column = table
		.specificType(colEnum, "smallint")
		.references("id")
		.inTable(tableEnum);
	if (required) {
		column.notNullable();
	}
	return column;
}
exports.enumReference = enumReference;

/// Adds standard auditing columns
function audit(table) {
	table.datetime("created_at_utc", { useTz: false }).notNullable();
	table.string("created_by").notNullable();
	table.datetime("updated_at_utc", { useTz: false }).notNullable();
	table.string("updated_by").notNullable();
}
exports.audit = audit;

/// Defines standard columns for entity tables
function entityTable(table) {
	table
		.uuid("id")
		.notNullable()
		.primary();
	audit(table);
}
exports.entityTable = entityTable;
