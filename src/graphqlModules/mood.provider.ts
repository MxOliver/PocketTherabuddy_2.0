import { getConnection } from "typeorm";
import { Injectable } from "@graphql-modules/di";
import { Mood } from "../models/Mood.entity";
import { uuid } from "uuidv4";

const computeAttributes = async mood => {
	const now = new Date();
	mood.id = uuid();
	mood.createDate = now;
	mood.updateDate = now;

	return mood;
};

@Injectable()
export class MoodProvider {
	mood: Mood;

	async getMoods() {
		let moods = await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.createQueryBuilder("mood")
			.innerJoinAndSelect("mood.user", "user")
			.getMany();
		debugger;
		return moods;
	}

	async getMoodById(id) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.findOne(id, { relations: ["user"] });
	}

	async getMoodByType(type) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.findOne({ where: { type: type }, relations: ["user"] });
	}

	async getMoodByUser(id) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.findOne({ where: { userId: id }, relations: ["user"] });
	}

	async createMood({ currentUser, type, intensity }) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			Mood
		);

		const mood = repository.create({ type, intensity });

		mood.user = currentUser;

		debugger;

		const computedMood = await computeAttributes(mood);

		debugger;
		return await repository.save(computedMood);
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
