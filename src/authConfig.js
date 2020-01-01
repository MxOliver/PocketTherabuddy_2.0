import * as env from "./envConfig";
const jwt = require("express-jwt");

export const getTokenFromHeader = req => {
	if (
		req.headers.authorization &&
		req.headers.authorization.split(" ")[0] === "Bearer"
	) {
		return req.headers.authorization.split(" ")[1];
	}
};

// export default jwt({
// 	secret: env.cookieSecret,
// 	userProperty: "token",
// 	getToken: getTokenFromHeader
// });
