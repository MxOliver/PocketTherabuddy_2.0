const auth0 = require("auth0-js");
import * as env from "./envConfig";

export const webAuth = new auth0.WebAuth({
	domain: env.AUTH0_DOMAIN,
	clientID: env.AUTH0_CLIENT_ID,
	audience: `https://dev-oliver.auth0.com/api/v2/`,
	scope: "read:current_user",
	responseType: "token id_token profile"
});
