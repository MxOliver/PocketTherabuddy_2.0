const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const private_key = fs.readFileSync(path.resolve(__dirname, "../jwt-key"));

const generateToken = user => {
	const data = {
		name: "mock user",
		email: "mock email"
	};

	const token = jwt.sign({ data }, private_key, {
		expiresIn: "6h",
		algorithm: "RS256"
	});
	console.log(token);
	return token;
};

generateToken();
