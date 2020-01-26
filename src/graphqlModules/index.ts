import { GraphQLModule } from "@graphql-modules/core";
const moodModule = require("./mood.module");
const userModule = require("./user.module");
const habitModule = require("./habit.module");
const skillModule = require("./skill.module");
const moodEnumModule = require("./moodEnum.module");
const habitEnumModule = require("./habitEnum.module");
const authModule = require("./authentication.module");

module.exports = new GraphQLModule({
	imports: [
		moodModule,
		userModule,
		habitModule,
		skillModule,
		moodEnumModule,
		habitEnumModule,
		authModule
	]
});
