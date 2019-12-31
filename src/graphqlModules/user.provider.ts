import { Injectable } from "@graphql-modules/di";
import { getConnection } from "typeorm";
import { User } from "../models/User.entity";
import { webAuth } from "../authConfig";

@Injectable()
export class UserProvider {
	user: User;

	async currentUser(claims) {
		if (!claims) return;

		const currentUser = {
			user_id: claims.user_id,
			username: claims.username,
			full_name: claims.full_name
		};
		return currentUser;
	}

	async getUsers() {
		return await getConnection("pocketTherabuddy")
			.getRepository(User)
			.createQueryBuilder()
			.getMany();
	}

	async getUserById(id) {
		// return await getConnection("pocketTherabuddy")
		// 	.getRepository(User)
		// 	.findOne(id);
	}

	async signIn(input) {
		webAuth.login({
			realm: "Username-Password-Authentication",
			email: input.email,
			password: input.password
		});
	}

	async signUp(input) {
		webAuth.signupAndAuthorize(
			{
				connection: "Username-Password-Authentication",
				email: input.email,
				password: input.password,
				user_metadata: { role: "MEMBER" }
			},
			async err => {
				if (err) return err;

				return this.createUser(input);
			}
		);
	}

	async createUser(input) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			User
		);
		const user = repository.create({ ...input });

		return repository.save(user);
	}

	async updateUser(id, input) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			User
		);

		return repository.update(id, input);
	}

	async deleteUser(id) {
		const user = await getConnection("pocketTherabuddy")
			.getRepository(User)
			.findOne(id);

		return await getConnection("pocketTherabuddy")
			.getRepository(User)
			.remove(user);
	}
}
