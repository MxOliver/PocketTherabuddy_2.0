import { GraphQLModule } from "@graphql-modules/core";
const moodModule = require("./mood.module");
const userModule = require("./user.module");

module.exports = new GraphQLModule({
	imports: [moodModule, userModule]
});
