import { UserProvider } from "../graphqlModules/user.provider";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const privateKey = fs.readFileSync(
	path.resolve(__dirname, "../../private.key"),
	"utf8"
);
const publicKey = fs.readFileSync(
	path.resolve(__dirname, "../../public.key"),
	"utf8"
);

export class AuthService {
	async signIn(input): Promise<any> {
		let provider = new UserProvider();
		const userRecord = await provider.getUserByEmail(input.email);

		if (!userRecord) {
			throw new Error("User not found");
		} else {
			const passwordMatch = await bcrypt.compareSync(
				input.password,
				userRecord.password
			);

			if (!passwordMatch) {
				throw new Error("Incorrect password");
			}
		}

		return {
			user: {
				email: userRecord.email,
				name: userRecord.name
			},
			token: this.generateToken(userRecord)
		};
	}

	async generateToken(user) {
		const claims = {
			_id: user.id,
			name: user.name,
			email: user.email
		};

		return jwt.sign({ claims }, privateKey, {
			algorithm: "RS256",
			expiresIn: "6h"
		});
	}

	async verifyToken(token) {
		const verifyOptions = {
			expiresIn: "6h",
			algorithm: ["RS256"]
		};

		const verified = await jwt.verify(token, publicKey, verifyOptions);
		return verified;
	}

	async signUp(input): Promise<any> {
		const salt = bcrypt.genSaltSync(10);
		const passwordHashed = await bcrypt.hashSync(input.password, salt);

		const newUser = {
			email: input.email,
			password: passwordHashed,
			name: input.name,
			salt: salt.toString("hex")
		};

		return newUser;
	}
}
