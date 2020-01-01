import { UserProvider } from "../graphqlModules/user.provider";
import * as env from "../envConfig";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const private_key = fs.readFileSync(path.resolve(__dirname, "../jwt-key"));

export class AuthService {
	provider = new UserProvider();

	async signIn(input): Promise<any> {
		const userRecord = await this.provider.getUserByEmail(input.email);

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
		const data = {
			_id: user.id,
			name: user.name,
			email: user.email
		};

		return jwt.sign({ data }, private_key, {
			algorithm: "RS256",
			expiresIn: "6h"
		});
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
