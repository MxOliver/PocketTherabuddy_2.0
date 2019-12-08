import { getConnection } from "typeorm";
import { Injectable } from "@graphql-modules/di";
import { Skill } from "../models/Skill.entity";

@Injectable()
export class SkillProvider {
	skill: Skill;

	async getSkills() {
		return await getConnection("pocketTherabuddy")
			.getRepository(Skill)
			.createQueryBuilder()
			.getMany();
	}

	async getSkillById(id) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Skill)
			.findOne(id);
	}

	async getSkillByName(name) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Skill)
			.findOne({ where: { name: name } });
	}

	async getSkillsByUser(id) {
		return await getConnection("pocketTherabuddy")
			.getRepository(Skill)
			.findOne({ where: { userId: id } });
	}

	async createSkill(userId, input) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			Skill
		);
		const skill = repository.create({ ...input, userId: userId });

		return repository.save(skill);
	}

	async updateSkill(id, input) {
		const repository = await getConnection("pocketTherabuddy").getRepository(
			Skill
		);

		return repository.update(id, input);
	}

	async deleteSkill(id, userId) {
		const skill = await getConnection("pocketTherabuddy")
			.getRepository(Skill)
			.findOne({ where: { id: id, userId: userId } });

		return await getConnection("pocketTherabuddy")
			.getRepository(Skill)
			.remove(skill);
	}
}
