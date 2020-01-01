import { Injectable } from "@graphql-modules/di";
import { getConnection } from "typeorm";
import { User } from "../models/User.entity";
import { AuthService } from "../middleware/authentication";

@Injectable()
export class UserProvider {
	user: User;

	authService = new AuthService();

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

	async getUserByEmail(email) {
		return await getConnection("pocketTherabuddy")
			.getRepository(User)
			.findOne({ where: { email: email } });
	}

	async createUser(input) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			User
		);
		const newUser = await this.authService.signUp(input);
		const user = repository.create({
			name: newUser.name,
			email: newUser.email,
			password: newUser.password,
			salt: newUser.salt
		});

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
