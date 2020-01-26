import { Injectable } from "@graphql-modules/di";
import { getConnection } from "typeorm";
import { User } from "../models/User.entity";

@Injectable()
export class UserProvider {
	user: User;

	computeAttributes = async user => {
		const now = new Date();

		user.createDate = now;
		user.updateDate = now;

		return user;
	};

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

	async signUp(input) {}

	async createUser(input) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			User
		);
		const user = repository.create({ ...input });

		const computedUser = await this.computeAttributes(user);

		return repository.save(computedUser);
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
