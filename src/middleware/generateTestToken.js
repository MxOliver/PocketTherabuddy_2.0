const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const privateKey = fs.readFileSync(
	path.resolve(__dirname, "../../private.key"),
	"utf8"
);

const generateTestToken = async () => {
	let claims = {
		name: "mock user",
		email: "mock email"
	};
	let token = await jwt.sign({ claims }, privateKey, {
		algorithm: "RS256",
		expiresIn: "6h"
	});
	console.log(token);

	return token;
};

generateTestToken();
