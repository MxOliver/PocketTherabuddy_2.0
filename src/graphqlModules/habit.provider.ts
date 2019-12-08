import { getConnection } from "typeorm";
import { Injectable } from "@graphql-modules/di";
import { Habit } from "../models/Habit.entity";

@Injectable()
export class HabitProvider {
	habit: Habit;

	async getHabits() {
		return await getConnection("pocketTherabuddy")
			.getRepository(Habit)
			.createQueryBuilder()
			.getMany();
	}

	async getHabitById(id) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Habit)
			.findOne(id);
	}

	async getHabitByName(name) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Habit)
			.findOne({ where: { name: name } });
	}

	async getHabitsByUser(id) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Habit)
			.findOne({ where: { userId: id } });
	}

	async createHabit(userId, input) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			Habit
		);
		const habit = repository.create({ ...input, userId: userId });

		return repository.save(habit);
	}

	async updateHabit(id, input) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			Habit
		);

		return repository.update(id, input);
	}

	async deleteHabit(id, userId) {
		const habit = await getConnection("pocketTherabuddy")
			.getRepository(Habit)
			.findOne({ where: { id: id, userId: userId } });

		return await getConnection("pocketTherabuddy")
			.getRepository(Habit)
			.remove(habit);
	}
}
