import { Injectable } from "@graphql-modules/di";
import { getConnection } from "typeorm";
import { User } from "../models/User.entity";

@Injectable()
export class UserProvider {
	user: User;

	async getUsers() {
		return await getConnection("pocketTherabuddy")
			.getRepository(User)
			.createQueryBuilder()
			.getMany();
	}

	async getUserById(id) {
		return await getConnection("pocketTherabuddy")
			.getRepository(User)
			.findOne(id);
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
