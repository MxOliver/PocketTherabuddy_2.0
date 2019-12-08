import { getConnection } from "typeorm";
import { Injectable } from "@graphql-modules/di";
import { Mood } from "../models/Mood.entity";
import { uuid } from "uuidv4";

const computeAttributes = async (mood, userId, createDate, updateDate) => {
	const now = new Date();
	mood.id = uuid();
	mood.userId = userId ? userId : 0;
	mood.createDate = createDate ? createDate : now;
	mood.updateDate = updateDate ? updateDate : now;

	return mood;
};

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

	async getMoodByType(type) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.findOne({ where: { type: type } });
	}

	async getMoodByUser(id) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Mood)
			.findOne({ where: { userId: id } });
	}

	async createMood({ userId, type, intensity, createDate, updateDate }) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			Mood
		);
		debugger;
		const mood = repository.create({ type, intensity });

		const computedMood = await computeAttributes(
			mood,
			userId,
			createDate,
			updateDate
		);

		const savedMood = await repository.save(computedMood);

		console.log(savedMood);

		return savedMood;
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
