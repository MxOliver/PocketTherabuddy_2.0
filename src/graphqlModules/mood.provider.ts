import { getConnection } from "typeorm";
import { Injectable } from "@graphql-modules/di";
import { Mood } from "../models/Mood.entity";

@Injectable()
export class MoodProvider {
	mood: Mood;

	async getMoods() {
		return await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.createQueryBuilder()
			.getMany();
	}

	async getMoodById(id) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.findOne(id);
	}

	async getMoodByName(name) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.findOne({ where: { name: name } });
	}
}
