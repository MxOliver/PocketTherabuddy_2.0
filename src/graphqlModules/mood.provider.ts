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

	async getMoodByUser(id) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.findOne({ where: { userId: id } });
	}

	async createMood(userId, input) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			Mood
		);
		const mood = repository.create({ ...input, userId: userId });

		return repository.save(mood);
	}

	async updateMood(id, input) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			Mood
		);

		return repository.update(id, input);
	}

	async deleteMood(id, userId) {
		const mood = await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.findOne({ where: { id: id, userId: userId } });

		return await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.remove(mood);
	}
}
