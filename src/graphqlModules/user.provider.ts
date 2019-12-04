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
}
